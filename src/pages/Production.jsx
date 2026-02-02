import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'
import './Production.css'

function Production() {
    useScrollReveal()
    const processSteps = [
        {
            number: '01',
            title: 'Fabric Selection',
            description: 'Premium cotton, linen, and blended fabrics sourced from trusted suppliers. Over 100 fabric options available.'
        },
        {
            number: '02',
            title: 'Pattern and Cutting',
            description: 'Precision cutting using advanced CAD systems ensures consistency across thousands of units.'
        },
        {
            number: '03',
            title: 'Expert Sewing',
            description: 'Skilled craftsmen bring each shirt to life with meticulous stitching and attention to detail.'
        },
        {
            number: '04',
            title: 'Quality Inspection',
            description: 'Multi-point quality control checks at every stage, from stitching to final pressing.'
        },
        {
            number: '05',
            title: 'Finishing and Pressing',
            description: 'Professional finishing and pressing for that crisp, retail-ready appearance.'
        },
        {
            number: '06',
            title: 'Packaging and Shipping',
            description: 'Custom packaging options and reliable global shipping from Istanbul.'
        }
    ]

    return (
        <>
            {/* Hero Section */}
            <section className="page-hero">
                <img src="/images/_F4A9348-2-Edit.jpg" alt="Production" className="page-hero__bg" />
                <div className="page-hero__overlay"></div>
                <div className="page-hero__content">
                    <span className="section-tag">Our Production</span>
                    <h1>Manufacturing Excellence</h1>
                    <p>Take a closer look at how we craft premium shirts with precision, passion, and global standards.</p>
                </div>
            </section>

            {/* Video Section 1 */}
            <section className="prod-video">
                <div className="prod-video__bg">
                    <img src="/images/_F4A8225-Edit.jpg" alt="Manufacturing" loading="lazy" />
                </div>
                <div className="prod-video__overlay">
                    <div className="prod-video__content reveal-left">
                        <span className="section-tag">Production Excellence</span>
                        <h2>Craftsmanship in Action</h2>
                        <p>Experience the precision and care that goes into every shirt we produce.</p>
                        <a href="https://vimeo.com/1136411580" target="_blank" rel="noopener noreferrer" className="video-play-btn">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                            <span>Watch Video</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="prod-process">
                <div className="container">
                    <div className="section-header reveal">
                        <span className="section-tag">The Process</span>
                        <h2>From Fabric to Fashion</h2>
                        <p>Every shirt passes through our refined production stages - ensuring consistent quality and exceptional craftsmanship.</p>
                    </div>

                    <div className="prod-process__grid">
                        {processSteps.map((step, index) => (
                            <div key={index} className={`process-card reveal reveal-delay-${(index % 3) + 1}`}>
                                <span className="process-card__number">{step.number}</span>
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Image Gallery */}
            <section className="prod-gallery">
                <div className="prod-gallery__grid">
                    <div className="prod-gallery__item reveal-scale reveal-delay-1">
                        <img src="/images/_F4A9473-Edit.jpg" alt="Detail work" loading="lazy" />
                    </div>
                    <div className="prod-gallery__item reveal-scale reveal-delay-2">
                        <img src="/images/_F4A8536-Edit.jpg" alt="Final product" loading="lazy" />
                    </div>
                    <div className="prod-gallery__item reveal-scale reveal-delay-3">
                        <img src="/images/_F4A7867.jpg" alt="Fabric check" loading="lazy" />
                    </div>
                </div>
            </section>

            {/* Video Section 2 */}
            <section className="prod-video prod-video--alt">
                <div className="prod-video__bg">
                    <img src="/images/_F4A8536-Edit.jpg" alt="Quality control" loading="lazy" />
                </div>
                <div className="prod-video__overlay prod-video__overlay--right">
                    <div className="prod-video__content">
                        <span className="section-tag">Quality Standards</span>
                        <h2>From Fabric to Finish</h2>
                        <p>See our rigorous quality control process that ensures international standards.</p>
                        <a href="https://vimeo.com/1124425639" target="_blank" rel="noopener noreferrer" className="video-play-btn">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                            <span>Watch Video</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Capabilities */}
            <section className="prod-capabilities">
                <div className="container">
                    <div className="prod-capabilities__grid">
                        <div className="prod-capabilities__content">
                            <span className="section-tag">Our Capabilities</span>
                            <h2>End-to-End Production</h2>
                            <p>
                                Our Istanbul facility is equipped with modern machinery and staffed
                                by experienced professionals who bring decades of textile expertise
                                to every project.
                            </p>
                            <ul className="capabilities-list">
                                <li>High-volume production capacity</li>
                                <li>International quality certifications</li>
                                <li>Custom labeling and packaging</li>
                                <li>Shrinkage and durability testing</li>
                                <li>Fast turnaround (4-6 weeks)</li>
                            </ul>
                            <Link to="/contact" className="btn btn-primary">Start Your Order</Link>
                        </div>
                        <div className="prod-capabilities__stats">
                            <div className="cap-stat">
                                <span className="cap-stat__number">500+</span>
                                <span className="cap-stat__label">Minimum Order Quantity</span>
                            </div>
                            <div className="cap-stat">
                                <span className="cap-stat__number">100+</span>
                                <span className="cap-stat__label">Fabric Options</span>
                            </div>
                            <div className="cap-stat">
                                <span className="cap-stat__number">75+</span>
                                <span className="cap-stat__label">Min. Pieces Per Color</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Production
