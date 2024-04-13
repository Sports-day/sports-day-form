import {Card, Typography, Stack, Button, Box} from "@mui/material";
import TeamChip from "@/components/TeamChip"
import AthleteChip from "@/components/AthleteChip"
import React from "react";
import {Team} from "@/src/models/TeamModel";

export type TeamDetailProps = {
    team: Team
}

export default function TeamDetail(props:TeamDetailProps) {
    return (
        <Card variant="outlined"
              sx={{
                  display: 'flex',
                  borderRadius: '20px',
                  alignItems: 'flex-start',
                  padding: 1,
                  margin: '0 auto',
                  marginTop: 4,
                  color: 's-lightest.main',
                  backgroundColor: 's-lightest.main',
                  borderColor: 's-lighter.main'
              }}
        >
            <Box padding="8px" paddingRight="8px">
                <Stack spacing={1.5}>
                    <Stack>
                        <Typography variant="h6" color="s-darkest.main" fontWeight="bold">
                            {props.team.name}の情報を登録
                        </Typography>
                    </Stack>
                    <Stack >
                        <TeamChip/>
                        <AthleteChip/>
                    </Stack>

                    <Stack direction="row" spacing={0.5} alignItems="center" justifyContent="space-around">
                        <Button
                            variant="outlined"
                            size="small"
                            fullWidth
                            color="warning"
                            style={{ border: '1px solid' }}
                            sx={{
                                borderRadius: "9px",
                                py: 0.3
                            }}
                        >
                            このチームを消す
                        </Button>
                        <Button
                            size="medium"
                            variant="contained"
                            fullWidth
                            sx={{
                                color: "s-lightest.main",
                                backgroundColor: 's-lighter.main',
                                borderRadius: "9px",
                                py: 0.3
                            }}
                        >
                            この情報で保存
                        </Button>
                    </Stack>
                </Stack>

            </Box>

        </Card>


    );
}