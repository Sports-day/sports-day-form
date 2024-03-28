export const ApiUrl = process.env.NEXT_PUBLIC_API_URL

const headers = {
    "Content-Type": "application/json",
}

export async function fetchWithToken(url: string, options: RequestInit | undefined = {}) {
    //  get token
    let token
    if (typeof window === 'undefined') {
        const { cookies } = require("next/headers");
        token = cookies().get("access_token")?.value
    }

    const mergedOptions: RequestInit = {
        cache: "no-cache",
        credentials: "include",
        ...options,
        headers: {
            ...headers,
            ...options.headers,
            Cookie: `access_token=${token}`
        },
    }

    try {
        const fullUrl = `${ApiUrl}${url}`
        const response = await fetch(fullUrl, mergedOptions);

        // Check if the response was ok (status in the range 200-299)
        if (!response.ok) {
            switch (response.status) {
                case 401:
                    break
                case 404:
                    break
                default:
                    console.log("== internal server error")
            }
        }

        return await response.json()
    } catch (error) {
        // Handle errors (e.g., network issues)
        console.error("Fetch error: ", error);
        throw error;
    }
}