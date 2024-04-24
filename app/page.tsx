import * as React from "react";
import { Alert, Box, Button, IconButton, Stack, Tooltip } from "@mui/material";
import Typography from "@mui/material/Typography";
import { userinfoFactory } from "@/src/models/UserinfoModel";
import ProfileCard from "@/components/ProfileCard";
import { WarningRounded } from "@mui/icons-material";
import LogoutButton from "@/components/auth/LogoutButton";
import WiderLogo from "@/public/logo/widerlogotype.svg";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import AutoPageRefresh from "@/components/autoPageRefresh";

export default async function Userinfo() {
    const userInfo = await userinfoFactory().fetch();

    const showTeamError = userInfo && userInfo.teamIds.length > 2;

    return (
        <>
            <AutoPageRefresh />
            <Box
                padding={2}
                sx={{
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '30px',
                }}
            >
                <Stack
                    sx={{ width: '100%', maxWidth: '800px' }}
                    alignItems='center'
                    justifyContent='center'
                    spacing={3}
                >
                    <Typography
                        variant="h5"
                        color="s-darker.main"
                        fontWeight="bold"
                        sx={{
                            textAlign: 'center',
                        }}
                    >
                        {userInfo.name ?? "unknown"} さん
                    </Typography>
                    <Typography
                        variant="h5"
                        color="s-darker.main"
                        fontWeight="bold"
                        sx={{
                            textAlign: 'center',
                        }}
                    >
                        あなたの情報を確認しましょう
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        sx={{
                            textAlign: 'center',
                            lineHeight: 2,
                            color: "#7f8cd6",
                        }}
                    >
                        チームが登録されると追加されます
                    </Typography>

                    {!showTeamError && userInfo && <ProfileCard user={userInfo} />}

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
                                    <Typography variant="subtitle2" sx={{ lineHeight: 1 }}>
                                        チーム登録に不備があります。体育委員に知らせてください。
                                    </Typography>
                                </Box>
                            </Box>
                        </Alert>
                    )}

                    <Stack direction="row" spacing={1} alignItems="center">
                        <LogoutButton />
                        <Tooltip title="GitHub">
                            <IconButton
                                component={Link}
                                href="https://github.com/Sports-day/sports-day-form"
                                sx={{ width: "fit-content" }}
                            >
                                <GitHubIcon color="primary" />
                            </IconButton>
                        </Tooltip>
                        <Button>
                            <Stack direction="row" spacing={0.5} alignItems="center">
                                <Typography fontWeight="600" color="#99a5d6">(C)2024</Typography>
                                <WiderLogo width={80 * 1.5} height={13 * 1.5} fill={'#9aa6e5'} />
                            </Stack>
                        </Button>
                    </Stack>
                </Stack>
            </Box>
        </>
    );
}
