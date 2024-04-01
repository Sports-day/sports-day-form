import * as React from 'react';
import Button from '@mui/material/Button';
import {createPalette} from "@/components/palette";

export function PolicyButton() {
    return (
        <Button
            variant="contained"
            sx={{
            background: createPalette.palette.primary.main,
            color: createPalette.palette.lighter.main
        }}>
            プライバシーポリシー
        </Button>
    )
}
