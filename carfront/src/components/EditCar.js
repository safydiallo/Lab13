import React, { useState } from "react";
import { Dialog, Stack } from "@mui/material";
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';

import Typography from '@mui/material/Typography';

function EditCar(props){
    const[open,setOpen]=useState(false);
    const[car,setCar]=useState({
        brand:"",
        model:"",
        color:"",
        year:"",
        fuel:"",
        price:"",
    });

    const iconStyle={
        color:'blue',
        fontSize:'30px'
    };

    const buttonStyle={
        backgroundColor: 'transparent', 
        border: 'none', 
        padding: 0, 
        color: 'blue',
        fontSize: '20px',
    };

    const handleClickOpen=()=>{
        setCar({
            brand: props.data.row.brand,
            model: props.data.row.model,
            color: props.data.row.color,
            year: props.data.row.year,
            price: props.data.row.price,
        });
        setOpen(true);
    };
    const handleClose=()=>{
        setOpen(false);
    };

    const handleChange=event=>{
        setCar({...car, [event.target.name]: event.target.value});
    };
    const handleSave=()=>{
        props.updateCar(car,props.data.id);
        handleClose();
    };
    return( 
        <div>
            <IconButton onClick={handleClickOpen}>
                <EditIcon style={iconStyle}/>
            </IconButton>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Modifierla voiture</DialogTitle>
                <DialogContent>
                    <Stack spacing={2} mt={1}>
                        <TextField  
                            label="Brand"
                            name="brand"
                            value={car.brand}
                            onChange={handleChange}
                            
                        />
                    
                        <TextField
                            label="Model"
                            name="model"
                            value={car.model}
                            onChange={handleChange}
                        />
                    
                        <TextField
                            label="Color"
                            name="color"
                            value={car.color}
                            onChange={handleChange}
                        />
                
                        <TextField
                            label="Year"
                            name="year"
                            value={car.year}
                            onChange={handleChange}
                        />
                
                        <TextField
                            label="Price"
                            name="price"
                            value={car.price}
                            onChange={handleChange}
                        />  
                
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <Stack direction="row" spacing={4}>
                        <button  variant="contained" onClick={handleClose} style={buttonStyle}>Annuler</button>
                        <button  variant="contained" onClick={handleSave}style={buttonStyle}>Enregistrer</button>
                    </Stack>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default EditCar;