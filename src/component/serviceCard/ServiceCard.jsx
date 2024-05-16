import React from "react";
import { Card, CardMedia, CardContent, CardActions,Typography, Button } from '@mui/material';


const ServiceCard = ({ id,  title, description, imageUrl }) => {
    const cardHandler = (e) => {
        e.preventDefault();
        alert('/serviceDetails/' + id);
        window.location.href = '/serviceDetails/' + id;
    };
    return(
        <>
            <Card>
                <CardMedia
                    component="img"
                    height="140"
                    image={imageUrl}
                    alt={title}
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={cardHandler} size="small">Saber más</Button>
                </CardActions>
            </Card>
        </>
    );
};

export default ServiceCard;
