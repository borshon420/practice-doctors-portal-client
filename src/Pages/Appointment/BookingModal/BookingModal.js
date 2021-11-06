import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import useAuth from "../../../hooks/useAuth";

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

const BookingModal = ({ handleBookingClose, openBooking, booking, date }) => {
  const { name, time } = booking;
  const {user} = useAuth();
  const initialInfo = {patientName: user.displayName, email: user.email, phone:''}
  const [bookingInfo, setBookingInfo] = useState(initialInfo);

  const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = {...bookingInfo};
    newInfo[field] = value;
    setBookingInfo(newInfo)
  }

  const handleBookingSubmit = (e) => {
    // Collect date
    const appointment = {
      ...bookingInfo,
      time,
      serviceName: name,
      date: date.toLocaleDateString()
    }

    // Send to the server
    fetch('http://localhost:5000/appointments', {
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(appointment)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })

    handleBookingClose();
    e.preventDefault();
  };

  return (
    <>
      <Modal
        open={openBooking}
        onClose={handleBookingClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <form onSubmit={handleBookingSubmit}>
            <TextField
              disabled  
              sx={{ width: "90%", m: 1 }}
              id="outlined-size-small"
              defaultValue={time}
              size="small"
            />
            <TextField
              sx={{ width: "90%", m: 1 }}
              id="outlined-size-small"
              name="patientName"
              defaultValue={user.displayName}
              onBlur={handleOnBlur}
              size="small"
            />
            <TextField
              sx={{ width: "90%", m: 1 }}
              id="outlined-size-small"
              defaultValue={user.email}
              name="email"
              onBlur={handleOnBlur}
              size="small"
            />
            <TextField
              sx={{ width: "90%", m: 1 }}
              id="outlined-size-small"
              defaultValue="Your phone"
              name="phone"
              onBlur={handleOnBlur}
              size="small"
            />
            <TextField
              sx={{ width: "90%", m: 1 }}
              id="outlined-size-small"
              defaultValue={date.toDateString()}
              size="small"
            />
            <Button sx={{m:1}} type="Submit" variant="contained">Submit</Button>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default BookingModal;
