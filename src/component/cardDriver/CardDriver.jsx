import React from "react";
import { Card, CardContent, CardActions,CardMedia, Button, Typography } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Rating from '@mui/material/Rating';


const CardDriver = ({ driverInfo, onWhatsAppClick }) => {
    return (
        <Card sx={{ boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
            transition: 'transform 0.2s', // Animación al presionar
            '&:active': {
                transform: 'scale(0.98)', // Hace que el botón se presione ligeramente
            }, maxWidth: 2000, width: '100%' }}>
            <CardMedia
                component="img"
                height="140"
                image={driverInfo.imageUrl} // Asume que driverInfo incluye imageUrl
                alt={`Imagen de ${driverInfo.firstName} ${driverInfo.lastName}`}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Conductor
                </Typography>
                <Typography variant="body1">{`Nombre: ${driverInfo.firstName} ${driverInfo.lastName}`}</Typography>
                <Typography variant="body1">{`Teléfono: ${driverInfo.phone}`}</Typography>
                <Rating name="read-only" value={driverInfo.rating} precision={0.1} readOnly />
            </CardContent>
            <CardActions>
                <Button
                    variant="contained"
                    startIcon={<WhatsAppIcon />}
                    sx={{
                        backgroundColor: 'green', 
                        color: 'white',
                        '&:hover': {
                            backgroundColor: 'darkgreen',
                            boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
                        },
                        borderRadius: 2,
                        textTransform: 'none',
                        padding: '8px 16px',
                    }}
                    onClick={onWhatsAppClick}
                >
                    Hablar con el Conductor
                </Button>
            </CardActions>
        </Card>
    );
};

export default CardDriver;
