import * as React from "react";
import {Alert, Box, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import { userinfoFactory } from "@/src/models/UserinfoModel";
import ProfileCard from "@/components/ProfileCard";
import { WarningRounded } from "@mui/icons-material";

export default async function Userinfo() {
    const userInfo = await userinfoFactory().fetch();

    const showTeamError = userInfo && userInfo.teamIds.length > 2;

    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    color: 's-lightest.main',
                    background: '#6C75AB',
                    height: '70px'
                }}
            />
            <Box
                padding={2}
                sx={{
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '30px',
                }}
            >

                <Stack
                    sx={{ width: '100%' }}
                    alignItems='stretch'
                    justifyContent='center'
                >
                    <Stack spacing={3} sx={{ position: 'relative' }}>
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
                        {!showTeamError && userInfo && <ProfileCard user={userInfo} />}
                        <Stack spacing={2} alignItems='center'>
                            <Alert
                                variant="outlined"
                                icon={false}
                                sx={{
                                    width: '100%',
                                    fontWeight: 'bold',
                                    color: '#A22E1D',
                                    borderRadius: '9px',
                                    backgroundColor: '#FDE3DE',
                                    borderColor: '#A22E1D',
                                    py: 1.5,
                                    display: showTeamError ? 'none' : 'block',
                                }}
                            >
                                <Box display="flex" alignItems="center">
                                    <WarningRounded fontSize="medium" />
                                    <Box sx={{ paddingLeft: '8px', display: 'flex', alignItems: 'center' }}>
                                        <Typography variant="subtitle2" fontWeight='bold' sx={{ lineHeight: 1 }}>
                                            間違っていたら体育局員に必ず知らせてください！
                                        </Typography>
                                    </Box>
                                </Box>
                            </Alert>



                            {showTeamError && (
                                <Alert
                                    variant="outlined"
                                    icon={false}
                                    sx={{
                                        width: '100%',
                                        fontWeight: 'bold',
                                        color: '#A22E1D',
                                        borderRadius: '9px',
                                        backgroundColor: '#FDE3DE',
                                        borderColor: '#A22E1D',
                                        py: 1.5,
                                    }}
                                >
                                    <Box display="flex" alignItems="center">
                                        <WarningRounded fontSize="medium" />
                                        <Box sx={{ paddingLeft: '8px', display: 'flex', alignItems: 'center' }}>
                                            <Typography variant="subtitle2" fontWeight='bold' sx={{ lineHeight: 1 }}>
                                                あなたは３つ以上のチームに所属しています！
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Alert>
                            )}
                        </Stack>
                    </Stack>
                </Stack>
            </Box>
        </>

    );
}
