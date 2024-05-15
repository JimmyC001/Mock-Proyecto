import { Box, List, ListItemButton, ListItemText, Divider } from '@mui/material';
import { NavLink } from 'react-router-dom';
import React from 'react';

const navArrayLinks = [
  { title: 'Inicio', path: '/' },
  { title: 'Publicar Oferta', path: '/createService' },
  { title: 'Historial', path: '/history' },
  { title: 'Contact', path: '/contact' },
];

const NavListDrawer = () => {
  return (
    <Box
      sx={{ 
        backgroundColor: 'primary.main',
        color: 'white',
        height: '100vh',
      }}
    >
      <List sx={{ backgroundColor: 'primary.main' }}>
        {navArrayLinks.map((item, index) => (
          <React.Fragment key={index}>
            <ListItemButton component={NavLink} to={item.path}>
              <ListItemText primary={item.title} />
            </ListItemButton>
            {index !== navArrayLinks.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
}

export default NavListDrawer;
