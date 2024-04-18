import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = () => {
    return (
        <AppBar position="fixed"

                sx={{
                    color: 's-lightest.main',
                    background: `radial-gradient(ellipse at left, #5F6DC2, #4A5ABB)`,
                    height: '70px',
                    justifyContent: 'center'
                }}
                >
            <Toolbar>
                <Typography variant="h6" component="div" >
                    SPORTSDAY
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;

