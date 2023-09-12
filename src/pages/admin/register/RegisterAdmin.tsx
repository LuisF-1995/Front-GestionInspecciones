'use client';
import styles from './registerAdmin-styles.module.scss';
import { FormEvent, useState } from 'react';

import { sendPutRequest } from '@/services/GestionInspeccionesApiData';
import { API_GESTION_INSPECCIONES_URL } from '@/constants/GlobalConstants';
// MATERIAL UI COMPONENTS
import { Container, Typography, TextField, Button, Checkbox, FormControlLabel } from '@mui/material';
import ChecklistRtlOutlinedIcon from '@mui/icons-material/ChecklistRtlOutlined';


const RegisterAdmin = () => {
  const ADMIN_URL = `${API_GESTION_INSPECCIONES_URL}/admin`;
  const [adminData, setAdminData] = useState({
    numeroDocumento: "",
    email: "",
    password: "",
    privateKey:"",
    secret: ""
  });

  const changeEvent = (event: { target: { name: string; value: any; }; }) => {
    const item = event.target.name;
    const value = event.target.value;
    setAdminData({
        ...adminData, 
        [item]: value
    });
  }

  const handleSubmit = async (submit: FormEvent<HTMLFormElement>) => {
    submit.preventDefault();

    const registerEndpoint = `${ADMIN_URL}/update`;
    const registerData = {
      ...adminData,
      numeroDocumento: parseInt(adminData.numeroDocumento)
    }
    await sendPutRequest(registerEndpoint, registerData)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.error(error)
    })
  }

  return (
    <Container className={styles.registerAdminContainer}>
      <Typography className={styles.registerTitle} variant="h4" gutterBottom>
        Completar registro de administrador
      </Typography>
      <form 
        className={styles.registerAdminForm}
        onSubmit={handleSubmit}
      >
        <TextField type='number' id="numeroDocumentoId" name='numeroDocumento' label="Número de cédula" variant="outlined"
          value={adminData.numeroDocumento}
          onChange={changeEvent}
          required
        />
        <TextField type='email' id="emailId" name='email' label="e-mail" variant="outlined"
          value={adminData.email}
          onChange={changeEvent}
          required
        />
        <TextField type='password' id="passwordId" name='password' label="Contraseña" variant="outlined"
          value={adminData.password}
          onChange={changeEvent}
          required
        />
        <TextField type='password' id="privateKeyId" name='privateKey' label="Private key" variant="outlined"
          value={adminData.privateKey}
          onChange={changeEvent}
          required
        />
        <TextField type='password' id="secretId" name='secret' label="Secret" variant="outlined"
          value={adminData.secret}
          onChange={changeEvent}
          required
        />
        <Button type='submit' variant="outlined" endIcon={<ChecklistRtlOutlinedIcon />}>
          Finalizar registro
        </Button>
      </form>
    </Container>
  );
  

}

export default RegisterAdmin