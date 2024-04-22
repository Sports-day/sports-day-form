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

declare module '@mui/material/Chip' {
    interface SvgIconPropsColorOverrides {
        "s-lightest": true;
        "s-lighter": true;
        "s-light": true;
        "s-dark": true;
        "s-darker": true;
        "s-darkest": true;
    }
}

export const theme = createTheme({
    components: {
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
            },
        },
    },
    palette: {
        "s-lightest": {
            main: '#FFFFFF'
        },
        "s-lighter": {
            main: '#5F6DC2'
        },
        "s-light": {
            main: '#EFF0F8'
        },
        "s-dark": {
            main: '#4A5ABB',
        },
        "s-darker": {
            main: '#3E4EB3'
        },
        "s-darkest": {
            main: '#2F3C8C'

        },
        background: {
            default: '#EFF0F8',
        },
        primary: {
            main: '#7f8cd6',
            dark: '#7f8cd6',
            light: '#7f8cd6',
        },
    },
});


