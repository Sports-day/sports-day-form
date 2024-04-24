import { Stack, Typography, Paper, BottomNavigation} from "@mui/material";
import { ConfirmButton } from "@/components/ConfirmButton";
import { BackButton } from "@/components/BackButton";

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
                        チーム登録フロー：晴天時・雨天時のチーム登録→登録漏れの確認→完了
                    </Typography>
                    <BackButton />
                    <ConfirmButton />
                </Stack>
            </BottomNavigation>
        </Paper>
    );
};

export default Footer;
