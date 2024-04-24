import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import {AppRouterCacheProvider} from '@mui/material-nextjs/v14-appRouter';
import {CssBaseline, ThemeProvider} from "@mui/material";
import {theme} from "@/components/theme/color";
import Head from "next/head";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Sports-day Form'
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <Head>
            <meta name="msapplication-TileColor" content="#4a5abb" />
            {/* safari */}
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="#4a5abb" />
            <meta name="apple-mobile-web-app-title" content="SPORTSDAY Form" />
            <link
                rel="apple-touch-icon"
                sizes="192x192"
                href="@/public/favicon/android-chrome-192x192.png"
            />
            {/* 一般 */}
            <meta name="application-name" content="SPORTSDAY Form" />
            <meta name="theme-color" content="#4a5abb" />
            <meta name="description" content="Sports-day Formは球技大会のチーム登録アプリケーション。" />
            <link rel="icon" sizes="192x192" href="@/public/favicon/android-chrome-192x192.png" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="manifest" href="@/public/pwa/manifest.json" />
        </Head>
        <body className={inter.className}>
        <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline />

                {children}
            </ThemeProvider>
        </AppRouterCacheProvider>
        </body>
        </html>
    )
}