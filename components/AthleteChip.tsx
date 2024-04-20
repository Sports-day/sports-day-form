'use client'
import React, {ChangeEvent, useEffect} from 'react';
import TextField from '@mui/material/TextField';
import {Team, teamFactory} from "@/src/models/TeamModel";
import {useRouter} from "next/navigation";

export type AthleteChipProps = {
    team: Team
}

type AthleteDataType = {
    value: number
}

export default function AthleteChip(props: AthleteChipProps) {
    const [number, setNumber] = React.useState('');
    const router = useRouter()

    useEffect(() => {
        try {
            const athleteData: AthleteDataType = JSON.parse(props.team.description);
            setNumber(athleteData.value.toString());
        } catch (e) {
            setNumber('');
        }
    }, [props.team.description])

    const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const numericValue = parseInt(value, 10);

        //  save number of athletes into team description
        const athleteData: AthleteDataType = {
            value: numericValue
        }

        await teamFactory().update(props.team.id, {
            name: props.team.name,
            classId: props.team.classId,
            teamTagId: props.team.teamTagId,
            description: JSON.stringify(athleteData)
        })

        if (value === '' || (numericValue >= 0 && numericValue <= 50)) {
            setNumber(value);
        }

        router.refresh()
    }

    return (
        <TextField
            label="競技経験者の数を登録してください（オプション）"
            type="number"
            InputLabelProps={{
                shrink: true
            }}
            value={number}
            onChange={handleChange}
            inputProps={{min: 0, max: 50, step: 1}} // HTML native validation
            variant="outlined"
            sx={{
                '& .MuiInputLabel-root': {
                    // ラベルのデフォルトのスタイル
                    color: 's-dark.main',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 's-darker.main',
                }
            }}
        />
    );
}
