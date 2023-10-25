import 'app/globals.scss'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import {ReactNode} from "react";
import {Header} from "@/component/layout/header/header";
import {Toaster} from "react-hot-toast";
import 'overlayscrollbars/overlayscrollbars.css'


const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'X-IBIS',
    description: 'We will make your IT infrastructure reliable, modern and secure.',
}

export default function RootLayout({children}: { children: ReactNode }) {
    return (
        <html lang="en">
        <body className={`${inter.className}`}>
        <div>
            <Header/>
            {children}
            <Toaster position='bottom-center'/>
        </div>
        </body>
        </html>
    )
}

