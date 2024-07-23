import React, { useState } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import { GiCargoCrate } from "react-icons/gi";
import { CiBoxes } from "react-icons/ci";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import {
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  Button,
} from "@mui/material";
import "./cargo.css";
import TotalShipment from "./LCL/TotalShipment";
import UnitType from "./LCL/UnitType";
import boxes from '../../../assets/3256182_boxes_cargo_delivery_logistics_warehouse_icon 2.svg'
import fcl from '../../../assets/661303_cargo_container_delivery_lift_logistic_icon 1.svg'

export default function CargoDetails({ onClose }) {
  const [isByTotalShipmentOpen, setIsByTotalShipmentOpen] = useState(true);
  const [isByUnitTypeOpen, setIsByUnitTypeOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleByTotalShipment = () => {
    setIsByTotalShipmentOpen(true);
    setIsByUnitTypeOpen(false);
  };

  const toggleByUnitType = () => {
    setIsByUnitTypeOpen(true);
    setIsByTotalShipmentOpen(false);
  };

  return (
    <div className="cargo_details_section">
      {/* <div className="card w-100 d-flex " style={{ padding: "20px" }}> */}
        <TabView
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            color: "black",
          }}
        >

          {/* LCL */}


          <TabPanel
            header="LCL/AIR"
            leftIcon={
              // <CiBoxes style={{ marginRight: "20px", fontSize:'45px' }} />
              <img src={boxes} alt="" className="me-2" />
            }
            style={{ fontSize: "25px", width: "100%" }}
          >
            <div className="d-flex text-center" style={{margin:"30px 0px"}}>
              <div
                className={`lcl-card1 w-50 ${
                  isByTotalShipmentOpen ? "hovered" : ""
                }`}
                onClick={toggleByTotalShipment}
              >
                By Total Shipment
              </div>
              <div
                className={`lcl-card2 w-50 ${
                  isByUnitTypeOpen ? "hovered" : ""
                }`}
                onClick={toggleByUnitType}
              >
                By Unit Type
              </div>
            </div>

            {/* By Total Shipment*/}

            {isByTotalShipmentOpen && (
              <TotalShipment/>
            )}

            {/* By Unit Type*/}

            {isByUnitTypeOpen && (
              <UnitType/>
            )}
          </TabPanel>

          {/* FCL */}

          <TabPanel
            header="FCL"
            leftIcon={
              // <GiCargoCrate style={{ marginRight: "20px", fontSize:'35px' }} />
              <img src={fcl} alt="fcl" className="me-2" />
            }
            style={{ fontSize: "25px", width: "100%" }}
          >
            <div className="d-flex mt-3">
              <div className="w-50 my-3 ms-0 me-3">
                <Typography sx={{ fontWeight: "500", fontSize:"13px", lineHeight:"19px",letterSpacing:".01em",color:"rgba(103, 120, 142, 1)" }}>
                  Container Type
                </Typography>
                <FormControl fullWidth>
                  {/* <InputLabel id="demo-simple-select-label">select Type</InputLabel> */}
                  <Select
                    // labelId="demo-simple-select-label"
                    // id="demo-simple-select"
                    // label="Age"
                    className="placeholder_style"
                    style={{height: "45px"}}
                    displayEmpty
                    placeholder="Select Type"
                    inputProps={{ 'aria-label': 'Without label' }}
                  >
                    <MenuItem value="Ten">Ten</MenuItem>
                  </Select>
                </FormControl>{" "}
              </div>
              <div className="w-50 my-3 ms-3 me-0">
                <Typography sx={{ fontWeight: "500", fontSize:"13px", lineHeight:"19px",letterSpacing:".01em",color:"rgba(103, 120, 142, 1)" }}>
                 Quantity
                </Typography>
                <input style={{height: "45px"}} className="form-control p-3 placeholder_style" placeholder="Quantity"  />
              </div>
            </div>
            <div className="my-3 d-flex " style={{ justifyContent: "space-between" }}>
              <div
                className=" d-flex"
                style={{ justifyContent: "space-between" }}
              >
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize:"13px",
                    lineHeight:"19px",
                    letterSpacing:".01em",
                    color:"rgba(103, 120, 142, 1)",
                    padding: "13px 8px 13px 0px",}}
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
                  labelPlacement="end"
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
                  sx={{ fontWeight: "700", opacity: "0.7", padding: "15px" }}
                >
                  Import
                </Typography>
                <input type="radio" name="exim" />
                <Typography
                  sx={{ fontWeight: "700", opacity: "0.7", padding: "15px" }}
                >
                  Export
                </Typography> */}
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <button onClick={onClose} className="confirm">
                  Confirm
                </button>
              </div>
            </div>
          </TabPanel>
        </TabView>
      {/* </div> */}
    </div>
  );
}
