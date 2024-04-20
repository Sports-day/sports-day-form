'use client'
import * as React from 'react';
import {Theme, useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import CancelIcon from '@mui/icons-material/Cancel';
import {classFactory} from "@/src/models/ClassModel";
import {teamFactory} from "@/src/models/TeamModel";
import {useAsync} from "react-use";
import {User} from "@/src/models/UserModel";

export type TeamMemberProps = {
    classId: number;
    teamId: number;
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
            color: 's-dark.main'
        },
    },
};

function getStyles(member: string, personName: readonly string[], theme: Theme) {
    return {
        fontWeight:
            personName.indexOf(member) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export default function MultipleSelectChip(props: TeamMemberProps) {
    const theme = useTheme();
    const [personName, setPersonName] = React.useState<string[]>([]);
    const [members, setMembers] = React.useState<User[]>([]);

    useAsync(async () => {
        const memberData = await classFactory().getUsers(props.classId);
        setMembers(memberData);

        const teamMember = await teamFactory().getTeamUsers(props.teamId)
        setPersonName(teamMember.map((member) => member.name))
    }, [props.classId]);

    const handleChange = async (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: {value},
        } = event;

        const personNames = typeof value === 'string' ? value.split(',') : value;

        // 削除するユーザーの処理
        const whatIsDeleted = personName.filter((value) => !personNames.includes(value));

        for (const name of whatIsDeleted) {
            const user = members.find(member => member.name === name);
            if (user) {
                await teamFactory().removeTeamUser(props.teamId, user.id);
            }
        }

        // 追加するユーザーの処理
        const whatIsAdded = personNames.filter((value) => !personName.includes(value));
        const addedIds = whatIsAdded
            .map((name) => members.find(member => member.name === name)?.id)
            .filter((id): id is number => id !== undefined); // ここでも同様の型ガードを使用

        if (addedIds.length > 0) {
            await teamFactory().addTeamUsers(props.teamId, addedIds);
        }

        setPersonName(personNames);
    };


    const chipDelete = async (name: string) => {
        // 名前に関連付けられたユーザー ID を見つけます
        const user = members.find(member => member.name === name);

        if (user) {
            try {
                // サーバー上の情報を更新するために removeTeamUser を呼び出します
                await teamFactory().removeTeamUser(props.teamId, user.id);

                // UI の変更を反映するためにローカルステートを更新します
                setPersonName(personName.filter(value => value !== name));
            } catch (error) {
                console.error('チームユーザーの削除に失敗しました:', error);
            }
        } else {
            console.warn('その名前のユーザーが見つかりませんでした:', name);
        }
    };

    return (
        <div>
            <FormControl sx={{marginTop: 1, marginBottom: 1, width: 338}}>
                <InputLabel shrink id="demo-multiple-chip-label"
                            sx={{color: 's-dark.main'}}>メンバーを登録してください</InputLabel>
                <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    sx={{
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: 's-dark.main',
                        }
                    }}
                    multiple
                    displayEmpty
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput id="select-multiple-chip" label="メンバーを登録してください"/>}
                    renderValue={(selected) => (
                        <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 1.0}}>
                            {selected.map((value) => (
                                <Chip key={value} label={value}
                                      sx={{
                                          color: 's-light.main',
                                          backgroundColor: 's-lighter.main',
                                          '& .MuiChip-deleteIcon': {
                                              color: 's-light.main', // 通常時の色
                                              '&:hover': {
                                                  color: 's-light.main' // ホバー時も同じ色にする
                                              }
                                          }
                                      }}
                                      deleteIcon={<CancelIcon/>}
                                      onDelete={() => {
                                          chipDelete(value)
                                      }}
                                      onMouseDown={(event) => {
                                          event.stopPropagation()
                                      }}
                                />
                            ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                >
                    {members.map((member) => (
                        <MenuItem key={member.name} value={member.name}
                                  style={getStyles(member.name, personName, theme)}>
                            {member.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
