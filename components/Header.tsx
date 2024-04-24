import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';
import LogoutButton from "@/components/auth/LogoutButton";

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
                <Image src={"/logo/logo_form.png"} height={"20"} width={"236"} alt={"SPORTSDAY Admin"}/>
                <LogoutButton/>
            </Toolbar>
        </AppBar>
    );
}

export default Header;

