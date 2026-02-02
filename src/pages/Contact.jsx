import { useState } from 'react'
import './Contact.css'

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        orderType: '',
        quantity: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState(null)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setError(null)

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            if (!response.ok) {
                throw new Error('Failed to send message')
            }

            setSubmitted(true)
        } catch (err) {
            console.error('Form submission error:', err)
            setError('There was an error sending your message. Please try again or contact us directly.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <>
            {/* Hero Section */}
            <section className="page-hero">
                <img src="/images/_F4A7431.jpg" alt="Contact" className="page-hero__bg" />
                <div className="page-hero__overlay"></div>
                <div className="page-hero__content">
                    <span className="section-tag">Get In Touch</span>
                    <h1>Let's Build Together</h1>
                    <p>Reach out to explore custom manufacturing solutions aligned with your goals.</p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="contact-section">
                <div className="container">
                    <div className="contact-section__grid">
                        {/* Contact Form */}
                        <div className="contact-form-wrapper">
                            <h2>Send Us a Message</h2>

                            {submitted ? (
                                <div className="form-success">
                                    <div className="form-success__check">
                                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M20 6L9 17l-5-5" />
                                        </svg>
                                    </div>
                                    <h3>Thank You</h3>
                                    <p>Your message has been sent successfully. We will get back to you within 24 hours.</p>
                                </div>
                            ) : (
                                <form className="contact-form" onSubmit={handleSubmit}>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="name" className="form-label">Full Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                className="form-input"
                                                placeholder="Enter your name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email" className="form-label">Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className="form-input"
                                                placeholder="your@email.com"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="company" className="form-label">Company</label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                className="form-input"
                                                placeholder="Your company name"
                                                value={formData.company}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="phone" className="form-label">Phone</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                className="form-input"
                                                placeholder="+1 234 567 8900"
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="orderType" className="form-label">Order Type</label>
                                            <select
                                                id="orderType"
                                                name="orderType"
                                                className="form-input"
                                                value={formData.orderType}
                                                onChange={handleChange}
                                            >
                                                <option value="">Select order type</option>
                                                <option value="wholesale">Wholesale Order</option>
                                                <option value="private-label">Private Label</option>
                                                <option value="white-label">White Label</option>
                                                <option value="sample">Sample Request</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="quantity" className="form-label">Expected Quantity</label>
                                            <select
                                                id="quantity"
                                                name="quantity"
                                                className="form-input"
                                                value={formData.quantity}
                                                onChange={handleChange}
                                            >
                                                <option value="">Select quantity range</option>
                                                <option value="500-1000">500 - 1,000 pcs</option>
                                                <option value="1000-5000">1,000 - 5,000 pcs</option>
                                                <option value="5000-10000">5,000 - 10,000 pcs</option>
                                                <option value="10000+">10,000+ pcs</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message" className="form-label">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            className="form-textarea"
                                            placeholder="Tell us about your project requirements, quantities, and timeline..."
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="5"
                                        ></textarea>
                                    </div>

                                    {error && (
                                        <div className="form-error" style={{
                                            padding: '1rem',
                                            marginBottom: '1rem',
                                            background: 'rgba(220, 38, 38, 0.1)',
                                            border: '1px solid rgba(220, 38, 38, 0.3)',
                                            borderRadius: '8px',
                                            color: '#dc2626'
                                        }}>
                                            {error}
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        className={`btn btn-primary btn-lg form-submit ${isSubmitting ? 'is-loading' : ''}`}
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Contact Info */}
                        <div className="contact-info">
                            <div className="contact-info__section">
                                <h3>Contact Information</h3>
                                <p>Share your wholesale requests or custom project needs — our team is ready to assist.</p>
                            </div>

                            <div className="contact-info__items">
                                <div className="contact-info__item">
                                    <div className="contact-info__icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <span className="contact-info__label">Email</span>
                                        <a href="mailto:info@payzatextile.com" className="contact-info__value">info@payzatextile.com</a>
                                    </div>
                                </div>

                                <div className="contact-info__item">
                                    <div className="contact-info__icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <span className="contact-info__label">Phone</span>
                                        <a href="tel:+905335941744" className="contact-info__value">+90 533 594 17 44</a>
                                    </div>
                                </div>

                                <div className="contact-info__item contact-info__item--whatsapp">
                                    <div className="contact-info__icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <span className="contact-info__label">WhatsApp</span>
                                        <a href="https://api.whatsapp.com/send?phone=905325198805" target="_blank" rel="noopener noreferrer" className="contact-info__value">
                                            +90 532 519 88 05
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Locations */}
                            <div className="contact-locations">
                                <h4>Our Locations</h4>
                                <div className="location-item">
                                    <strong>Manufacturing Facility</strong>
                                    <p>Kazim Karabekir 827 Cd. No:66-68 K:2<br />Gaziosmanpasa, Istanbul, Turkiye</p>
                                    <a href="https://maps.google.com/?q=Kazım+Karabekir+Gaziosmanpaşa+Istanbul" target="_blank" rel="noopener noreferrer">
                                        Get Directions
                                    </a>
                                </div>
                                <div className="location-item">
                                    <strong>Showroom (Osmanbey)</strong>
                                    <p>Hrant Dink Sokak Alp Han Apt. No:41/A<br />Sisli, Istanbul, Turkiye</p>
                                    <a href="https://maps.google.com/?q=Hrant+Dink+Sokak+Şişli+Istanbul" target="_blank" rel="noopener noreferrer">
                                        Get Directions
                                    </a>
                                </div>
                            </div>

                            {/* Social */}
                            <div className="contact-social">
                                <h4>Follow Us</h4>
                                <div className="contact-social__links">
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
                        </div>
                    </div>
                </div>
            </section >

            {/* Map Section */}
            < section className="map-section" >
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.5!2d28.95!3d41.04!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAyJzI0LjAiTiAyOMKwNTcnMDAuMCJF!5e0!3m2!1sen!2str!4v1600000000000!5m2!1sen!2str"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Location"
                ></iframe>
            </section >
        </>
    )
}

export default Contact
