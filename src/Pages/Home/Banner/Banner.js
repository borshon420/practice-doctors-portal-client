import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import chair from "../../../images/chair.png";
import bg from "../../../images/bg.png";
import { Container, Typography } from "@mui/material";

const bannerBg = {
    background: `url(${bg})`,
    height: 450
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}

const Banner = () => {
  return (
    <Box style={bannerBg} sx={{ flexGrow: 1 }}>
      <Container>
        <Grid container spacing={2} style={{ ...verticalCenter , textAlign: 'left' }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3">
              Your New Smile <br />
              Starts Here  
            </Typography>
            <Typography variant="h6" sx={{fontWeight: 300, fontSize: 14, color: 'gray'}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor recusandae mollitia tempora repudiandae deleniti rerum aliquam optio odit perferendis officia?
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <img style={{width: '500px'}} src={chair} alt="" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
