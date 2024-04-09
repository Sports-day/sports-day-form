import {Card, CardContent, Typography, Grid} from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";


export default function ListCard() {
    return (
        <>
            <Card variant="outlined"
                  sx={{
                      display: 'flex',
                      borderRadius: '20px',
                      alignItems: 'flex-start',
                      padding: 1,
                      maxWidth: '75%',
                      margin: '0 auto',
                      height: '60vh',
                      marginTop: 4,
                      '@media (min-width:600px)': {
                          maxWidth: '75%',
                          marginTop: 8
                      },
                      color: 's-lightest.main',
                      backgroundColor: 's-lightest.main'
                  }}
            >
                <CardContent>
                    <Grid container spacing={1}>
                        <Grid  item xs={8} >
                            <Typography variant="h5" color='s-darkest.main' align="left" fontWeight="bold">
                                バスケットボール晴天時
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Button
                                variant="contained"
                                sx={{
                                    color: "s-lightest.main",
                                    backgroundColor: 's-lighter.main',
                                    borderRadius: "9px"
                                }}
                            >
                                チームを追加
                            </Button>
                        </Grid>
                    </Grid>


                </CardContent>

            </Card>
        </>
);
}