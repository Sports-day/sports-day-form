import * as React from 'react';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import UserData from "@/components/UserData";
import TableBody from "@mui/material/TableBody";
import {userinfoFactory} from "@/src/models/UserinfoModel";
import {classFactory} from "@/src/models/ClassModel";

export default async function UserTable() {
    const userInfo = await userinfoFactory().fetch()
    const classMembers = await classFactory().getUsers(userInfo.classId)

    return (
        <TableContainer component={Paper} elevation={0} sx={{border: '1px solid #5F6DC2'}}>
            <Table sx={{ minWidth: 650, borderCollapse: 'collapse' }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ fontWeight: 'bold', color: '#2F3C8C', backgroundColor: '#E5E7F3',   }}>学籍番号</TableCell>
                        <TableCell sx={{ fontWeight: 'bold', color: '#2F3C8C', backgroundColor: '#E5E7F3',  }} align="left">名前</TableCell>
                        <TableCell sx={{ fontWeight: 'bold', color: '#2F3C8C', backgroundColor: '#E5E7F3',   }} align="left">晴天時の競技</TableCell>
                        <TableCell sx={{ fontWeight: 'bold', color: '#2F3C8C', backgroundColor: '#E5E7F3',   }} align="left">晴天時のチーム</TableCell>
                        <TableCell sx={{ fontWeight: 'bold', color: '#2F3C8C', backgroundColor: '#E5E7F3',   }} align="left">雨天時の競技</TableCell>
                        <TableCell sx={{ fontWeight: 'bold', color: '#2F3C8C', backgroundColor: '#E5E7F3',   }} align="left">雨天時のチーム</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {classMembers.map((member)=> {
                        return(
                            <UserData user={member} key={member.id}/>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
