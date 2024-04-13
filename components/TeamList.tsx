import {Grid} from "@mui/material";
import React from "react";
import TeamDetail from "@/components/TeamDetail";
import {TeamTag} from "@/src/models/TeamTagModel";
import {teamFactory} from "@/src/models/TeamModel";
import {userinfoFactory} from "@/src/models/UserinfoModel";

export type TeamListProps = {
    tag: TeamTag
}

export default async function TeamList(props: TeamListProps) {

    const teams = await teamFactory().index()
    const userinfo = await userinfoFactory().fetch()

    const components = teams
        .filter((team) => team.teamTagId == props.tag.id)
        .filter((team) => team.classId == userinfo.classId)
        .map((team) => {
            return (
                <Grid item
                      key={team.id}
                >
                    <TeamDetail
                        team={team}
                    />
                </Grid>
            )
        })


    return (
        <Grid container direction="row" spacing={2} alignItems="center" justifyContent="flex-start">
            {components}
        </Grid>
    )
}