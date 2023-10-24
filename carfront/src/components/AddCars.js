import React, { useState } from "react";
import { Dialog, IconButton } from "@mui/material";
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';


function AddCar(props){
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
        background:'rgb(14, 102, 185)' ,
        color:'white',
        fontSize: '50px',
    };

    const buttonStyle={
        backgroundColor: 'transparent', 
        border: 'none', 
        padding: 0, 
        color: 'blue',
        fontSize: '20px',
    };

    const handleClickOpen=()=>{
        setOpen(true);
    };
    const handleClose=()=>{
        setOpen(false);
    };

    const handleChange=event=>{
        setCar({...car, [event.target.name]: event.target.value});
    };
    const handleSave=()=>{
        props.addCar(car);
        handleClose();
    };

    return( 
    <div>
        <IconButton onClick={handleClickOpen}>
            <AddIcon style={iconStyle}></AddIcon>
        </IconButton>
        
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Nouvelle Voiture</DialogTitle>
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
                        label="Annee"
                        name="year"
                        value={car.year}
                        onChange={handleChange}
                    />
                    
                    <TextField
                        label="Prix"
                        name="price"
                        value={car.price}
                        onChange={handleChange}
                    />  
                </Stack>
            </DialogContent>
            <DialogActions>
                <Stack direction="row" spacing={4}>
                    <button   onClick={handleClose} style={buttonStyle} >Annuler</button>
                    <button   onClick={handleSave} style={buttonStyle} >Enregistrer</button>
                </Stack>
            </DialogActions>
        </Dialog>
    </div>
    );
}

export default AddCar;
