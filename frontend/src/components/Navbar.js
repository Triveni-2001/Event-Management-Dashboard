// src/components/Navbar.js
import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

function Navbar() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundImage: 'url("https://png.pngtree.com/thumb_back/fw800/background/20190223/ourmid/pngtree-blue-smart-light-tech-background-backgroundlight-effect-backgroundelectronic-image_81225.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, color: '#FFF' }}>
          Event Management Dashboard
        </Typography>
        <Button color="inherit" component={Link} to="/" sx={{ color: '#FFF' }}>
          Events
        </Button>
        <Button color="inherit" component={Link} to="/attendees" sx={{ color: '#FFF' }}>
          Attendees
        </Button>
        <Button color="inherit" component={Link} to="/tasks" sx={{ color: '#FFF' }}>
          Tasks
        </Button>
        <Button color="inherit" onClick={handleLogout} sx={{ color: '#FFF' }}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
