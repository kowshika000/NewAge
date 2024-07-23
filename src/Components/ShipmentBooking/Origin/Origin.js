import React, { useState, useRef } from "react";
import { Typography, Box, TextField, CircularProgress, FormHelperText } from "@mui/material";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Modal from "@mui/material/Modal";
import "../ShipmentCard.css";
import { ReactComponent as Location } from "../../../assets/location.svg";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "antd";
import CountryFlag from "../../Core-Components/CountryFlag";
import { allportRequest } from "../../../Redux/Actions/AllPortAction";
import air from "../../../assets/Air.svg";
import sea from "../../../assets/Shipement.svg";
import city from "../../../assets/Business2.svg";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Origin = ({
  originPortOptionsVisible,
  setOriginPortOptionsVisible,
  setDestPortOptionsVisible,
  setCargoOptionsVisible,
  setOriginPort,
  originPort,
  destPort
}) => {
  // const [origin, setOrigin] = useState("");
  // const [modalOpen, setModalOpen] = useState(false);
  // const originRef = useRef(null);

  const [searchOriginPort, setSearchOriginPort] = useState("");
  const [orgPortCode, setOrgPortCode] = useState("");
  const [checkleave, setcheckleave] = useState("");
  // const [originPortOptionsVisible, setOriginPortOptionsVisible] =
  //   useState(false);
  // const [originPort, setOriginPort] = useState(null);
  const originPortData = useSelector((state) => state.allPort);
  const { loading, error } = useSelector((state) => state.allPort);
  const originPortDataValue = originPortData?.allportData?.Data;
  const [errormsg, seterrormsg] = useState(null)
  console.log(originPortDataValue);
  const [prevValue, setPrevValue] = useState("");
  // const [destPortOptionsVisible, setDestPortOptionsVisible] = useState(false);
  const dispatch = useDispatch();
  const filteredSeaPorts = originPortDataValue?.filter(
    (item) => item.Transport_mode === "SEA"
  );
  const filteredAirPorts = originPortDataValue?.filter(
    (item) => item.Transport_mode === "AIR"
  );
  const filteredCityPorts = originPortDataValue?.filter(
    (item) => item.Transport_mode === "CITY"
  );
  console.log(filteredSeaPorts);

  // Mock suggestions data
  // const suggestions = [
  //   {
  //     label: "Sea Port",
  //     labelText: "Pick up not included",
  //     items: ["Nhava Sheva (INNSA)"],
  //   },
  //   {
  //     label: "Airport",
  //     labelText: "Pick up not included",
  //     items: ["Chhatrapati Shivaji International Airport (BOM)"],
  //   },
  //   {
  //     label: "City",
  //     labelText: "Pick up not included",
  //     items: ["Chhatrapati Shivaji International Airport (BOM)"],
  //   },
  // ];

  // const handleOriginChange = (event) => {
  //   const { value } = event.target;
  //   setOrigin(value);
  // };

  // const handleOriginFocus = () => {
  //     setModalOpen(true);
  // };

  // const handleClose = () => {
  //   setModalOpen(false);
  // };

  // const handleSuggestionClick = (value) => {
  //   setOrigin(value);
  //   setModalOpen(false);
  // };

  const handleOriginPortChange = (event) => {
    const { value } = event.target;
    console.log(value);
    setSearchOriginPort(value);
    if (value.length >= 4) {
      dispatch(allportRequest({ search_key: value, limits: "30" }));
      setOriginPortOptionsVisible(true);
    } else {
      setOriginPortOptionsVisible(false);
      setOriginPort(null);
    }

    if (value.length < prevValue.length) {
      console.log("prevValue.length", prevValue.length);
      setSearchOriginPort("");
      setOriginPort(null);
      setOriginPortOptionsVisible(false);
    } else {
      setSearchOriginPort(value);
    }
    setDestPortOptionsVisible(false);
    setCargoOptionsVisible(false)
  };

  const handleOriginPortSelect = (port) => {
    console.log("Port selected:", port);
    setcheckleave(port);
    setSearchOriginPort(port?.port_name);
    // setOrgPortCode(port?.port_code);
    setOriginPortOptionsVisible(false);
    setOriginPort(port);
    if (
      port?.Transport_mode === "SEA" &&
      destPort?.Transport_mode === "AIR"
    ) {
      seterrormsg("Please select either AIR Port or City as origin");
      setSearchOriginPort("");
      setOriginPort(null);
    } else if (
      port?.Transport_mode === "AIR" &&
      destPort?.Transport_mode === "SEA"
    ) {
      seterrormsg("Please select either SEA Port or City as origin");
      setSearchOriginPort("");
      setOriginPort(null);
    } else if (port?.port_country === destPort?.port_country) {
      seterrormsg("Please select a different country than destination");
      setSearchOriginPort("");
      setOriginPort(null);
    } else {
      setSearchOriginPort(port?.port_name);
      seterrormsg(null)
    }
  };

  return (
    <>
      <div
        className="column ps-2"
        style={{ display: "flex", minWidth: "29%", position: "relative" }}
      >
        <div style={{ alignContent: "center" }}>
          <Location
            style={{ width: "20px", height: "20px" }}
            className="mx-2"
          />
        </div>
        <div className="w-100">
          <Typography
            className="bold"
            style={{ fontSize: "14px", fontWeight: "700", lineHeight: "20px" }}
          >
            Origin
          </Typography>
          {originPort && (
            <CountryFlag
              countryCode={originPort.port_country}
              className="port-flag input-port-flag"
            />
          )}
          <input
            type="text"
            style={{
              border: "none",
              outline: "none",
              width: "90%",
              background: "transparent",
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "22px",
              letterSpacing: ".01em",
            }}
            className="input-field "
            placeholder="Enter Sea/Airport, City or Zip Code"
            // ref={originRef}
            // onChange={handleOriginChange}
            // onClick={handleOriginFocus}
            // value={origin}
            // onBlur={() => {
            //   if (!checkleave) {
            //     setSearchOriginPort("");
            //     setOriginPortOptionsVisible(false); //this one clear the input values when mouse on leave without selected dropdowns
            //   }
            // }}
            onChange={handleOriginPortChange}
            value={searchOriginPort}
          />
          {
            errormsg && <FormHelperText style={{ color: "red", fontStyle: "italic" }}>
            {errormsg}
          </FormHelperText>
          }
          {originPortOptionsVisible && (
            <div className="outer-all-port">
              {loading ? (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <CircularProgress style={{ color: "#71e8d2" }} />
                </Box>
              ) : (
                <>
                  {filteredSeaPorts?.length > 0 && (
                    <div className="inner-all-port">
                      <div>
                        <p
                          style={{
                            marginBottom: 0,
                            padding: "12px 0 8px 0",
                            color: "#181e25",
                            fontSize: "15px",
                            fontWeight: 500,
                          }}
                        >
                          Sea Port{" "}
                          <span
                            style={{
                              color: "rgba(103, 120, 142, 1)",
                              fontSize: "13px",
                              fontWeight: 400,
                              lineHeight: "19px",
                              letterSpacing: ".01em",
                            }}
                          >
                            ( Pick up not included )
                          </span>
                        </p>
                      </div>
                      <div>
                        {filteredSeaPorts?.map((port, index) => (
                          <div
                            key={index}
                            onClick={() => handleOriginPortSelect(port)}
                            className=""
                          >
                            <Row className="justify-content-between p-2 port-all-content">
                              <Col className="d-flex">
                                <Row className="gap-2">
                                  <div className="mt-1 p-1">
                                    <CountryFlag
                                      countryCode={port?.port_country}
                                      className="port-flag"
                                    />{" "}
                                  </div>
                                  <div>
                                    <p className="portnamecode ">
                                      {port?.list_value}
                                    </p>
                                    <p className="portCountry">
                                      {port?.port_country}
                                    </p>
                                  </div>
                                </Row>
                              </Col>
                              <Col style={{ marginRight: "20px" }}>
                                <img
                                  src={sea}
                                  style={{
                                    width: "24px",
                                    height: "24px",
                                  }}
                                />
                              </Col>
                            </Row>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {filteredAirPorts?.length > 0 && (
                    <div className="inner-all-port">
                      <div>
                        <p
                          style={{
                            marginBottom: 0,
                            padding: "12px 0 8px 0",
                            color: "#181e25",
                            fontSize: "15px",
                            fontWeight: 500,
                          }}
                        >
                          Airport{" "}
                          <span
                            style={{
                              color: "rgba(103, 120, 142, 1)",
                              fontSize: "13px",
                              fontWeight: 400,
                              lineHeight: "19px",
                              letterSpacing: ".01em",
                            }}
                          >
                            ( Doesn't Include Pickup )
                          </span>
                        </p>
                      </div>
                      <div>
                        {filteredAirPorts?.map((port, index) => (
                          <div
                            key={index}
                            onClick={() => handleOriginPortSelect(port)}
                            className=""
                          >
                            <Row className="justify-content-between p-2 port-all-content">
                              <Col className="d-flex">
                                <Row className="gap-2">
                                  <div className="mt-1 p-1">
                                    <CountryFlag
                                      countryCode={port?.port_country}
                                      className="port-flag"
                                    />{" "}
                                  </div>
                                  <div>
                                    <p className="portnamecode ">
                                      {port?.list_value}
                                    </p>
                                    <p className="portCountry">
                                      {port?.port_country}
                                    </p>
                                  </div>
                                </Row>
                              </Col>
                              <Col style={{ marginRight: "20px" }}>
                                <img
                                  src={air}
                                  style={{
                                    width: "24px",
                                    height: "24px",
                                  }}
                                />
                              </Col>
                            </Row>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {filteredCityPorts?.length > 0 && (
                    <div className="inner-all-port">
                      <div>
                        <p
                          style={{
                            marginBottom: 0,
                            padding: "12px 0 8px 0",
                            color: "#181e25",
                            fontSize: "15px",
                            fontWeight: 500,
                          }}
                        >
                          City{" "}
                          <span
                            style={{
                              color: "rgba(103, 120, 142, 1)",
                              fontSize: "13px",
                              fontWeight: 400,
                              lineHeight: "19px",
                              letterSpacing: ".01em",
                            }}
                          >
                            ( Include Pickup )
                          </span>
                        </p>
                      </div>
                      <div>
                        {filteredCityPorts?.map((port, index) => (
                          <div
                            key={index}
                            onClick={() => handleOriginPortSelect(port)}
                            className=""
                          >
                            <Row className="justify-content-between p-2 port-all-content">
                              <Col className="d-flex">
                                <Row className="gap-2">
                                  <div className="mt-1 p-1">
                                    <CountryFlag
                                      countryCode={port?.port_country}
                                      className="port-flag"
                                    />{" "}
                                  </div>
                                  <div>
                                    <p className="portnamecode ">
                                      {port?.list_value}
                                    </p>
                                    <p className="portCountry">
                                      {port?.port_country}
                                    </p>
                                  </div>
                                </Row>
                              </Col>
                              <Col style={{ marginRight: "20px" }}>
                                <img
                                  src={city}
                                  style={{
                                    width: "24px",
                                    height: "24px",
                                  }}
                                />
                              </Col>
                            </Row>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {/* <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {suggestions.map((group, index) => (
            <div key={index}>
              <Typography variant="subtitle1" sx={{ fontWeight: "600", mt: 2 }}>
                {group.label} ({group.labelText})
              </Typography>
              {group.items.map((item, idx) => (
                <Typography
                  key={idx}
                  variant="body1"
                  sx={{ ml: 2, mt: 1, cursor: "pointer"}}
                  onClick={() => handleSuggestionClick(item)}
                >
                  {item}
                </Typography>
              ))}
            </div>
          ))}
        </Box>
      </Modal> */}
    </>
  );
};

export default Origin;
