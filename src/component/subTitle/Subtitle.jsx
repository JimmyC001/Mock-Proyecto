import React from "react";
import { Typography } from "@mui/material";

const SubTitle = ({ children }) => {
  return (
    <Typography variant="h6" component="h2" gutterBottom sx={{ fontWeight: 550, mt: 2, mb: 2 }}>
      {children}
    </Typography>
  );
};

export default SubTitle;
