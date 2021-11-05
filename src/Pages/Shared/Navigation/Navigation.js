import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Doctors Portal
          </Typography>
          <Link style={{textDecoration: 'none', color: 'white'}} to="/appointment"><Button color="inherit">Appointment</Button></Link>
          <Link style={{textDecoration: 'none', color: 'white'}} to="/login"><Button color="inherit">Login</Button></Link>
          
        </Toolbar>
      </AppBar>
    </Box>
    );
};

export default Navigation;