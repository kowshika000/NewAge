import React from "react";
import "./invoice.css";
import moneyImage from '../../assets/money.png'
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import DownloadIcon from '../../assets/Download.png'

const InvoiceDetails = () => {
  return (
    <div >
     <div  style={{ maxWidth: "1255px" }}>
      <div className="row w-50 px-4 d-flex mt-1" >
        <div className="col-6 d-flex">
          <div
            className="card my-auto p-1"
            style={{ backgroundColor: "#F8FAFC" }}
          >
            <img src={moneyImage} width="34px" height="34px" />
          </div>

          <div className="p-3">
            <div
              className="fw-semibold"
              style={{
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "24px",
                color: "rgba(73, 90, 110, 1)",
              }}
            >
              Total Due Time
            </div>
            <div className="bold" style={{ fontSize: "20px" }}>
              10000 <span>AED</span>
            </div>
            <div
              className="fw-semibold"
              style={{
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "24px",
                color: "rgba(73, 90, 110, 1)",
              }}
            >
              Unpaid Invoices : 103
            </div>
          </div>
        </div>
        <div className="col-6 d-flex ">
          <div
            className="card my-auto p-1"
            style={{ backgroundColor: "#F8FAFC" }}
          >
            <img src={moneyImage} width="34px" height="34px" />
          </div>
          <div className="p-3">
            <div
              className="fw-semibold"
              style={{
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "24px",
                color: "rgba(73, 90, 110, 1)",
              }}
            >
              Total Due Time
            </div>
            <div className="bold" style={{ fontSize: "20px" }}>
              10000 <span>AED</span>
            </div>
            <div
              className="fw-semibold"
              style={{
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "24px",
                color: "rgba(73, 90, 110, 1)",
              }}
            >
              Unpaid Invoices : 103
            </div>
          </div>
        </div>
      </div>
      <div className="w-100 d-flex mt-2 justify-content-between" style={{padding:'16px 34px'}}>
        <div className=" ">
          <Typography
            style={{ fontSize: "18px", fontWeight: "500", lineHeight: "34px" }}
          >
            Ageing + Outstanding details
          </Typography>
          <Typography
            className="outstanding-text"
            style={{ fontWeight: "400", fontSize: "14px", lineHeight: "24px" }}
          >
            Total Outstanding Amount
          </Typography>
        </div>

        <div className="fw-bold d-flex justify-content-end">
          <Link
            to="/shipment"
            className="p-3 invoice-link"
            style={{
              textDecoration: "underline",
              color: "rgba(0, 0, 136, 1)",
              fontSize: "14px",
              fontWeight: "700",
            }}
          >
            View My Credit
          </Link>
          <button
            className="d-flex align-items-center justify-content-center rounded "
            style={{ minWidth: "150px", height: "40px", backgroundColor:'#F01E1E', color:'white', border:'none' }}
          >
            <span className="d-flex me-4" style={{width:'15px', height:'15px'}}><img src={DownloadIcon}/></span>
            <Typography sx={{fontSize:'14px', fontWeight:'500'}}>Download</Typography>
          </button>
        </div>
      </div>
      <div className="p-2 w-100 mx-3">
        <table className="w-100" style={{ textAlign: "start" }}>
          <thead>
            <th
              style={{
                borderRight: "1px solid rgba(231, 234, 240, 1)",
                paddingLeft: "16px",
              }}
            >
              <Typography
                style={{
                  fontSize: "14px",
                  fontWeight: "700",
                  lineHeight: "24px",
                  color: "rgba(73, 90, 110, 1)",
                }}
              >
                0 - 30 Days
              </Typography>
            </th>
            <th
              style={{
                borderRight: "1px solid rgba(231, 234, 240, 1)",
                paddingLeft: "16px",
              }}
            >
              <Typography
                style={{
                  fontSize: "14px",
                  fontWeight: "700",
                  lineHeight: "24px",
                  color: "rgba(73, 90, 110, 1)",
                }}
              >
                31 - 60 Days
              </Typography>
            </th>
            <th
              style={{
                borderRight: "1px solid rgba(231, 234, 240, 1)",
                paddingLeft: "16px",
              }}
            >
              <Typography
                style={{
                  fontSize: "14px",
                  fontWeight: "700",
                  lineHeight: "24px",
                  color: "rgba(73, 90, 110, 1)",
                }}
              >
                61 - 90 Days
              </Typography>
            </th>
            <th
              style={{
                borderRight: "1px solid rgba(231, 234, 240, 1)",
                paddingLeft: "16px",
              }}
            >
              <Typography
                style={{
                  fontSize: "14px",
                  fontWeight: "700",
                  lineHeight: "24px",
                  color: "rgba(73, 90, 110, 1)",
                }}
              >
                91 - 120 Days
              </Typography>
            </th>
            <th
              style={{
                borderRight: "1px solid rgba(231, 234, 240, 1)",
                paddingLeft: "16px",
              }}
            >
              <Typography
                style={{
                  fontSize: "14px",
                  fontWeight: "700",
                  lineHeight: "24px",
                  color: "rgba(73, 90, 110, 1)",
                }}
              >
                Over 120 Days
              </Typography>
            </th>
            <th
              style={{
                borderRight: "1px solid rgba(231, 234, 240, 1)",
                paddingLeft: "16px",
              }}
            >
              <Typography
                style={{
                  fontSize: "14px",
                  fontWeight: "700",
                  lineHeight: "24px",
                  color: "rgba(73, 90, 110, 1)",
                }}
              >
                Unadjusted
              </Typography>
            </th>
            <th
              style={{
                borderRight: "1px solid rgba(231, 234, 240, 1)",
                paddingLeft: "16px",
              }}
            >
              <Typography
                style={{
                  fontSize: "14px",
                  fontWeight: "700",
                  lineHeight: "24px",
                  color: "rgba(73, 90, 110, 1)",
                }}
              >
                Net Outstanding Amont
              </Typography>
            </th>
          </thead>
          <tbody>
            <td
              style={{
                borderRight: "1px solid rgba(231, 234, 240, 1)",
                paddingLeft: "16px",
              }}
            >
              <Typography className="bold" style={{ fontSize: "20px" }}>
                3000 <span>AED</span>
              </Typography>
            </td>
            <td
              style={{
                borderRight: "1px solid rgba(231, 234, 240, 1)",
                paddingLeft: "16px",
              }}
            >
              <Typography className="bold" style={{ fontSize: "20px" }}>
                3000 <span>AED</span>
              </Typography>
            </td>
            <td
              style={{
                borderRight: "1px solid rgba(231, 234, 240, 1)",
                paddingLeft: "16px",
              }}
            >
              <Typography className="bold" style={{ fontSize: "20px" }}>
                3000 <span>AED</span>
              </Typography>
            </td>
            <td
              style={{
                borderRight: "1px solid rgba(231, 234, 240, 1)",
                paddingLeft: "16px",
              }}
            >
              <Typography className="bold" style={{ fontSize: "20px" }}>
                3000 <span>AED</span>
              </Typography>
            </td>
            <td
              style={{
                borderRight: "1px solid rgba(231, 234, 240, 1)",
                paddingLeft: "16px",
              }}
            >
              <Typography className="bold" style={{ fontSize: "20px" }}>
                3000 <span>AED</span>
              </Typography>
            </td>
            <td
              style={{
                borderRight: "1px solid rgba(231, 234, 240, 1)",
                paddingLeft: "16px",
              }}
            >
              <Typography className="bold" style={{ fontSize: "20px" }}>
                -
              </Typography>
            </td>
            <td
              style={{
                borderRight: "1px solid rgba(231, 234, 240, 1)",
                paddingLeft: "16px",
              }}
            >
              <Typography className="bold" style={{ fontSize: "20px" }}>
                -
              </Typography>
            </td>
          </tbody>
        </table>
      </div>
      <div className="card-footer p-3" style={{backgroundColor:'#F8FAFC', border:'none'}}></div>
    </div>
    </div>
  );
};

export default InvoiceDetails;
