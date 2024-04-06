'use client'
import {Button, Stack, Typography, Paper, BottomNavigation} from "@mui/material";
import {createPalette} from "@/components/palette";

const Footer = () => {
    return (
        <Paper sx={{position: 'fixed', bottom: 0, left: 0, right: 0}}>
            <BottomNavigation color='primary'
                              sx={{
                                  height: '64px',
                                  color: createPalette.palette.lighter.main,
                                  backgroundColor: createPalette.palette.primary.dark
                              }}
            >

                <Stack direction='row' spacing={2.5}
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
                        sx={{
                            flex: '0.1',
                            background: createPalette.palette.primary.main,
                            color: createPalette.palette.lighter.main
                        }}>
                        戻る
                    </Button>
                    <Button
                        variant='contained'
                        sx={{
                            flex: '0.1',
                            color: createPalette.palette.primary.dark,
                            background: createPalette.palette.lighter.main
                        }}>
                        確認画面に進む
                    </Button>
                </Stack>
            </BottomNavigation>
        </Paper>
    );
};

export default Footer;
