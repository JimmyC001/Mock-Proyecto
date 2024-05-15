import NavListDrawer from './NavListDrawer';
import { Box,Button,Drawer, AppBar, Toolbar } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import LogoName from '../../component/logo-name/LogoName';
import ProfileMenu from '../../component/profileMenu/ProfileMenu';


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const drawerWidth = {
        xs: '35%',
        sm: '25%',
        md: '20%',
        lg: '15%',
        xl: '15%'
    };
    return (
        <>
        
        <AppBar sx=
            {{
                //width: '100%',
                height: '8%',
                backgroundColor: 'primary.main',
                color: 'white',

            }}
            
            position='fixed'>
            
            <Toolbar
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                    
                    }}>
                
                <Button
                    variant='text'
                    onClick={() => setOpen(true)}
                    color= 'inherit'
                >
                    <MenuIcon sx={{m:0}} />
                    Menú
                </Button>
                <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                    <LogoName/>
                </Box>
                <ProfileMenu/>
            </Toolbar>
        </AppBar>
        <Box >
            <Drawer
                anchor='left'
                open={open}
                onClose={() => setOpen(false)}
                
                sx={{width: drawerWidth,'& .MuiDrawer-paper': {width: drawerWidth} , boxSizing: 'border-box' }}
            >
                <NavListDrawer  />
            </Drawer>
        </Box>
        </>
    );
    
}
export default Navbar;