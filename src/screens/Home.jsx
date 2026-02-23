// src/pages/Home.jsx
import { Typography, Box, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function Home() {
	return (
    <Box textAlign="center">
      <Typography variant="h3" gutterBottom>
        Welcome to My MUI App!
      </Typography>
      <Button variant="contained" component={RouterLink} to="/dashboard">
        Go to Dashboard
      </Button>
    </Box>
	);
}

export default Home;
