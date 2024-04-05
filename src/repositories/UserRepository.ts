import {User} from "../models/UserModel";
import {fetchWithToken} from "../lib/ApiClient";
import {Team} from "../models/TeamModel";

const getUsers = async (): Promise<User[]> => {
    const data = await fetchWithToken("/users", {
        method: "GET",
    })

    return data.data
}

const getUser = async (id: number): Promise<User> => {
    const data = await fetchWithToken(`/users/${id}`, {
        method: "GET",
    })
    return data.data
}

const deleteUser = async (id: number): Promise<void> => {
    await fetchWithToken(`/users/${id}`, {
        method: "DELETE",
    })
}

const createUser = async (omittedUser: Omit<User, "id" | "teamIds" | "createdAt" | "updatedAt">): Promise<User> => {
    const data = await fetchWithToken(`/users`, {
        method: "POST",
        body: JSON.stringify(omittedUser)
    })
    return data.data
}

const updateUser = async (id: number, omittedUser: Omit<User, "id" | "teamIds" | "createdAt" | "updatedAt">): Promise<User> => {
    const data = await fetchWithToken(`/users/${id}`, {
        method: "PUT",
        body: JSON.stringify(omittedUser)
    })
    return data.data
}

const getTeams = async (id: number): Promise<Team[]> => {
    const data = await fetchWithToken(`/users/${id}/teams`, {
        method: "GET",
    })
    return data.data
}

export type UserRepository = {
    getUsers: () => Promise<User[]>,
    getUser: (id: number) => Promise<User>,
    deleteUser: (id: number) => Promise<void>,
    createUser: (omittedUser: Omit<User, "id" | "teamIds" | "createdAt" | "updatedAt">) => Promise<User>,
    updateUser: (id: number, omittedUser: Omit<User, "id" | "teamIds" | "createdAt" | "updatedAt">) => Promise<User>,
    getTeams: (id: number) => Promise<Team[]>,
}

export const userRepository: UserRepository = {
    getUsers,
    getUser,
    deleteUser,
    createUser,
    updateUser,
    getTeams,
}