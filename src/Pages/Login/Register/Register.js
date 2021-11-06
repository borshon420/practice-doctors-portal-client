import React, { useState } from 'react';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import login from "../../../images/login.png";
import { Alert, Button, CircularProgress, TextField, Typography } from "@mui/material";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const {registerUser, setError, user, isLoading} = useAuth();

    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData}
        newLoginData[field] = value;
        console.log(newLoginData)
        setLoginData(newLoginData)
    }

    const handleLoginSubmit = e => {
        if(loginData.password !== loginData.password2){
            alert('Your password did not match')
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)
        e.preventDefault();
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} sx={{mt: 8}}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Register
          </Typography>
          <form onSubmit={handleLoginSubmit}>
          <TextField 
          sx={{width: '75%', m: 1}}
          id="standard-basic" 
          label="Your Name"
          name="name"
          onBlur={handleOnBlur}
          variant="standard" />
          <TextField 
          sx={{width: '75%', m: 1}}
          id="standard-basic" 
          label="Your Email"
          type="email"
          name="email"
          onBlur={handleOnBlur}
          variant="standard" />
          <TextField 
          sx={{width: '75%', m: 1}}
          id="standard-basic" 
          label="Your Password"
          type="password"
          name="password"
          onBlur={handleOnBlur}
          variant="standard" />
          <TextField 
          sx={{width: '75%', m: 1}}
          id="standard-basic" 
          label="Re-type Your Password"
          type="password"
          name="password2"
          onBlur={handleOnBlur}
          variant="standard" />
          <Button style={{ backgroundColor: "#37B5BB" }} sx={{width: '75%', m:1}} type="Submit" variant="contained">Register</Button>
          <NavLink style={{textDecoration: 'none'}} to="/login">
            <Button variant="text">Already Registered? Please Login</Button>
            </NavLink>
          </form>
          {isLoading && <CircularProgress />}
          {user?.email && <Alert severity="success">User Created Successfully!</Alert>}
          {setError && <Alert severity="error">{setError}</Alert>}
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={login} alt="" />
        </Grid>
      </Grid>
    </Box>
    );
};

export default Register;