'use client'
import Button from "@mui/material/Button";
import React from "react";
import { teamFactory } from "@/src/models/TeamModel";
import { useRouter } from "next/navigation";

export type DeleteTeamProps = {
    teamId: number
}

export default function DeleteTeam(props: DeleteTeamProps) {
    const router = useRouter()

    const onClickHandle = async () =>{

        await teamFactory().delete(props.teamId)
        router.refresh()
    }
    return (

        <Button
            onClick={onClickHandle}
            variant="outlined"
            size="small"
            fullWidth
            color="warning"
            style={{ border: '1px solid' }}
            sx={{
                borderRadius: "9px",
                py: 0.3
            }}
        >
            このチームを消す
        </Button>
    )
}
