import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Stack} from "@mui/material";

export default function ProfileCard() {
    return (
        <Card variant="outlined" sx={{
            width: '100%',
            maxWidth: '100%',
            margin: 0,
            boxShadow: 0,
            borderRadius: '9px',
            display: 'flex',
            alignItems: 'flex-start',
            color: 's-light.main',
            background: `radial-gradient(ellipse at left, #5F6DC2, #3E4EB3)`,
            border: 0
        }}>
            <CardContent sx={{ width: '100%' }}>
                <Stack
                    direction='row'
                    padding={1}
                    justifyContent="space-between"  // 左右に要素を配置する
                    alignItems="center"  // 中央揃え
                    sx={{ width: '100%' }}
                >
                    <Typography variant="h6" component="div">
                        SPORTSDAY
                    </Typography>
                    <Typography>
                        なみき ときあ
                    </Typography>
                </Stack>
                <Stack spacing={2}>
                    <Card variant="outlined" sx={{
                        width: '100%',
                        maxWidth: '100%',
                        height: '70px',
                        margin: 0,
                        boxShadow: 0,
                        borderRadius: '9px',
                        display: 'flex',
                        alignItems: 'flex-start',
                        color: 's-light.main',
                        background: `radial-gradient(ellipse at left, #7F8CD6, #5F6DC2)`,
                        border: 0
                    }}>
                        <CardContent sx={{ height: '70px',}}>
                            <Stack
                                direction='column'
                                justifyContent="space-between"  // 左右に要素を配置する// 中央揃え
                                sx={{ width: '100%' }}
                            >
                                <Typography variant="subtitle2">
                                    あなたの競技
                                </Typography>
                                <Typography variant="h6" fontWeight="bold">
                                    バスケットボール
                                </Typography>
                            </Stack>
                        </CardContent>
                    </Card>
                    <Card variant="outlined" sx={{
                        width: '100%',
                        maxWidth: '100%',
                        margin: 0,
                        boxShadow: 0,
                        borderRadius: '9px',
                        display: 'flex',
                        alignItems: 'flex-start',
                        color: 's-light.main',
                        background: `radial-gradient(ellipse at left, #7F8CD6, #5F6DC2)`,
                        border: 0
                    }}>
                        <CardContent>
                            <Stack
                                direction='column'
                                padding={1}
                                justifyContent="space-between"  // 左右に要素を配置する// 中央揃え
                                sx={{ width: '100%' }}
                            >
                                <Typography variant="subtitle2">
                                    あなたと同じチームの人一覧
                                </Typography>
                                <Typography variant="h6" fontWeight="bold">
                                    Aさん
                                    Bさん
                                    Cさん
                                </Typography>
                            </Stack>
                        </CardContent>
                    </Card>
                </Stack>
            </CardContent>
        </Card>
    );
}
