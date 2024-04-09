import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {Box} from "@mui/material";


export default function Form() {
    return (
        <>
            <Header />
            <Box
                color="s-darkest"
                borderRadius="20px" // 角を丸める
                boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)" // 影の設定
                marginTop="80px" // 上部からのマージン
                padding="20px"
            >
            </Box>
            <Footer/>
        </>
    );
}