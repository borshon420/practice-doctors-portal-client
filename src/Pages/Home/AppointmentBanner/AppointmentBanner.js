import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import doctor from "../../../images/doctor.png";
import bg from "../../../images/appointment-bg.png";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

const appointmentBanner = {
  background: `url(${bg})`,
  marginTop: 175,
  backgroundPosition: "center",
  backgroundColor: "rgba(73, 68, 91, 0.9)",
  backgroundBlendMode: "darken, luminosity",
};

const AppointmentBanner = () => {
  return (
    <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            style={{ height: "400px", marginTop: "-110px" }}
            src={doctor}
            alt=""
          />
        </Grid>
        <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center',justifyContent: 'flex-start', textAlign: 'left' }}>
          <Box>
            <Typography variant="h5" sx={{mb: 5}} style={{color: '#51F4FC'}} gutterBottom component="div">
              APPOINTMENT
            </Typography>
            <Typography variant="h4" style={{color: 'white'}} gutterBottom component="div">
              Make an appointment Today
            </Typography>
            <Typography sx={{my: 5}} style={{color: 'white'}} variant="body2" gutterBottom>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Veritatis nulla facilis nisi rem, assumenda esse optio repellendus
              beatae qui dignissimos?
            </Typography>
            <Button style={{backgroundColor: '#51F4FC'}} variant="contained">Learn More</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppointmentBanner;
