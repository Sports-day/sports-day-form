'use client'
import Button from "@mui/material/Button";
import React from "react";
import {teamFactory} from "@/src/models/TeamModel";
import {userinfoFactory} from "@/src/models/UserinfoModel";
import {classFactory} from "@/src/models/ClassModel";
import {TeamTag} from "@/src/models/TeamTagModel";
import {useRouter} from "next/navigation";

export type AddTeamProps = {
    tag: TeamTag
}

export default function AddTeam(props: AddTeamProps) {
    const router = useRouter()

    const onClickHandle = async () => {
        const userInfo = await userinfoFactory().fetch()
        const classInfo = await classFactory().show(userInfo.classId)

        //  generate 2 random characters
        await teamFactory().create({
            name: `${classInfo.name}-${generateRandomString(2)}`,
            description: "",
            classId: classInfo.id,
            teamTagId: props.tag.id
        })

        router.refresh()
    }

    return (
        <Button onClick={onClickHandle}
                variant="contained"
                sx={{
                    color: "s-lightest.main",
                    backgroundColor: 's-lighter.main',
                    borderRadius: "9px",
                    marginTop: 2
                }}
        >
            チームを追加
        </Button>
    )
}

function generateRandomString(length: number): string {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * alphabet.length);
        result += alphabet[randomIndex];
    }
    return result;
}
