import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import login from "../../../images/login.png";
import { Alert, Button, CircularProgress, TextField, Typography } from "@mui/material";
import { NavLink, useLocation, useHistory} from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const {loginUser, user, setError, isLoading, signInWithGoogle} = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData}
        newLoginData[field] = value;
        console.log(newLoginData)
        setLoginData(newLoginData)
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} sx={{mt: 8}}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleLoginSubmit}>
          <TextField 
          sx={{width: '75%', m: 1}}
          id="standard-basic" 
          label="Your Email"
          name="email"
          onChange={handleOnChange}
          variant="standard" />
          <TextField 
          sx={{width: '75%', m: 1}}
          id="standard-basic" 
          label="Your Password"
          type="password"
          name="password"
          onChange={handleOnChange}
          variant="standard" />
          <Button style={{ backgroundColor: "#37B5BB" }} sx={{width: '75%', m:1}} type="Submit" variant="contained">Login</Button>
          <NavLink style={{textDecoration: 'none'}} to="/register">
            <Button variant="text">New User? Please Register</Button>
            </NavLink>
            <p>--------------------</p>
            <Button onClick={handleGoogleSignIn} style={{ backgroundColor: "#37B5BB" }} type="Submit" variant="contained">Google Sign In</Button>
          </form>
          {isLoading && <CircularProgress />}
          {user?.email && <Alert severity="success">User Login Successfully!</Alert>}
          {setError && <Alert severity="error">{setError}</Alert>}
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={login} alt="" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
