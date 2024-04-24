'use client'
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

export function BackButton() {
    const [currentPage, setCurrentPage] = useState(window.location.pathname);
    const isListPage = currentPage === '/form';

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
                href={"/form"}
                disableElevation={true}
                sx={{
                    py: 1.0,
                    borderRadius: "10px",
                    backgroundColor: 's-lighter.main',
                    color: 's-lightest.main',
                    textAlign: 'center'
                }}
                style={{ display: isListPage ? 'none' : 'block' }}>
                戻る
            </Button>
        </>
    );
}
