import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Stack} from "@mui/material";
import {teamTagFactory} from "@/src/models/TeamTagModel";
import {teamFactory} from "@/src/models/TeamModel";
import {User} from "@/src/models/UserModel";

export type UserDataProps = {
    user: User
}

export default async function UserData({user}: UserDataProps) {

    const teamData = await teamFactory().index();
    const teamTags = await teamTagFactory().index();

    const data: { sportName: string; teamMembers: string[] }[] = [];

    for (const team of teamData) {
        if (user.teamIds.includes(team.id)) {
            const tag = teamTags.find(tag => tag.id === team.teamTagId);
            if (tag) {
                const sportName = tag.name;
                const teamUsers = await teamFactory().getTeamUsers(team.id);
                const teamMembers = teamUsers.map(user => user.name);
                data.push({sportName, teamMembers});
            }
        }
    }

    return (
        <>
            {data.map((team, index) => (
                <Card key={index} variant="outlined" sx={{
                    width: '100%',
                    maxWidth: '100%',
                    margin: '8px 0',
                    boxShadow: 0,
                    borderRadius: '9px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    color: 's-light.main',
                    background: `radial-gradient(ellipse at left, #5F6DC2, #3E4EB3)`,
                    border: 0
                }}>
                    <CardContent sx={{width: '100%'}}>
                        <Stack
                            direction='row'
                            padding={1}
                            justifyContent="space-between"  // 左右に要素を配置する
                            alignItems="center"  // 中央揃え
                            sx={{width: '100%'}}
                        >
                            <Typography variant="h6" component="div">
                                SPORTSDAY
                            </Typography>
                            <Typography>
                                {user.name}
                            </Typography>
                        </Stack>
                        <Stack direction='column' >
                            <Stack paddingBottom={1}>
                                <Card variant="outlined"

                                      sx={{
                                          height: '100px',
                                          boxShadow: 0,
                                          borderRadius: '9px',
                                          display: 'flex',
                                          alignItems: 'flex-start',
                                          color: 's-light.main',
                                          background: `radial-gradient(ellipse at left, #6F7DCC, #5F6DC2)`,
                                      }}>
                                    <CardContent sx={{width: '100%', height: '100%'}}>
                                        <Stack
                                            direction='column'
                                            justifyContent='center'
                                            sx={{width: '100%', height: '100%'}}
                                        >
                                            <Typography variant="subtitle2">
                                                あなたの競技
                                            </Typography>
                                            <Typography variant="h6" fontWeight="bold">
                                                {team.sportName || 'Loading...'}
                                            </Typography>
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </Stack>
                            <Stack>
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
                                            justifyContent='center'
                                            sx={{width: '100%', height: '100%'}}
                                        >
                                            <Typography variant="subtitle2">
                                                あなたと同じチームの人一覧
                                            </Typography>
                                            <Stack direction="column">
                                                {team.teamMembers.map((member, index) => (
                                                    <Typography key={index} variant="h6" fontWeight="bold">
                                                        {member}
                                                    </Typography>
                                                ))}
                                            </Stack>
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </Stack>
                        </Stack>
                    </CardContent>
                </Card>
            ))}
        </>
    );
}

