import './App.css';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Typography } from '@mui/material';
import CarList from './components/CarsList';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';


function App() {
  const styleButton={
    backgroundColor: 'white',
    border: '10px solid black',
    padding: '10px',
    color: 'blue',
        
  }
  return (
    <div className="App">
      <AppBar position="static" style={{display: 'flex'  }}>
      <Toolbar>
          
          <img src="photo.png" alt="Car" style={{ width: '300px', marginRight: '10px' }} /> 
          <Typography variant="h2"  >CarShop</Typography>
          <div style={{ marginRight: '60px' }}></div>
          <IconButton edge="start" color="inherit" aria-label="home" style={styleButton}>
              <HomeIcon /> 
              <Typography variant="h6">Accueil</Typography>
          </IconButton>
          
          <div style={{ marginRight: '60px' }}></div>

          <IconButton edge="end" color="inherit" aria-label="owner" style={styleButton}>
          <Typography variant="h6">Owners</Typography>
            <AccountCircleIcon />
          </IconButton>

          <div style={{ marginRight: '60px' }}></div>

          <IconButton edge="end" color="inherit" aria-label="search" style={styleButton}>
            <SearchIcon />
            <Typography variant="h6">Search</Typography>
          </IconButton>

        </Toolbar>
      </AppBar>
      <CarList />
    </div>
  );
}

export default App;
