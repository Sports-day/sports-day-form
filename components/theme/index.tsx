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
});

const CustomCardContent = styled(CardContent)`
  &:last-child {
  padding-bottom: 16px;
 } 
`

export { CustomCardContent };