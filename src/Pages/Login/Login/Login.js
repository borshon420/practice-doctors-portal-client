import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import login from '../../../images/login.png';
import { useForm } from "react-hook-form";
import useFirebase from '../../../hooks/useFirebase';

const Login = () => {
    const {handleRegistration} = useFirebase();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const {email, password} = data;
        handleRegistration(email, password);
        console.log(data)
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
        <form onSubmit={handleSubmit(onSubmit)}>
      <input type="email" {...register("email")} placeholder="Your Email"/>
      <input type="password" {...register("password")} placeholder="Your Password"/>
      <input type="submit" />
    </form>
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{width: '100%'}} src={login} alt="" />
        </Grid>
      </Grid>
    </Box>
    );
};

export default Login;