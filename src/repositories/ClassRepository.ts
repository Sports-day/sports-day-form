import {fetchWithToken} from "../lib/ApiClient";
import {Class} from "../models/ClassModel";
import {User} from "../models/UserModel";

const getClasses = async (): Promise<Class[]> => {
    const data = await fetchWithToken("/classes", {
        method: "GET",
    })
    return data.data
}

const getClass = async (id: number): Promise<Class> => {
    const data = await fetchWithToken(`/classes/${id}`, {
        method: "GET",
    })
    return data.data
}


const deleteClass = async (id: number): Promise<void> => {
    await fetchWithToken(`/classes/${id}`, {
        method: "DELETE",
    })
}

const createClass = async (omittedClass: Omit<Class, "id" | "createdAt" | "updatedAt">): Promise<Class> => {
    const data = await fetchWithToken(`/classes`, {
        method: "POST",
        body: JSON.stringify(omittedClass)
    })
    return data.data
}

const updateClass = async (id: number, omittedClass: Omit<Class, "id" | "createdAt" | "updatedAt">): Promise<Class> => {
    const data = await fetchWithToken(`/classes/${id}`, {
        method: "PUT",
        body: JSON.stringify(omittedClass)
    })
    return data.data
}

const getClassUsers = async (id: number): Promise<User[]> => {
    const data = await fetchWithToken(`/classes/${id}/users`, {
        method: "GET",
    })
    return data.data
}

export type ClassRepository = {
    getClasses: () => Promise<Class[]>,
    getClass: (id: number) => Promise<Class>,
    deleteClass: (id: number) => Promise<void>,
    createClass: (omittedClass: Omit<Class, "id" | "createdAt" | "updatedAt">) => Promise<Class>,
    updateClass: (id: number, omittedClass: Omit<Class, "id" | "createdAt" | "updatedAt">) => Promise<Class>,
    getClassUsers: (id: number) => Promise<User[]>,
}

export const classRepository: ClassRepository = {
    getClasses,
    getClass,
    deleteClass,
    createClass,
    updateClass,
    getClassUsers,
}