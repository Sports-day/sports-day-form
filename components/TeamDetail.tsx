import {Card, Typography, Stack, Button, Box} from "@mui/material";
import TeamChip from "@/components/TeamChip"
import AthleteChip from "@/components/AthleteChip"
import React from "react";
import {Team} from "@/src/models/TeamModel";
import DeleteTeam from "@/components/DeleteTeam";

export type TeamDetailProps = {
    team: Team
}

export default function TeamDetail(props: TeamDetailProps) {
    return (
        <Card variant="outlined"
              sx={{
                  display: 'flex',
                  borderRadius: '9px',
                  alignItems: 'flex-start',
                  padding: 1,
                  margin: '0 auto',
                  marginTop: 4,
                  color: 's-lightest.main',
                  backgroundColor: 's-lightest.main',
                  borderColor: 's-lighter.main'
              }}
        >
            <Box padding="8px" paddingRight="8px">
                <Stack spacing={1.5}>
                    <Stack>
                        <Typography variant="h6" color="s-darkest.main" fontWeight="bold">
                            {props.team.name}の情報を登録
                        </Typography>
                    </Stack>
                    <Stack spacing={3}>
                        <Stack spacing={1}>
                            <TeamChip classId={props.team.classId}/>
                            <AthleteChip/>
                        </Stack>
                        <DeleteTeam teamId={props.team.id}/>
                    </Stack>
                </Stack>

            </Box>

        </Card>


    );
}