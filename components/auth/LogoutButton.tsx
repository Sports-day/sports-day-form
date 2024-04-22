'use client'
import {Button, IconButton, Tooltip} from "@mui/material";
import crypto from 'crypto';
import * as querystring from "querystring";
import {useEffect, useState} from "react";
import Cookies from "js-cookie";
import {useRouter} from "next/navigation";
import {HiArrowRightOnRectangle} from "react-icons/hi2";

export default function LogoutButton() {
    const router = useRouter()

    return (
        <Tooltip title={"ログアウト"}>
            <IconButton
                onClick={() => {
                    //  remove cookie
                    Cookies.remove("access_token")
                    //  redirect with next
                    router.push("/login")
                }}
            >
                <HiArrowRightOnRectangle color={"#7f8cd6"}/>
            </IconButton>
        </Tooltip>
    );
}
