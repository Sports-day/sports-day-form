'use client'
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

export function ConfirmButton() {
    const [currentPage, setCurrentPage] = useState(window.location.pathname);
    const isListPage = currentPage === '/list';

    useEffect(() => {
        const handleLocationChange = () => {
            setCurrentPage(window.location.pathname);
        };
        window.addEventListener('popstate', handleLocationChange);
        return () => {
            window.removeEventListener('popstate', handleLocationChange);
        };
    }, []);

    return (
        <>
            <Button
                variant='contained'
                href="/list"
                disableElevation={true}
                sx={{
                    flex: '0.18',
                    py: 1.0,
                    backgroundColor: 's-light.main',
                    borderRadius: "10px",
                    color: 's-dark.main',
                    textAlign: 'center'
                }}
                style={{ display: isListPage ? 'none' : 'block' }}>
                確認画面に進む
            </Button>
        </>
    );
}
