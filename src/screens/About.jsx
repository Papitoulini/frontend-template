// src/pages/About.jsx
import React from 'react';
import { Typography } from '@mui/material';

function About() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        About This Project
      </Typography>
      <Typography variant="body1">
        This is a sample React app built with Vite and MUI to demonstrate a well-structured boilerplate.
      </Typography>
    </div>
  );
}

export default About;
