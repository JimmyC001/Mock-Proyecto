import React from "react";
import { Box, Typography } from "@mui/material";

const PageTitle = ({ title }) => {
  return (
    <Box sx={{ mt: 4, mb: 4 }}> {/* Aplica márgenes superior e inferior */}
      <Typography variant="h1" component="h1" gutterBottom sx={{ fontSize: '2.1rem', fontWeight:'bold' }}>
        {title}
      </Typography>
    </Box>
  );
};

export default PageTitle;

