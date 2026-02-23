// src/components/Layout/Footer.jsx
import { Box, Typography, Container } from '@mui/material';

function Footer() {
	return (
    <Box
	component="footer"
	sx={{
        py: 2,
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.background.paper,
      }}
    >
      <Container maxWidth="md">
        <Typography variant="body2" color="textSecondary" align="center">
          © {new Date().getFullYear()} My MUI App. All rights reserved.
        </Typography>
      </Container>
    </Box>
	);
}

export default Footer;
