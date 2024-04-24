'use client'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Stack} from "@mui/material";
import {teamTagFactory} from "@/src/models/TeamTagModel";
import {teamFactory} from "@/src/models/TeamModel";
import {User} from "@/src/models/UserModel";
import {CustomCardContent} from "@/components/theme";
import SDlogo from "@/public/logo/logo.svg";


export type ProfileCardProps = {
    user: User
}

type TeamData = {
    sportName: string;
    teamMembers: string[];
}

export default async function ProfileCard(props: ProfileCardProps) {
    const teams = await teamFactory().index();
    const teamTags = await teamTagFactory().index();

    const teamDataList: TeamData[] = [];

    for (const team of teams) {
        if (props.user.teamIds.includes(team.id)) {
            const tag = teamTags.find(tag => tag.id === team.teamTagId);
            if (tag) {
                const teamUsers = await teamFactory().getTeamUsers(team.id);

                const teamData: TeamData = {
                    sportName: tag.name,
                    teamMembers: teamUsers.map(user => user.name)
                }

                teamDataList.push(teamData);
            }
        }
    }

    return (
        <>
            {teamDataList.map((team, index) => (
                <Card
                    key={index}
                    variant="outlined"
                    sx={{
                        width: '100%',
                        maxWidth: "800px",
                        margin: '8px 0',
                        boxShadow: 0,
                        borderRadius: '9px',
                        display: 'flex',
                        alignItems: 'flex-start',
                        color: 's-light.main',
                        background: `radial-gradient(ellipse at left, #5F6DC2, #3E4EB3)`,
                        border: 0,
                        paddingBottom: 0
                    }}
                >
                    <CustomCardContent sx={{ width: '100%' }}>
                        <Stack
                            direction='column'
                            spacing={1}
                            sx={{
                                width: '100%',
                                height: '100%'
                            }}
                        >
                            <SDlogo width={135} height={16} fill={'#9aa6e5'}/>
                            <Card variant="outlined"

                                  sx={{
                                      height: '100px',
                                      boxShadow: 0,
                                      borderRadius: '9px',
                                      display: 'flex',
                                      alignItems: 'flex-start',
                                      color: 's-light.main',
                                      background: `rgba(255, 255, 255, 0.1)`,
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
                            <Card
                                variant="outlined"
                                sx={{
                                    width: '100%',
                                    maxWidth: '100%',
                                    margin: 0,
                                    boxShadow: 0,
                                    borderRadius: '9px',
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    color: 's-light.main',
                                    background: `rgba(255, 255, 255, 0.1)`,
                                    border: 0
                                }}
                            >
                                <CardContent>
                                    <Stack
                                        direction='column'
                                        justifyContent='center'
                                        sx={{width: '100%', height: '100%'}}
                                    >
                                        <Typography variant="subtitle2">
                                            あなたと同じチームの人
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
                    </CustomCardContent>
                </Card>
            ))}
        </>
    )
}

