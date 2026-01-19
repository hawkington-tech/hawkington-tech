import styles from './Home.module.css'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <div className={styles.heroHeader}>
                        <img 
                            src="images/hti-logomark.png" 
                            alt="Hawkington Technologies" 
                            className={styles.heroLogo}
                        />
                        <div className={styles.heroTitles}>
                            <h1 className={styles.title}>Hawkington Technologies</h1>
                            <p className={styles.tagline}>The bridge for the spaces between.</p>
                        </div>
                    </div>
                    <h2 className={styles.heroDescription}>
                        Building connections where others see gaps.<br />
                        Web development. Technical documentation. Business Systems.
                    </h2>
                </div>
            </section>

            {/* Services */}
            <section className={styles.intro}>
                <div className={styles.container}>
                    <h2>What We Offer</h2>
                    <p>
                        Quality work at fair prices.
                        We build for small businesses who need real solutions.
                    </p>
                    
                    <div className={styles.services}>
                        <div className={styles.serviceCard}>
                            <h3>Web Development</h3>
                            <p>Fast, modern websites that actually work. Built for small businesses who need quality without the agency price tag.</p>
                            <Link to="/services/web-development" className={styles.serviceLink}>See Pricing →</Link>
                        </div>
                        <div className={styles.serviceCard}>
                            <h3>Technical Writing</h3>
                            <p>Documentation, whitepapers, README files that humans can actually read. Clear, concise, and written by someone who understands both the tech and the audience.</p>
                            <Link to="/services/technical-writing" className={styles.serviceLink}>Learn More →</Link>
                        </div>
                        <div className={styles.serviceCard}>
                            <h3>Business Systems</h3>
                            <p className={styles.serviceSubtitle}>Tech Setup & Support</p>
                            <p>Hardware assessment, network setup, server configuration, and connectivity solutions. We assess your needs, get you up and running, and offer ongoing support with terms that actually fit your business.</p>
                            <Link to="/services/business-systems" className={styles.serviceLink}>Learn More →</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* System Rebellion Teaser */}
            <section className={styles.rebellion}>
                <div className={styles.container}>
                    <h2>System Rebellion</h2>
                    <p className={styles.rebellionSubtitle}>Coming Spring 2026</p>
                    <p>
                        Our flagship product — an infrastructure monitoring system with personality, 
                        persistence, and purpose. Multi-agent intelligence that watches your systems 
                        so you don't have to, and reports back in a way that actually makes sense.
                    </p>
                    <Link to="/services/system-rebellion" className={styles.rebellionLink}>Learn More →</Link>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.cta}>
                <div className={styles.container}>
                    <h2>Ready to get started?</h2>
                    <p>
                        Whether you need a website that works, documentation that makes sense, 
                        or IT infrastructure built for your business — let's have a conversation. 
                    </p>
                    <Link to="/contact" className={styles.ctaButton}>Get In Touch</Link>
                    <p className={styles.emailDirect}>
                        Or email directly: <a href="mailto:carissa@hawkington.tech">carissa@hawkington.tech</a>
                    </p>
                </div>
            </section>
        </>
    )
}