import React, { useState, useEffect } from "react";
import { CssBaseline, Container, Box, Toolbar, CircularProgress } from "@mui/material";
import Navbar from "../../component/navbar/Navbar";
import CardDriver from "../../component/cardDriver/CardDriver";
import getDriverInfo from "../../service/service/driver/getDriverInfo";
import PageTitle from "../../component/pageTitle/PageTitle";

const DriverFound = () => {
    const [driverInfo, setDriverInfo] = useState({});
    const [isLoading, setIsLoading] = useState(true); // Nuevo estado para el indicador de carga

    useEffect(() => {   
        const fetchDriverInfo = async () => {
            try {
                const driver = await getDriverInfo();
                if (driver){
                    setDriverInfo(driver);
                } else {
                    console.log('No se encontró la información del conductor');
                }
            } catch (error) {
                console.log('Error al obtener la información del conductor: \n' + error.message);
            } finally {
                setIsLoading(false); // Finaliza la carga independientemente del resultado
            }
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
                        <CircularProgress /> // Muestra un indicador de carga mientras los datos están siendo cargados
                    ) : (
                        <CardDriver driverInfo={driverInfo} onWhatsAppClick={handleWhatsAppClick} />
                    )}
                </Box>
            </Container>
        </>
    );
};

export default DriverFound;
