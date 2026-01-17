// ServicesIndex.tsx
import { Link } from 'react-router-dom'
import styles from './ServicesIndex.module.css'

const services = [
    {
        slug: 'system-rebellion',
        title: 'System Rebellion',                                                                                                             
        description: 'Infrastructure monitoring with personality, persistence, and purpose.',
        tag: 'Flagship Product'
    },
    {
        slug: 'web-development',
        title: 'Web Development',
        description: 'Fast, modern websites custom built for your business.',
        tag: 'Services'
    },
    {
        slug: 'technical-writing',
        title: 'Technical Writing',
        description: 'Documentation, whitepapers, and business copy that humans can actually read.',
        tag: 'Services'
    },
    {
        slug: 'small-business-it',
        title: 'Small Business IT',
        description: 'Hardware, networks, servers and more — assessed, installed, and supported.',
        tag: 'Services'
    }
]

export default function ServicesIndex() {
    return (
        <div className={styles.servicesPage}>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <h1>Services</h1>
                    <p className={styles.hook}>We offer web development, technical writing, and small business IT services.</p>
                    <p className={styles.hook}>Let us help you bridge the gap between your business and technology.</p>
                    <p className={styles.hook}>Get in touch to learn more.</p>
                </div>
                <div className={styles.heroCta}>
                    <Link to="/contact" className={styles.heroCtaButton}>Get Started</Link>
                    <span className={styles.heroEmail}> or email <a href="mailto:carissa@hawkington.tech">carissa@hawkington.tech</a></span>
                </div>
            </section>

            <section className={styles.services}>
                <div className={styles.container}>
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
            </section>
        </div>
    )
}