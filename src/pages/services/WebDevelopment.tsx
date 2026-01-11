import { Link } from 'react-router-dom'
import styles from './ServicePage.module.css'

export default function WebDevelopment() {
    return (
        <div className={styles.servicePage}>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <h1>Web Development</h1>
                    <p className={styles.tagline}>Clean, functional sites for small businesses. No bloat, no bullshit, prices that won't break the bank.</p>
                </div>
            </section>

            <section className={styles.content}>
                <div className={styles.container}>
                    <h2>What I Build</h2>
                    <p>Fast, modern websites that actually work. No bloated WordPress themes. No page builders that take 10 seconds to load. No subscription fees for basic functionality.</p>
                    
                    <p>Just clean code, thoughtful design, and sites that do what they're supposed to do.</p>

                    <div className={styles.highlight}>
                        <h3>Services</h3>
                        <ul>
                            <li>Business landing pages</li>
                            <li>Portfolio sites</li>
                            <li>Small business websites</li>
                            <li>Blog platforms</li>
                            <li>Contact forms and basic functionality</li>
                            <li>Site redesigns and modernization</li>
                        </ul>
                    </div>

                    <h2>The Stack</h2>
                    <p>React, TypeScript, modern CSS. Deployed on platforms like Vercel that are fast, reliable, and have generous free tiers. Backend functionality through Supabase when needed — auth, databases, forms — without the overhead of managing servers.</p>
                    
                    <p>Translation: your site will be fast, secure, and cheap to host.</p>

                    <h2>Pricing Philosophy</h2>
                    <p>Small businesses shouldn't have to choose between a $200 template that looks like everyone else's and a $10,000 custom build. There's a middle ground: custom-built, professionally designed, reasonably priced.</p>
                    
                    <p>Every project is different, but expect hundreds, not thousands. Let's talk about what you need and I'll give you a straight answer on what it costs.</p>

                    <h2>What You're Looking At</h2>
                    <p>This site — hawkington.tech — was built in a single day using the same stack and approach I'd use for your project. Fast, clean, functional. No bloat.</p>
                </div>
            </section>

            <section className={styles.cta}>
                <div className={styles.container}>
                    <h2>Need a Website?</h2>
                    <p>Tell me what you're looking for. I'll tell you what it costs. No pressure, no sales pitch.</p>
                    <Link to="/contact" className={styles.ctaButton}>Let's Talk</Link>
                    <br />
                    <Link to="/services" className={styles.backLink}>← Back to Services</Link>
                </div>
            </section>
        </div>
    )
}