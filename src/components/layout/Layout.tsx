import Header from './Header'
import Footer from './Footer'
// import styles from './Layout.module.css'
import { Analytics } from '@vercel/analytics/react';

import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            <Analytics />
        </>
    )
}