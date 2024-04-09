'use client'
import { createTheme } from "@mui/material/styles";

declare module '@mui/material/styles/createPalette'{
    interface Palette {
        "s-lightest": Palette['primary'];
        "s-lighter": Palette['primary'];
        "s-light": Palette['primary'];
        "s-dark": Palette['primary'];
        "s-darker": Palette['primary'];
        "s-darkest": Palette['primary'];
    }

    interface PaletteOptions {
        "s-lightest"?: PaletteOptions['primary'];
        "s-lighter"?: PaletteOptions['primary'];
        "s-light"?: PaletteOptions['primary'];
        "s-dark"?: PaletteOptions['primary'];
        "s-darker"?: PaletteOptions['primary'];
        "s-darkest"?: PaletteOptions['primary'];
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        "s-lightest": true;
        "s-lighter": true;
        "s-light": true;
        "s-dark": true;
        "s-darker": true;
        "s-darkest": true;
    }
}

declare module '@mui/material/AppBar' {
    interface AppBarPropsColorOverrides {
        "s-lightest": true;
        "s-lighter": true;
        "s-light": true;
        "s-dark": true;
        "s-darker": true;
        "s-darkest": true;
    }
}

export const colorTheme = createTheme({
    palette: {
        "s-lightest": {
            main: '#FFFFFF',
            contrastText: '#000000',
        },
        "s-lighter": {
            main: '#5F6DC2',
            contrastText: '#000000',
        },
        "s-light": {
            main: '#EFF0F8',
            contrastText: '#000000',
        },
        "s-dark": {
            main: '#4A5ABB',
            contrastText: '#FFFFFF',
        },
        "s-darker": {
            main: '#3E4EB3',
            contrastText: '#FFFFFF',
        },
        "s-darkest": {
            main: '#2F3C8C',
            contrastText: '#FFFFFF',
        },
    },
});

