import * as React from "react";
import {Alert, Box, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import { userinfoFactory } from "@/src/models/UserinfoModel";
import ProfileCard from "@/components/ProfileCard";
import {WarningRounded} from "@mui/icons-material";

export default async function  Userinfo() {
    const userInfo = await userinfoFactory().fetch();

    return (
        <>
            <AppBar position="fixed"
                    sx={{
                        color: 's-lightest.main',
                        background: '#6C75AB',
                        height: '70px'
                    }}
            />
            <Box padding={2}
                 sx={{
                     height: '100vh',
                     display: 'flex',
                     flexDirection: 'column',
                     alignItems: 'center',
                     justifyContent: 'center',
                     marginTop: '70px',
                 }}>

                <Stack
                    spacing={4}
                    sx={{ width: '100%' }}
                    alignItems='stretch'
                    justifyContent='center'
                >
                    <Stack spacing={1}>
                        <Typography
                            variant="h5"
                            color="s-darker.main"
                            fontWeight="bold"
                            sx={{
                                textAlign: 'center',
                                width: '100%'
                            }}
                        >
                            {userInfo.name ?? "unknown"} さん
                        </Typography>
                        <Typography variant="h5"
                                    color="s-darker.main"
                                    fontWeight="bold"
                                    sx={{
                                        textAlign: 'center',
                                        width: '100%'
                                    }}>
                            あなたの情報を確認しましょう
                        </Typography>
                    </Stack>


                    {userInfo && <ProfileCard user={userInfo}/>}
                    <Alert
                        variant="outlined"
                        severity="error"
                        iconMapping={{ error: <WarningRounded fontSize="inherit" /> }}  // アイコンを指定
                        sx={{
                            fontWeight: 'bold',
                            color: '#A22E1D',
                            borderRadius: '9px',
                            backgroundColor: '#FDE3DE',
                            borderColor: '#A22E1D',
                            py: 1.5
                        }}
                    >
                        間違っていたら体育局員に必ず知らせてください！
                    </Alert>
                </Stack>
            </Box>
        </>

    );
}
