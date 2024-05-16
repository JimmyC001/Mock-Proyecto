import React, { useState, useEffect } from "react";
import { CssBaseline, Container, Box, Toolbar, CircularProgress } from "@mui/material";
import Navbar from "../../component/navbar/Navbar";
import CardDriver from "../../component/cardDriver/CardDriver";
import { getDriverInfo, initDriver } from "../../assets/driver";  // Importa correctamente
import PageTitle from "../../component/pageTitle/PageTitle";

const DriverFound = () => {
    const [driverInfo, setDriverInfo] = useState({});
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        initDriver(); 
        console.log("Verificando datos después de inicializar:", localStorage.getItem('driver'));

        const fetchDriverInfo = () => {
            const driver = getDriverInfo();
            console.log("Driver retrieved:", driver);
            if (driver) {
                setDriverInfo(driver);
            } else {
                console.log('No se encontró la información del conductor');
            }
            setIsLoading(false);
        };
        
        fetchDriverInfo();
    }, []);

    const handleWhatsAppClick = () => {
        const fullPhoneNumber = `57${driverInfo.phone}`;
        const whatsappUrl = `https://wa.me/${fullPhoneNumber}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <>
            <CssBaseline />
            <Navbar />
            <Toolbar />
            <Container>
                <Box sx={{ mt: 4, mb: 4, display: 'flex', flexDirection: "column", justifyContent: 'center' }}>
                    <PageTitle title="Conductor Encontrado" />
                    {isLoading ? (
                        <CircularProgress />
                    ) : (
                        <CardDriver driverInfo={driverInfo} onWhatsAppClick={handleWhatsAppClick} />
                    )}
                </Box>
            </Container>
        </>
    );
};

export default DriverFound;
