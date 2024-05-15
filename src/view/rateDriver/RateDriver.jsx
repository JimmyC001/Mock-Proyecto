import React, { useState ,useEffect} from "react";
import { CssBaseline, Container, Box, Button, Toolbar } from "@mui/material";
import Navbar from "../../component/navbar/Navbar";
import Rating from '@mui/material/Rating';
import CardDriver from "../../component/cardDriver/CardDriver"; 
import PageTitle from "../../component/pageTitle/PageTitle";
import getDriverInfo from "../../service/service/driver/getDriverInfo";
import rateDriver from "../../service/service/driver/rateDriver";

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
        const fetchDriverInfo = async () => {
            try {
                const data = await getDriverInfo(); // Asumiendo que esta función devuelve la información del conductor
                if (data) setDriverInfo(data);
            } catch (error) {
                console.log('Error al obtener la información del conductor:', error.message);
            }
        };
        fetchDriverInfo();
    }, []);

    const handleRatingChange = (event, newValue) => {
        setRating(newValue);
    };

    const handleSubmit = async () => {
        // Envío de la calificación al backend
        const response = await rateDriver({ driverId: driverInfo.id, rating }); // Asumiendo que `id` es parte de la información del conductor
        if (response.success) {
            console.log("Calificación enviada con éxito.");
        } else {
            console.error("Error al enviar la calificación:", response.error);
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
