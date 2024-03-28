import {User} from "@/src/models/UserModel";
import {fetchWithToken} from "@/src/lib/ApiClient";

const getUserinfo = async (): Promise<User> => {
    const data = await fetchWithToken(`/userinfo`, {
        method: "GET",
    })
    return data.data
}


export type UserinfoRepository = {
    getUserinfo: () => Promise<User>,
}

export const userinfoRepository: UserinfoRepository = {
    getUserinfo,
}
