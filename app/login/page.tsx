import {Button, Box, Stack, Typography} from "@mui/material";
import LoginButton from "@/components/auth/LoginButton";
import {PolicyButton} from "@/components/PolicyButton";
import Image from "next/image";
import WiderLogo from "@/public/logo/widerlogotype.svg";

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
                    spacing={1}
                >
                    <Image src={"/logo/logo_form.png"} height={"24"} width={"282"} alt={"SPORTSDAY Form"}/>
                    <Typography
                        variant="subtitle2"
                    >
                        球技大会のチーム登録アプリケーション
                    </Typography>
                </Stack>
                <Stack
                    sx={{
                        width: 'fit-content',
                        alignItems:"center"
                }}
                    spacing="12px"
                >
                    <LoginButton/>
                    <PolicyButton/>
                    <Typography fontSize={"13px"} fontWeight={"400"} color={"#9aa6e5"}>SPORTSDAYを使うにはCookieが必要です</Typography>
                </Stack>
                <Button>
                    <Stack direction={"row"} spacing={0.5}>
                        <Typography fontWeight={"600"} color={"#99a5d6"}>(C)2024</Typography>
                        <WiderLogo width={80*1.5} height={13*1.5} fill={'#9aa6e5'}/>
                    </Stack>
                </Button>
            </Stack>
        </Box>
    )
}
