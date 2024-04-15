'use client'
import React, {ChangeEvent} from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from "@mui/material/InputLabel";

function NumberInput() {
    const [number, setNumber] = React.useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const numericValue = parseInt(value, 10);

        if (value === '' || (numericValue >= 0 && numericValue <= 50)) {
            setNumber(value);
        }
    };

    return (
            <TextField
                label="競技経験者の数を登録してください（オプション）"
                type="number"
                InputLabelProps={{
                    shrink: true
            }}
                value={number}
                onChange={handleChange}
                inputProps={{ min: 0, max: 50, step: 1 }} // HTML native validation
                variant="outlined"
                sx={{
                    '& .MuiInputLabel-root': {
                        // ラベルのデフォルトのスタイル
                        color: 's-dark.main',
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 's-darker.main',
                    }}}
            />
    );
}

export default NumberInput;
