import React, { useState, useEffect } from "react";
import { CssBaseline, Container, Box, Grid, Toolbar } from "@mui/material";
import Navbar from "../../component/navbar/Navbar";
import ServiceCard from "../../component/serviceCard/ServiceCard";
import PageTitle from "../../component/pageTitle/PageTitle";
import home from "../../service/client/home";

const Home = () => {
    const [orders, setOrders] = useState([]);
    
    useEffect(() => {
        const isLogged = () => {
            const id = sessionStorage.getItem('token');
            return (id)? true: false;
        };

        const fetchOrders = async () => {
            try {
                const fetchedOrders = home();
                if (fetchedOrders) {
                    setOrders(fetchedOrders);
                } else 
                    console.log('No se encontraron servicios activos');
            } catch (error) {
                console.log('Error al obtener el historial de servicios: \n' + error.message);
            }
        };

        if(isLogged()) fetchOrders();
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
                <Grid container spacing={2}> {
                    orders.map((order, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <ServiceCard order={order}/>
                        </Grid>
                    ))
                }</Grid>
            </Container>
        </>
    );
};

export default Home;
