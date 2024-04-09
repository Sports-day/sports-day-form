import * as React from 'react';
import Button from '@mui/material/Button';

export function PolicyButton() {
    return (
        <Button
            variant="contained"
            sx={{
                color: "s-lightest.main",
                backgroundColor: 's-lighter.main',
                borderRadius: "9px",
                py: 1.5
            }}
            >
            プライバシーポリシー
        </Button>
    )
}
