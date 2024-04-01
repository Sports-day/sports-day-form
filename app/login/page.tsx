'use client'
import {Icon, Stack, Typography} from "@mui/material";
import LoginButton from "@/components/auth/LoginButton";
import {PolicyButton} from "@/components/PolicyButton";
import {createPalette} from "@/components/palette";


export default function Login() {
    return (
            <Stack
                height="100lvh"
                justifyContent="center"
                alignItems="center"
                spacing={4}
                sx={{
                    backgroundColor: createPalette.palette.primary.dark,
                    color: createPalette.palette.primary.light,
            }} >
                <Stack
                    justifyContent="center"
                    alignItems="center"
                >
                    <Typography variant="h4">
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
                    spacing={1}
                >
                    <LoginButton />
                    <PolicyButton />
                </Stack>
            </Stack>
    )
}
