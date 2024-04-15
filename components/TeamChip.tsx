'use client'
import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { classFactory } from "@/src/models/ClassModel";

export type TeamMemberProps = {
    classId: number
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 150,
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
    const [members, setMembers] = React.useState<string[]>([]);

    React.useEffect(() => {
        const fetchMembers = async () => {
            const memberData = await classFactory().getUsers(props.classId);
            setMembers(memberData.map(user => user.name));
        };
        fetchMembers();
    }, [props.classId]);

    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div>
            <FormControl sx={{ marginTop: 1, marginBottom: 1, width: 338 }}>
                <InputLabel shrink id="demo-multiple-chip-label" sx={{ color: 's-dark.main' }}>メンバーを登録してください</InputLabel>
                <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    displayEmpty
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput id="select-multiple-chip" label="メンバーを登録してください" />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.0 }}>
                            {selected.map((value) => (
                                <Chip key={value} label={value} />
                            ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                >
                    {members.map((memberName) => (
                        <MenuItem key={memberName} value={memberName} style={getStyles(memberName, personName, theme)}>
                            {memberName}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}