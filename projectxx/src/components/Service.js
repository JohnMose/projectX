import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';

const Services = () => {
  return (
    <Container>
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h4">Our Services</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Paper style={{ padding: '10px', textAlign: 'center' }}>
              <Typography variant="h6">Web Development</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper style={{ padding: '10px', textAlign: 'center' }}>
              <Typography variant="h6">Mobile App Development</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper style={{ padding: '10px', textAlign: 'center' }}>
              <Typography variant="h6">UI/UX Design</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Services;

