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

    const onClickHandle = async () =>{
        const userInfo = await userinfoFactory().fetch()
        const classInfo = await classFactory().show(userInfo.classId)

        await teamFactory().create({
            name: `${classInfo.name}`,
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
