/**
 * Video Preloading Utility
 * Ensures videos are cached and ready immediately when needed
 */

export const initializePreloading = () => {
    // List of Vimeo video IDs to preload
    const videoIds = [
        '1108826568', // Hero background
        '1136411580', // Production/Process video
        '1124425639'  // Quality standards video
    ]

    // Get or create head element
    const head = document.head

    // Preconnect to Vimeo resources (must happen first)
    const preconnectLinks = [
        { href: 'https://player.vimeo.com', rel: 'preconnect' },
        { href: 'https://f.vimeocdn.com', rel: 'preconnect' },
        { href: 'https://vimeo.com', rel: 'preconnect' }
    ]

    preconnectLinks.forEach(({ href, rel }) => {
        const existingLink = head.querySelector(`link[href="${href}"][rel="${rel}"]`)
        if (!existingLink) {
            const link = document.createElement('link')
            link.rel = rel
            link.href = href
            link.crossOrigin = 'anonymous'
            head.appendChild(link)
        }
    })

    // Prefetch Vimeo CDN resources
    const prefetchLinks = [
        'https://f.vimeocdn.com/',
        'https://player.vimeo.com/api/player.js'
    ]

    prefetchLinks.forEach((href) => {
        const existingLink = head.querySelector(`link[href="${href}"]`)
        if (!existingLink) {
            const link = document.createElement('link')
            link.rel = 'prefetch'
            link.href = href
            link.crossOrigin = 'anonymous'
            head.appendChild(link)
        }
    })

    // Load Vimeo player API
    if (!window.Vimeo) {
        const script = document.createElement('script')
        script.src = 'https://player.vimeo.com/api/player.js'
        script.async = true
        document.head.appendChild(script)
    }

    // Store flag to indicate preloading is initialized
    if (!sessionStorage.getItem('videosPreloaded')) {
        sessionStorage.setItem('videosPreloaded', 'true')
    }
}

/**
 * Preload images
 */
export const preloadImages = (imageUrls) => {
    imageUrls.forEach((url) => {
        const img = new Image()
        img.src = url
    })
}
 * Preload images
 */
export const preloadImages = (imageUrls) => {
    imageUrls.forEach((url) => {
        const img = new Image()
        img.src = url
    })
}

/**
 * Initialize all preloading
 */
export const initializePreloading = () => {
    // Preload videos
    preloadVideos()

    // You can add image URLs here as needed
    // preloadImages(['/path/to/image1.jpg', '/path/to/image2.jpg'])
}

export default initializePreloading
