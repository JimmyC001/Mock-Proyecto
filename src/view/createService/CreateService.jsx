import React from "react";
import { CssBaseline, Container,Box, Grid, TextField, Button, Toolbar } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";
import Navbar from "../../component/navbar/Navbar";
import PageTitle from "../../component/pageTitle/PageTitle";
import SubTitle from "../../component/subTitle/Subtitle";
import { useState } from "react";
import  createService  from "../../service/service/createService";
import ObjectList from "../../component/objectList/ObjectList";


const CreateService = () => {
    const [pickUpDate, setPickUpDate]           = useState('');
    const [pickUpAddress, setPickUpAddress]     = useState('');
    const [addressDetails, setAddressDetails]   = useState('');
    const [deliveryDate, setDeliveryDate]       = useState('');
    const [deliveryAddress, setDeliveryAddress] = useState('');
    const [deliveryDetails, setDeliveryDetails] = useState('');
    const [items, setItems]                     = useState([
        {
            name: '',
            details: '',
            length: '',
            width: '',
            height: '',
            images: []  
        }
    ]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const serviceDetails = {
            pickUpDate,
            pickUpAddress,
            addressDetails,
            deliveryAddress,
            deliveryDetails,
            items
        };
        try {
            const response = await createService(serviceDetails);
            if (response && response.status === 200){
                window.location.href = '/';
                //console.log(response);
                alert("Servicio agregado, En espera por conductor");
            }
        } catch (error) {
            console.log('Error: ' + error);
        }
    };   
    return (
        <>
            <CssBaseline />
            <Navbar  />
            <Toolbar />
            <Container>
            <PageTitle title="Crear Servicio" />
            <form onSubmit={handleSubmit}>
                <Grid container spacing={1} sx={{mt:1, mb:1}}>
                    <ObjectList items={items} setItems={setItems} />
                    <Grid item xs={12} sm={12} md={12}>
                        <Box sx={{mt: 2,mb:2,ml:2}}>
                            <SubTitle> Recogida </SubTitle>   
                        </Box>
                    </Grid>
                    <Grid item xs={5} sm={5} md={5}>
                        <TextField sx={{m: 2}}
                            id="pickUpDate"
                            name="pickUpDate"
                            label="Fecha de Recogida"
                            type="date"
                            variant="outlined"
                            required
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                            value={pickUpDate}
                            onChange={(e) => setPickUpDate(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={10} sm={10} md={5}>
                        <TextField sx={{m: 2}}
                            id="pickUpAddress"
                            name="pickUpAddress"
                            label="Direccion de Recogida"
                            type="text"
                            variant="outlined"
                            required
                            fullWidth
                            value={pickUpAddress}
                            onChange={(e) => setPickUpAddress(e.target.value)}
                        >
                        </TextField>
                    </Grid>
                    <Grid item xs={10} sm={10} md={10}>
                        <TextField sx={{m: 2}}
                            id="addressDetails"
                            name="addressDetails"
                            label="Detalles adicionales de la Direccion"
                            type="text"
                            variant="outlined"
                            required
                            fullWidth
                            multiline
                            rows={3}
                            value={addressDetails}
                            onChange={(e) => setAddressDetails(e.target.value)}
                        >
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <Box sx={{mt: 2,mb:2,ml:2}}>
                            <SubTitle> Entrega </SubTitle>
                        </Box>
                    </Grid>
                    <Grid item xs={5} sm={5} md={5}>
                        <TextField sx={{m: 2}}
                            id="deliveryDate"
                            name="deliveryDate"
                            label="Fecha de Entrega"
                            type="date"
                            variant="outlined"
                            required
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                            value={deliveryDate}
                            onChange={(e) => setDeliveryDate(e.target.value)}
                        >
                        </TextField>
                    </Grid>
                    <Grid item xs={10} sm={10} md={5}>
                        <TextField sx={{m: 2}}
                            id="deliveryAddress"
                            name="deliveryAddress"
                            label="Direccion de Entrega"
                            type="text"
                            variant="outlined"
                            required
                            fullWidth
                            value={deliveryAddress}
                            onChange={(e) => setDeliveryAddress(e.target.value)}
                        >
                        </TextField>
                    </Grid>
                    <Grid item xs={10} sm={10} md={10}>
                        <TextField sx={{m: 2}}
                            id="deliveryDetails"
                            name="deliveryDetails"
                            label="Detalles adicionales de la Direccion"
                            type="text"
                            variant="outlined"
                            required
                            fullWidth
                            multiline
                            rows={3}
                            value={deliveryDetails}
                            onChange={(e) => setDeliveryDetails(e.target.value)}
                        >
                        </TextField>
                    </Grid>
                </Grid>
                <Box sx={{
                    display: "flex", 
                    flexDirection: "row", 
                    justifyContent: "space-around",
                    alignItems: "center",
                    flexWrap: "wrap",
                }}>
                    <Button
                        component={RouterLink}
                        to="/"
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Cancelar
                    </Button>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Solicitar
                    </Button>
                </Box>
            </form>
            </Container>
        </>
    );
}

export default CreateService;
