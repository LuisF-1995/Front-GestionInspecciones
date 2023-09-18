'use client';
import React, { useState, useEffect } from 'react';
import styles from './loginStyle.module.scss';
import { Button, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Select, MenuItem, SelectChangeEvent, FormControlLabel } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import LockPersonOutlinedIcon from '@mui/icons-material/LockPersonOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { IOSSwitch } from '@/components/CustomSwitch';
import Link from 'next/link';
import { sendGetRequest, sendPostRequest } from '@/services/GestionInspeccionesApiData';
import { API_GESTION_INSPECCIONES_URL } from '@/constants/GlobalConstants';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


const CompanyLogin = () => {
  const [roles, setRoles] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rolSelected, setRolSelected] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword, setShowPassword] = React.useState(false);


  useEffect(() => {
    getRoles();
  }, [])
  
  const getRoles = async() => {
    const rolesUrl = `${API_GESTION_INSPECCIONES_URL}/user-roles`;
    setRoles(await sendGetRequest(rolesUrl));
  }

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  
  const handleRol = (event:SelectChangeEvent<string>) => {
    setRolSelected(event.target.value);
  };
  const handleRememberMe = () => setRememberMe(!rememberMe);

  const handleLogin = async (submitEvent: React.FormEvent<HTMLFormElement>) => {
    submitEvent.preventDefault();
    if (email === '' || password === '') {
      setEmailError(email === '');
      setPasswordError(password === '');
      return;
    }
    else{
      let endpointByRol = "";
      switch (rolSelected) {
        case "INSPECTOR":
          endpointByRol = "/inspectores/login";
          break;
        case "ASESOR_COMERCIAL":
          endpointByRol = "/asesores-comerciales/login";
          break;
        case "DIRECTOR_REGIONAL":
          endpointByRol = "/directores-regional/login";
          break;
        case "DIRECTOR_TECNICO":
          endpointByRol = "/directores-tecnicos/login";
          break;
        case "PROGRAMADOR_AGENDA":
          endpointByRol = "/programador-agenda/login";
          break;
        default:
          break;
      }
      const enpoint = `${API_GESTION_INSPECCIONES_URL}${endpointByRol}`;
      const bodyData = {
        email: email,
        password: password
      };
      const postRequest = await sendPostRequest(enpoint, bodyData);
      console.log(postRequest);
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            error={passwordError}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <FormControl fullWidth sx={{ minWidth: 150, maxWidth: 500 }}>
          <InputLabel id="rolSelector">Rol</InputLabel>
          <Select
            required
            labelId="rolSelector"
            id="rolSelectorId"
            label="Rol"
            value={rolSelected}
            onChange={handleRol}
          >
            <MenuItem disabled value=""><em>Placeholder</em></MenuItem>
            {roles.length > 0 && 
              roles.map((rol, index) => (
                <MenuItem key={index} value={rol}>{rol}</MenuItem>
              ))
            }
          </Select>
        </FormControl>
        <section className={styles.buttonsContainer}>
          <div className={styles.options}>
            {/* <FormControlLabel
              control={<IOSSwitch sx={{ m: 1 }} />}
              label="Remember me"
              labelPlacement='start'
              value={rememberMe}
              onChange={handleRememberMe}
            /> */}
            <Link href={'./forgot-password'} id={styles.forgotPassword}>Forgot password?</Link>
          </div>
          <Button style={{height:50}} type='submit' variant="outlined" color="primary">
            Iniciar Sesión
          </Button>
        </section>
      </form>
    </main>
  );
}

export default CompanyLogin