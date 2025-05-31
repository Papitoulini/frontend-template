// src/components/Layout/Header.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}
        >
          My MUI App
        </Typography>
        <Box>
          <Button color="inherit" component={RouterLink} to="/about">
            About
          </Button>
          <Button color="inherit" component={RouterLink} to="/settings">
            Settings
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
