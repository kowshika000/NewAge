import React, { useState, useEffect, useRef } from "react";
import { Button, Card, Checkbox, Popover, Image } from "antd";
import "./FindNewRate.css";
import ShipmentTracker from "./ShipmentTracker";
import info from "../../../../../assets/Info.svg";
import { Tooltip } from "antd";
import QuoteRequest from "./QuoteRequest";
import { Collapse } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import CargoPickupPopOver from "./CargoPickupPopOver";
import pencil from "../../../../../assets/Pencil.svg";
import img from "../../../../../assets/thumbsgr.svg";

function FindNewRate() {
  const [checkedItems, setCheckedItems] = useState({
    originCharges: false,
    exportClearance: false,
    cargoPickup: false,
    internationalFreight: false,
    DestinationCharges: false,
    ImportClearance: false,
    CargoDelivery: false,
    CargoInsurance: false,
    StackableCargo: false,
    NonHarzardousCargo: false
  });
  const [isPopoverOpen, setPopoverOpen] = useState(true);

  const onChange = (e) => {
    if (e.target.name !== "cargoPickup") {
      setPopoverOpen(false);
    } else {
      setPopoverOpen(true);
    }
    const { value, checked } = e.target;
    setCheckedItems({
      ...checkedItems,
      [value]: checked,
    });
  };
  const onChangeCollapse = (key) => {
    console.log(key);
  };
  const Details = [
    {
      id: "1",
      Vessel: "NORTHERN DEDICATION",
      Voyage: "2308",
      Cutoff: "20-May-2023",
      Departure: "24-May-2023",
      Arrival: "30-May-2023",
      validity: "16 May 2023",
      Price: "$50",
      TotalPrice: "$320",
    },
    {
      id: "2",
      Vessel: "NORTHERN PRACTISE",
      Voyage: "41",
      Cutoff: "24-May-2023",
      Departure: "28-May-2023",
      Arrival: "30-May-2023",
      validity: "16 May 2023",
      Price: "$50",
      TotalPrice: "$350",
    },
    {
      id: "3",
      Vessel: "MONTPELLIER",
      Voyage: "23005E",
      Cutoff: "27-May-2023",
      Departure: "31-May-2023",
      Arrival: "06-Jun-2023",
      validity: "16 May 2023",
      Price: "$50",
      TotalPrice: "$380",
    },
    {
      id: "4",
      Vessel: "MONTPELLIER",
      Voyage: "23005E",
      Cutoff: "27-May-2023",
      Departure: "31-May-2023",
      Arrival: "06-Jun-2023",
      validity: "16 May 2023",
      Price: "$50",
      TotalPrice: "$380",
    },
    {
      id: "5",
      Vessel: "MONTPELLIER",
      Voyage: "23005E",
      Cutoff: "27-May-2023",
      Departure: "31-May-2023",
      Arrival: "06-Jun-2023",
      validity: "16 May 2023",
      Price: "$50",
      TotalPrice: "$380",
    },
    {
      id: "6",
      Vessel: "MONTPELLIER",
      Voyage: "23005E",
      Cutoff: "27-May-2023",
      Departure: "31-May-2023",
      Arrival: "06-Jun-2023",
      validity: "16 May 2023",
      Price: "$50",
      TotalPrice: "$380",
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [checkedItems]);

  const [selectedValue, setSelectedValue] = useState("");
  console.log(`selectedjhgfds ${selectedValue}`);

  const FilterCheckbox = ({
    label,
    tooltipText,
    onChange,
    value,
    checked,
    children,
    vname,
    disabled,
    defaultChecked
  }) => {
    const handlePopoverOpenChange = (open) => {
      setPopoverOpen(open);
    };
    const handleButtonClick = () => {
      setPopoverOpen(true);
    };
    return (
      <div className="filter-quotation">
        {value === "cargoPickup" &&
          checkedItems.cargoPickup &&
          isPopoverOpen && (
            <>
              <div className="dimmed-background"></div>
            </>
          )}
        <div className="filter-quotation-wrapper">
          <div className="singlefilter-leftstyling">
            <div className="div-rowcentered">
              <Checkbox
                onChange={onChange}
                value={value}
                checked={checked}
                name={vname}
                disabled={disabled}
                defaultChecked={defaultChecked}
              >
                {label}
                {children}
              </Checkbox>
            </div>
            <div
              className="div-rowcentered"
              style={{ justifyContent: "flex-start" }}
            >
              <Tooltip placement="topLeft" title={tooltipText}>
                <span style={{ float: "right" }} role="button">
                  <img src={info} alt="more" />
                </span>
              </Tooltip>
            </div>
          </div>
          {value === "cargoPickup" && checkedItems.cargoPickup && (
            <div
              className="div-rowcentered justify-atstart displaycheckbox-value"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              {!isPopoverOpen && (
                <h6
                  style={{
                    fontWeight: "400",
                    fontSize: "12px",
                    lineHeight: "18px",
                    letterSpacing: "1%",
                    color: "#384656",
                    marginBottom: "0px",
                  }}
                >
                  ZIP Code :&nbsp;&nbsp;
                  <span
                    style={{
                      fontWeight: "500",
                      fontSize: "13px",
                      lineHeight: "19px",
                      color: "#384656",
                      letterSpacing: "1%",
                    }}
                  >
                    {selectedValue}
                  </span>
                </h6>
              )}
              <Popover
                placement="bottom"
                content={
                  <CargoPickupPopOver
                    setSelectedValue={setSelectedValue}
                    setPopoverOpen={setPopoverOpen}
                  />
                }
                open={isPopoverOpen}
                onOpenChange={handlePopoverOpenChange}
                trigger="click"
              >
                <Button
                  type="link"
                  className={`editpencil-btn ${
                    selectedValue && !isPopoverOpen ? "ms-auto" : ""
                  }`}
                  style={{
                    position: "relative",
                    width: "20.6px",
                    height: "32px",
                    bordeRadius: "6px",
                    padding: "1px",
                  }}
                  onClick={handleButtonClick}
                >
                  <Image src={pencil} alt="pencil" preview={false} />
                </Button>
              </Popover>
            </div>
          )}
        </div>
      </div>
    );
  };

  const item1 = [
    {
      key: "1",
      label: "Origin",
      children: (
        <>
          <div className="filterouter-leftdiv">
            <FilterCheckbox
              label="Origin Charges"
              vname="originCharges"
              checked={checkedItems.originCharges}
              value="originCharges"
              tooltipText="Lorem ipsum dolor sit amet consectetur. Gravida id amet id maecenas tellus."
              onChange={onChange}
            />
            <FilterCheckbox
              label="Export Clearance"
              checked={checkedItems.exportClearance}
              value="exportClearance"
              vname="exportClearance"
              tooltipText="Lorem ipsum dolor sit amet consectetur. Gravida id amet id maecenas tellus."
              onChange={onChange}
            >
              <span>
                <img src={img} alt="icon" className="ms-2 mb-1" />
              </span>
            </FilterCheckbox>
            <FilterCheckbox
              label="Cargo Pickup"
              checked={checkedItems.cargoPickup}
              value="cargoPickup"
              vname="cargoPickup"
              tooltipText="Lorem ipsum dolor sit amet consectetur. Gravida id amet id maecenas tellus."
              onChange={onChange}
            />
            <FilterCheckbox
              label="International Freight"
              value="internationalFreight"
              vname="internationalFreight"
              // checked={checkedItems.internationalFreight}
              tooltipText="Lorem ipsum dolor sit amet consectetur. Gravida id amet id maecenas tellus."
              onChange={onChange}
              defaultChecked={true}
              disabled={true}
            />
          </div>
        </>
      ),
    },
  ];
  const item2 = [
    {
      key: "1",
      label: "Destination",
      children: (
        <>
          <div className="filterouter-leftdiv">
            <FilterCheckbox
              label="Destination Charges"
              checked={checkedItems.DestinationCharges}
              value="DestinationCharges"
              vname="DestinationCharges"
              tooltipText="Lorem ipsum dolor sit amet consectetur. Gravida id amet id maecenas tellus."
              onChange={onChange}
            />
            <FilterCheckbox
              label="Import Clearance"
              checked={checkedItems.ImportClearance}
              value="ImportClearance"
              vname="ImportClearance"
              tooltipText="Lorem ipsum dolor sit amet consectetur. Gravida id amet id maecenas tellus."
              onChange={onChange}
            >
              <span>
                <img src={img} alt="icon" className="ms-2 mb-1" />
              </span>
            </FilterCheckbox>
            <FilterCheckbox
              label="Cargo Delivery"
              checked={checkedItems.CargoDelivery}
              value="CargoDelivery"
              vname="CargoDelivery"
              tooltipText="Lorem ipsum dolor sit amet consectetur. Gravida id amet id maecenas tellus."
              onChange={onChange}
            />
          </div>
        </>
      ),
    },
  ];
  const item3 = [
    {
      key: "1",
      label: "Value Added",
      children: (
        <>
          <div className="filterouter-leftdiv">
            <FilterCheckbox
              label="Cargo Insurance"
              checked={checkedItems.CargoInsurance}
              value="CargoInsurance"
              vname="CargoInsurance"
              tooltipText="Lorem ipsum dolor sit amet consectetur. Gravida id amet id maecenas tellus."
              onChange={onChange}
            >
              <span>
                <img src={img} alt="icon" className="ms-2 mb-1" />
              </span>
            </FilterCheckbox>
          </div>
        </>
      ),
    },
  ];
  const item4 = [
    {
      key: "1",
      label: "Cargo Type",
      children: (
        <>
          <div className="filterouter-leftdiv">
            <FilterCheckbox
              label="Stackable Cargo"
              checked={checkedItems.StackableCargo}
              value="StackableCargo"
              vname="StackableCargo"
              tooltipText="Lorem ipsum dolor sit amet consectetur. Gravida id amet id maecenas tellus."
              onChange={onChange}
            />
            <FilterCheckbox
              label="Non Harzardous Cargo"
              checked={checkedItems.NonHarzardousCargo}
              value="NonHarzardousCargo"
              vname="NonHarzardousCargo"
              tooltipText="Lorem ipsum dolor sit amet consectetur. Gravida id amet id maecenas tellus."
              onChange={onChange}
            />
          </div>
        </>
      ),
    },
  ];

  const customExpandIcon = ({ isActive }) =>
    isActive ? <UpOutlined /> : <DownOutlined />;

  return (
    <div
      style={{
        Width: "100%",
        minWidth: "1255px",
        padding: "20px",
        backgroundColor: "#f3f5f7",
        marginTop: "100px",
      }}
    >
      <div className="quotationresult-div mx-auto">
        <div className="quotationresult-leftdiv" style={{ flex: "0 0 272px" }}>
          <Card title="Service Included">
            <div className="Service-card">
              <Collapse
                defaultActiveKey={["1"]}
                expandIconPosition="end"
                expandIcon={customExpandIcon}
                ghost={true}
                onChange={onChangeCollapse}
                className="width-full"
                items={item1}
                style={{ borderBottom: "1px solid #F3F5F7" }}
              />
              <Collapse
                defaultActiveKey={["1"]}
                expandIconPosition="end"
                expandIcon={customExpandIcon}
                ghost={true}
                onChange={onChangeCollapse}
                className="width-full"
                items={item2}
                style={{ borderBottom: "1px solid #F3F5F7" }}
              />
              <Collapse
                defaultActiveKey={["1"]}
                expandIconPosition="end"
                expandIcon={customExpandIcon}
                ghost={true}
                onChange={onChangeCollapse}
                className="width-full"
                items={item3}
                style={{ borderBottom: "1px solid #F3F5F7" }}
              />
              <Collapse
                defaultActiveKey={["1"]}
                expandIconPosition="end"
                expandIcon={customExpandIcon}
                ghost={true}
                onChange={onChangeCollapse}
                className="width-full"
                items={item4}
                style={{ borderBottom: "1px solid#F3F5F7" }}
              />
            </div>
          </Card>
        </div>
        <div className="quotationresult-leftdiv" style={{ flex: "1 1 auto" }}>
          <ShipmentTracker Details={Details} />
          {/* <QuoteRequest /> */}
        </div>
      </div>
    </div>
  );
}

export default FindNewRate;
