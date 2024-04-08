import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import {AppRouterCacheProvider} from '@mui/material-nextjs/v14-appRouter';
import {CssBaseline, ThemeProvider} from "@mui/material";
import {colorTheme} from "@/components/theme/color";

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
            <ThemeProvider theme={colorTheme}>
                <CssBaseline />

                {children}
            </ThemeProvider>
        </AppRouterCacheProvider>
        </body>
        </html>
    )
}