'use client'
import React, { useState, useEffect } from 'react';
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { User } from "@/src/models/UserModel";
import { teamFactory } from "@/src/models/TeamModel";
import { teamTagFactory } from "@/src/models/TeamTagModel";

export type UserDataProps = {
    user: User;
}

const UserData = ({ user }: UserDataProps) => {
    const [teamInfo, setTeamInfo] = useState<{ teamName: string; tagName: string }[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const teamData = await teamFactory().index();
                const filteredTeams = teamData.filter(team => user.teamIds.includes(team.id));

                const teamTags = await teamTagFactory().index();

                let info = filteredTeams.map(team => ({
                    teamName: team.name,
                    tagName: (teamTags.find(tag => tag.id === team.teamTagId) || { name: 'No tag' }).name
                }));

                // タグ名に基づいてソート
                info.sort((a, b) => {
                    if (a.tagName.includes("晴天時") && !b.tagName.includes("晴天時")) return -1;
                    if (!a.tagName.includes("晴天時") && b.tagName.includes("晴天時")) return 1;
                    return 0;
                });

                setTeamInfo(info);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            }
        };

        fetchData();
    }, [user.teamIds]);

    return (
        <TableRow>
            <TableCell sx={{ fontWeight: 'bold', color: '#2F3C8C', border: 0 }}>{user.id}</TableCell>
            <TableCell sx={{ fontWeight: 'bold', color: '#2F3C8C', border: 0 }} align="left">{user.name}</TableCell>
            {teamInfo.map((info, index) => (
                <React.Fragment key={index}>
                    <TableCell sx={{ fontWeight: 'bold', color: '#2F3C8C', border: 0 }} align="left">{info.tagName}</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', color: '#2F3C8C', border: 0 }} align="left">{info.teamName}</TableCell>
                </React.Fragment>
            ))}
        </TableRow>
    );
}

export default UserData;
