import React from "react";
import Navbar from "../Layout/Navbar";
import { Typography } from "@mui/material";
import Qbooking from "./Qbooking";
import "./quickBooking.css";

const Quick = () => {
  return (
    // <div
    //   style={{
    //     width: "100%",
    //     background:
    //       "linear-gradient(to bottom, white 20%,  rgb(248, 250, 252) 15%)",
    //   }}
    // >
    <div style={{ maxWidth: "1255px" }} className="shipmentIndex py-5 mx-auto">
      <Typography
        style={{ fontSize: "28px", fontWeight: "700" }}
        className="shipments-head"
      >
        Quick Booking
      </Typography>
      <div>
        <Navbar />
      </div>
      <Qbooking />
    </div>
    // </div>
  );
};

export default Quick;
