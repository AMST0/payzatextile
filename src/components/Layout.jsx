import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'

function Layout() {
    useEffect(() => {
        // Ensure videos remain loaded when navigating between pages
        const videoIframes = document.querySelectorAll('iframe[data-preload="true"]')
        videoIframes.forEach((iframe) => {
            // Keep iframe in DOM and loaded
            if (iframe.src && !iframe.src.includes('about:blank')) {
                iframe.style.visibility = 'visible'
            }
        })
    }, [])

    return (
        <>
            <ScrollToTop />
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout
