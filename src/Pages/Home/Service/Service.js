import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Service = ({service}) => {
    const {name, img, description} = service;
    return (
        <Box>
            <Card sx={{ minWidth: 275,border: 0, boxShadow: 0 }}>
                <img style={{height: '80px'}} src={img} alt="" />
        <CardContent>
          <Typography sx={{mb: 2}} variant="h5" component="div">
            {name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
        </Box>
    );
};

export default Service;