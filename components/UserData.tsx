import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { User } from "@/src/models/UserModel";
import { teamFactory } from "@/src/models/TeamModel";
import { teamTagFactory } from "@/src/models/TeamTagModel";
import { Fragment } from "react";

export type UserDataProps = {
    user: User;
}

type TeamInfo = {
    teamName: string;
    tagName: string;
}

export default async function UserData(props: UserDataProps) {
    const teamData = await teamFactory().index();
    const teamTags = await teamTagFactory().index();

    const filteredTeams = teamData.filter(team => props.user.teamIds.includes(team.id));

    const teamInfoList: TeamInfo[] = filteredTeams.map(team => {
        return {
            teamName: team.name,
            tagName: (teamTags.find(tag => tag.id === team.teamTagId) || { name: '未登録' }).name
        }
    })

    teamInfoList.sort((a, b) => {
        if (a.tagName.includes("晴天時") && !b.tagName.includes("晴天時")) return -1;
        if (!a.tagName.includes("晴天時") && b.tagName.includes("晴天時")) return 1;
        return 0;
    })

    // チーム情報がない場合も「未登録」を表示
    if (teamInfoList.length === 0) {
        teamInfoList.push({ teamName: '未登録', tagName: '未登録' });
    }

    // チーム情報が1つの場合も2つ目のチーム情報を追加しておく
    if (teamInfoList.length === 1) {
        teamInfoList.push({ teamName: '未登録', tagName: '未登録' });
    }

    const teamInfoComponents = teamInfoList.map((info, index) => (
        <Fragment key={index}>
            <TableCell
                sx={{
                    fontWeight: 'bold',
                    color: info.tagName === '未登録' ? 'red' : '#2F3C8C',
                    border: 0
                }}
                align="left"
            >
                {info.tagName}
            </TableCell>
            <TableCell
                sx={{
                    fontWeight: 'bold',
                    color: info.teamName === '未登録' ? 'red' : '#2F3C8C',
                    border: 0
                }}
                align="left"
            >
                {info.teamName}
            </TableCell>
        </Fragment>
    ));

    const alertOutOfRange = (
        <Fragment>
            <TableCell
                sx={{ fontWeight: 'bold', color: 'red', border: 0 }}
                align="left"
            >
                ３つ以上のチームに所属しています。<br />
                {teamInfoList.map((info, index) => (
                    <Fragment key={index}>
                        {info.tagName} チーム{info.teamName}<br />
                    </Fragment>
                ))}
            </TableCell>
        </Fragment>
    );

    return (
        <TableRow>
            <TableCell
                sx={{
                    fontWeight: 'bold',
                    color: '#2F3C8C',
                    border: 0
                }}
            >
                {props.user.id}
            </TableCell>
            <TableCell
                sx={{
                    fontWeight: 'bold',
                    color: '#2F3C8C',
                    border: 0
                }}
                align="left"
            >
                {props.user.name}
            </TableCell>
            {teamInfoComponents.length > 2 ? alertOutOfRange : teamInfoComponents}
        </TableRow>
    );
}
