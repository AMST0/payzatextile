import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'
import './Home.css'

function Home() {
    const [openFAQ, setOpenFAQ] = useState(null)
    const videoRefs = useRef([])

    // Scroll reveal animations
    useScrollReveal()

    // Intersection Observer for video autoplay on scroll
    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const iframe = entry.target.querySelector('iframe')
                if (iframe) {
                    if (entry.isIntersecting) {
                        // Add autoplay to src
                        const src = iframe.src
                        if (!src.includes('autoplay=1')) {
                            iframe.src = src.replace('autoplay=0', 'autoplay=1')
                        }
                    }
                }
            })
        }, options)

        videoRefs.current.forEach(ref => {
            if (ref) observer.observe(ref)
        })

        return () => observer.disconnect()
    }, [])

    const scrollToContent = () => {
        document.getElementById('intro')?.scrollIntoView({ behavior: 'smooth' })
    }

    const faqs = [
        {
            question: "What is the minimum order quantity?",
            answer: "Our standard MOQ starts at 500 pieces per model. For custom fabric orders, the minimum is 75 pieces per color. We offer flexible pricing tiers that scale with your order volume."
        },
        {
            question: "Do you offer private label production?",
            answer: "Yes, we specialize in private label and white label production. We provide custom tags, labels, packaging, and complete branding solutions tailored to your market."
        },
        {
            question: "Can I request samples before placing a bulk order?",
            answer: "Absolutely. Samples are prepared upon request and finalized with your approval before mass production begins."
        },
        {
            question: "What types of shirts do you manufacture?",
            answer: "We produce high-quality cotton, linen, blended, and denim shirts in various fits and designs including dress shirts, casual shirts, polo shirts, and uniform shirts."
        },
        {
            question: "What is the typical production timeline?",
            answer: "Standard production takes 4-6 weeks from approval to delivery. Rush orders may be accommodated based on capacity."
        },
        {
            question: "Do you ship internationally?",
            answer: "Yes, we export to over 30 countries across 4 continents. We offer FOB delivery from Turkey with flexible shipping arrangements."
        }
    ]

    return (
        <>
            {/* HERO - Full Screen Video Background */}
            <section className="hero">
                <div className="hero__video">
                    <iframe
                        src="https://player.vimeo.com/video/1108826568?h=37630d6219&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
                        frameBorder="0"
                        allow="autoplay; fullscreen"
                        title="Hero Background"
                    ></iframe>
                </div>
                <div className="hero__bg hero__bg--fallback">
                    <img src="/images/_F4A7746-Edit.jpg" alt="" />
                </div>
                <div className="hero__overlay"></div>
                <div className="hero__content">
                    <h1 className="hero__title">Your Collection Starts Right Here</h1>
                    <p className="hero__subtitle">
                        Serving global brands with premium fabrics, custom patterns, and private label solutions from Istanbul.
                    </p>
                    <div className="hero__actions">
                        <Link to="/contact" className="btn btn-primary btn-lg">Request Bulk Pricing</Link>
                        <Link to="/production" className="btn btn-outline btn-lg">View Production</Link>
                    </div>
                </div>
                <button className="hero__scroll" onClick={scrollToContent} aria-label="Scroll down">
                    <span></span>
                </button>
            </section>

            {/* INTRO SECTION */}
            <section id="intro" className="intro">
                <div className="container">
                    <div className="intro__grid">
                        <div className="intro__content reveal-left">
                            <span className="section-tag">Our Expertise</span>
                            <h2>Precision-Crafted Shirts Globally Trusted</h2>
                            <p>
                                At Payza Textile, we combine advanced manufacturing with deep market insight -
                                offering your business not just shirts, but a scalable, tested, and trusted production solution.
                            </p>
                            <Link to="/about" className="btn btn-dark">About Us</Link>
                        </div>
                        <div className="intro__image reveal-right">
                            <img src="/images/_F4A8992-Edit.jpg" alt="Premium shirt craftsmanship" loading="lazy" />
                        </div>
                    </div>
                </div>
            </section>

            {/* WHAT WE DO BEST */}
            <section className="features">
                <div className="container">
                    <div className="section-header reveal">
                        <span className="section-tag">Why Choose Us</span>
                        <h2>What We Do Best</h2>
                    </div>
                    <div className="features__grid">
                        <div className="feature-card reveal reveal-delay-1">
                            <div className="feature-card__icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3>Quantity-Based Discounts</h3>
                            <p>Competitive pricing that scales with your order volume</p>
                        </div>
                        <div className="feature-card reveal reveal-delay-2">
                            <div className="feature-card__icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3>International Quality Tests</h3>
                            <p>Shrinkage and durability tests meeting global standards</p>
                        </div>
                        <div className="feature-card reveal reveal-delay-3">
                            <div className="feature-card__icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                </svg>
                            </div>
                            <h3>Premium Collar Detailing</h3>
                            <p>Expert stitching and collar craftsmanship</p>
                        </div>
                        <div className="feature-card reveal reveal-delay-4">
                            <div className="feature-card__icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <h3>3 Specialized Brands</h3>
                            <p>Boucheron, Loranzo, and Payza for every market</p>
                        </div>
                        <div className="feature-card reveal reveal-delay-5">
                            <div className="feature-card__icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                </svg>
                            </div>
                            <h3>Custom Labels and Packaging</h3>
                            <p>Complete branding solutions with your identity</p>
                        </div>
                        <div className="feature-card reveal reveal-delay-6">
                            <div className="feature-card__icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3>On-Time Delivery Guarantee</h3>
                            <p>4-6 weeks production with reliable shipping</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* VIDEO SECTION 1 */}
            <section className="video-section" ref={el => videoRefs.current[0] = el}>
                <div className="video-section__video">
                    <iframe
                        src="https://player.vimeo.com/video/1136411580?autoplay=0&loop=1&muted=1&title=0&byline=0&portrait=0&dnt=1"
                        frameBorder="0"
                        allow="autoplay; fullscreen"
                        title="Production Video"
                    ></iframe>
                </div>
                <div className="video-section__overlay">
                    <div className="video-section__content">
                        <span className="section-tag">Manufacturing Excellence</span>
                        <h2 className="video-section__title">
                            <span>Precision</span>
                            <span>Craftsmanship</span>
                            <span>Quality</span>
                        </h2>
                        <p className="video-section__desc">From raw fabric to ready-to-ship shirts - every step is crafted with purpose and global compatibility.</p>
                    </div>
                </div>
            </section>

            {/* BRANDS SECTION */}
            <section className="brands">
                <div className="container">
                    <div className="section-header">
                        <span className="section-tag">Our Brands</span>
                        <h2>Three Brands, One Standard: Excellence</h2>
                        <p>Whether your focus is luxury, corporate wear, or timeless classics — our three specialized brands are designed to meet global market needs with precision.</p>
                    </div>

                    <div className="brands__grid">
                        <div className="brand-card">
                            <div className="brand-card__image">
                                <img src="/images/_F4A7746-Edit.jpg" alt="Boucheron Collection" loading="lazy" />
                            </div>
                            <div className="brand-card__content">
                                <h3>Boucheron</h3>
                                <span className="brand-card__tagline">Refined. Contemporary. European-Fit.</span>
                                <p>Designed for high-end retail and premium boutiques.</p>
                                <ul>
                                    <li>Fabrics: Satin finish, stretch cotton, Italian buttons</li>
                                    <li>Custom Fit: Slim, Regular, Classic</li>
                                </ul>
                            </div>
                        </div>

                        <div className="brand-card">
                            <div className="brand-card__image">
                                <img src="/images/_F4A8225-Edit.jpg" alt="Loranzo Collection" loading="lazy" />
                            </div>
                            <div className="brand-card__content">
                                <h3>Loranzo</h3>
                                <span className="brand-card__tagline">Corporate Elegance, Everyday Strength.</span>
                                <p>Tailored for businesswear and uniform supply chains.</p>
                                <ul>
                                    <li>Fabrics: Easy-care poplin, anti-wrinkle blends</li>
                                    <li>Custom Fit: Slim, Regular, Classic</li>
                                </ul>
                            </div>
                        </div>

                        <div className="brand-card">
                            <div className="brand-card__image">
                                <img src="/images/_F4A8536-Edit.jpg" alt="Payza Collection" loading="lazy" />
                            </div>
                            <div className="brand-card__content">
                                <h3>Payza</h3>
                                <span className="brand-card__tagline">Timeless Turkish Craftsmanship.</span>
                                <p>Best choice for mainstream retail and global distributors.</p>
                                <ul>
                                    <li>Fabrics: Broadcloth, oxford, checked cotton</li>
                                    <li>Custom Fit: Slim, Regular, Classic</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* IMAGE GALLERY */}
            <section className="gallery">
                <div className="gallery__grid">
                    <div className="gallery__item reveal-scale reveal-delay-1">
                        <img src="/images/_F4A7431.jpg" alt="Shirt detail" loading="lazy" />
                    </div>
                    <div className="gallery__item reveal-scale reveal-delay-2">
                        <img src="/images/_F4A9064-Edit (1).jpg" alt="Fabric texture" loading="lazy" />
                    </div>
                    <div className="gallery__item reveal-scale reveal-delay-3">
                        <img src="/images/_F4A8225-Edit.jpg" alt="Collar detail" loading="lazy" />
                    </div>
                    <div className="gallery__item reveal-scale reveal-delay-4">
                        <img src="/images/_F4A9473-Edit.jpg" alt="Button detail" loading="lazy" />
                    </div>
                    <div className="gallery__item reveal-scale reveal-delay-5">
                        <img src="/images/_F4A8536-Edit.jpg" alt="Premium shirt" loading="lazy" />
                    </div>
                    <div className="gallery__item reveal-scale reveal-delay-6">
                        <img src="/images/_F4A9843 (1).jpg" alt="Full shirt" loading="lazy" />
                    </div>
                </div>
            </section>

            {/* VIDEO SECTION 2 */}
            <section className="video-section video-section--alt" ref={el => videoRefs.current[1] = el}>
                <div className="video-section__video">
                    <iframe
                        src="https://player.vimeo.com/video/1124425639?autoplay=0&loop=1&muted=1&title=0&byline=0&portrait=0&dnt=1"
                        frameBorder="0"
                        allow="autoplay; fullscreen"
                        title="Quality Control Video"
                    ></iframe>
                </div>
                <div className="video-section__overlay video-section__overlay--right">
                    <div className="video-section__content">
                        <span className="section-tag">Quality Assurance</span>
                        <h2 className="video-section__title">
                            <span>Attention</span>
                            <span>to Every</span>
                            <span>Detail</span>
                        </h2>
                        <p className="video-section__desc">Every shirt passes through our refined production stages - ensuring consistent quality and exceptional craftsmanship.</p>
                    </div>
                </div>
            </section>

            {/* SERVICES SECTION */}
            <section className="services">
                <div className="container">
                    <div className="section-header">
                        <span className="section-tag">Our Core Services</span>
                        <h2>Wholesale Services That Fit Your Brand</h2>
                        <p>Choose from our flexible bulk order options and tailor every detail — from fit and fabric to packaging and private labeling.</p>
                    </div>

                    <div className="services__grid">
                        <div className="service-card">
                            <div className="service-card__number">01</div>
                            <h3>Flexible MOQ Tiers</h3>
                            <p>Orders start from just 500 pcs/model with scalable pricing.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-card__number">02</div>
                            <h3>Size and Fit Options</h3>
                            <p>Slim Fit, Regular Fit, Classic Fit — tailored by region and market.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-card__number">03</div>
                            <h3>Custom Labels and Tags</h3>
                            <p>Add your own brand identity with custom labels, tags and washcare.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-card__number">04</div>
                            <h3>Packaging Solutions</h3>
                            <p>Boxed, folded, polybagged or barcoded — as per your logistics.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-card__number">05</div>
                            <h3>Fabric Customization</h3>
                            <p>Choose from 100+ fabrics or send your own. Minimum 75 pcs/color.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-card__number">06</div>
                            <h3>Sample Program</h3>
                            <p>Try before bulk. Samples available in all models on request.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROCESS SECTION */}
            <section className="process">
                <div className="container">
                    <div className="process__content">
                        <span className="section-tag">How We Work</span>
                        <h2>Your Shirt Production Partner, Step by Step</h2>
                        <p>From label design to final shipping, every step is clear and professional.</p>
                    </div>

                    <div className="process__steps">
                        <div className="process-step">
                            <div className="process-step__number">01</div>
                            <h3>Discovery and Briefing</h3>
                            <p>Tell us your needs, target market, preferred style, and MOQ.</p>
                        </div>
                        <div className="process-step">
                            <div className="process-step__number">02</div>
                            <h3>Design and Sampling</h3>
                            <p>Choose fabrics, fits, and customizations. Receive a sample for approval.</p>
                        </div>
                        <div className="process-step">
                            <div className="process-step__number">03</div>
                            <h3>Bulk Production</h3>
                            <p>We begin mass production with strict quality control checkpoints.</p>
                        </div>
                        <div className="process-step">
                            <div className="process-step__number">04</div>
                            <h3>Packing and Delivery</h3>
                            <p>Orders packed to spec and delivered FOB from Turkey — globally.</p>
                        </div>
                    </div>
                </div>
            </section >

            {/* IMAGE BANNER */}
            < section className="image-banner" >
                <img src="/images/_F4A9843 (1).jpg" alt="Premium shirt manufacturing" loading="lazy" />
                <div className="image-banner__overlay">
                    <div className="image-banner__content">
                        <h2>Partner With Turkey's Leading Shirt Supplier</h2>
                        <p>Over 20 years of expertise. 30+ countries served. Your trusted manufacturing partner.</p>
                        <Link to="/contact" className="btn btn-primary btn-lg">Request Custom Quotes</Link>
                    </div>
                </div>
            </section >

            {/* FAQ SECTION */}
            < section className="faq" >
                <div className="container">
                    <div className="section-header">
                        <span className="section-tag">FAQ</span>
                        <h2>Got Questions? We've Got Answers</h2>
                    </div>

                    <div className="faq__list">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`faq-item ${openFAQ === index ? 'faq-item--open' : ''}`}
                            >
                                <button
                                    className="faq-item__question"
                                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                                >
                                    <span>{faq.question}</span>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 5v14M5 12h14" />
                                    </svg>
                                </button>
                                <div className="faq-item__answer">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section >

            {/* CONTACT CTA */}
            < section className="contact-cta" >
                <div className="container">
                    <div className="contact-cta__grid">
                        <div className="contact-cta__info">
                            <span className="section-tag">Get In Touch</span>
                            <h2>Ready to Elevate Your Shirt Collection?</h2>
                            <p>Let's build your custom collection with unmatched quality and regional market precision.</p>

                            <div className="contact-cta__details">
                                <a href="mailto:info@payzatextile.com">info@payzatextile.com</a>
                                <a href="tel:+905335941744">+90 533 594 17 44</a>
                                <a href="https://api.whatsapp.com/send?phone=905325198805" target="_blank" rel="noopener noreferrer">
                                    WhatsApp: +90 532 519 88 05
                                </a>
                            </div>

                            <div className="contact-cta__social">
                                <a href="https://instagram.com/payzatextile" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                                        <circle cx="12" cy="12" r="3.5" />
                                        <circle cx="18.5" cy="5.5" r="1.5" />
                                    </svg>
                                </a>
                                <a href="https://facebook.com/payzatextile" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="contact-cta__locations">
                            <div className="location-card">
                                <h4>Manufacturing Facility</h4>
                                <p>Kazim Karabekir 827 Cd. No:66-68 K:2<br />Gaziosmanpasa, Istanbul, Turkiye</p>
                                <a href="https://maps.google.com/?q=Kazım+Karabekir+Gaziosmanpaşa+Istanbul" target="_blank" rel="noopener noreferrer">
                                    Get Directions
                                </a>
                            </div>
                            <div className="location-card">
                                <h4>Showroom (Osmanbey)</h4>
                                <p>Hrant Dink Sokak Alp Han Apt. No:41/A<br />Sisli, Istanbul, Turkiye</p>
                                <a href="https://maps.google.com/?q=Hrant+Dink+Sokak+Şişli+Istanbul" target="_blank" rel="noopener noreferrer">
                                    Get Directions
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* MAP */}
            < section className="map" >
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.5!2d28.95!3d41.04!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAyJzI0LjAiTiAyOMKwNTcnMDAuMCJF!5e0!3m2!1sen!2str!4v1600000000000!5m2!1sen!2str"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Location"
                ></iframe>
            </section >
        </>
    )
}

export default Home
