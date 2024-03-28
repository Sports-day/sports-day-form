import {AllowedDomain} from "../models/AllowedDomainModel";
import {fetchWithToken} from "../lib/ApiClient";

const getAllowedDomains = async (): Promise<AllowedDomain[]> => {
    const data = await fetchWithToken("/allowed-domains", {
        method: "GET",
    })
    return data.data
}

const getAllowedDomain = async (id: number): Promise<AllowedDomain> => {
    const {data} = await fetchWithToken(`/allowed-domains/${id}`, {
        method: "GET",
    })
    return data.data
}

const deleteAllowedDomain = async (id: number): Promise<void> => {
    await fetchWithToken(`/allowed-domains/${id}`, {
        method: "DELETE",
    })
}

const createAllowedDomain = async (omittedAllowedDomain: Omit<AllowedDomain, "id">): Promise<AllowedDomain> => {
    const data = await fetchWithToken(`/allowed-domains`, {
        method: "POST",
        body: JSON.stringify(omittedAllowedDomain)
    })
    return data.data
}

const updateAllowedDomain = async (id: number, omittedAllowedDomain: Omit<AllowedDomain, "id">): Promise<AllowedDomain> => {
    const data = await fetchWithToken(`/allowed-domains/${id}`, {
        method: "PUT",
        body: JSON.stringify(omittedAllowedDomain)
    })
    return data.data
}

export type AllowedDomainRepository = {
    getAllowedDomains: () => Promise<AllowedDomain[]>,
    getAllowedDomain: (id: number) => Promise<AllowedDomain>,
    deleteAllowedDomain: (id: number) => Promise<void>,
    createAllowedDomain: (omittedAllowedDomain: Omit<AllowedDomain, "id">) => Promise<AllowedDomain>,
    updateAllowedDomain: (id: number, omittedAllowedDomain: Omit<AllowedDomain, "id">) => Promise<AllowedDomain>,
}

export const allowedDomainRepository: AllowedDomainRepository = {
    getAllowedDomains,
    getAllowedDomain,
    deleteAllowedDomain,
    createAllowedDomain,
    updateAllowedDomain,
}