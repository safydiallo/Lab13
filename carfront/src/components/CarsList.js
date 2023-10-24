import React, { useEffect, useState} from "react";
import { SERVER_URL } from '../constants.js'
import { DataGrid } from '@mui/x-data-grid';
import Snackbar from '@mui/material/Snackbar';
import AddCar from "./AddCars.js";
import EditCar from './EditCar.js';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';


function CarList(){
    const[cars, setCars]=useState([]);

    const iconStyle={
        color:'black',
        fontSize:'30px',
        cellClassName: 'no-border-cell',
    };
    const styles = {
        headerStyle: {
          fontSize: '20px', // Changer la taille de la police de l'en-tête
          cellClassName: 'no-border-cell',
          
        },
      };
    

    const columns = [
        { field: 'brand', headerName: 'Marque', width: 300,headerClassName: 'custom-header'   },
        { field: 'model', headerName: 'Modèle', width: 300,headerClassName: 'custom-header' },
        { field: 'color', headerName: 'Couleur', width: 300,headerClassName: 'custom-header'},
        { field: 'year', headerName: 'Année', width: 300,headerClassName: 'custom-header'},
        { field: 'price', headerName: 'Prix', width: 150,headerClassName: 'custom-header'},
        {
            field: "_links.car.href",
            headerName:"",
            sortable:false,
            filterable:false,
            renderCell: row=> <EditCar data={row}  updateCar={updateCar}/>,
            
        },
        { 
            field: "_links.self.href",
            headerName:"",
            sortable:false,
            filterable:false,
            renderCell: row=>(
                <IconButton onClick={()=> onDelClick(row.id)}>
                    <DeleteIcon style={iconStyle}/>
                </IconButton>
                
            ),
            
        },
    ];

        const [open, setOpen] = useState(false);

    useEffect( ()=>{
        fetchCars();
        
    }, [] );


    const fetchCars=() =>{
        fetch(SERVER_URL + 'api/cars')
            .then(response=>response.json())
            .then(data=>setCars(data._embedded.cars) )
            .catch(err=>console.error(err));
    };
   
    const addCar= car=>{
        fetch(SERVER_URL + "api/cars",{
            method:"POST",
            headers:{ "Content-Type":"application/json" },
            body: JSON.stringify(car),
        })
            .then(response=>{
                if(response.ok){
                    fetchCars();
                }else{
                    alert("Something went wrong");
                }
            })
            .catch(err=>console.errore(err));
    };

    const updateCar=(car,link)=>{

        fetch(link, {
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(car),
        })
            .then(response=>{
                if(response.ok){
                    fetchCars();
                } else {
                    alert("Something went wrong");
                }
            })
            .catch(err=>console.error(err));
    };





    const onDelClick= url =>{
        if(window.confirm("Are you sure to delete?")){ 
            fetch(url, { method:"DELETE" } )
                .then(response =>{
                    if(response.ok){ 
                        fetchCars(); 
                        setOpen(true);
                    }else{
                         alert("Quelque chose s'est mal passe");
                    }
                })
                .catch(err =>console.error(err));
        }    
    };

    return(  
    <React.Fragment>
        <Stack mt={2} mb={2} >
            <AddCar addCar={addCar}/>
        </Stack>
        
        <div className="maDiv">
            <DataGrid
                rows={cars}
                columns={columns}
                disableRowSelectionOnClick ={true}
                getRowId={row => row._links.self.href}
                style={{ fontSize: '30px' }} 
               
                
            />
            <Snackbar
                open={open}
                autoHideDuration={2000}
                onClose={() => setOpen(false)}
                message="Voiture supprimee"
                cellClassName="no-border-cell"
            />
            
    
        </div>
        
    </React.Fragment>
    );
}
export default CarList;