import React from "react";
import Paper from "@mui/material/Paper";
import { Button, Grid, Typography } from "@mui/material";
import BookingModal from "../BookingModal/BookingModal";

const Booking = ({booking, date}) => {
    const {name, time, space} = booking;
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
  return (
      <>
    <Grid item xs={8} sm={6} md={4}>
      <Paper elevation={3} sx={{py: 5}}>
      <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h5" gutterBottom component="div">
          {name}
        </Typography>
        <Typography variant="h6" gutterBottom component="div">
          {time}
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
        {space} SPACES AVAILABLE
      </Typography>
      <Button onClick={handleBookingOpen} variant="contained">Book Appointment</Button>
      </Paper>
    </Grid>
    <BookingModal
    date={date}
    handleBookingClose={handleBookingClose}
    openBooking={openBooking}
    booking={booking}
    >
    </BookingModal>
    </>
  );
};

export default Booking;
