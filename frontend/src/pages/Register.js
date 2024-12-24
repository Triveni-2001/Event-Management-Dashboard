// src/pages/Register.js
import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:5000/api/auth/register', form);
      alert('Registration successful! Please log in.');
      navigate('/login');
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <Box
      sx={{
        backgroundImage: 'url(https://image.slidesdocs.com/responsive-images/background/technology-business-abstract-high-tech-blue-light-effect-powerpoint-background_a5a4cf1965__960_540.jpg)', // Replace with your image path
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="sm" sx={{ backgroundColor: '#FFFFE0', padding: '20px', borderRadius: '8px' }}>
        <Box mt={5}>
          <Typography variant="h4" gutterBottom>Register</Typography>
          <TextField
            label="Username"
            name="username"
            fullWidth
            margin="normal"
            value={form.username}
            onChange={handleChange}
            required
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            fullWidth
            margin="normal"
            value={form.password}
            onChange={handleChange}
            required
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            fullWidth
            style={{ marginTop: '20px' }}
          >
            Register
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Register;
