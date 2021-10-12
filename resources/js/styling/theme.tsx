import { createTheme } from '@mui/material/styles';
import createPalette from '@mui/material/styles/createPalette';

const theme = (dark: boolean) => createTheme({
    palette: {
      mode: dark ? 'dark' : 'light',
      primary: {
        light: dark ? '#fff' : '#454545',
        main: dark ? '#eeeeee': '#1e1e1e',
        dark: dark ? '#c2c2c2' : '#000000',
        contrastText: dark ? '#fff' : '#000',
      },
      secondary: {
        light: '#b6e3ff',
        main: '#82b1ff',
        dark: '#4d82cb',
        contrastText: '#fff',
      },
    },
});

export default theme;