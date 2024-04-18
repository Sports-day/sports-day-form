import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

import * as React from "react";
import {User} from "@/src/models/UserModel";
import {teamFactory} from "@/src/models/TeamModel";
import {teamTagFactory} from "@/src/models/TeamTagModel";

export type UserDataProps = {
    user: User;
}

const UserData = async (props: UserDataProps) => {
    const teamData = await teamFactory().index();
    const teams = teamData.filter(team => props.user.teamIds.includes(team.id));
    const names = teams.map(team => team.name);

    const teamTags = await teamTagFactory().index();
    // Assuming team tags are mapped to teams by teamTagId
    const teamTagsMapped = teams.map(team => {
        const tag = teamTags.find(tag => tag.id === team.teamTagId);
        return tag ? tag.name : 'No tag';
    });

    // Render component
    return (
        <TableRow>
            <TableCell sx={{fontWeight: 'bold', color: '#2F3C8C', border: 0}}>{props.user.id}</TableCell>
            <TableCell sx={{fontWeight: 'bold', color: '#2F3C8C', border: 0}} align="left">{props.user.name}</TableCell>
            <TableCell sx={{fontWeight: 'bold', color: '#2F3C8C', border: 0}} align="left">{teamTagsMapped[0] || 'No Tag'}</TableCell>
            <TableCell sx={{fontWeight: 'bold', color: '#2F3C8C', border: 0}} align="left">{names[0] || 'No Team'}</TableCell>
            <TableCell sx={{fontWeight: 'bold', color: '#2F3C8C', border: 0}} align="left">{teamTagsMapped[1] || 'No Tag'}</TableCell>
            <TableCell sx={{fontWeight: 'bold', color: '#2F3C8C', border: 0}} align="left">{names[1] || 'No Team'}</TableCell>
        </TableRow>
    );
}

export default UserData;
