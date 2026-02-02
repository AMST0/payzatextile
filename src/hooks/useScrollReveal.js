import { useEffect } from 'react'

export function useScrollReveal() {
    useEffect(() => {
        const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')

        const revealOnScroll = () => {
            const windowHeight = window.innerHeight
            const revealPoint = 120

            revealElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top

                if (elementTop < windowHeight - revealPoint) {
                    element.classList.add('active')
                }
            })
        }

        // Initial check
        revealOnScroll()

        // Add scroll listener
        window.addEventListener('scroll', revealOnScroll, { passive: true })

        return () => {
            window.removeEventListener('scroll', revealOnScroll)
        }
    }, [])
}

export default useScrollReveal
