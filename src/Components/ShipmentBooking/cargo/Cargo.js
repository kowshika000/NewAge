import React, { useState, useRef } from "react";
import { Typography } from "@mui/material";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Modal from "@mui/material/Modal";
import '../ShipmentCard.css';
import CargoDetails from "./CargoDetails";
import { ReactComponent as Ship} from '../../../assets/cargo.8d7c215b.svg'
import { Dropdown } from "primereact/dropdown";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Cargo = ({setCargoOptionsVisible, cargoOptionsVisible}) => {
  const [cargo, setCargo] = useState("");
  // const [modalOpen, setModalOpen] = useState(false);

  const cargoRef = useRef(null);

  const handleCargoChange = (event) => {
    const { value } = event.target;
    setCargo(value);
  };

  // const handleCargoFocus = () => {
  //     setModalOpen(true);
  // };

  // const handleCloseModal = () => {
  //   setModalOpen(false);
  // };

  const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

  return (
    <>
      <div className="column " style={{ display: "flex", minWidth:'33%',position: "relative" }}>
      <div className="align-content-center">
              <Ship style={{ width:"20px", height:'20px'}} className="mx-2" />
            </div>
        <div className="w-100">
          <Typography className="fw-bold"  style={{fontSize:'14px', fontWeight:'700', lineHeight:'20px'}}>Cargo</Typography>
          <input
            type="text"
            style={{ border: "none", outline: "none", width: "90%", background: 'transparent' }}
            className="input-field "
            placeholder="Enter your Cargo details"
            // ref={cargoRef}
            // onChange={handleCargoChange}
            // onFocus={handleCargoFocus}
            // onBlur={()=>setCargoOptionsVisible(false)}
            onClick={()=>setCargoOptionsVisible((prev=>!prev))}
            value={cargo}
            readOnly
          />
          {/* <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                editable placeholder="Enter your Cargo details" className="w-full md:w-14rem" /> */}
          {
            cargoOptionsVisible && <div className="outer-cargo-port">
              <CargoDetails />
            </div>
          }
        </div>
      </div>

      {/* <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{top:'50%', left:'50%'}}
      >
        <CargoDetails onClose={handleCloseModal} />
      </Modal> */}
    </>
  );
};

export default Cargo;
