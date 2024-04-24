'use client'
import Button from '@mui/material/Button';
import {usePathname} from "next/navigation";

export function ConfirmButton() {
    const pathname = usePathname()

    return (
        <>
            {pathname.startsWith("/form") &&
                <Button
                    variant='contained'
                    href="/list"
                    disableElevation={true}
                    sx={{
                        flex: '0.15',
                        py: 1.0,
                        backgroundColor: 's-light.main',
                        borderRadius: "10px",
                        color: 's-dark.main',
                        textAlign: 'center'
                    }}
                >
                    確認画面に進む
                </Button>
            }
        </>
    );
}
