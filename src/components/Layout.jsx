// src/components/Layout/Layout.jsx
import { Box, Container } from '@mui/material';

import Footer from './Footer';
import Header from './Header';

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
