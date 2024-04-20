'use client'
import Button from "@mui/material/Button";
import React from "react";
import { teamFactory } from "@/src/models/TeamModel";
import { useRouter } from "next/navigation";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

export type DeleteTeamProps = {
    teamId: number;
}

export default function DeleteTeam(props: DeleteTeamProps) {
    const router = useRouter();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = async () => {
        await teamFactory().delete(props.teamId);
        router.refresh();
        handleClose(); // ダイアログを閉じる
    };

    return (
        <React.Fragment>
            <Button
                onClick={handleOpen}
                variant="outlined"
                size="small"
                fullWidth
                color="warning"
                style={{border: '1px solid'}}
                sx={{
                    borderRadius: "9px",
                    py: 0.3
                }}
            >
                このチームを消す
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" color='s-darkest.main' fontWeight='bold'>
                    {"チームを削除しますか?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description"　color='black'>
                        この操作は元に戻せません。チームを削除してもよろしいですか？
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        キャンセル
                    </Button>
                    <Button onClick={handleDelete} color="error" autoFocus>
                        削除
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
