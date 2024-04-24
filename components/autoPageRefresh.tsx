'use client'
import {useRouter} from "next/navigation";
import {useEffect} from "react";

export default function AutoPageRefresh() {
    const router = useRouter()

    useEffect(() => {
        const envDelay = process.env.NEXT_PUBLIC_PAGE_REFRESH_DELAY_SECONDS
        const delaySeconds = envDelay ? parseInt(envDelay) : 300

        const interval = setInterval(() => {
            //  refresh the page
            router.refresh()
            console.log('refreshed')
        }, delaySeconds * 1000)

        //  cleanup
        return () => {
            clearInterval(interval)
        }
    }, [router])

    return null
}