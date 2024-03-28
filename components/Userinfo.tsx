import {Typography} from "@mui/material";
import {userinfoFactory} from "@/src/models/UserinfoModel";

export default async function Userinfo() {
    const userinfo = await userinfoFactory().fetch()

    return (
        <>
            <Typography variant={"h4"}>Userinfo</Typography>
            <Typography variant={"body1"}>{userinfo.name}</Typography>
        </>
    )
}