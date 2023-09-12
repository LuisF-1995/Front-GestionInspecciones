'use client';
import styles from './solicitudRegistro.module.scss';
import { FormEvent, useState } from 'react';
import { COUNTRIES, CountryType } from '@/constants/WorldCountries';
import { API_GESTION_INSPECCIONES_URL } from '@/constants/GlobalConstants';
import { sendPostRequest } from '@/services/GestionInspeccionesApiData';
// MATERIAL UI COMPONENTS
import ChecklistRtlOutlinedIcon from '@mui/icons-material/ChecklistRtlOutlined';
import { Container, Typography, TextField, Button, Autocomplete, Box } from '@mui/material';


const Solicitud = () => {
  const ADMIN_URL = `${API_GESTION_INSPECCIONES_URL}/admin`;
  const [adminData, setAdminData] = useState({
    numeroDocumento: "",
    email: "",
    nombres:"",
    apellidos:"",
    telefono:"",
    companyName: "",
    companyId: "",
    country: ""
  });
  const [value, setValue] = useState<CountryType | null>(null);

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

    const registerRequestEndpoint = `${ADMIN_URL}/register`;
    const registerData = {
      ...adminData,
      numeroDocumento: parseInt(adminData.numeroDocumento)
    }
    await sendPostRequest(registerRequestEndpoint, registerData)
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
        Solicitar registro de administrador
      </Typography>
      <form method='POST'
        className={styles.registerAdminForm}
        onSubmit={handleSubmit}
      >
        <TextField type='text' id="nombresAdminId" name='nombres' label="Nombres" variant="outlined"
          value={adminData.nombres}
          onChange={changeEvent}
          required
        />
        <TextField type='text' id="apellidosAdminId" name='apellidos' label="Apellidos" variant="outlined"
          value={adminData.apellidos}
          onChange={changeEvent}
          required
        />
        <TextField type='number' id="numeroDocumentoAdminId" name='numeroDocumento' label="Número de cédula" variant="outlined"
          value={adminData.numeroDocumento}
          onChange={changeEvent}
          required
        />
        <TextField type='email' id="emailAdminId" name='email' label="e-mail" variant="outlined"
          value={adminData.email}
          onChange={changeEvent}
          required
        />
        <TextField type='tel' id="telefonoAdminId" name='telefono' label="Teléfono" variant="outlined"
          value={adminData.telefono}
          onChange={changeEvent}
          required
        />
        <TextField type='text' id="companyNameAdminId" name='companyName' label="Nombre de empresa" variant="outlined"
          value={adminData.companyName}
          onChange={changeEvent}
          required
        />
        <TextField type='text' id="companyAdminId" name='companyId' label="NIT de la empresa" variant="outlined"
          value={adminData.companyId}
          onChange={changeEvent}
          required
        />
        <Autocomplete
          id="country-select-id"
          value={value}
          onChange={(event: any, newValue: CountryType | null) => {
            setValue(newValue);
          }}
          inputValue={adminData.country}
          onInputChange={(event, newInputValue) => {
            setAdminData({
              ...adminData, 
              country: newInputValue
            });
          }}
          sx={{ width: 300 }}
          options={COUNTRIES}
          autoHighlight
          getOptionLabel={(option) => option.label}
          renderOption={(props, option) => (
              <Box key={option.code} component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                  <img
                      loading="lazy"
                      width="20"
                      src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                      srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                      alt=""
                  />
                  {option.label} ({option.code}) + {option.phone}
              </Box>
          )}
          renderInput={(params) => (
            <TextField
              required
              {...params}
              label="Choose a country"
              inputProps={{
                  ...params.inputProps,
                  autoComplete: 'new-password', // disable autocomplete and autofill
              }}
              name='country'
            />
          )}
        />
        <Button type='submit' variant="outlined" endIcon={<ChecklistRtlOutlinedIcon />}>
          Enviar solicitud
        </Button>
      </form>
    </Container>
  );
}

export default Solicitud