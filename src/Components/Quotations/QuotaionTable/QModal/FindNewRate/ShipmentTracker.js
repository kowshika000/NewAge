import React, { useState } from "react";
import { Card, Tabs } from "antd";
import "./FindNewRate.css";
import Share from "../../../../../assets/Share.png";
import Line from "../../../../../assets/Line 3.png";
import Union from "../../../../../assets/Union.png";
import flow from "../../../../../assets/flowlogo.png";
import Vector from "../../../../../assets/logoc.png";
import icon from "../../../../../assets/Group 2057.png";
import Cargo from "../../../../../assets/Cargoiocn.png";
import info from "../../../../../assets/Info.svg";
import { CaretDownOutlined } from "@ant-design/icons";
import { Dropdown } from "primereact/dropdown";

function ShipmentTracker({ Details }) {
  const [showAllData, setShowAllData] = useState(false);
  const itemsToShow = showAllData ? Details : Details.slice(0, 4);
  const [showCharges, setShowCharges] = useState(null);
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [selectedSort, setSelectedSort] = useState("Low to High");
  const tabs = [
    { label: "All(0)", key: "1" },
    { label: "Ocean(0)", key: "2" },
    { label: "Air(0)", key: "3" },
  ];
  const currencyOptions = ["USD", "INR", "AED"];
  const sortOptions = ["Low to High", "High to Low"];
  
  const handleShowCharges = (index) => {
    setShowCharges(index);
  };
  const DropdownTemplate = ({ value }) => (
    <div>
      <span className="dropdown-value">{value}</span>
      <CaretDownOutlined className="ms-1" style={{ color: "#67788E" }} />
    </div>
  );

  return (
    <>
      <Card className="tabs1 mb-2">
        <div className="row">
          <div className="col-9">
            <Tabs defaultActiveKey="1" items={tabs}></Tabs>
          </div>
          <div className="col-1 align-self-center">
            <div
              className="dropdownfield1 mx-2"
              style={{ alignContent: "center" }}
            >
              <Dropdown
                value={selectedCurrency}
                onChange={(e) => setSelectedCurrency(e.value)}
                options={currencyOptions}
                valueTemplate={<DropdownTemplate value={selectedCurrency} />}
                className="w-full md:w-14rem datehover"
                style={{ border: "none" }}
              />
            </div>
          </div>
          <div className="col-2 align-self-center">
            <div
              className="dropdownfield2 mx-2"
              style={{ alignContent: "center" }}
            >
              <Dropdown
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.value)}
                options={sortOptions}
                valueTemplate={<DropdownTemplate value={selectedSort} />}
                className="w-full md:w-14rem datehover"
                style={{ border: "none" }}
              />
            </div>
          </div>
        </div>
      </Card>
      <Card className="cargo-pick mb-2">
        <div className="d-flex justify-content-between align-items-center">
          <div style={{ opacity: "40%" }} className="cargo-pickup-p">
            <img src={icon} alt="icon" className="me-1" />
            Cargo Pickup
          </div>
          <div style={{ opacity: "40%" }}>
            <img src={Line} alt="line" />
            <img src={Vector} alt="car" className="mx-2" />
            <img src={Line} alt="line" />
          </div>
          <div>
            <p className="m-0 cargo-pickup-p">Nhava Sheva</p>
          </div>
          <div style={{ height: "20px", opacity: "60%" }}>
            <span
              style={{
                display: "block",
                marginTop: "-5px",
                textAlign: "center",
                height: "10px",
              }}
            >
              <img src={Union} alt="union" className="mb-2" />
            </span>
            <span style={{ height: "10px" }}>
              <img src={flow} alt="flow" />
              <img src={flow} alt="flow" />
            </span>
          </div>
          <div>
            <p className="m-0 cargo-pickup-p">Jebel Ali</p>
          </div>
          <div style={{ opacity: "40%" }}>
            <img src={Line} alt="line" />
            <img src={Vector} alt="car" className="mx-2" />
            <img src={Line} alt="line" />
          </div>
          <div>
            <p className="m-0 cargo-pickup-p" style={{ opacity: "40%" }}>
              <img
                src={Cargo}
                alt="cargo"
                className="me-1 mb-1"
                style={{ width: "13px", height: "17px" }}
              />
              Cargo Delivery
            </p>
          </div>
        </div>
      </Card>
      {itemsToShow.map((data, index) => (
        <Card className="track1 mb-2" key={index}>
          <div className="d-flex justify-content-between">
            <div>
              <p style={{ fontSize: "15px" }}>
                <img
                  src={Union}
                  className="pe-2 mb-1"
                  style={{ height: "12px" }}
                />
                <span
                  style={{
                    fontweight: "400",
                    fontSize: "15px",
                    lineHeight: "25px",
                    letterSpacing: "1%",
                    color: "#495A6E",
                  }}
                >
                  Est.T/T&nbsp;&nbsp;
                </span>
                <span
                  style={{
                    fontWeight: "500",
                    fontSize: "15px",
                    lineHeight: "22px",
                    letterSpacing: "1%",
                    color: "#181E25",
                  }}
                >
                  9 Days (5 Days Port to Port)
                </span>
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: "25px",
                  color: "#D32D2F",
                  fontWeight: "500",
                }}
              >
                {data.TotalPrice}
                <span className="ms-2">
                  <img src={Share} alt="share" />
                </span>
              </p>
            </div>
          </div>
          <div className="d-flex">
            <div className="track-btn">LCL</div>
            <div className="track-btn mx-2">Direct</div>
            <div className="track-btn">Cheapest</div>
            <div
              className="ms-auto align-self-center"
              style={{
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "24px",
                letterSpacing: "1%",
                color: "#495A6E",
              }}
            >
              Validity :&nbsp;&nbsp;
              <span
                style={{
                  fontWeight: "500",
                  fontSize: "14px",
                  lineHeight: "24px",
                  letterSpacing: "1%",
                  color: "#181E25",
                }}
              >
                {data.validity}
              </span>
              <span className="ms-2">
                <img src={info} alt="more" style={{ marginBottom: "3px" }} />
              </span>
            </div>
          </div>
          <div className="detail-card">
            <div>
              <p className="card-label">VESSEL</p>
              <p className="p-value">{data.Vessel}</p>
            </div>
            <div>
              <p className="card-label">VOYAGE</p>
              <p className="p-value">{data.Voyage}</p>
            </div>
            <div>
              <p className="card-label">CUT OFF</p>
              <p className="p-value">{data.Cutoff}</p>
            </div>
            <div>
              <p className="card-label">Depature Date</p>
              <p className="p-value">{data.Departure}</p>
            </div>
            <div>
              <p className="card-label">Arrival Date</p>
              <p className="p-value">{data.Arrival}</p>
            </div>
          </div>
          {showCharges ? (
            <div className="charges">
              <div className="table-responsive">
                <table class="table">
                  <tbody>
                    <tr className="header">
                      <td className="origincharge">Origin Charges</td>
                      <td className="one">$100</td>
                    </tr>
                    <tr>
                      <td className="pickupcharge ps-4">Pickup Charges</td>
                      <td className="price-value">$55</td>
                    </tr>
                    <tr>
                      <td className="pickupcharge ps-4">B/L Issuance</td>
                      <td className="price-value">$45</td>
                    </tr>
                    <tr className="header">
                      <td className="origincharge">
                        International Freight Charges
                      </td>
                      <td className="one">$80</td>
                    </tr>
                    <tr className="header">
                      <td className="origincharge">Destination Charges</td>
                      <td className="one">$120</td>
                    </tr>
                    <tr>
                      <td className="pickupcharge ps-4">Handling Charges</td>
                      <td className="price-value">$60</td>
                    </tr>
                    <tr>
                      <td className="pickupcharge ps-4">
                        Import Custom Clearance
                      </td>
                      <td className="price-value">$30</td>
                    </tr>
                    <tr>
                      <td className="pickupcharge ps-4">Delivery Charges</td>
                      <td className="price-value">$30</td>
                    </tr>
                    <tr className="total">
                      <th className="totaoriginchargelamount">
                        Total amount :
                      </th>
                      <th className="one">$300 (USD)</th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            ""
          )}
          <div className="d-flex align-items-center">
            <div>
              <p
                className="m-0"
                style={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  fontSize: "14px",
                  lineHeight: "24px",
                  letterSpacing: "1%",
                  fontWeight: "400",
                  textAlign: "center",
                }}
                onClick={() => handleShowCharges(index)}
              >
                {showCharges ? "Hide" : "Show"} Charges Breakdown
              </p>
            </div>
            <div className="lock-btn ms-auto me-2">
              Lock Price at {data.Price}
            </div>
            <div className="book-btn">Book Now</div>
          </div>
        </Card>
      ))}
      {Details.length > 4 && (
        <div className="hr-with-text">
          <hr />
          <span
            onClick={() => setShowAllData(!showAllData)}
            className="show-more"
          >
            {showAllData ? "Show Less" : "Show More"}
          </span>
          <hr />
        </div>
      )}
      <Card className="track1 mb-2">
        <div className="d-flex justify-content-between">
          <div>
            <p style={{ fontSize: "15px" }}>
              <img
                src={Union}
                className="pe-2 mb-1"
                style={{ height: "12px" }}
              />
              <span
                style={{
                  fontweight: "400",
                  fontSize: "15px",
                  lineHeight: "25px",
                  letterSpacing: "1%",
                  color: "#495A6E",
                }}
              >
                Est.T/T&nbsp;&nbsp;
              </span>
              <span
                style={{
                  fontWeight: "500",
                  fontSize: "15px",
                  lineHeight: "22px",
                  letterSpacing: "1%",
                  color: "#181E25",
                }}
              >
                10 Days
              </span>
            </p>
          </div>
          <div>
            <p
              style={{
                fontSize: "25px",
                color: "#D32D2F",
                fontWeight: "500",
              }}
            >
              $306
            </p>
          </div>
        </div>
        <div className="d-flex">
          <div className="track-btn">LCL</div>
          <div className="track-btn mx-2">Direct</div>
          <div className="track-btn">Cheapest</div>
          <div className="ms-auto align-self-center">
            Validity : <b>16 May 2023</b>
          </div>
        </div>
        <div className="cardl">
          <div className="d-flex justify-content-between align-items-center">
            <div className="cargo-pickup-p">
              <img src={icon} alt="icon" className="me-1" />
              3150,Chennai
            </div>
            <div>
              <img src={Line} alt="line" />
              <img src={Vector} alt="car" className="mx-2" />
              <img src={Line} alt="line" />
            </div>
            <div>
              <p className="m-0 cargo-pickup-p">MAA</p>
            </div>
            <div style={{ height: "20px", opacity: "60%" }}>
              <span
                style={{
                  display: "block",
                  marginTop: "-5px",
                  textAlign: "center",
                  height: "10px",
                }}
              >
                <img src={Union} alt="union" className="mb-2" />
              </span>
              <span style={{ height: "10px" }}>
                <img src={flow} alt="flow" />
                <img src={flow} alt="flow" />
              </span>
            </div>
            <div>
              <p className="m-0 cargo-pickup-p">NGB</p>
            </div>
            <div>
              <img src={Line} alt="line" />
              <img src={Vector} alt="car" className="mx-2" />
              <img src={Line} alt="line" />
            </div>
            <div>
              <p className="m-0 cargo-pickup-p">
                <img
                  src={Cargo}
                  alt="cargo"
                  className="me-1 mb-1"
                  style={{ width: "13px", height: "17px" }}
                />
                1007,Shanghai
              </p>
            </div>
          </div>
        </div>
        {showCharges ? (
          <div className="charges">
            <div className="table-responsive">
              <table class="table">
                <tbody>
                  <tr className="header">
                    <td className="origincharge">Origin Charges</td>
                    <td className="one">$100</td>
                  </tr>
                  <tr>
                    <td className="pickupcharge ps-4">Pickup Charges</td>
                    <td className="price-value">$55</td>
                  </tr>
                  <tr>
                    <td className="pickupcharge ps-4">B/L Issuance</td>
                    <td className="price-value">$45</td>
                  </tr>
                  <tr className="header">
                    <td className="origincharge">
                      International Freight Charges
                    </td>
                    <td className="one">$80</td>
                  </tr>
                  <tr className="header">
                    <td className="origincharge">Destination Charges</td>
                    <td className="one">$120</td>
                  </tr>
                  <tr>
                    <td className="pickupcharge ps-4">Handling Charges</td>
                    <td className="price-value">$60</td>
                  </tr>
                  <tr>
                    <td className="pickupcharge ps-4">
                      Import Custom Clearance
                    </td>
                    <td className="price-value">$30</td>
                  </tr>
                  <tr>
                    <td className="pickupcharge ps-4"> Delivery Charges</td>
                    <td className="price-value">$30</td>
                  </tr>
                  <tr className="total">
                    <th className="totaoriginchargelamount">Total amount :</th>
                    <th className="one">$300 (USD)</th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="d-flex align-items-center">
          <div>
            <p
              className="m-0"
              style={{ textDecoration: "underline", cursor: "pointer" }}
              onClick={handleShowCharges}
            >
              {showCharges ? "Hide" : "Show"} Charges Breakdown
            </p>
          </div>
          <div className="lock-btn ms-auto me-2">Lock Price at $50</div>
          <div className="book-btn">Book Now</div>
        </div>
      </Card>
    </>
  );
}

export default ShipmentTracker;
