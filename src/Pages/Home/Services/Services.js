import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import whitening from "../../../images/whitening.png";
import Service from "../Service/Service";

const services = [
  {
    name: "Fluoride Treatment",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur nulla maxime doloribus consequatur ratione omnis odit, voluptate voluptatem officiis aperiam.",
    img: fluoride,
  },
  {
    name: "Cavity Filling",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur nulla maxime doloribus consequatur ratione omnis odit, voluptate voluptatem officiis aperiam.",
    img: cavity,
  },
  {
    name: "Teath whitening",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur nulla maxime doloribus consequatur ratione omnis odit, voluptate voluptatem officiis aperiam.",
    img: whitening,
  },
];

const Services = () => {
  return (
    <Box sx={{ flexGrow: 1  }}>
      <Container>
          <Typography sx={{my: 5, color: 'info.main'}} variant="h6">
              OUR SERVICES
          </Typography>
          <Typography sx={{my: 5, }} variant="h4">
              Services We Provice
          </Typography>
        <Grid
          
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map((service, index) => (
            <Grid item xs={12} sm={4} md={4} key={index}>
              <Service key={service.name} service={service}></Service>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
