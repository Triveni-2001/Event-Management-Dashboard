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
    <AppBar position="static" style={{ backgroundColor: '#FFA07A' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1, color: '#FFF' }}>
          Event Management Dashboard
        </Typography>
        <Button color="inherit" component={Link} to="/" style={{ color: '#FFF' }}>
          Events
        </Button>
        <Button color="inherit" component={Link} to="/attendees" style={{ color: '#FFF' }}>
          Attendees
        </Button>
        <Button color="inherit" component={Link} to="/tasks" style={{ color: '#FFF' }}>
          Tasks
        </Button>
        <Button color="inherit" onClick={handleLogout} style={{ color: '#FFF' }}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
