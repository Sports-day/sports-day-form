import { Box, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import { userinfoFactory } from "@/src/models/UserinfoModel";

export default async function Userinfo() {
    const userinfo = await userinfoFactory().fetch()

    return (
        <Box sx={{
            pt: '70px', // AppBarの高さに合わせて調整
            height: '100vh', // ビューポートの高さに合わせる
            display: 'flex',
            flexDirection: 'column'
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
                alignItems='center'
                justifyContent='center'
                sx={{ flexGrow: 1 }} // スタックが残りのスペースを埋めるようにする
            >
                <Typography sx={{ textAlign: 'center' }}>
                    中村 有機＿富山さん、
                    あなたの情報を確認しましょう
                </Typography>
            </Stack>
        </Box>
    );
}
