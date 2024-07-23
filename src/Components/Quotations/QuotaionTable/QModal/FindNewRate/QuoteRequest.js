import React from "react";
import { Card, Col, Row, Input } from "antd";
import "./FindNewRate.css";
import Stripes from "../../../../../assets/Stripes.png";
import Avatar from "../../../../../assets/Avatar.png";
import RightArrow from "../../../../../assets/rightarrow.png";
import Email from "../../../../../assets/Email.png";
import info from "../../../../../assets/Info.svg";
import SubmitArr from "../../../../../assets/monochrome.png";

function QuoteRequest() {
  return (
    <>
      <Card className="Quote-Card">
        <Row>
          <Col span={24}>
            <img src={Stripes} alt="lines" className="img-stripe" />
            <img src={Avatar} alt="Avatar" className="img-avatar" />
          </Col>
          <Col span={24}>
            <div className="content">
              <p className="content-title">Non-Instant Quote request</p>
              <p className="content-description">
                Sorry for the inconvenience . Currently We couldn't find any
                instant results for this Non-Stackable Cargo. You can continue
                to book and our operations team will get in touch with you
                additional charges
              </p>
            </div>
          </Col>
          <Col span={24} className="mt-4">
            {/* <div className="request-btn">Request Non-Instant Quote</div> */}
            <div className="form">
              <p
                style={{
                  margin: "0",
                  fontSize: "14px",
                  fontWeight: "500",
                  lineHeight: "24px",
                  letterSpacing: "1%",
                  color: "#67788E",
                }}
              >
                Email
              </p>
              <Input
                size="large"
                placeholder="johnedoe@gmail.com"
                className="mb-3"
                prefix={<img src={Email} alt="email" />}
                suffix={
                  <p
                    style={{
                      fontWeight: "400",
                      fontSize: "13px",
                      lineHeight: "19px",
                      letterSpacing: "1%",
                      margin: "0px",
                      color: "#2C83EC",
                      cursor: "pointer",
                    }}
                  >
                    Verify
                  </p>
                }
              />
              <p
                style={{
                  margin: "0",
                  fontSize: "13px",
                  fontWeight: "500",
                  lineHeight: "19px",
                  letterSpacing: "1%",
                  color: "#181E25",
                }}
              >
                MSMD Document
                <img src={info} alt="more" className="ms-1" />
              </p>
              <Input
                size="large"
                placeholder="You can drag & drop here"
                className="mt-1"
                addonAfter="Upload"
              />
              <div className="submit-btn">
                Submit
                <img src={SubmitArr} alt="arr" className="ms-2" />
              </div>
            </div>
            <div className="go-back">
              <div>
                <img
                  src={RightArrow}
                  alt="arrow"
                  className="me-1"
                  style={{ width: "18px", height: "18px", cursor: "pointer" }}
                />
              </div>
              <div>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "24px",
                    letterSpacing: "1%",
                    color: "#000000",
                    cursor: "pointer",
                  }}
                >
                  Go Back
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default QuoteRequest;
