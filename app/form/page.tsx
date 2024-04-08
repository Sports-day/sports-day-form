import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {Card, CardContent} from "@mui/material";


export default function Form() {
    return (
        <>
            <Header />
            <Card
                sx={{
                    display: 'flex',
                    borderRadius: '20px',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    padding: 2,
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',
                    maxWidth: '75%',
                    margin: '0 auto',
                    height: '50vh',
                    marginTop: 4,
                    '@media (min-width:600px)': {
                        maxWidth: '75%',
                        marginTop: 8
                    },
                    color: 's-lightest.main',
                    backgroundColor: 's-lightest.main'
                }}
            >
                <CardContent>

                </CardContent>

            </Card>
            <Footer/>
        </>
    );
}