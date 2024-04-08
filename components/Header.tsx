'use client'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = () => {
    return (
        <AppBar position="static"
                sx={{
                    color: 's-lightest.main',
                    background: `radial-gradient(ellipse at left, #5F6DC2, #4A5ABB)`
                }}
                >
            <Toolbar>
                <Typography variant="h6" component="div">
                    SPORTSDAY
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;

