import {CssBaseline, Container, Box, TextField,Toolbar, Button,Grid} from '@mui/material';
import React from "react";
import Navbar from "../../component/navbar/Navbar";
import PageTitle from "../../component/pageTitle/PageTitle"; 
import { useState } from "react";
import update  from "../../service/client/update";

const Update = () => {
    const [firstName, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [city, setCity] = useState('');
    const [error, setError] = useState({
      error: false,
      errorMessage: ''
    });
    const validateEmail = (email) => {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    };
    

    const handleUpdate = async (e) => {
       e.preventDefault();// Previene la recarga de la página
      try {
          
          setTimeout(() => {
              alert("Datos actualizados correctamente");
              window.location.href = '/'; // Redirige a la página de inicio
          }, 500); // Retraso de 500 ms
      } catch (error) {
          console.log('Error: ' + error);
      }
    };
    return(
      <>
      <CssBaseline />
      <Navbar />
      <Toolbar />
      <Container>
        <PageTitle title="Actualizar Perfil" />
          <form onSubmit={handleUpdate} >
            <Grid container spacing={1} sx={{mt:1, mb:1}}>
              <Grid item xs={12}>
                <TextField
                  id="firstName"
                  name='firstName'
                  label="Nombre"
                  type='text'
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  value={firstName}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="lastName"
                  name='lastName'
                  label="Apellido"
                  type='text'
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="email"
                  name='email'
                  label="Correo"
                  type='email'
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  error={error.error}
                  helperText={error.errorMessage}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="phone"
                  name='phone'
                  label="Telefono"
                  type='text'
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="passwordHash"
                  name='passwordHash'
                  label="Contraseña"
                  type='password'
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="Confirmar contraseña"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="address"
                  name="address"
                  label="Direccion"
                  type='text'
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Grid>
              <Grid item xs={7} sm={7} md={6} lg={6} xl={6} >
                <TextField
                  id="city"
                  name="city"
                  label="Ciudad"
                  type='text'
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </Grid>
              <Grid item xs={5} sm={5} md={4} lg={4} xl={4}>
                <TextField
                  id="birthDate"
                  name="birthDate"
                  label="fecha de nacimiento"
                  type='date'
                  InputLabelProps={{ shrink: true }}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                
              <Box sx={{mt:2,mb:3}}>
                <Button
                  variant="contained"
                  color="primary"
                  margin="normal"
                  onClick={handleUpdate}
                >
                  Actualizar
                </Button>
              </Box>
              </Grid>
            </Grid>
          </form>
      </Container>
      </>
    );
}

export default Update;