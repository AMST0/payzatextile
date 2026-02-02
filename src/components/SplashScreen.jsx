import { useState, useEffect } from 'react'
import './SplashScreen.css'

function SplashScreen() {
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false)
        }, 3500) // 3.5 seconds for animation + video loading

        return () => clearTimeout(timer)
    }, [])

    if (!isVisible) return null

    return (
        <div className="splash-screen">
            <div className="splash-screen__content">
                <div className="splash-screen__logo-wrapper">
                    <h1 className="splash-screen__logo">PAYZA</h1>
                    <div className="splash-screen__underline"></div>
                </div>
                <p className="splash-screen__subtitle">Premium Textile</p>
            </div>
        </div>
    )
}

export default SplashScreen
