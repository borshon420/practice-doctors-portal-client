import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import chair from "../../../images/chair.png";
import { Container } from "@mui/material";
import Calender from "../../Shared/Calender/Calender";


const AppointmentHeader = ({date, setDate}) => {
    
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Calender date={date} setDate={setDate}></Calender>
          </Grid>
          <Grid item xs={12} md={6}>
            <img style={{ width: 500 }} src={chair} alt="" />
          </Grid>
        </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default AppointmentHeader;
