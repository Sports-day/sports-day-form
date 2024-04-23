import React from "react";
import {Card, CardContent, Typography, Stack} from "@mui/material";
import {TeamTag} from "@/src/models/TeamTagModel";
import AddTeam from "@/components/AddTeam";
import TeamList from "@/components/TeamList";

export type SportTeamsProps = {
    tag: TeamTag
}



export default function SportTeams(props: SportTeamsProps) {
    return (
        <Card variant="outlined"
              sx={{
                  display: 'flex',
                  borderRadius: '20px',
                  alignItems: 'flex-start',
                  padding: 1,
                  maxWidth: 'lg',
                  margin: '0 auto',
                  marginTop: 4,
                  color: 's-lightest.main',
                  backgroundColor: 's-lightest.main'
              }}
        >
            <CardContent>
                <Stack spacing={4} direction="row" justifyContent="flex-start" alignItems="center">

                    <Typography variant="h6" color="s-darkest.main" fontWeight="bold">
                        {props.tag.name}
                    </Typography>

                </Stack>
                <AddTeam tag={props.tag} />
                <TeamList tag={props.tag} />
            </CardContent>
        </Card>

);
}