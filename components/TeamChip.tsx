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
        },
    },
};

function getStyles (id: number, selectedIds: readonly number[], theme: Theme) {
    const isSelected = selectedIds.indexOf(id) !== -1;
    return {
        fontWeight: isSelected ? 'bold' : theme.typography.fontWeightRegular,
        color: isSelected ? '#3E4EB3' : undefined,
        backgroundColor: isSelected ? '#EEEEEE' : undefined,
    };
}

export default function MultipleSelectChip(props: TeamMemberProps) {
    const theme = useTheme();
    const [selectedIds, setSelectedIds] = React.useState<number[]>([]);
    const [members, setMembers] = React.useState<User[]>([]);

    useAsync(async () => {
        const memberData = await classFactory().getUsers(props.classId);
        setMembers(memberData);

        const teamMember = await teamFactory().getTeamUsers(props.teamId)
        setSelectedIds(teamMember.map((member) => member.id))
    }, [props.classId]);

    const handleChange = async (event: SelectChangeEvent<typeof selectedIds>) => {
        const {
            target: {value},
        } = event;

        const formattedSelectedIds = typeof value === 'string' ? value.split(',') : value;
        const currentSelectedIds = formattedSelectedIds.map((id) => {
            if (typeof id === 'string') {
                console.log("parsed value")
                return parseInt(id)
            }
            return id
        });

        const whatIsDeleted = selectedIds.filter((value) => !currentSelectedIds.includes(value));

        for (const id of whatIsDeleted) {
            const user = members.find(member => member.id === id)
            if (user) {
                await teamFactory().removeTeamUser(props.teamId, user.id);
            }
        }

        const whatIsAdded = currentSelectedIds.filter((value) => !selectedIds.includes(value));
        const addedIds = whatIsAdded
            .filter((id) => members.find(member => member.id === id) !== undefined)

        if (addedIds.length > 0) {
            await teamFactory().addTeamUsers(props.teamId, addedIds);
        }

        setSelectedIds(currentSelectedIds);
    };


    const chipDelete = async (id: number | undefined) => {
        if (!id) {
            console.log('error: id is undefined')
            return
        }

        const user = members.find(member => member.id === id)

        if (user) {
            try {
                // サーバー上の情報を更新するために removeTeamUser を呼び出します
                await teamFactory().removeTeamUser(props.teamId, user.id);

                // UI の変更を反映するためにローカルステートを更新します
                setSelectedIds(selectedIds.filter(value => value !== id));
            } catch (error) {
                console.error('チームユーザーの削除に失敗しました:', error);
            }
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
                    value={selectedIds}
                    onChange={handleChange}
                    input={<OutlinedInput id="select-multiple-chip" label="メンバーを登録してください"/>}
                    renderValue={(selected) => (
                        <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 1.0}}>
                            {selected.map((value) => {
                                const user = members.find(member => member.id === value);
                                return (
                                    <Chip key={value} label={user?.name}
                                          sx={{
                                              color: 's-light.main',
                                              backgroundColor: 's-lighter.main',
                                              '& .MuiChip-deleteIcon': {
                                                  color: 's-light.main',
                                                  '&:hover': {
                                                      color: 's-light.main'
                                                  }
                                              }
                                          }}
                                          deleteIcon={<CancelIcon/>}
                                          onDelete={async () => {
                                              await chipDelete(user?.id)
                                          }}
                                          onMouseDown={(event) => {
                                              event.stopPropagation()
                                          }}
                                    />
                                )
                            })}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                >
                    {members.map((member) => (
                        <MenuItem
                            key={member.id}
                            value={member.id}
                            style={getStyles(member.id, selectedIds, theme)}
                        >
                            {member.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
