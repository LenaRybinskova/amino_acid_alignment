import { createTheme } from '@mui/material/styles';


const baseTypographyStyles = {
    textAlign: 'center' as const,
    fontSize: 'clamp(1rem, 2vw, 1.25rem)',
};

const theme = createTheme({
    typography: {
        h1: {
            ...baseTypographyStyles,
            fontWeight: 600,
            fontSize: 'clamp(1.5rem, 2.5vw, 3rem)',
        },
        h4: {
            ...baseTypographyStyles,
            fontWeight: 600,
            fontSize: 'clamp(1.5rem, 2.5vw, 3rem)',
        },
        h5: {
            ...baseTypographyStyles,
            fontWeight: 500,
            fontSize: 'clamp(1.25rem, 2.2vw, 1.75rem)',
            marginBottom: '1rem',
            color: "var(--color-background-paper-secondary)",
        },
        h6: {
            ...baseTypographyStyles,
            fontWeight: 500,
            color: "var(--color-background-paper-primary)",
        },
    },
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: '1rem',
                    padding: '1.5rem',
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                h6: {
                    '@media (max-width:400px)': {
                        textAlign: 'left',
                    },
                },
            },
        },
    },
})

export default theme