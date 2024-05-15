import React, { useEffect, useState } from "react";
import { CssBaseline, Container, Box, Typography, CircularProgress, Toolbar } from "@mui/material";
import Navbar from "../../component/navbar/Navbar";
import { useNavigate } from "react-router-dom";
import getDriverInfo from "../../service/service/driver/getDriverInfo";

const SearchingDriver = () => {
    const navigate = useNavigate();
    const [searching, setSearching] = useState(true);

    useEffect(() => {
        const fetchDriver = async () => {
            try {
                const driver = await getDriverInfo();
                if (driver) {
                    // Si se encuentra un conductor, navegar a la pantalla DriverFound
                    navigate('/driverfound', { replace: true, state: { driverInfo: driver } });
                } else {
                    // Manejar el caso en que no se encuentre un conductor
                    setSearching(false);
                    // Aquí podrías redirigir al usuario de vuelta o mostrar un mensaje
                }
            } catch (error) {
                console.error('Error buscando al conductor:', error);
                setSearching(true);// poner en false
                // Manejar errores, por ejemplo, mostrando un mensaje al usuario
            }
        };

        fetchDriver();
    }, [navigate]);

    return (
        <>
            <CssBaseline />
            <Navbar />
            <Toolbar />
            <Container>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
                    {searching ? (
                        <>
                            <Typography variant="h5" gutterBottom sx={{ fontSize: '2rem' }}>
                                Buscando tu conductor...
                            </Typography>
                            <CircularProgress size={100}/>
                        </>
                    ) : (
                        <Typography variant="h6" color="error">
                            No se pudo encontrar un conductor. Por favor, intenta nuevamente.
                        </Typography>
                    )}
                </Box>
            </Container>
        </>
    );
};

export default SearchingDriver;
