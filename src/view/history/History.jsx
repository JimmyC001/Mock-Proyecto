import React, { useState, useEffect } from "react";
import { CssBaseline, Container, Grid, Toolbar } from "@mui/material";
import Navbar from "../../component/navbar/Navbar";
import ServiceCard from "../../component/serviceCard/ServiceCard";
import PageTitle from "../../component/pageTitle/PageTitle";
import history from "../../service/client/history";

const History = () => {
    const [orders, setOrders] = useState([]); // Inicia como array vacío

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const fetchedOrders = await history();
                if (fetchedOrders) {
                    setOrders(fetchedOrders);
                } else {
                    console.log('No se encontraron órdenes.');
                }
            } catch (error) {
                console.log('Error al obtener el historial de servicios: \n' + error.message);
            }
        };
        fetchOrders();
    }, []);

    return (
        <>
            <CssBaseline />
            <Navbar />
            <Toolbar />
            <Container>
                <PageTitle title="Historial de Servicios" />
                <Grid container spacing={2}>
                    {orders.map((order) => (
                        <Grid item xs={12} sm={6} md={4} key={order.id}>
                            <ServiceCard title={order.title} description={order.description} imageUrl={order.imageUrl} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
}

export default History;
