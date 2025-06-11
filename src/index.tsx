import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './app/App';
import '../src/app/styles/styles.scss';
import {CssBaseline, ThemeProvider} from '@mui/material';
import theme from '../src/app/theme/theme';



ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </React.StrictMode>,
);