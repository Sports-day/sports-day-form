import {Team} from "../models/TeamModel";
import {fetchWithToken} from "../lib/ApiClient";
import {User} from "../models/UserModel";

const getTeams = async (): Promise<Team[]> => {
    const data = await fetchWithToken("/teams", {
        method: "GET",
    })
    return data.data
}

const getTeam = async (id: number): Promise<Team> => {
    const data = await fetchWithToken(`/teams/${id}`, {
        method: "GET",
    })
    return data.data
}

const deleteTeam = async (id: number): Promise<void> => {
    await fetchWithToken(`/teams/${id}`, {
        method: "DELETE",
    })
}

const createTeam = async (omittedTeam: Omit<Team, "id" | "userIds" | "createdAt" | "updatedAt">): Promise<Team> => {
    const data = await fetchWithToken(`/teams`, {
        method: "POST",
        body: JSON.stringify(omittedTeam)
    })

    return data.data
}

const updateTeam = async (id: number, omittedTeam: Omit<Team, "id" | "userIds" | "enteredGameIds" | "createdAt" | "updatedAt">): Promise<Team> => {
    const data = await fetchWithToken(`/teams/${id}`, {
        method: "PUT",
        body: JSON.stringify(omittedTeam)
    })
    return data.data
}

const getTeamUsers = async (id: number): Promise<User[]> => {
    const data = await fetchWithToken(`/teams/${id}/users`, {
        method: "GET",
    })
    return data.data
}

const addTeamUsers = async (id: number, userIds: number[]): Promise<Team> => {
    const data = await fetchWithToken(
        `/teams/${id}/users`,
        {
            method: "POST",
            body: JSON.stringify({
                users: userIds
            })
        }
    )
    return data.data
}

const removeTeamUser = async (id: number, userId: number): Promise<Team> => {
    const data = await fetchWithToken(`/teams/${id}/users/${userId}`, {
        method: "DELETE",
    })
    return data.data
}

export type TeamRepository = {
    getTeams: () => Promise<Team[]>,
    getTeam: (id: number) => Promise<Team>,
    deleteTeam: (id: number) => Promise<void>,
    createTeam: (omittedTeam: Omit<Team, "id" | "userIds" | "enteredGameIds" | "createdAt" | "updatedAt">) => Promise<Team>,
    updateTeam: (id: number, omittedTeam: Omit<Team, "id" | "userIds" | "enteredGameIds" | "createdAt" | "updatedAt">) => Promise<Team>,
    getTeamUsers: (id: number) => Promise<User[]>,
    addTeamUsers: (id: number, userIds: number[]) => Promise<Team>,
    removeTeamUser: (id: number, userId: number) => Promise<Team>,
}

export const teamRepository: TeamRepository = {
    getTeams,
    getTeam,
    deleteTeam,
    createTeam,
    updateTeam,
    getTeamUsers,
    addTeamUsers,
    removeTeamUser,
}