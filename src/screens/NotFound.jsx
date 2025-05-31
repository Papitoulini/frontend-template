// src/pages/NotFound.jsx
import React from 'react';
import { Typography, Box } from '@mui/material';

function NotFound() {
  return (
    <Box textAlign="center" mt={4}>
      <Typography variant="h2" color="error" gutterBottom>
        404
      </Typography>
      <Typography variant="h5">Page Not Found</Typography>
    </Box>
  );
}

export default NotFound;
