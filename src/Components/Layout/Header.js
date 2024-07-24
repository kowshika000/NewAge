import { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import Cookies from "js-cookie";
// import { ReactComponent as Logo } from "../../assets/Logo.svg";
import Logo from "../../assets/WhatsApp Image 2024-06-28 at 11.41.50_354b3fc8.jpg";
import { ReactComponent as Bell } from "../../assets/bell.svg";
import { Dropdown } from "antd";
import { useSelector } from "react-redux";

const Header = ({ setShowText, setShowmap }) => {
  const navigate = useNavigate();
  const location = useLocation();
  // const pathname = location.pathname;
  const [headerFocused, setHeaderFocused] = useState(true);
  const FirstLetter = useSelector((state) =>
    state.ProfileData?.profileData?.company?.charAt(0)
  );

  const handleHeaderFocus = () => {
    setHeaderFocused(true);
  };

  const handleHeaderBlur = () => {
    setHeaderFocused(false);
  };

  const handleLogout = () => {
    Cookies.remove("jwtToken");
    window.location.href = "/";
  };

  const items = [
    {
      key: "1",
      label: (
        <Link
          to="/profile"
          className="text-decoration-none "
          style={{
            fontSize: "14px",
            fontWeight: "400",
            letterSpacing: ".01em",
            color: "black",
            marginRight: "70px",
            lineHeight: "27px",
          }}
        >
          <AccountCircleIcon
            sx={{ fontSize: "23px", color: "#384656" }}
            className="me-3"
          />
          Profile
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link
          className="text-decoration-none"
          style={{
            fontSize: "14px",
            fontWeight: "400",
            letterSpacing: ".01em",
            color: "black",
            marginRight: "70px",
            lineHeight: "27px",
          }}
          onClick={() => handleLogout()}
        >
          <LogoutIcon
            sx={{ fontSize: "23px", color: "#384656" }}
            className="me-3"
          />
          Logout
        </Link>
      ),
    },
  ];
  const handleRedirectToShipments = () => {
    navigate("/shipment");
    setShowmap(false);
    setShowText(false);
  };
  return (
    <div
      className="d-flex justify-content-between"
      onFocus={handleHeaderFocus}
      onBlur={handleHeaderBlur}
      style={{
        position: "fixed",
        top: 0,
        minWidth: "1255px",
        width: "100%",
        height: "76px",
        zIndex: "1000",
        overflowY: "hidden",
        background: "#011C69",
        padding: "20px 24px 20px 24px",
        borderBottom: "1px solid #011C69",
      }}
    >
      <div className="d-flex">
        <div className="align-content-center">
          <img
            src={Logo}
            width="120px"
            height="35px"
            alt="Logo"
            onClick={handleRedirectToShipments}
            style={{ cursor: "pointer" }}
          />
        </div>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginLeft: "auto",
            paddingLeft: "20px",
          }}
        >
          <Link
            to="/shipment"
            style={{ textDecoration: "none" }}
            onClick={handleRedirectToShipments}
          >
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: "400",
                color:
                  location.pathname === "/shipment"
                    ? "white"
                    : "rgba(255, 255, 255, 0.5)",
                padding: "20px",
                "&:hover": {
                  color: "white",
                },
              }}
            >
              Shipments
            </Typography>
          </Link>
          {/* <Link to="/quotation" style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: "400",
                color:
                  location.pathname === "/quotation"
                    ? "white"
                    : "rgba(255, 255, 255, 0.5)",
                padding: "20px",
                "&:hover": {
                  color: "white",
                },
              }}
            >
              Quotations
            </Typography> 
          </Link>*/}
          {/* <Link to="/invoice" style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: "400",
                color:
                  location.pathname === "/invoice"
                    ? "white"
                    : "rgba(255, 255, 255, 0.5)",
                padding: "20px",
                "&:hover": {
                  color: "white",
                },
              }}
            >
              Invoice
            </Typography>
          </Link> */}
          {/* <Link to="/quick" style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: "400",
                color:
                  location.pathname === "/quick"
                    ? "white"
                    : "rgba(255, 255, 255, 0.5)",
                padding: "20px",
                "&:hover": {
                  color: "white",
                },
              }}
            >
              Quick Booking
            </Typography>
          </Link> */}
        </Box>
      </div>
      <div
        className="d-flex align-items-center"
        style={{ justifyContent: "space-between", gap: "25px" }}
      >
        {/* <div
          style={{
            border: "1px solid #D1D9D3",
            borderRadius: "20px",
            padding: "8px 12px",
            width: "70px",
            gap: "0",
            position: "relative",
          }}
          className="d-flex justify-content-end align-items-center"
        >
          <Bell
            width="25px"
            height="25px"
            style={{ position: "absolute", left: "4px" }}
            alt="Bell"
          />

          <div
            style={{
              borderRadius: "50px",
              widht: "50px",
              height: "20px",
              background: "#07CEA4",
              alignItems: "center",
            }}
          >
            <Typography
              style={{
                fontSize: "12px",
                fontWeight: "400",
                textAlign: "center",
                padding: "6px",
                color: "#F9FCFB",
                alignItems: "start",
                paddingTop: "2px",
              }}
            >
              3
            </Typography>
          </div>
        </div> */}
        <Dropdown
          menu={{
            items,
          }}
          placement="bottomRight"
          arrow={{
            pointAtCenter: true,
          }}
          trigger={["click"]}
        >
          <div
            style={{
              backgroundColor: "#00D3DE",
              width: "43px",
              height: "41px",
              borderRadius: "50%",
              alignSelf: "center",
              alignContent: "center",
            }}
            role="button"
            className="justify-text-center align-content-center"
          >
            <Typography
              sx={{
                color: "white",
                fontFamily: "Lato",
                fontSize: "16px",
                fontWeight: "400",
                textAlign: "center",
              }}
            >
              {FirstLetter}
            </Typography>
          </div>
        </Dropdown>
      </div>
    </div>
  );
};

export default Header;
