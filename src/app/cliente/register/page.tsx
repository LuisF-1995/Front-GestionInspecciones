'use client';
import React, { useState } from 'react';
import styles from './registerStyles.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/navigation'

import { sendGetRequest, sendPostRequest } from '@/services/GestionInspeccionesApiData';
import { API_GESTION_INSPECCIONES_URL } from '@/constants/GlobalConstants';
import { Button, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
// MATERIAL UI
import { Visibility, VisibilityOff } from '@mui/icons-material';
import LockPersonOutlinedIcon from '@mui/icons-material/LockPersonOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';
import Swal from 'sweetalert2';


const ClienteRegister = () => {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false);
  const [registerData, setRegisterData] = useState({
    nombre:"",
    telefono: "",
    email:"",
    password:""
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const changeEvent = (event: { target: { name: string; value: any; }; }) => {
    const item = event.target.name;
    const value = event.target.value;
    setRegisterData({
        ...registerData, 
        [item]: value
    });
  }

  const handleSubmit = async(submitEvent: React.FormEvent<HTMLFormElement>) => {
    submitEvent.preventDefault();
    const registerClientEndpoint = `${API_GESTION_INSPECCIONES_URL}/clientes/register`;
    const registerClient = await sendPostRequest(registerClientEndpoint, registerData);

    if(registerClient.authenticationSuccess) {
      Swal.fire({
        icon: 'success',
        title: 'Registro exitoso',
        text: 'Registro exitoso, iniciar sesión',
      })
      .then(() => {
        router.push("../cliente")
      })
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'No se puede registrar',
        text: 'El cliente ya existe, favor iniciar sesión',
      })
      .then(() => {
        router.push("../cliente")
      })
    }
  }


  return (
    <main className={styles.loginContainer}>
      <form className={styles.formContainer} onSubmit={(submit) => {handleSubmit(submit)}}>
        <h2>Registrarse</h2>
        <FormControl fullWidth sx={{ minWidth: 150, maxWidth: 500 }} variant="outlined">
          <InputLabel htmlFor="nombreId">Nombre cliente</InputLabel>
          <OutlinedInput
            required
            id="nombreId"
            type='text'
            label="Nombre cliente"
            name='nombre'
            value={registerData.nombre}
            onChange={changeEvent}
            startAdornment={
              <InputAdornment position="start">
                <IconButton
                  aria-label="nombre-icon"
                  edge={`start`}
                >
                  <AccountCircleOutlinedIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl fullWidth sx={{ minWidth: 150, maxWidth: 500 }} variant="outlined">
          <InputLabel htmlFor="telefonoId">Telefono</InputLabel>
          <OutlinedInput
            id="telefonoId"
            type="tel"
            label="Telefono"
            name='telefono'
            value={registerData.telefono}
            onChange={changeEvent}
            startAdornment={
              <InputAdornment position="start">
                <IconButton
                  aria-label="telefono-icon"
                  edge={`start`}
                >
                  <AddIcCallOutlinedIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl fullWidth sx={{ minWidth: 150, maxWidth: 500 }} variant="outlined">
          <InputLabel htmlFor="emailId">Correo electrónico</InputLabel>
          <OutlinedInput
            required
            id="emailId"
            type='email'
            label="Correo Electrónico"
            name='email'
            value={registerData.email}
            onChange={changeEvent}
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
            value={registerData.password}
            onChange={changeEvent}
          />
        </FormControl>
        <section className={styles.buttonsContainer}>
          <div className={styles.options}>
            <Link href={'../cliente'}>Iniciar sesión</Link>
          </div>
          <Button style={{height:50}} type='submit' variant="outlined" color="primary">
            Registrar
          </Button>
        </section>
      </form>
    </main>
  )
}

export default ClienteRegister