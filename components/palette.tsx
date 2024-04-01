import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Palette {
        lighter: Palette['primary'];
        darker: Palette['primary'];
    }

    interface PaletteOptions {
        lighter?: PaletteOptions['primary'];
        darker?: PaletteOptions['primary'];
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        lighter: true;
        darker: true;
    }
}

export const createPalette = createTheme({
    palette: {
        primary: {
            main: '#5F6DC2',
            light: '#EFF0F8',
            dark: '#4A5ABB',
            contrastText: '#242105',

        },
        lighter: {
            main: '#FFFFFF',
            contrastText: '#000000',

        },
        darker: {
            main: '#2F3C8C',
            contrastText: '#000000'
        },
    },
});

