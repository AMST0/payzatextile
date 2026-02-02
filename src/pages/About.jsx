import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'
import './About.css'

function About() {
    useScrollReveal()

    return (
        <>
            {/* Hero Section */}
            <section className="page-hero">
                <img src="/images/_F4A0244.jpg" alt="Payza Textile" className="page-hero__bg" />
                <div className="page-hero__overlay"></div>
                <div className="page-hero__content">
                    <span className="section-tag">About Payza Textile</span>
                    <h1>Where Quality Meets Reliability</h1>
                    <p>Over 20 years of precision manufacturing and global partnerships in premium men's shirt production.</p>
                </div>
            </section>

            {/* Intro Section */}
            <section className="about-intro">
                <div className="container">
                    <div className="about-intro__grid">
                        <div className="about-intro__content reveal-left">
                            <span className="section-tag">Who We Are</span>
                            <h2>Crafting Excellence Since 2004</h2>
                            <p>
                                For over two decades, Payza Textile has been producing premium men's shirts
                                from our Istanbul-based facility. With our in-house brands — Boucheron, Loranzo,
                                and Payza — we combine timeless Turkish craftsmanship with forward-thinking
                                design to meet the needs of premium fashion labels worldwide.
                            </p>
                            <p>
                                From France to South Africa, and from Canada to the Middle East, our production
                                reaches more than 30 countries across 4 continents. Our dedicated team, innovative
                                production lines, and deep-rooted discipline fuel our continuous growth and
                                global reputation.
                            </p>
                        </div>
                        <div className="about-intro__image reveal-right">
                            <img src="/images/_F4A9064-Edit (1).jpg" alt="Shirt craftsmanship" loading="lazy" />
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Do Section */}
            <section className="what-we-do">
                <div className="container">
                    <div className="section-header reveal">
                        <span className="section-tag">What We Do Best</span>
                        <h2>Manufacturing Confidence</h2>
                    </div>

                    <div className="what-we-do__grid">
                        <div className="feature-item reveal reveal-delay-1">
                            <div className="feature-item__number">01</div>
                            <h3>Quantity-Based Discount System</h3>
                            <p>Flexible pricing tiers that scale with your order volume.</p>
                        </div>
                        <div className="feature-item reveal reveal-delay-2">
                            <div className="feature-item__number">02</div>
                            <h3>International Quality Standards</h3>
                            <p>Shrinkage and durability tests meeting global requirements.</p>
                        </div>
                        <div className="feature-item reveal reveal-delay-3">
                            <div className="feature-item__number">03</div>
                            <h3>Premium Collar and Stitch Detailing</h3>
                            <p>Meticulous attention to every construction detail.</p>
                        </div>
                        <div className="feature-item reveal reveal-delay-4">
                            <div className="feature-item__number">04</div>
                            <h3>3 Specialized Brands</h3>
                            <p>Boucheron, Loranzo, and Payza for target markets.</p>
                        </div>
                        <div className="feature-item reveal reveal-delay-5">
                            <div className="feature-item__number">05</div>
                            <h3>Custom Labels and Packaging</h3>
                            <p>Complete branding solutions for your market.</p>
                        </div>
                        <div className="feature-item reveal reveal-delay-6">
                            <div className="feature-item__number">06</div>
                            <h3>On-Time Delivery Guarantee</h3>
                            <p>4-6 weeks production with transparent timelines.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Image Section */}
            <section className="about-image-section">
                <img src="/images/_F4A7867.jpg" alt="Fabric quality" loading="lazy" />
                <div className="about-image-section__overlay">
                    <div className="about-image-section__content">
                        <span className="section-tag">Turkish Craftsmanship</span>
                        <h2>From Raw Fabric to Ready-to-Ship</h2>
                        <p>Every step is crafted with purpose, discipline, and global compatibility.</p>
                    </div>
                </div>
            </section>

            {/* Vision and Mission */}
            <section className="vision-mission">
                <div className="container">
                    <div className="vision-mission__grid">
                        <div className="vision-card reveal-left">
                            <span className="section-tag">Our Vision</span>
                            <h3>Leading Through Excellence</h3>
                            <p>
                                To become a globally respected textile manufacturer known not only for
                                superior shirt production but also for our ethical values, sustainability
                                principles, and innovative approach. We aim to lead the industry by making
                                quality not just a standard, but a lasting habit.
                            </p>
                        </div>
                        <div className="mission-card reveal-right">
                            <span className="section-tag">Our Mission</span>
                            <h3>Partnership Through Trust</h3>
                            <p>
                                To deliver high-quality, tailor-made shirts through a seamless production
                                process that blends advanced technology, expert craftsmanship, and
                                customer-centric flexibility. We are committed to building long-term
                                partnerships with integrity.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Global Reach */}
            <section className="global-reach">
                <div className="container">
                    <div className="global-reach__content">
                        <span className="section-tag">Worldwide Presence</span>
                        <h2>Global Reach, Local Expertise</h2>
                        <p>
                            Our export network includes destinations such as New Zealand, Australia,
                            United States, Canada, Norway, United Kingdom, Netherlands, France, Sweden,
                            Spain, Greece, UAE, Bahrain, Jordan, Iran, Russia, Kazakhstan, Turkmenistan,
                            and throughout Africa including Nigeria, Kenya, South Africa, Ghana, Congo,
                            Morocco, Tunisia, and Libya.
                        </p>

                        <div className="global-reach__stats">
                            <div className="stat-item">
                                <span className="stat-item__number">30+</span>
                                <span className="stat-item__label">Countries</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-item__number">4</span>
                                <span className="stat-item__label">Continents</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-item__number">20+</span>
                                <span className="stat-item__label">Years</span>
                            </div>
                        </div>

                        <Link to="/contact" className="btn btn-primary btn-lg">Partner With Us</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
