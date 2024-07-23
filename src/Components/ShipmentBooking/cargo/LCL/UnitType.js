import React, {useEffect, useState} from "react";
import {
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  FormControlLabel,
  Radio,
  Box,
} from "@mui/material";
import minus from '../../../../assets/9021673_minus_bold_icon 1.svg'
import plus from '../../../../assets/material-symbols_add-rounded.svg'
import { Button } from "antd";
import deletedicon from "../../../../assets/ic_outline-delete.svg";
import editicon from "../../../../assets/editpencil.f11da97f.svg";

const UnitType = ({ onClose }) => {
  const [exim, setexim] = useState("I")
  console.log(exim)
  const [inputFields, setInputFields] = useState(
    JSON.parse(localStorage.getItem("inpfields")) || [{}]
  );
  const [saveddatas, setsaveddatas] = useState(
    JSON.parse(localStorage.getItem("tsDatas")) || []
  );
  const [editeddata, setediteddata] = useState({});
  const [editedId, seteditedId] = useState("");
  const initialData = {
    package_type: "BOX",
    no_of_units: "",
    total_volume: "",
    total_weight: "",
    // import_export: "I",
    volume_type: "CBM",
    weight_type: "KG",
  };
  const [tsDatas, settsDatas] = useState({
    package_type: "BOX",
    no_of_units: "",
    total_volume: "",
    total_weight: "",
    // import_export: "I",
    volume_type: "CBM",
    weight_type: "KG",
  });
  // const [tseditedDatas, settseditedDatas] = useState(editeddata[0]);
  // console.log(tseditedDatas)
  console.log(editeddata);
  console.log(saveddatas);
  console.log(inputFields.length);
  const canAdd = [
    tsDatas.no_of_units,
    tsDatas.total_volume,
    tsDatas.total_weight,
    tsDatas.package_type,
    tsDatas.volume_type,
    tsDatas.weight_type,
  ].every(Boolean);
  const CanField = Boolean(inputFields.length);
  console.log(CanField);
  console.log(canAdd);
  const canSave = [
    tsDatas.no_of_units,
    tsDatas.total_volume,
    tsDatas.total_weight,
    tsDatas.package_type,
    tsDatas.volume_type,
    tsDatas.weight_type,
  ].every(Boolean);
  console.log(canSave);
  const canEditSave = [
    editeddata.no_of_units,
    editeddata.total_volume,
    editeddata.total_weight,
    editeddata.package_type,
    editeddata.volume_type,
    editeddata.weight_type,
  ].every(Boolean);
  console.log(canEditSave);

  useEffect(() => {
    localStorage.setItem("tsDatas", JSON.stringify(saveddatas));
    localStorage.setItem("inpfields", JSON.stringify(inputFields));
  }, [saveddatas, inputFields]);
  // useEffect(() => {
  //   localStorage.setItem("tsDatas",JSON.stringify(saveddatas))
  // }, [input])

  //This is for create new form data

  const handleChange = (e) => {
    const { name, value } = e.target;
    settsDatas((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleUnitsChange = (e) => {
    const { name, value } = e.target;
    console.log(value, typeof value);
    settsDatas((prev) => {
      return {
        ...prev,
        [name]: !value ? "" : value <= 0 ? 1 : parseInt(value),
      };
    });
  };
  const handleUnitIncrement = () => {
    settsDatas((prev) => {
      return {
        ...prev,
        no_of_units:
          prev.no_of_units === ""
            ? 1
            : parseInt(prev.no_of_units) < 999
            ? parseInt(prev.no_of_units) + 1
            : parseInt(prev.no_of_units),
      };
    });
  };
  const handleUnitDecrement = () => {
    settsDatas((prev) => {
      return {
        ...prev,
        no_of_units:
          prev.no_of_units === ""
            ? 1
            : parseInt(prev.no_of_units) > 1
            ? parseInt(prev.no_of_units) - 1
            : parseInt(prev.no_of_units),
      };
    });
  };
  console.log(tsDatas);

  const handleWeightDropChange = (e) => {
    const { name, value } = e.target;
    settsDatas((prev) => {
      return {
        ...prev,
        [name]: value,
        volume_type: value === "LB" ? "CFT" : "CBM",
      };
    });
  };
  const handleVolumeDropChange = (e) => {
    const { name, value } = e.target;
    settsDatas((prev) => {
      return {
        ...prev,
        [name]: value,
        weight_type: value === "CBM" ? "KG" : "LB",
      };
    });
  };

  const handleAddLoad = () => {
    if (inputFields.length > 0) {
      setsaveddatas([
        ...saveddatas,
        { ...tsDatas, id: saveddatas.length < 1 ? 1 : saveddatas.length + 1 },
      ]);
      settsDatas(initialData);
    }
    setInputFields([{}]);
  };
  console.log(inputFields);
  const handleCloseLoad = (index) => {
    // if (inputFields.length === 1) {
    //   return;
    // }
    // setInputFields(inputFields.filter((_, i) => i !== index));
    setInputFields([]);
    settsDatas(initialData);
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    console.log(id);
    const filteredData = saveddatas.filter((i) => i.id !== id);
    console.log(filteredData);
    setsaveddatas(filteredData);
    setediteddata({});
    if (saveddatas.length === 1) {
      setInputFields([{}]);
    }
    // setsaveddatas(saveddatas.filter((_,i) => i !== index));
  };
  const handleEdit = (e, id) => {
    e.preventDefault();
    console.log("edited");
    console.log(id);
    const filteredData = saveddatas.filter((i) => i.id === id);
    console.log(filteredData);
    seteditedId(id);
    setediteddata(filteredData[0]);
    // if(saveddatas.length===1){
    //   setInputFields([{}]);
    // }
    // setsaveddatas(saveddatas.filter((_,i) => i !== index));
  };

  const handleSave = () => {
    setsaveddatas([
      ...saveddatas,
      { ...tsDatas, id: saveddatas.length < 1 ? 1 : saveddatas.length + 1 },
    ]);
    settsDatas(initialData);
    setInputFields([]);
  };

  //This is for edit Data
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setediteddata((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleEditUnits = (e) => {
    const { name, value } = e.target;
    console.log(value, typeof value);
    setediteddata((prev) => {
      return { ...prev, [name]: !value ? "" : parseInt(value) };
    });
  };
  const handleEditUnitIncrement = () => {
    setediteddata((prev) => {
      return {
        ...prev,
        no_of_units:
          prev.no_of_units === ""
            ? 1
            : parseInt(prev.no_of_units) < 999
            ? parseInt(prev.no_of_units) + 1
            : parseInt(prev.no_of_units),
      };
    });
  };
  const handleEditUnitDecrement = () => {
    setediteddata((prev) => {
      return {
        ...prev,
        no_of_units:
          prev.no_of_units === ""
            ? 1
            : parseInt(prev.no_of_units) > 1
            ? parseInt(prev.no_of_units) - 1
            : parseInt(prev.no_of_units),
      };
    });
  };

  const handleEditWeightDropChange = (e) => {
    const { name, value } = e.target;
    setediteddata((prev) => {
      return {
        ...prev,
        [name]: value,
        volume_type: value === "LB" ? "CFT" : "CBM",
      };
    });
  };
  const handleEditVolumeDropChange = (e) => {
    const { name, value } = e.target;
    setediteddata((prev) => {
      return {
        ...prev,
        [name]: value,
        weight_type: value === "CBM" ? "KG" : "LB",
      };
    });
  };

  const handleUpdate = () => {
    // const { name, value } = e.target;
    const filteredEdit = saveddatas.map((item) =>
      item.id === editedId ? editeddata : item
    );
    console.log(filteredEdit);
    // const filteredItems = filteredEdit.push(editeddata)
    // console.log(filteredEdit)
    // setsaveddatas((prev) => {
    //   return [...prev,editeddata];
    // });
    setsaveddatas(filteredEdit);
    setediteddata({});
    seteditedId("");
  };
  return (
    <>
    {saveddatas?.map((item, index) => {
        return (
          <Box
            key={index}
            sx={{
              borderRadius: "8px",
              backgroundColor: "rgba(243, 245, 247, 1)",
              padding: "12px 24px",
              // display: "flex",
              // justifyContent: "space-between",
              // alignItems: "center",
              marginBottom: "8px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <span
                  style={{
                    fontWeight: "600",
                    fontSize: "16px",
                    lineHeight: "19px",
                    letterSpacing: ".01em",
                    color: "rgba(24, 30, 37, 1)",
                  }}
                >
                  Load {index + 1}
                </span>{" "}
                {editedId !== item.id && (
                  // <>
                  <span
                    style={{
                      fontWeight: "400",
                      fontSize: "15px",
                      lineHeight: "25px",
                      letterSpacing: ".01em",
                      color: "rgba(41, 51, 61, 1)",
                    }}
                  >
                    : {item.no_of_units} Units
                  </span>
                )}
              </div>

              {editedId !== item.id && (
                <div>
                  <span
                    style={{
                      fontWeight: "400",
                      fontSize: "13px",
                      lineHeight: "19px",
                      letterSpacing: ".01em",
                      color: "rgba(41, 51, 61, 1)",
                    }}
                  >
                    {item.total_volume}
                    {item.volume_type} | {item.total_weight} {item.weight_type}
                  </span>
                </div>
              )}
              <div>
                {editedId !== item.id && (
                  <img
                    src={editicon}
                    alt="edit"
                    className="me-1"
                    onClick={(e) => handleEdit(e, item.id)}
                  />
                )}
                <img
                  src={deletedicon}
                  alt="delete"
                  onClick={(e) => handleDelete(e, item.id)}
                />
              </div>
            </div>
            {/* {
              editeddata?.map((item,i)=>{
                console.log(item,i)
                console.log(item.id,editedId) */}
            {editedId === item.id && (
              <>
                {
                  editeddata && (
                    <div key={editeddata?.id}>
                      <div className="d-flex">
                        <div className="w-50 my-3 ms-0 me-3">
                          <Typography
                            sx={{
                              fontWeight: "500",
                              fontSize: "13px",
                              lineHeight: "19px",
                              letterSpacing: ".01em",
                              color: "rgba(103, 120, 142, 1)",
                            }}
                          >
                            Package Type
                          </Typography>
                          <FormControl fullWidth>
                            {/* <InputLabel id="demo-simple-select-label">Package</InputLabel> */}
                            <Select
                              style={{ height: "45px" }}
                              // labelId="demo-simple-select-label"
                              // id="demo-simple-select"
                              // label="Age"
                              value={editeddata?.package_type}
                              onChange={handleEditChange}
                              name="package_type"
                              displayEmpty
                              inputProps={{ "aria-label": "Without label" }}
                            >
                              <MenuItem value="BOX">PACKAGES(s)</MenuItem>
                            </Select>
                          </FormControl>{" "}
                        </div>
                        <div className="w-50 my-3 ms-3 me-0">
                          <Typography
                            sx={{
                              fontWeight: "500",
                              fontSize: "13px",
                              lineHeight: "19px",
                              letterSpacing: ".01em",
                              color: "rgba(103, 120, 142, 1)",
                            }}
                          >
                            No.of Units
                          </Typography>
                          <div
                            className="btn-group w-100"
                            role="group"
                            style={{
                              border: "1px solid rgba(207, 214, 223, 1)",
                              height: "45px",
                            }}
                          >
                            <input
                              type="number"
                              className="form-control placeholder_style"
                              placeholder="Units"
                              autoComplete="off"
                              onKeyDown={(e) => {
                                if (
                                  !/[0-9]|Backspace|Tab|Enter|Delete|ArrowLeft|ArrowRight/.test(
                                    e.key
                                  )
                                ) {
                                  e.preventDefault();
                                }
                              }}
                              // value={noofunits ? noofunits : ""}
                              value={editeddata?.no_of_units}
                              name="no_of_units"
                              // onChange={(e)=>setNoofunits(parseInt(e.target.value))}
                              onChange={handleEditUnits}
                              style={{
                                borderTopRightRadius: "0",
                                borderBottomRightRadius: "0",
                                padding: "13px",
                                border: "none",
                              }}
                            />
                            <button
                              // onClick={()=>setNoofunits((prev)=>prev>1?prev-1:1)}
                              onClick={handleEditUnitDecrement}
                              type="button"
                              style={{
                                border: "none",
                                paddingRight: "6px",
                                paddingLeft: "6px",
                                background: "none",
                                borderRight: "1px solid #f0f0f0",
                              }}
                            >
                              <img src={minus} alt="minus" />
                            </button>
                            <button
                              // onClick={()=>setNoofunits((prev)=>prev<999?prev+1:999)}
                              onClick={handleEditUnitIncrement}
                              type="button"
                              style={{
                                border: "none",
                                borderTopRightRadius: "5px",
                                borderBottomRightRadius: "5px",
                                paddingRight: "6px",
                                paddingLeft: "6px",
                                background: "none",
                              }}
                            >
                              <img src={plus} alt="add" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="w-50 mb-3 ms-0 me-3">
                          <Typography
                            sx={{
                              fontWeight: "500",
                              fontSize: "13px",
                              lineHeight: "19px",
                              letterSpacing: ".01em",
                              color: "rgba(103, 120, 142, 1)",
                            }}
                          >
                            Total Volume
                          </Typography>
                          {/* <Space direction="vertical">
                              <Input size="large" addonAfter={selectAfter} defaultValue="CM" />
                          </Space> */}
                          <div
                            style={{ height: "42px" }}
                            className="btn-group "
                            role="group"
                            aria-label="Button group with nested dropdown"
                          >
                            <input
                              type="number"
                              autoComplete="off"
                              onKeyDown={(e) => {
                                if (
                                  !/[0-9]|Backspace|Tab|Enter|Delete|ArrowLeft|ArrowRight/.test(
                                    e.key
                                  )
                                ) {
                                  e.preventDefault();
                                }
                              }}
                              className="placeholder_style"
                              style={{
                                border: "1px solid rgba(207, 214, 223, 1)",
                                borderTopLeftRadius: "5px",
                                borderBottomLeftRadius: "5px",
                                padding: "10px",
                                fontSize: "1rem",
                                width: "60%",
                              }}
                              // className="w-100"
                              value={editeddata?.total_volume}
                              onChange={handleEditChange}
                              name="total_volume"
                              placeholder="Volume"
                            />
                            <FormControl variant="standard">
                              {/* <InputLabel id="demo-customized-select-label">Age</InputLabel> */}
                              <Select
                                sx={{
                                  height: "100%",
                                  width: "100%",
                                  backgroundColor: "rgba(243, 245, 247, 1)",
                                  borderTopRightRadius: "8px",
                                  borderBottomRightRadius: "8px",
                                  border: "1px solid rgba(207, 214, 223, 1)",
                                  borderLeft: "0px",
                                }}
                                labelId="demo-customized-select-label"
                                id="demo-customized-select"
                                displayEmpty
                                inputProps={{ "aria-label": "Without label" }}
                                // defaultValue="CFT"
                                value={editeddata?.volume_type}
                                onChange={handleEditVolumeDropChange}
                                name="volume_type"
                                // value={age}
                                // onChange={handleEditChange}
                                // input={<BootstrapInput />}
                              >
                                <MenuItem value="CBM">CBM</MenuItem>
                                <MenuItem value="CFT">CFT</MenuItem>
                              </Select>
                            </FormControl>
                            {/* <div className="btn-group" role="group">
                              <button
                                id="btnGroupDrop1"
                                type="button"
                                className="btn dropdown-toggle "
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                style={{
                                  background: "rgba(243, 245, 247, 1)",
                                  border: "1px solid rgba(207, 214, 223, 1)",
                                }}
                              >
                                CM
                              </button>
                              <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                <a className="dropdown-editeddata" href="#">
                                  CBM
                                </a>
                                <a className="dropdown-editeddata" href="#">
                                  CFT
                                </a>
                              </div>
                            </div> */}
                          </div>
                        </div>
                        <div className="w-50 mb-3 ms-3 me-0">
                          <Typography
                            sx={{
                              fontWeight: "500",
                              fontSize: "13px",
                              lineHeight: "19px",
                              letterSpacing: ".01em",
                              color: "rgba(103, 120, 142, 1)",
                            }}
                          >
                            Total Weight
                          </Typography>
                          <div
                            style={{ height: "42px" }}
                            className="btn-group"
                            role="group"
                            aria-label="Button group with nested dropdown"
                          >
                            <input
                              type="number"
                              autoComplete="off"
                              onKeyDown={(e) => {
                                if (
                                  !/[0-9]|Backspace|Tab|Enter|Delete|ArrowLeft|ArrowRight/.test(
                                    e.key
                                  )
                                ) {
                                  e.preventDefault();
                                }
                              }}
                              style={{
                                border: "1px solid rgba(207, 214, 223, 1)",
                                borderTopLeftRadius: "5px",
                                borderBottomLeftRadius: "5px",
                                fontSize: "1rem",
                                padding: "10px",
                                width: "60%",
                              }}
                              placeholder="Weight"
                              className="placeholder_style"
                              value={editeddata?.total_weight}
                              onChange={handleEditChange}
                              name="total_weight"
                            />
                            <FormControl variant="standard">
                              {/* <InputLabel id="demo-customized-select-label">Age</InputLabel> */}
                              <Select
                                sx={{
                                  height: "100%",
                                  width: "100%",
                                  backgroundColor: "rgba(243, 245, 247, 1)",
                                  borderTopRightRadius: "8px",
                                  borderBottomRightRadius: "8px",
                                  border: "1px solid rgba(207, 214, 223, 1)",
                                  borderLeft: "0px",
                                }}
                                labelId="demo-customized-select-label"
                                id="demo-customized-select"
                                displayEmpty
                                inputProps={{ "aria-label": "Without label" }}
                                value={editeddata?.weight_type}
                                onChange={handleEditWeightDropChange}
                                name="weight_type"
                                // value={age}
                                // onChange={handleChange}
                                // input={<BootstrapInput />}
                              >
                                <MenuItem value="KG">KG</MenuItem>
                                <MenuItem value="LB">LB</MenuItem>
                              </Select>
                            </FormControl>
                            {/* <button className="btn" onClick={handleSave}>save</button> */}

                            {/* <div className="btn-group" role="group">
                              <button
                                id="btnGroupDrop1"
                                type="button"
                                className="btn dropdown-toggle"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                style={{
                                  background: "rgba(0,0,0,0.03)",
                                  border: "1px solid rgba(207, 214, 223, 1)",
                                }}
                              >
                                KG
                              </button>
                              <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                <a className="dropdown-item" href="#">
                                  KG
                                </a>
                                <a className="dropdown-item" href="#">
                                  LB
                                </a>
                              </div>
                            </div> */}
                          </div>
                        </div>
                      </div>
                      <Button
                        style={{
                          backgroundColor: "transparent",
                          boxShadow: "unset",
                          border: "none",
                          opacity: !canEditSave ? ".5" : "1",
                        }}
                        onClick={handleUpdate}
                        disabled={!canEditSave}
                      >
                        save
                      </Button>
                    </div>
                  )

                  // })
                }
              </>
            )}

            {/* //   })
            // } */}
          </Box>
        );
      })}
    {inputFields.map((load, index)=>(
      <React.Fragment key={index} >
        <div className={`${saveddatas.length > 0 && "backgroundStyle"}`}>
            {saveddatas.length > 0 && (
              <>
                <span
                  style={{
                    fontWeight: "600",
                    fontSize: "16px",
                    lineHeight: "19px",
                    letterSpacing: ".01em",
                    color: "rgba(24, 30, 37, 1)",
                  }}
                >
                  Load {saveddatas.length + 1}
                </span>
                <span style={{ float: "inline-end" }}>
                  <img
                    src={deletedicon}
                    alt="delete"
                    onClick={handleCloseLoad}
                  />
                </span>
                <hr style={{ margin: "8px 0px" }} />
              </>
            )}
      <div className="d-flex">
        <div className="w-50 my-3 ms-0 me-3">
          <Typography sx={{ fontWeight: "500", fontSize:"13px", lineHeight:"19px",letterSpacing:".01em",color:"rgba(103, 120, 142, 1)" }}>
            Package Type
          </Typography>
          <FormControl fullWidth>
            {/* <InputLabel id="demo-simple-select-label">Package</InputLabel> */}
            <Select
              // labelId="demo-simple-select-label"
              // id="demo-simple-select"
              // label="Age"
              style={{height: "45px"}}
              value={tsDatas.package_type}
              onChange={handleChange}
              name="package_type"
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value="">Ten</MenuItem>
            </Select>
          </FormControl>{" "}
        </div>
        <div className="w-50 my-3 ms-3 me-0">
          <Typography sx={{ fontWeight: "500", fontSize:"13px", lineHeight:"19px",letterSpacing:".01em",color:"rgba(103, 120, 142, 1)" }}>
            No.of Units
          </Typography>
          <div
            className="btn-group"
            role="group"
            style={{ border: "1px solid rgb(207, 214, 223)",height:"45px" }}
          >
            <input
              type="number"
              autoComplete="off"
              className="placeholder_style form-control"
              placeholder="Units"
              onKeyDown={(e) => {
                if (
                  !/[0-9]|Backspace|Tab|Enter|Delete|ArrowLeft|ArrowRight/.test(
                    e.key
                  )
                ) {
                  e.preventDefault();
                }
              }}
              // onWheel={(e) => e.target.blur()}
              // value={noofunits ? noofunits : ""}
              value={tsDatas?.units}
              name="units"
              // onChange={(e)=>setNoofunits(parseInt(e.target.value))}
              onChange={handleUnitsChange}
              style={{
                borderTopRightRadius: "0",
                borderBottomRightRadius: "0",
                padding: "13px",
                border:"none"
              }}
            />
            <button
              onClick={handleUnitDecrement}
              type="button"
              style={{ border: "none", paddingRight: "6px",paddingLeft:"6px", background: "none", borderRight:"1px solid #f0f0f0"}}

            >
                <img src={minus} alt="minus"  />
            </button>
            <button
              onClick={handleUnitIncrement}
              type="button"
              style={{
                border: "none",
                borderTopRightRadius: "5px",
                borderBottomRightRadius: "5px",
                paddingRight: "6px",
                paddingLeft:"6px",
                background: "none"
              }}
            >
              <img src={plus} alt="add"  />
            </button>
          </div>
        </div>
      </div>
      <div className="d-flex">
        <div className="w-100 mb-3">
          <Typography sx={{ fontWeight: "500", fontSize:"13px", lineHeight:"19px",letterSpacing:".01em",color:"rgba(103, 120, 142, 1)" }}>
            Dimentions
          </Typography>

          <div
            className="btn-group"
            role="group"
            aria-label="Button group with nested dropdown"
            style={{
              // border: "1px solid rgb(207, 214, 223)", 
              height:"42px"
            }}
          >
            <input
              className="placeholder_style w-100"
              type="text"
              style={{
                // border: "0px",
                border:"1px solid rgb(207, 214, 223)",
                borderTopLeftRadius: "5px",
                borderBottomLeftRadius: "5px",
                fontSize: "20px", 
                padding: "12px",
              }}
              placeholder="L"
            />
            <input
              className="placeholder_style w-100"
              type="text"
              style={{
                border: "1px solid rgb(207, 214, 223)",
                borderRight:"1px solid rgb(207, 214, 223)",
                borderLeft:"0px",
                fontSize: "20px",
                padding: "12px"
              }}
              placeholder="W"
            />
            <input
              className="placeholder_style w-100"
              type="text"
              style={{
                border: "1px solid rgb(207, 214, 223)",
                borderRight:"1px solid rgb(207, 214, 223)",
                borderLeft:"0px",
                fontSize: "20px",
                padding: "12px"
              }}
              placeholder="H"
            />
            <FormControl  variant="standard">
                {/* <InputLabel id="demo-customized-select-label">Age</InputLabel> */}
                <Select
                  sx={{ height:"100%",width:"100%",backgroundColor:"rgba(243, 245, 247, 1)",borderTopRightRadius:"8px",borderBottomRightRadius:"8px",border:"1px solid rgba(207, 214, 223, 1)",borderLeft:"0px" }}
                  labelId="demo-customized-select-label"
                  id="demo-customized-select"
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  defaultValue="KG"
                  // value={age}
                  // onChange={handleChange}
                  // input={<BootstrapInput />}
                >
                  <MenuItem value="KG">
                    KG
                  </MenuItem>
                  <MenuItem value="LB">LB</MenuItem>
                </Select>
              </FormControl>
            {/* <div className="btn-group" role="group">
              <button
                id="btnGroupDrop1"
                type="button"
                className="btn dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{
                  background: "rgba(0,0,0,0.03)",
                  border: "1px solid grey",
                }}
              >
                CBM
              </button>
              <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                <a className="dropdown-item" href="#">
                  CBM
                </a>
                <a className="dropdown-item" href="#">
                  CFT
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="d-flex mb-3">
        <div className="w-100">
          <Typography sx={{ fontWeight: "500", fontSize:"13px", lineHeight:"19px",letterSpacing:".01em",color:"rgba(103, 120, 142, 1)" }}>
            Total Weight
          </Typography>
          <div
            className="btn-group w-100"
            role="group"
            aria-label="Button group with nested dropdown"
            style={{height:"42px"}}
          >
            <input
              className="placeholder_style w-100"
              type="text"
              style={{
                border: "1px solid rgb(207, 214, 223)",
                borderTopLeftRadius: "5px",
                borderBottomLeftRadius: "5px",
                fontSize: "20px", padding: "12px",
              }}
              placeholder="Weight"
            />
            <FormControl  variant="standard">
                {/* <InputLabel id="demo-customized-select-label">Age</InputLabel> */}
                <Select
                  sx={{ height:"100%",width:"100%",backgroundColor:"rgba(243, 245, 247, 1)",borderTopRightRadius:"8px",borderBottomRightRadius:"8px",border:"1px solid rgba(207, 214, 223, 1)",borderLeft:"0px" }}
                  labelId="demo-customized-select-label"
                  id="demo-customized-select"
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  defaultValue="KG"
                  // value={age}
                  // onChange={handleChange}
                  // input={<BootstrapInput />}
                >
                  <MenuItem value="KG">
                    KG
                  </MenuItem>
                  <MenuItem value="LB">LB</MenuItem>
                </Select>
              </FormControl>
            {/* <div className="btn-group" role="group" >
              <button
                id="btnGroupDrop1"
                type="button"
                className="btn dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{
                  background: "rgba(0,0,0,0.03)",
                  border: "1px solid grey",
                }}
              >
                KG
              </button>
              <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                <a className="dropdown-item" href="#">
                  KG
                </a>
                <a className="dropdown-item" href="#">
                  LB
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      </div>
      </React.Fragment>))}
      <button className="btn" onClick={handleAddLoad}>
        <Typography sx={{ fontWeight: "400", fontSize:"13px", lineHeight:"19px",letterSpacing:".01em",color:"rgba(73, 90, 110, 1)" }}>
          + Add Another Load
        </Typography>
      </button>
      <div className="mb-3 d-flex justify-content-between">
        <div className=" d-flex" style={{ justifyContent: "space-between" }}>
          <Typography
            sx={{
              fontWeight: "400",
              fontSize:"13px",
              lineHeight:"19px",
              letterSpacing:".01em",
              color:"rgba(103, 120, 142, 1)",
              padding: "13px 8px 13px 0px",
            }}
          >
            EXIM Type
          </Typography>
          <FormControlLabel
            value="Import"
            style={{fontWeight:"400",fontSize:"13px",lineHeight:"19px",letterSpacing:".01em",color:"rgba(41, 51, 61, 1)"}}
            control={<Radio   
              size="small" 
              label="Import"
              sx={{
                color: "black",
                '&.Mui-checked': {
                  color: "black",
                },
              }}
            />}
            label="Import"
            labelPlacement="right"
          />
          <FormControlLabel
            value="Export"
            style={{fontWeight:"400",fontSize:"13px",lineHeight:"19px",letterSpacing:".01em",color:"rgba(41, 51, 61, 1)"}}
            control={<Radio   
              size="small" 
              label="Import"
              sx={{
                color: "black",
                '&.Mui-checked': {
                  color: "black",
                },
              }}
            />}
            label="Export"
            labelPlacement="right"
          />
          {/* <input type="radio" name="exim" />
          <Typography
            sx={{
              fontWeight: "700",
              opacity: "0.7",
              padding: "15px",
            }}
          >
            Import
          </Typography>
          <input type="radio" name="exim" />
          <Typography
            sx={{
              fontWeight: "700",
              opacity: "0.7",
              padding: "15px",
            }}
          >
            Export
          </Typography> */}
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <button className="confirm" onClick={onClose}>
            Confirm
          </button>
        </div>
      </div>
    </>
  );
};

export default UnitType;
