import React, { useState, useContext } from 'react';
import { Container, Typography, TextField, Button, Box, Snackbar, Alert } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

function Login() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    if (!form.username || !form.password) {
      setSnackbar({ open: true, message: 'Please fill in all fields', severity: 'warning' });
      return;
    }
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', form);
      const { token } = res.data;
      login(token); // Update auth context
      setSnackbar({ open: true, message: 'Login successful!', severity: 'success' });
      navigate('/'); // Redirect to dashboard
    } catch (error) {
      console.error(error);
      setSnackbar({
        open: true,
        message: error.response?.data?.message || 'Login failed',
        severity: 'error',
      });
    }
  };

  return (
    <Box
      sx={{
        backgroundImage: 'url(https://image.slidesdocs.com/responsive-images/background/technology-business-abstract-high-tech-blue-light-effect-powerpoint-background_a5a4cf1965__960_540.jpg)', // Add path to your background image here
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="sm" sx={{ backgroundColor: '#FFCDD2', borderRadius: '8px', boxShadow: 3, padding: 4 }}>
        <Box mt={3}>
          <Typography variant="h4" gutterBottom>Login</Typography>
          <form onSubmit={handleSubmit}>
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
              color="success" // You can change this to any predefined color
              type="submit"
              fullWidth
              style={{ marginTop: '20px' }}
            >
              Login
            </Button>
          </form>
        </Box>
        <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={handleCloseSnackbar}>
          <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
}

export default Login;
