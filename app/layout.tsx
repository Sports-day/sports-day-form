import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import {AppRouterCacheProvider} from '@mui/material-nextjs/v14-appRouter';
import {theme} from "@/components/theme";
import {CssBaseline, ThemeProvider} from "@mui/material";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Sports-day Form',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
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
