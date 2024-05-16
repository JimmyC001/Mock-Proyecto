import React, { useState ,useEffect} from "react";
import { CssBaseline, Container, Box, Button, Toolbar } from "@mui/material";
import Navbar from "../../component/navbar/Navbar";
import Rating from '@mui/material/Rating';
import CardDriver from "../../component/cardDriver/CardDriver"; 
import PageTitle from "../../component/pageTitle/PageTitle";
//import getDriverInfo from "../../service/service/driver/getDriverInfo";
import rateDriver from "../../service/service/driver/rateDriver";
import { getDriverInfo, initDriver } from "../../assets/driver";

const RateDriver = () => {
    const [driverInfo, setDriverInfo] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        rating: 0,
        imageUrl: '',
    });
    const [rating, setRating] = useState(0);

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

        };
        
        fetchDriverInfo();
    }, []);

    const handleRatingChange = (event, newValue) => {
        setRating(newValue);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();// Previene la recarga de la página
        try {
            
            setTimeout(() => {
                alert("Calificación enviada correctamente");
                window.location.href = '/'; // Redirige a la página de inicio
            }, 500); // Retraso de 500 ms
        } catch (error) {
            console.log('Error: ' + error);
        }
    };

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
                <Box sx={{ mt: 4, mb: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <CardDriver driverInfo={driverInfo} onWhatsAppClick={handleWhatsAppClick} />
                    <PageTitle title="Califica Conductor" />
                    <Rating
                        name="controlled-rating"
                        value={rating}
                        onChange={handleRatingChange}
                        precision={0.1}
                    />
                    <Button variant="contained" sx={{ mt: 2 }} onClick={handleSubmit}>
                        Enviar Calificación
                    </Button>
                </Box>
            </Container>
        </>
    );
};

export default RateDriver;
