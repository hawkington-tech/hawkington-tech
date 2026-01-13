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
        description: 'Clean, functional sites for small businesses. No bloat, no bullshit.',
        tag: 'Services'
    },

    {
        slug: 'consulting',
        title: 'AI Collaboration Consulting',
        description: 'For teams who want to integrate AI partnership without losing their souls.',
        tag: 'Consulting'
    },
    {
        slug: 'courses',
        title: 'Developer Courses',
        description: 'Learn how to actually talk to Claude (and get code that compiles).',
        tag: 'Education'
    },
    {
        slug: 'ai-integration',
        title: 'AI Integration Services',
        description: 'Hands-on help implementing AI tools into your existing workflows.',
        tag: 'Services'
    },
    {
        slug: 'technical-writing',
        title: 'Technical Writing',
        description: 'Documentation, whitepapers, README files that humans can actually read.',
        tag: 'Services'
    },

]

export default function ServicesIndex() {
    return (
        <div className={styles.servicesPage}>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <h1>Services</h1>
                    <p>From infrastructure monitoring to AI integration to clean, functional websites — here's how we can work together.</p>
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