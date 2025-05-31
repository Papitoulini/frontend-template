// src/components/Layout/Layout.jsx
import React from 'react';
import { Box, Container } from '@mui/material';
import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <Box display="flex" minHeight="100vh" flexDirection="column">
      <Header />
      <Box component="main" flex="1">
        <Container maxWidth="lg" sx={{ py: 4 }}>
          {children}
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}

export default Layout;
