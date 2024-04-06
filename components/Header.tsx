'use client'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {createPalette} from "@/components/palette";

const Header = () => {
    return (
        <AppBar position="static"
                sx={{
                    backgroundColor: createPalette.palette.primary.dark,


                }}>
            <Toolbar>
                <Typography variant="h6" component="div">
                    SPORTSDAY
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;

