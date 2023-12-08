import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

const About = () => {
  return (
    <Container>
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h4">About Us</Typography>
        <Typography>
          Welcome to ProjectX! This is my about page :
        </Typography>
      </Paper>
    </Container>
  );
};

export default About;
