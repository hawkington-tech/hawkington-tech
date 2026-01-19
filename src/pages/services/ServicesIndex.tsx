// ServicesIndex.tsx
import { Link } from 'react-router-dom'
import styles from './ServicesIndex.module.css'

const services = [
    {
        slug: 'web-development',
        title: 'Web Development',
        description: 'Clean, functional websites for small businesses that need a professional online presence.',
        tag: 'Services'
    },
    {
        slug: 'technical-writing',
        title: 'Technical Writing',
        description: 'Clear documentation for businesses that need things explained correctly — not marketed.',
        tag: 'Services'
    },
    {
        slug: 'business-systems',
        title: 'Business Systems',
        description: 'Technology that works — and keeps working — so you can run your business.',
        tag: 'Services'
    },
    {
        slug: 'system-rebellion',
        title: 'System Rebellion',
        description: 'Infrastructure monitoring with personality, persistence, and purpose.',
        tag: 'Coming Spring 2026'
    }
]

export default function ServicesIndex() {
    return (
        <div className={styles.servicesPage}>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <h1>Services</h1>
                    <p className={styles.tagline}>Quality tech services for small businesses. Clear pricing, solid work, no surprises.</p>
                    <div className={styles.heroCta}>
                        <Link to="/services/ongoing-partner" className={styles.heroCtaButton}>Work With Us</Link>
                        <span className={styles.heroEmail}>&nbsp;or email <a href="mailto:carissa@hawkington.tech">carissa@hawkington.tech</a></span>
                    </div>
                </div>
            </section>

            <section className={styles.services}>
                <div className={styles.container}>
                    <div className={styles.serviceGrid}>
                        {services.map(service => (
                            <Link 
                                key={service.slug} 
                                to={`/services/${service.slug}`}
                                className={styles.serviceCard}
                            >
                                <span className={styles.tag}>{service.tag}</span>
                                <h2>{service.title}</h2>
                                <p>{service.description}</p>
                                <span className={styles.arrow}>→</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.cta}>
                <div className={styles.container}>
                    <h2>Not sure where to start?</h2>
                    <p>
                        Some clients need a website. Some need systems sorted. Some need both — plus documentation and ongoing support.
                    </p>
                    <p>
                        If you're looking for one partner instead of multiple vendors, check out our <Link to="/services/ongoing-partner" className={styles.partnerLink}>Ongoing Partner</Link> model.
                    </p>
                </div>
            </section>
        </div>
    )
}