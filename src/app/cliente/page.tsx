'use client';
import React, { useState } from 'react';
import styles from './loginStyle.module.scss';
import { Button, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import LockPersonOutlinedIcon from '@mui/icons-material/LockPersonOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Link from 'next/link';
import { sendGetRequest, sendPostRequest } from '@/services/GestionInspeccionesApiData';
import { API_GESTION_INSPECCIONES_URL } from '@/constants/GlobalConstants';
import Swal from 'sweetalert2';


const ClienteLogin = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const changeEvent = (event: { target: { name: string; value: any; }; }) => {
    const item = event.target.name;
    const value = event.target.value;
    setLoginData({
        ...loginData, 
        [item]: value
    });
  }

  const handleLogin = async (submitEvent: React.FormEvent<HTMLFormElement>) => {
    submitEvent.preventDefault();
    const loginClientEndpoint = `${API_GESTION_INSPECCIONES_URL}/clientes/login`;
    const loginClientResponse = await sendPostRequest(loginClientEndpoint, loginData);
    
    if(loginClientResponse.response && loginClientResponse.response.status && loginClientResponse.response.status !== 200) {
      Swal.fire({
        icon: 'error',
        title: 'Credenciales erróneas',
        text: 'Favor validar la información suministrada',
      })
    }
    else{
      Swal.fire({
        icon: 'success',
        title: 'Login successful',
        text: 'Redirigiendo a la pagina',
      })
    }
  };

  return (
    <main className={styles.loginContainer}>
      <form className={styles.formContainer} onSubmit={(submit) => {handleLogin(submit)}}>
        <h2>Iniciar Sesión</h2>
        <FormControl fullWidth sx={{ minWidth: 150, maxWidth: 500 }} variant="outlined">
          <InputLabel htmlFor="emailId">Correo electrónico</InputLabel>
          <OutlinedInput
            required
            id="emailId"
            type='email'
            label="Correo Electrónico"
            name='email'
            value={loginData.email}
            onChange={changeEvent}
            error={emailError}
            startAdornment={
              <InputAdornment position="start">
                <IconButton
                  aria-label="email-icon"
                  edge={`start`}
                >
                  <EmailOutlinedIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl fullWidth sx={{ minWidth: 150, maxWidth: 500 }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            required
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            startAdornment={
              <InputAdornment position="start">
                <IconButton
                  aria-label="pass-icon"
                  edge={`start`}
                >
                  <LockPersonOutlinedIcon />
                </IconButton>
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            name='password'
            value={loginData.password}
            error={passwordError}
            onChange={changeEvent}
          />
        </FormControl>
        <section className={styles.buttonsContainer}>
          <div className={styles.options}>
            <Link href={'./cliente/register'}>Registrarse</Link>
            <Link href={'./forgot-password'} id={styles.forgotPassword}>Forgot password?</Link>
          </div>
          <Button style={{height:50}} type='submit' variant="outlined" color="primary">
            Iniciar Sesión
          </Button>
        </section>
      </form>
    </main>
  )
}

export default ClienteLogin