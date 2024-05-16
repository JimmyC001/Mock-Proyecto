import React from "react";
import { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

const ProfileMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleMenuAction = (path) => {
        handleClose();
        navigate(path);
    };

    return (
        <>
            <Button
                aria-controls="profile-menu"
                aria-haspopup="true"
                onClick={handleClick}
                color="inherit"
            >
                <AccountCircleIcon/>
                Perfil
                
            </Button>
            <Menu
                id="profile-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => handleMenuAction('/update')}>
                    Editar perfil
                </MenuItem>
                <MenuItem onClick={ () => {
                    sessionStorage.removeItem('token');
                    handleMenuAction('/login')
                }}>
                    Cerrar sesión
                </MenuItem>
            </Menu>
        </>
    );
};

export default ProfileMenu;