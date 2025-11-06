import { createTheme } from '@mui/material';
import palette from './palette';

const theme = createTheme({
  palette,
  typography: {
    fontFamily: '"Sora", "Helvetica", "Arial", sans-serif',
  },
});

export default theme;
