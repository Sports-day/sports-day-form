import {NextRequest} from "next/server"
import {cookies} from "next/headers";

export async function POST(request: NextRequest) {
    //  form data
    const form = await request.formData()
    //  get state and code
    const code = form.get('code')

    //  pass code to the backend
    const loginEndpoint = process.env.NEXT_PUBLIC_API_URL + '/login'

    //  post code to the backend using fetch
    const response = await fetch(loginEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            code: code,
        }),
    })

    //  convert response to json
    // const data = await response.json()

    const cookie = response.headers.get('set-cookie')

    if (cookie) {
        console.log("cookie: ", cookie)
        // redirect to root page
        return new Response(null, {
            status: 301,
            headers: {
                "Location": '/',
                "Set-Cookie": cookie,
            },
        })
    }

    //  redirect to root page
    return new Response(null, {
        status: 301,
        headers: {
            "Location": '/',
        },
    })
}
