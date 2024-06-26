import React, { useState, useEffect } from "react";
import { CssBaseline, Container, Box, Grid, Toolbar } from "@mui/material";
import Navbar from "../../component/navbar/Navbar";
import ServiceCard from "../../component/serviceCard/ServiceCard";
import PageTitle from "../../component/pageTitle/PageTitle";
import home from "../../service/client/home";
import { getAll } from "../../assets/service";

const Home = () => {
    const [services, setservices] = useState([]);
    
    useEffect(() => {
        const isLogged = () => {
            const id = sessionStorage.getItem('token');
            return (id)? true: false;
        };

        const fetchservices = async () => {
            try {
                getAll().then(services => console.log(services));
                const fetchedservices = await home();
                if (fetchedservices) {
                    setservices(fetchedservices);
                } else 
                    console.log('No se encontraron servicios activos');
            } catch (error) {
                console.log('Error al obtener el historial de servicios: \n' + error.message);
            }
        };

        if(isLogged()) fetchservices();
        else window.location.href = '/login';
    }, []);

    return (
        <>
            <CssBaseline/>
            <Navbar/>
            <Toolbar/>
            <Container>
                <PageTitle title="Inicio"/>
                <Box sx={{mt: 4, mb: 4}}>
                    <h2>Servicios en curso</h2>
                </Box>
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
};

export default Home;
