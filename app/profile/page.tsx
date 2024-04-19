import { Box, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import { userinfoFactory } from "@/src/models/UserinfoModel";
import ProfileCard from "@/components/ProfileCard";

export default async function Userinfo() {
    const userinfo = await userinfoFactory().fetch()

    return (
        <Box
            padding={2}
            sx={{
                pt: '70px',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            <AppBar position="fixed"
                    sx={{
                        color: 's-lightest.main',
                        background: `radial-gradient(ellipse at left, #5F6DC2, #4A5ABB)`,
                        height: '70px'
                    }}
            />
            <Stack
                spacing={1}
                sx={{ width: '100%' }}
                alignItems='stretch'
                justifyContent='center'
            >
                <Typography
                    variant="h6"
                    color="s-darkest.main"
                    fontWeight="bold"
                    sx={{
                        textAlign: 'center',
                        width: '100%'
                    }}
                >
                    中村 有機＿富山さん<br/>あなたの情報を確認しましょう
                </Typography>

                <ProfileCard/>
            </Stack>
        </Box>


    );
}
