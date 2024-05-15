import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';
import { politicaDeDatos } from './politicaDeDatos'; 

const DataUsageDialog = ({ open, onClose }) => {
    return (
        <Dialog open={open} onClose={onClose} scroll="paper">
            <DialogTitle>Política de Tratamiento de Datos Personales</DialogTitle>
            <DialogContent dividers={true}>
                <DialogContentText 
                    tabIndex={-1} 
                    sx={{whiteSpace: "pre-line"}} 
                >
                    {politicaDeDatos}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cerrar</Button>
            </DialogActions>
        </Dialog>
    );
};

export default DataUsageDialog;
