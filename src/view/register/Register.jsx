import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Container, TextField, Button, Typography, Box ,Checkbox,FormControlLabel } from '@mui/material';

import LogoDescription from '../../component/logo-description/LogoDescription';
import DataUsageDialog from '../../component/dataUsageDialog/DataUsageDialog';
import register from '../../service/client/user/register';
import PageTitle from '../../component/pageTitle/PageTitle';

const Register = (event) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [passwordHash, setPasswordHash] = useState('');
    const [phone, setPhone] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [dataConsent, setDataConsent] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        if(!dataConsent) {
            alert('Debes aceptar el tratamiento de datos para continuar');
            return;
        }
        try {
            const response = register({ firstName, lastName, email, passwordHash, phone, birthDate });
            // console.log(response);
            if(response && response.status === 200){
                console.log(response.data);
                alert();
                window.location.href = '/login';
            }
        } catch(error){
            console.log('Error: ' + error);
        }
    };

    return (
        <>
            <Container component="main" maxWidth="xs">
                <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <LogoDescription/>
                    <PageTitle title="Registro"/>
                    <Box component="form" onSubmit={handleRegister} sx={{ mt: 1, mb:4 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="firstName"
                            label="Nombres"
                            name="firstName"
                            autoComplete="fname"
                            autoFocus
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="lastName"
                            label="Apellidos"
                            name="lastName"
                            autoComplete="lname"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Correo Electrónico"
                            name="email"
                            type='email'
                            autoComplete="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="passwordHash"
                            label="Contraseña"
                            type="password"
                            id="password"
                            autoComplete="new-password"
                            value={passwordHash}
                            onChange={(e) => setPasswordHash(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            id="birthDate"
                            label="Fecha de Nacimiento"
                            name="birthDate"
                            type="date"
                            InputLabelProps={{ shrink: true }}
                            value={birthDate}
                            onChange={(e) => setBirthDate(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="phone"
                            label="Teléfono"
                            name="phone"
                            autoComplete="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <FormControlLabel
                                control={<
                                    Checkbox
                                        checked={dataConsent}
                                        onChange={(e) => setDataConsent(e.target.checked)}
                                        name='dataConsent'
                                    />
                                }
                                label={                            
                                    <Typography variant="body2">
                                    Acepto el {" "}
                                    <Button onClick={handleOpenDialog} color="primary" sx={{textTransform: 'none'}}>
                                        tratamiento de datos.
                                    </Button>
                            </Typography>}
                            />
                        </Box>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            disabled={!dataConsent}
                        >
                            Registrarme
                        </Button>
                        <Typography variant="body2">
                            ¿Ya tienes una cuenta?{' '}
                            <RouterLink to="/login">Inicia sesión</RouterLink>
                        </Typography>
                    </Box>
                </Box>
            </Container>
           <DataUsageDialog open={openDialog} onClose={handleCloseDialog}/>
        </>
    );
};

export default Register;
