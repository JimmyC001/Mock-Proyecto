import React from "react";
import  TextField  from "@mui/material/TextField";

const CustomTextField = ({
    id, name, label, type, variant, margin, value, onChange,
    multiline=false,
    rows=1,
    required=false,
    fullWidth=true,
}) => {
    return (
        <TextField
            sx={{mt: 1, mb: 1}}
            id={id}
            name={name}
            label={label}
            type={type}
            variant= "outlined"
            margin={margin}
            value={value}
            onChange={onChange}
            multiline={multiline}
            rows={rows}
            required={required}
            fullWidth={fullWidth}

        />
    );
}

export default CustomTextField;