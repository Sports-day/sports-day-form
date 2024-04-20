import {Button, Stack, Typography, Paper, BottomNavigation} from "@mui/material";

const Footer = () => {
    return (
        <Paper sx={{position: 'fixed', bottom: 0, left: 0, right: 0, }}>
            <BottomNavigation
                sx={{
                color: 's-lightest.main',
                background: `radial-gradient(ellipse at left, #5F6DC2, #4A5ABB)`,
                height: '70px'
            }}
            >
                <Stack direction='row' spacing={3}
                       sx={{
                           justifyContent: 'center',
                           alignItems: 'center',
                           width: '100%'
                       }}>
                    <Typography variant='subtitle1' component='div'>
                        チーム登録フロー：晴天時のチーム登録→雨天時のチーム登録→登録漏れの確認→完了
                    </Typography>
                    <Button
                        variant='contained'
                        href={"/form"}
                        disableElevation={true}
                        sx={{
                            flex: '0.18',
                            py: 1.0,
                            color: 's-lightest.main',
                            backgroundColor: 's-lighter.main',
                            borderRadius: "10px",
                        }}>
                        戻る
                    </Button>
                    <Button
                        variant='contained'
                        href={"/list"}
                        disableElevation={true}
                        sx={{
                            flex: '0.18',
                            py: 1.0,
                            backgroundColor: 's-light.main',
                            borderRadius: "10px",
                            color: 's-dark.main'
                        }}>
                        確認画面に進む
                    </Button>
                </Stack>
            </BottomNavigation>
        </Paper>
    );
};

export default Footer;
