import React, { useEffect, useState } from "react";
import { CssBaseline, Container, Box, List, ListItem, ListItemText, Divider, Toolbar, Grid, Card, CardMedia } from "@mui/material";
import Navbar from "../../component/navbar/Navbar";
import PageTitle from "../../component/pageTitle/PageTitle";
import SubTitle from "../../component/subTitle/Subtitle";
import getServiceDetails from "../../service/service/serviceDetails";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
    const { serviceId } = useParams(); // Usando el ID del servicio desde la URL
    const [serviceInfo, setServiceInfo] = useState({});

    useEffect(() => {
        const fetchServiceDetails = async () => {
            const data = await getServiceDetails(Number(serviceId));
            if (data) {
                console.log(data);
                setServiceInfo(data);
            } else {
                console.log('No se pudo cargar la información del servicio.');
            }
        };
        fetchServiceDetails();
    }, [serviceId]);

    return (
        <>
            <CssBaseline />
            <Navbar />
            <Toolbar />
            <Container>
                <Box sx={{ mt: 4, mb: 4 }}>
                    <PageTitle title="Detalles del Servicio" />
                    <List component="nav" aria-label="detalles del servicio">
                        {serviceInfo.formattedItems && serviceInfo.formattedItems.length > 0 ? (
                            serviceInfo.formattedItems.map((item, index) => (
                                <React.Fragment key={index}>
                                    <SubTitle>{`Objeto ${index + 1}: ${item.name}`}</SubTitle>
                                    <ListItem>
                                        <ListItemText
                                            primary="Detalles"
                                            secondary={item.details}
                                        />
                                    </ListItem>
                                    <Divider component="li" />
                                    <ListItem>
                                        <ListItemText primary="Largo" secondary={item.length} />
                                    </ListItem>
                                    <Divider component="li" />
                                    <ListItem>
                                        <ListItemText primary="Ancho" secondary={item.width} />
                                    </ListItem>
                                    <Divider component="li" />
                                    <ListItem>
                                        <ListItemText primary="Alto" secondary={item.height} />
                                    </ListItem>
                                    <Divider component="li" />
                                    <Grid container spacing={2}>
                                        {item.images && item.images.map((imagen, idx) => (
                                            <Grid item xs={12} sm={6} md={4} key={idx}>
                                                <Card>
                                                    <CardMedia
                                                        component="img"
                                                        height="140"
                                                        image={imagen}
                                                        alt={`Imagen del objeto ${index + 1} - ${idx + 1}`}
                                                    />
                                                </Card>
                                            </Grid>
                                        ))}
                                    </Grid>
                                    <Divider component="li" />
                                </React.Fragment>
                            ))
                        ) : null}
                        <ListItem>
                            <ListItemText
                                primary="Fecha de Solicitud"
                                secondary={serviceInfo.pickUpDate}
                            />
                        </ListItem>
                        <Divider component="li" />
                        <ListItem>
                            <ListItemText
                                primary="Dirección de Recogida"
                                secondary={serviceInfo.pickUpAddress}
                            />
                        </ListItem>
                        <Divider component="li" />
                        <ListItem>
                            <ListItemText
                                primary="Detalles adicionales de la Recogida"
                                secondary={serviceInfo.pickUpDetails}
                            />
                        </ListItem>
                        <Divider component="li" />
                        <ListItem>
                            <ListItemText
                                primary="Dirección de Entrega"
                                secondary={serviceInfo.deliveryAddress}
                            />
                        </ListItem>
                        <Divider component="li" />
                        <ListItem>
                            <ListItemText
                                primary="Detalles adicionales de la Entrega"
                                secondary={serviceInfo.deliveryDetails}
                            />
                        </ListItem>
                        <Divider component="li" />
                        <ListItem>
                            <ListItemText
                                primary="Estado"
                                secondary={serviceInfo.status || "Recogiendo"}
                            />
                        </ListItem>
                    </List>
                </Box>
            </Container>
        </>
    );
};

export default ServiceDetails;
