import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

const Contact = () => {
  return (
    <Container>
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h4">Contact Us</Typography>
        <Typography>Feel free to reach out to us </Typography>
      </Paper>
    </Container>
  );
};

export default Contact;
