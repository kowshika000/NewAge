import React, { useEffect, useState, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "./DailyReportTable.css";
import Pagination from "../../../Core-Components/Pagination";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Columns from "./Columns";
import { Tooltip } from "antd";
import { MultiSelect } from "primereact/multiselect";
import { Tag } from "primereact/tag";
import { CloseOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Icon, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { DsrReportRequest } from "../../../../Redux/Actions/DsrReportAction";
import { CircularProgress, Box } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";

function DailyReportTable({ filtercolumn, setfiltercolumn }) {
  //This is for get usertoken from profile API data
  const Profileusertoken = useSelector(
    (state) => state.ProfileData?.profileData?.usertoken
  );
  const payload = {
    sl_no: Profileusertoken,
    sorigin: "",
    sdest: "",
    sstatus: "",
    sshipper: "",
    sconsignee: "",
    sfrmdate: "",
    stodate: "",
    sshipmentby: "",
    simport_export: "",
    setafrmdate: "",
    setatodate: "",
  };
  // This is get dsr api call
  const dispatch = useDispatch();
  const successRsp = useSelector((state) => state?.SaveDsr?.savedsr);
  console.log(successRsp, "scsrsp");
  useEffect(() => {
    if (Profileusertoken) {
      dispatch(DsrReportRequest({ payload }));
    }
  }, [Profileusertoken, dispatch, successRsp]);

  //Hooks and Variables
  const { loading } = useSelector((state) => state.DsrReport);
  const DsrReportData = useSelector((state) => state.DsrReport.dsrData);

  const DsrColumns = DsrReportData?.columns; //get column datas from dsr api response
  const DsrDatas = DsrReportData?.data; //get datas from dsr api response
  // const clonednewArray = DsrDatas?.map((a) => ({ ...a })) || [];
  const DsrDataObj = DsrReportData?.data?.[0]; //get first for column logic
  const DsrCopied = { ...DsrDataObj }; //this copies data from previous line data
  const DsrModifiedArray = Object?.keys(DsrCopied || {}); //change objects into array
  console.log(DsrModifiedArray);

  //This is modify arrayofvalues into objects with default true value

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //This function is used to change the
  // function changeKey(arr) {
  //   var newArr = [];
  //   for (var i = 0; i < arr.length; i++) {
  //     var obj = arr[i];
  //     const altObj = Object.fromEntries(
  //       Object.entries(obj).map(([key, value]) => [
  //         key.split(" ").join("_"),
  //         value,
  //       ])
  //     );
  //     newArr.push(altObj);
  //   }
  //   return newArr;
  // }

  // const datasArray = changeKey(clonednewArray);
  // console.log(datasArray);

  // const ColumnObject = DsrColumns?.reduce(
  //   (o, key) => ({ ...o, [key]: true }),
  //   {}
  // );

  const ColumnObject = DsrModifiedArray?.reduce(
    (o, key) => ({ ...o, [key]: true }),
    {}
  );
  console.log(ColumnObject);

  const TableColumnObject = DsrColumns?.reduce(
    (o, key) => ({ ...o, [key]: true }),
    {}
  );
  console.log(TableColumnObject);

  //This is for modify array of values into objects with empty array for storing datas
  const dsrfilter = DsrModifiedArray?.reduce(
    (o, key) => ({ ...o, [key]: [] }),
    {}
  );
  console.log(dsrfilter);
  const report = DsrDatas;
  console.log(report);
  const [currentPage, setCurrentPage] = useState(1);
  const [sidebaropen, setSidebaropen] = useState(false);
  const [dsrFilter, setDsrFilter] = useState();
  const [filterReport, setFilterReport] = useState();
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState();
  const itemsPerPage = 6;

  useEffect(() => {
    setfiltercolumn(TableColumnObject);
  }, [DsrColumns]);
  useEffect(() => {
    setFilterReport(report);
  }, [DsrDatas]);

  console.log(filtercolumn);

  //This is modify object keys and values
  const arrayOfObj = Object.entries(filtercolumn || {})?.map((e) => ({
    [e[0]]: e[1],
    header: e[0],
  }));

  useEffect(() => {
    const filterReportTbl = report?.filter((items) =>
      Object.keys(dsrFilter || {})?.every(
        (key) =>
          dsrFilter[key]?.length === 0 || dsrFilter[key]?.includes(items[key])
      )
    );
    setFilterReport(filterReportTbl);
    setCurrentPage(1);
  }, [dsrFilter]);

  const getUniqueOptions = (array, key) => {
    if (!Array?.isArray(array) || !array?.length) {
      return [];
    }
    // if (!array[0][key]) {
    //   return [];
    // }
    return Array?.from(new Set(array?.map((data) => data[key])))?.map(
      (value) => ({
        label: value,
        value,
      })
    );
  };
  useEffect(() => {
    if (clicked) {
      setData(filterReport);
    }
  }, [clicked]);

  const handleChangeFilter = (field, filterValues) => {
    if (field === "all") {
      setDsrFilter(dsrfilter);
    } else {
      setDsrFilter((prevFilters) => ({
        ...prevFilters,
        [field]: filterValues,
      }));
    }
  };
  function MultiSelectFilter(filterKey, options, value, additionalStyles) {
    console.log(options);
    const renderOption = (option) => {
      if (option?.label?.length <= 14) {
        return <span>{option?.label}</span>;
      } else {
        const truncatedText = option?.label?.slice(0, 14)?.trim() + "..";
        return (
          <Tooltip placement="topLeft" title={option?.label}>
            <span role="button">{truncatedText}</span>
          </Tooltip>
        );
      }
    };

    return (
      <MultiSelect
        className="custom-multi-select"
        value={value?.[filterKey]}
        options={options}
        name="ShipId"
        filter
        style={{
          position: "absolute",
          opacity: "0",
          width: "20px",
          fontSize: "10px",
          ...additionalStyles,
        }}
        showSelectAll={false}
        onChange={(e) => handleChangeFilter(filterKey, e.value)}
        onFocus={() => setClicked(true)} // Track when the MultiSelect gains focus
        onBlur={() => setClicked(false)}
        display="chip"
        placeholder="Select"
        itemTemplate={renderOption}
        filterPlaceholder="Search"
      />
    );
  }
  const FilterTag = ({ field, filterValues, handleChangeFilter }) => {
    if (!Array?.isArray(filterValues)) {
      return "";
    }
    const renderedColumns = new Set();
    console.log(renderedColumns);
    return (
      <>
        {filterValues?.map((option) => {
          if (!renderedColumns?.has(field)) {
            renderedColumns?.add(field);
            return (
              <Tag
                key={field}
                style={{
                  backgroundColor: "#0DA3DE",
                  marginRight: "10px",
                  position: "relative",
                  fontSize: "10px",
                }}
                className="px-2 py-1"
                rounded
              >
                <div>
                  {field ? field.split("_").join(" ") : ""}
                  <span className="ms-2">
                    <CloseOutlined
                      onClick={() => {
                        handleChangeFilter(field, []);
                      }}
                    />
                  </span>
                </div>
              </Tag>
            );
          }
          return "";
        })}
      </>
    );
  };

  const sort = (col) => {
    const handleSort = (col) => {
      const sorted = [...filterReport].sort((a, b) => {
        const valA = a[col];
        const valB = b[col];
        if (!isNaN(valA) && !isNaN(valB)) {
          return valA - valB;
        }
        return valA > valB ? 1 : -1;
      });
      setFilterReport(sorted);
    };

    const handleSortDown = (col) => {
      const sorted = [...filterReport].sort((a, b) => {
        const valA = a[col];
        const valB = b[col];
        if (!isNaN(valA) && !isNaN(valB)) {
          return valB - valA;
        }
        return valA < valB ? 1 : -1;
      });
      setFilterReport(sorted);
    };

    return (
      <div>
        <div className="d-flex sorticon" style={{ flexDirection: "column" }}>
          <IconButton
            onClick={() => {
              handleSort(col, "asc");
            }}
            className="p-0"
          >
            <ExpandLessIcon className="sortup" />
          </IconButton>
          <IconButton
            onClick={() => {
              handleSortDown(col, "desc");
            }}
            className="p-0"
          >
            <ExpandMoreIcon className="sortdown" />
          </IconButton>
        </div>
      </div>
    );
  };

  //This is for pagination
  const startIndex = (currentPage - 1) * itemsPerPage;

  const paginatedData = filterReport?.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // const noData = () => {
  //   return (
  //     <div
  //       className="no-options"
  //       style={{ alignSelf: "center", height: "353px" }}
  //     >
  //       No Data Found
  //     </div>
  //   );
  // };
  const columnValueData = (fieldName) => (rowData) => {
    const fieldValue = rowData[fieldName];

    return (
      <div style={{ width: "120px" }} className="px-1">
        {fieldValue?.length <= 14 ? (
          fieldValue
        ) : (
          <Tooltip placement="topLeft" title={fieldValue}>
            <span>
              {fieldValue?.slice(0, 14)?.trim()?.split(" ")?.join("") + ".."}
            </span>
          </Tooltip>
        )}
      </div>
    );
  };

  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const checkArrows = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      console.log("clientWidth", scrollLeft, scrollWidth, clientWidth);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth);
    }
  };
  useEffect(() => {
    setShowLeftArrow(showRightArrow === true);
  }, [checkArrows]);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  useEffect(() => {
    checkArrows();
    const handleScroll = () => checkArrows();
    const scrollElement = scrollRef.current;

    if (scrollElement) {
      scrollElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    const handleResize = () => checkArrows();
    window.addEventListener("resize", handleResize);

    // Using ResizeObserver to handle dynamic content changes
    const resizeObserver = new ResizeObserver(() => {
      checkArrows();
    });

    if (scrollRef.current) {
      resizeObserver.observe(scrollRef.current);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      if (scrollRef.current) {
        resizeObserver.unobserve(scrollRef.current);
      }
    };
  }, [dsrFilter]);

  useEffect(() => {
    // Check arrows initially after the first render
    checkArrows();
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "353px",
          // alignSelf:"center"
        }}
      >
        <CircularProgress style={{ color: "#71e8d2" }} />
      </Box>
    );
  }

  return (
    <>
      <div className="dsr_section mb-2">
        {Object?.keys(dsrFilter || {})?.some(
          (key) => dsrFilter[key]?.length > 0
        ) && (
          <div
            className="d-flex ps-2"
            style={{
              backgroundColor: "#F8FAFC",
              marginBottom: "20px",
              padding: "5px 0px",
              position: "sticky",
              top: "0px",
              left: "0px",
            }}
          >
            <div className="mt-1 scroll-container">
              <div
                className={`arrow left-arrow ${showLeftArrow ? "show" : ""}`}
                onClick={scrollLeft}
              >
                <LeftOutlined />
              </div>
              <div className="scroll-content" ref={scrollRef}>
                {Object.entries(dsrFilter)?.map(([field, filterValues]) => (
                  <FilterTag
                    key={field}
                    field={field}
                    filterValues={filterValues}
                    handleChangeFilter={handleChangeFilter}
                  />
                ))}
              </div>
              <div
                className={`arrow right-arrow ${showRightArrow ? "show" : ""}`}
                onClick={scrollRight}
              >
                <RightOutlined />
              </div>
            </div>
            <div className="ms-auto">
              {Object.keys(dsrFilter)?.some(
                (key) => dsrFilter[key]?.length > 0
              ) && (
                <Tag
                  style={{
                    backgroundColor: "#0DA3DE",
                    marginRight: "10px",
                    position: "relative",
                    fontSize: "10px",
                    width: "80px",
                    marginLeft: "20px",
                  }}
                  className="px-2 py-1"
                  rounded
                >
                  <div>
                    Clear All
                    <span className="ms-2">
                      <CloseOutlined
                        onClick={() => handleChangeFilter("all", [])}
                      />
                    </span>
                  </div>
                </Tag>
              )}
            </div>
          </div>
        )}
        <DataTable
          value={paginatedData}
          style={{ height: "380px", width: "fit-content" }}
          // emptyMessage={noData()}
        >
          {arrayOfObj?.map((item, index) => {
            console.log(item);
            if (filtercolumn[item.header]) {
              return (
                <Column
                  key={index}
                  field={item?.header}
                  body={columnValueData(item?.header)}
                  header={
                    <span className=" d-flex">
                      {item?.header}
                      {MultiSelectFilter(
                        item?.header,
                        getUniqueOptions(data, item?.header),
                        dsrFilter
                      )}
                      {sort(item?.header)}
                      {/* <div
                        className="d-flex sorticon"
                        style={{ flexDirection: "column" }}
                      >
                        <IconButton
                          onClick={() => {
                            handleSort(item?.header);
                          }}
                          className="p-0"
                        >
                          <ExpandLessIcon className="sortup" />
                        </IconButton>
                        <IconButton
                          onClick={() => {
                            handleSortDown(item?.header);
                          }}
                          className="p-0"
                        >
                          <ExpandMoreIcon className="sortdown" />
                        </IconButton>
                      </div> */}
                    </span>
                  }
                  style={{
                    paddingTop: "15px",
                    fontWeight: "400",
                    fontSize: "13px",
                    lineHeight: "19px",
                    letterSpacing: ".01em",
                    color: "#181E25",
                    whiteSpace: "nowrap",
                    paddingBottom: "15px",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                  }}
                />
              );
            }
          })}
        </DataTable>
        <div
          style={{
            position: "absolute",
            top: "75px",
            right: "-50px",
            transform: "rotate(90deg)",
            borderBottom: "2px solid black",
          }}
          onClick={() => setSidebaropen((prev) => !prev)}
          role="button"
        >
          <p
            className="m-0 px-4"
            style={{
              letterSpacing: ".01em",
              fontSize: "12px",
              fontWeight: "400",
            }}
          >
            {/* <img
              className="me-2"
              src={}
              style={{ background: "blue" }}
            ></img> */}
            <AppsIcon style={{ color: "#71e8d2" }} />
            Columns
          </p>
        </div>
        {sidebaropen && (
          <Columns
            setfiltercolumn={setfiltercolumn}
            ColumnObject={ColumnObject}
            DsrColumns={DsrModifiedArray}
          />
        )}
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalItems={filterReport?.length}
        onPageChange={() => setCurrentPage(1)}
        itemsPerPage={itemsPerPage}
      />
    </>
  );
}

export default DailyReportTable;
