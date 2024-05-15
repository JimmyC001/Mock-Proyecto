import { Grid, Box, TextField, Button} from '@mui/material';
import SubTitle from '../subTitle/Subtitle';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';


const ObjectList = ({items, setItems}) => {
    
    /*const handleItemChange = (index, field, value) => {
        const newItems = items.map((item, idx) => 
            idx === index ? { ...item, [field]: value } : item
        );
        setItems(newItems);
    };

    const addItem = () => {
        setItems([...items, { name: '', length: '', width: '', height: '' }]);
    };

    const removeItem = (index) => {
        setItems(items.filter((_, idx) => idx !== index));
    };
*/
    /*const handleImageChange = (index, files) => {
        const newImages = Array.from(files).map(file => URL.createObjectURL(file));
        const newItems = items.map((item, idx) => 
            idx === index ? { ...item, images: item.images.concat(newImages) } : item
        );
        setItems(newItems);
    };

    const removeImage = (itemIndex, imageIndex) => {
        const newItems = items.map((item, idx) => {
            if (idx === itemIndex) {
                return {
                    ...item,
                    images: item.images.filter((_, idx) => idx !== imageIndex)
                };
            }
            return item;
        });
        setItems(newItems);
    };*/
    const handleItemChange = (index, field, value) => {
        const newItems = items.map((item, idx) => 
            idx === index ? { ...item, [field]: value } : item
        );
        setItems(newItems);
    };

    const addItem = () => {
        // Agregar un nuevo objeto con imágenes de prueba
        setItems([...items, { 
            name: '', 
            details: '',
            length: '', 
            width: '', 
            height: '', 
            images: [
                //"https://source.unsplash.com/random/200x200?sig=1",
                //"https://source.unsplash.com/random/200x200?sig=2"
            ]
        }]);
    };

    const removeItem = (index) => {
        setItems(items.filter((_, idx) => idx !== index));
    };

    const removeImage = (itemIndex, imageIndex) => {
        const newItems = items.map((item, idx) => {
            if (idx === itemIndex) {
                return {
                    ...item,
                    images: item.images.filter((_, idx) => idx !== imageIndex)
                };
            }
            return item;
        });
        setItems(newItems);
    };
    const handleImageChange = (index, files) => {
        const newImages = Array.from(files).map(file => URL.createObjectURL(file));
        const newItems = items.map((item, idx) =>
            idx === index ? { ...item, images: item.images.concat(newImages) } : item
        );
        setItems(newItems);
    };



    return (
        <>
            {items.map((item, index) => (
                <Grid container spacing={2} key={index}>
                    <Grid item xs={10} sm={10} md={5}>
                        <TextField sx = {{mb:2, ml:2}}
                            id= "nameObject"
                            name='nameObject'
                            label='Nombre del Objeto'
                            type='text'
                            variant='outlined'
                            required
                            fullWidth
                            value={item.name}
                            onChange={(e) => handleItemChange(index, 'name', e.target.value)}
                        >
                        </TextField>
                        
                    </Grid>
                    <Grid item xs={10} sm={10} md={10}>
                        <TextField sx={{mb:2, ml:2}}
                            id='details'
                            name='details'
                            label="Detalles"
                            type="text"
                            variant='outlined'
                            required
                            fullWidth
                            value={item.details}
                            multiline
                            rows={2}
                            onChange={(e) => handleItemChange(index, 'details', e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} md={12}> 
                        <Box sx={{mt: 1,mb:1,ml:2}}>
                            <SubTitle> Dimensiones </SubTitle>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField sx={{mb:2, ml:2 ,mr:1}}
                            id='length'
                            name='length'
                            label="Largo (cm)"
                            type='number'
                            variant='outlined'
                            required
                            fullWidth
                            value={item.length}
                            onChange={(e) => handleItemChange(index, 'length', e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField sx={{mb:2, mr:1, ml:1}}
                            id='width'
                            name='width'
                            label="Ancho (cm)"
                            type='number'
                            variant='outlined'
                            required
                            fullWidth
                            value={item.width}
                            onChange={(e) => handleItemChange(index, 'width', e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            id='height'
                            name='height'
                            label="Alto (cm)"
                            type='number'
                            variant='outlined'
                            required
                            fullWidth
                            value={item.height}
                            onChange={(e) => handleItemChange(index, 'height', e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button sx={{mb:2, ml:2}}
                            variant="contained"
                            component="label"
                            startIcon={<AddAPhotoIcon />}
                        >
                            Subir Imágenes
                            <input
                                type="file"
                                hidden
                                multiple
                                onChange={(e) => handleImageChange(index, e.target.files)}
                            />
                        </Button>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 1 }}>
                            {item.images.map((image, idx) => (
                                <Box key={idx} sx={{ margin: 1, position: 'relative' }}>
                                    <img src={image} alt={`preview-${idx}`} style={{ width: 100, height: 100, borderRadius: '4px' }} />
                                    <IconButton
                                        size="small"
                                        sx={{ position: 'absolute', top: 0, right: 0, color: 'red' }}
                                        onClick={() => removeImage(index, idx)}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Button  sx={{mb:2,ml:2}}  variant='contained' onClick={() => removeItem(index)} color="error">
                            <DeleteIcon />
                            Eliminar Objeto
                        </Button>
                    </Grid>
                </Grid>
            ))}
            <Button sx={{ml:2}} onClick={addItem} variant="contained" color="primary">Agregar Otro Objeto</Button>
        </>
    );
};



export default ObjectList;