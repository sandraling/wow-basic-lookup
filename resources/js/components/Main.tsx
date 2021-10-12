import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/material/styles';
import { StylesProvider } from '@mui/styles';

import theme from  '../styling/theme';
import { CharacterLookup } from './CharacterLookup/index';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';

export const App = () => {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const defaultTheme = React.useMemo(
        () => theme(prefersDarkMode),
        [prefersDarkMode],
    );

    return (
        <StylesProvider injectFirst>
            <ThemeProvider theme={ defaultTheme }>
                <Box sx={{ margin: 'auto' }}>
                    <CharacterLookup/>
                </Box>
            </ThemeProvider>
        </StylesProvider>
    );
};

if (document.getElementById('app')) {
    ReactDOM.render(
      <App />, 
      document.getElementById('app')
    );
}