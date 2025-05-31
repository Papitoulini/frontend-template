// src/theme/index.js
import { createTheme } from '@mui/material/styles';

// Example: customizing primary & secondary colors, typography, breakpoints, etc.
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // blue
    },
    secondary: {
      main: '#dc004e', // pink
    },
  },
  typography: {
    fontFamily: `'Roboto', 'Helvetica', 'Arial', sans-serif`,
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    // ... add or override other variants
  },
  components: {
    // Global override of MUI components if you want
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          padding: '8px 24px',
        },
      },
    },
    // ...override other components like MuiAppBar, MuiCard, etc.
  },
  // breakpoints, spacing, shape, etc. can be added here as needed
});

export default theme;
