import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

const About = () => {
  return (
    <Container>
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h4">About Us</Typography>
        <Typography>
          Welcome to ProjectX! We are a passionate team dedicated to making a positive impact through innovative solutions. Here's a bit more about who we are and what we do:
        </Typography>
        
        <Typography variant="h6" style={{ marginTop: '16px' }}>Our Mission</Typography>
        <Typography>
          At ProjectX, our mission is to empower individuals and businesses by providing cutting-edge technology solutions. We strive to create products that not only meet current needs but also anticipate future challenges.
        </Typography>

        <Typography variant="h6" style={{ marginTop: '16px' }}>What Sets Us Apart</Typography>
        <Typography>
          What makes ProjectX unique is our commitment to excellence and continuous improvement. We believe in fostering a collaborative environment where creativity thrives, enabling us to deliver exceptional results for our clients and users.
        </Typography>

        <Typography variant="h6" style={{ marginTop: '16px' }}>Our Team</Typography>
        <Typography>
          Behind every successful project is a talented and diverse team. Our team members bring a range of skills and perspectives, allowing us to approach challenges from different angles and find innovative solutions.
        </Typography>

        <Typography variant="h6" style={{ marginTop: '16px' }}>Get Involved</Typography>
        <Typography>
          Interested in joining us on this exciting journey? We are always looking for passionate individuals who share our vision. Check out our careers page for current opportunities or reach out to us if you have a collaboration in mind.
        </Typography>

        <Typography variant="h6" style={{ marginTop: '16px' }}>Contact Us</Typography>
        <Typography>
          Have questions or want to learn more? Feel free to reach out to us via email at info@projectx.com or through our contact form. We love hearing from our community!
        </Typography>
      </Paper>
    </Container>
  );
};

export default About;
