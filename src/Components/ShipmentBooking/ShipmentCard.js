import React, { useState, useRef, useEffect } from "react";
// import { Typography } from "@mui/material";
// import { HiOutlineLocationMarker } from "react-icons/hi";
// import { FaArrowRightArrowLeft } from "react-icons/fa6";
// import { IoIosSearch } from "react-icons/io";
// import { RiShipFill } from "react-icons/ri";
import "./ShipmentCard.css";
import Cargo from "./cargo/Cargo";
import Origin from "./Origin/Origin";
import Destination from "./Destination/Destination";
// import { Link } from "react-router-dom";
// import Line from "../../assets/line.png";
import { SearchOutlined } from "@ant-design/icons";
import Arrow from "../../assets/arrow.svg";

const ShipmentCard = () => {
  const [destination, setDestination] = useState("");
  // const [isCargoOpen, setIsCargoOpen] = useState(false);
  // const [active, setActive] = useState(false);
  const cargoRef = useRef(null);
  const [originPortOptionsVisible, setOriginPortOptionsVisible] =
    useState(false);
  const [destPortOptionsVisible, setDestPortOptionsVisible] = useState(false);
  const [cargoOptionsVisible, setCargoOptionsVisible] = useState(false);
  const [originPort, setOriginPort] = useState(null);
  const [destPort, setDestPort] = useState(null);
  useEffect(() => {
    if (destination && cargoRef.current) {
      cargoRef.current.focus();
    }
  }, [destination]);

  // const handleCargoFocus = () => {
  //   setIsCargoOpen(true);
  // };
  // const handleConfirmCargo = () => {
  //   setIsCargoOpen(false);
  // };

  // const [error, seterror] = useState();

  return (
    <div>
      <div
        className="mx-auto my-5 w-100 card shadow"
        style={{
          minWidth: "1270px",
          border: "1px solid #E7EAF0",
          borderRadius: "8px",
        }}
      >
        <div className="card-body d-flex p-0">
          <Origin
            setOriginPortOptionsVisible={setOriginPortOptionsVisible}
            originPortOptionsVisible={originPortOptionsVisible}
            setDestPortOptionsVisible={setDestPortOptionsVisible}
            setCargoOptionsVisible={setCargoOptionsVisible}
            originPort={originPort}
            setOriginPort={setOriginPort}
            destPort={destPort}
          />
          <div
            className="align-content-center ps-2"
            style={{ minWidth: "3.03%" }}
          >
            <img
              src={Arrow}
              width="26px"
              height="26px"
              style={{
                alignContent: "center",
                margin: "auto",
                alignSelf: "center",
              }}
            />
          </div>
          <Destination
            setOriginPortOptionsVisible={setOriginPortOptionsVisible}
            destPortOptionsVisible={destPortOptionsVisible}
            setDestPortOptionsVisible={setDestPortOptionsVisible}
            setCargoOptionsVisible={setCargoOptionsVisible}
            destPort={destPort}
            setDestPort={setDestPort}
            originPort={originPort}
          />
          {/* <div className="icon">
            <div className="divider"></div>
          </div> */}
          <Cargo
            cargoOptionsVisible={cargoOptionsVisible}
            setCargoOptionsVisible={setCargoOptionsVisible}
          />
          {/* Search button */}
          <div
            style={{ minWidth: "5%" }}
            className="d-flex align-content-center justify-content-around align-items-center"
          >
            <div style={{ alignContent: "center" }}>
              <div
                className="px-3 "
                style={{
                  backgroundColor: "#0da3de",
                  fontWeight: "900",
                  borderRadius: "8px",
                  height: "52px",
                  color: "white",
                  alignContent: "center ",
                  alignItems: "center",
                }}
              >
                <SearchOutlined
                  width="20px"
                  style={{
                    fontWeight: "700",
                    alignSelf: "center",
                    alignContent: "center",
                    alignItems: "center",
                  }}
                />
              </div>
            </div>
            {/* <div className="align-content-center ">
              <img src={Line} />
            </div> */}
            {/* <div
              className="d-flex align-content-center justify-content-start pe-4"
              style={{alignContent:'center'}}
            >
              
              <Link to="/shipment">
                <button
                  style={{
                    backgroundColor: "rgba(240, 30, 30, 1)",
                    color: "white",
                    maxWidth: "150px",
                   
                    borderRadius: "5px",
                    padding: "8px",
                    border: "none",
                    alignSelf:'center'
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "23px",
                    }}
                  >
                    Quick Booking
                  </Typography>
                </button>
              </Link>
            </div> */}
          </div>
        </div>
      </div>

      {/* {isCargoOpen && (
        <div className="overlay">
          <div className="suggestions-cargo cargo-port">
            <Cargo onClose={handleConfirmCargo} />
          </div>
        </div>
      )} */}
    </div>
  );
};

export default ShipmentCard;
