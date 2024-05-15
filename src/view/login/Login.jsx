import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import PageTitle from '../../component/pageTitle/PageTitle';
import LogoDescription from '../../component/logo-description/LogoDescription';
import Footer from '../../component/footer/Footer';
import login from '../../service/client/user/login';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const id = localStorage.getItem('token');
        // console.log(id);
        if(id) window.location.href = '/';
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const data = await login({ email, password });
            console.log(data);
            if(data.id){
                console.log(data.id);
                localStorage.setItem('token', data.id);
                window.location.href = '/';
            }
        } catch (error) {
            //window.location.href = '/login';
        }
    };

    return(
        <>
            <Container component="main" maxWidth="xs">
                <Box sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <LogoDescription/>
                    <PageTitle title="Iniciar Sesión"/>
                    <Box sx={{ mt: 1 }}>
                        <form onSubmit={handleLogin}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Correo Electrónico"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Contraseña"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Login
                            </Button>
                            <Typography variant="body2">
                                No tienes una cuenta?{' '}
                                <Link to={'/register'}>Regístrate</Link>
                            </Typography>
                        </form>
                    </Box>
                </Box>
            </Container>
            <Footer/>
        </>
    );
};

export default Login;
