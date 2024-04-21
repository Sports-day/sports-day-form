'use client'
import {CardContent, createTheme} from "@mui/material";
import {styled} from "@mui/system";

export const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 790,
            md: 1000,
            lg: 1200,
            xl: 1440
        },
    },
    components: {
        MuiSwitch: {
            styleOverrides: {
                root: {
                    width: 46,
                    height: 27,
                    padding: 0,
                    margin: 8,
                },
                switchBase: {
                    padding: 1,
                    '&$checked, &$colorPrimary$checked, &$colorSecondary$checked': {
                        transform: 'translateX(16px)',
                        color: '#fff',
                        '& + $track': {
                            opacity: 1,
                            border: 'none',
                        },
                    },
                },
                thumb: {
                    width: 24,
                    height: 24,
                },
                track: {
                    borderRadius: 13,
                    border: '1px solid #bdbdbd',
                    backgroundColor: '#fafafa',
                    opacity: 1,
                    transition: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                },
            },
        },
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
            },
        },
    },
});

const CustomCardContent = styled(CardContent)`
  &:last-child {
  padding-bottom: 16px;
 } 
`

export { CustomCardContent };