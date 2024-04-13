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

//メニューに関する表示の設定
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 150,

        },
    },
};

//追加する項目の設定
const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

//指定されている名前のフォントサイズを変更
function getStyles(name: string, personName: readonly string[], theme: Theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}


export default function MultipleSelectChip() {
    const theme = useTheme();
    const [personName, setPersonName] = React.useState<string[]>([]);

    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div>
            <FormControl sx={{marginTop: 1, marginBottom: 1, width: 335}}>
                <InputLabel shrink id="demo-multiple-chip-label" sx={{ color: 's-dark.main' }} >競技経験者の数を登録してください（オプション）</InputLabel>
                <Select
                    labelId="demo-multiple-chip-label"
                    sx={{
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: 's-darkest.main',
                        } }}
                    id="demo-multiple-chip"
                    multiple
                    displayEmpty
                    label="メンバーを登録してください"
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput
                        id="select-multiple-chip"
                        label="競技経験者の数を登録してください（オプション）"
                    />}
                    renderValue={(selected) => (
                        <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 1.0}}>
                            {selected.map((value) => (
                                <Chip key={value} label={value}/>
                            ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                >
                    {names.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, personName, theme)}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}