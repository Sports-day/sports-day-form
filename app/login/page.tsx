import {Box, Stack, Typography} from "@mui/material";
import LoginButton from "@/components/auth/LoginButton";
import {PolicyButton} from "@/components/PolicyButton";

export default function Login() {
    return (
        <Box style={{ height: '100vh', justifyContent: 'center', alignItems: 'center' }}
             sx={{
                 color: 's-lightest.main',
                 background: `radial-gradient(ellipse at left, #5F6DC2, #3E4EB3)`
        }}>
            <Stack height="100vh" justifyContent="center" alignItems="center" spacing="32px">
                <Stack
                    justifyContent="center"
                    alignItems="center"
                >
                    <Typography variant="h4" >
                        SPORTSDAY
                    </Typography>
                    <Typography
                        variant="subtitle2"
                    >
                        球技大会のチーム登録プラットフォーム
                    </Typography>
                </Stack>
                <Stack
                    sx={{width: 'fit-content'}}
                    spacing="12px"
                >
                    <LoginButton/>
                    <PolicyButton/>
                </Stack>
            </Stack>
        </Box>
    )
}
