'use client'
import {useEffect, useState} from "react";
import {Typography} from "@mui/material";

export default function Userinfo() {
    const [user, setUser] = useState("")

    useEffect(() => {
        fetch('http://localhost:8080/v1/userinfo', {
            credentials: 'include',
        })
            .then(response => response.text())
            .then(data => {
                setUser(data)
            })
    }, [])

    return (
        <>
            <Typography variant={"h4"}>Userinfo</Typography>
            <Typography variant={"body1"}>{user}</Typography>
        </>
    )
}