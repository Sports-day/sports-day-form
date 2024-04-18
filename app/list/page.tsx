import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Box } from "@mui/material";
import UserTable from "@/components/UserTable";

export default function List() {
    return (

        <Box sx={{ paddingTop: '150px', paddingBottom: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Header />
            <Box sx={{
                maxWidth: 'lg',
                display: 'flex',
                justifyContent: 'center',
                width: '100%'
            }}>
                <UserTable/>
            </Box>
            <Footer />
        </Box>
    );
}
