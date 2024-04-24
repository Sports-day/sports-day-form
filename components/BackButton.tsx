'use client'
import Button from '@mui/material/Button';
import {usePathname} from "next/navigation";

export function BackButton() {
    const pathname = usePathname()

    return (
        <>
            {pathname.startsWith("/list") &&
                <Button
                    variant='contained'
                    href={"/form"}
                    disableElevation={true}
                    sx={{
                        flex: '0.15',
                        py: 1.0,
                        borderRadius: "10px",
                        backgroundColor: 's-lighter.main',
                        color: 's-lightest.main',
                        textAlign: 'center'
                    }}
                >
                    戻る
                </Button>
            }
        </>
    );
}
