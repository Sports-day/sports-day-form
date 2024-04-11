import {TeamTag} from "@/src/models/TeamTagModel";
import {fetchWithToken} from "@/src/lib/ApiClient";

const getTeamTags = async (): Promise<TeamTag[]> => {
    const data = await fetchWithToken("/team_tags", {
        method: "GET",
    })
    return data.data
}

const getTeamTag = async (id: number): Promise<TeamTag> => {
    const data = await fetchWithToken(`/team_tags/${id}`, {
        method: "GET",
    })
    return data.data
}

const deleteTeamTag = async (id: number): Promise<void> => {
    await fetchWithToken(`/team_tags/${id}`, {
        method: "DELETE",
    })
}

const createTeamTag = async (omittedTeamTag: Omit<TeamTag, "id" | "createdAt" | "updatedAt">): Promise<TeamTag> => {
    const data = await fetchWithToken(`/team_tags`, {
        method: "POST",
        body: JSON.stringify(omittedTeamTag)
    })

    return data.data
}

const updateTeamTag = async (id: number, omittedTeamTag: Omit<TeamTag, "id" | "createdAt" | "updatedAt">): Promise<TeamTag> => {
    const data = await fetchWithToken(`/team_tags`, {
        method: "PUT",
        body: JSON.stringify(omittedTeamTag)
    })

    return data.data
}

export type TeamTagRepository = {
    getTeamTags: () => Promise<TeamTag[]>,
    getTeamTag: (id: number) => Promise<TeamTag>,
    deleteTeamTag: (id: number) => Promise<void>,
    createTeamTag: (omittedTeamTag: Omit<TeamTag, "id" | "createdAt" | "updatedAt">) => Promise<TeamTag>,
    updateTeamTag: (id: number, omittedTeamTag: Omit<TeamTag, "id" | "createdAt" | "updatedAt">) => Promise<TeamTag>,
}

export const teamTagRepository: TeamTagRepository = {
    getTeamTags,
    getTeamTag,
    deleteTeamTag,
    createTeamTag,
    updateTeamTag,
}