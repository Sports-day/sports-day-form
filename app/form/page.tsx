import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SportList from "@/components/SportList";
import {Box} from "@mui/material";

export default function Form() {
    return (
        <Box sx={{ paddingTop: '50px', paddingBottom: '80px'}}>
            <Header />
            <SportList />
            <Footer/>
        </Box>
    );
}