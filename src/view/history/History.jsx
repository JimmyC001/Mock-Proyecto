import React, { useState, useEffect } from "react";
import { CssBaseline, Container, Grid, Toolbar } from "@mui/material";
import Navbar from "../../component/navbar/Navbar";
import ServiceCard from "../../component/serviceCard/ServiceCard";
import PageTitle from "../../component/pageTitle/PageTitle";
import history from "../../service/client/history";
import { getAll } from "../../assets/service";

const History = () => {
    const [services, setservices] = useState([]); // Inicia como array vacío

    useEffect(() => {
        const isLogged = () => {
            getAll().then(services => console.log(services));
            const id = sessionStorage.getItem('token');
            return (id)? true: false;
        };
        const fetchservices = async () => {
            try {
                const fetchedservices = await history();
                if (fetchedservices) {
                    setservices(fetchedservices);
                } else {
                    console.log('No se encontraron órdenes.');
                }
            } catch (error) {
                console.log('Error al obtener el historial de servicios: \n' + error.message);
            }
        };
        if(isLogged()) fetchservices();
        else window.location.href = '/login';
    }, []);

    return (
        <>
            <CssBaseline />
            <Navbar />
            <Toolbar />
            <Container>
                <PageTitle title="Historial de Servicios" />
                <Grid container spacing={2}>
                    {services.map((service) => (
                        <Grid item xs={12} sm={6} md={4} key={service.id}>
                            <ServiceCard id = { service.id } title={service.title} description={service.description} imageUrl={service.imageUrl} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
}

export default History;
