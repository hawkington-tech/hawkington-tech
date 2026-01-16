// About.tsx
import { Link } from 'react-router-dom'
import styles from './About.module.css'

export default function About() {
    return (
        <div className={styles.aboutPage}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <h1>About Hawkington Technologies</h1>
                    <p className={styles.hook}>
                        Quality tech services for small businesses. Clear pricing, solid work, no surprises.
                    </p>
                    <div className={styles.heroCta}>
                        <Link to="/contact" className={styles.heroCtaButton}>Get In Touch</Link>
                        <span className={styles.heroEmail}>&nbsp;or email <a href="mailto:carissa@hawkington.tech">carissa@hawkington.tech</a></span>
                    </div>
                </div>
            </section>

            {/* Mission */}
            <section className={styles.mission}>
                <div className={styles.container}>
                    <h2>The Mission</h2>
                    <p className={styles.missionStatement}>
                        <strong>Build bridges where others see gaps.</strong>
                    </p>
                    <p>
                        Between small businesses and the tech they need. Between complex systems and 
                        documentation people can actually understand. Between "we can't afford that" 
                        and "we can't afford not to."
                    </p>
                    <p>
                        Hawkington Technologies exists to make quality tech services accessible to 
                        businesses that don't have enterprise budgets but still need enterprise-quality work.
                    </p>
                </div>
            </section>

            {/* Who We Are */}
            <section className={styles.team}>
                <div className={styles.container}>
                    <h2>Who's Behind This</h2>
                    <div className={styles.teamGrid}>
                        <div className={styles.teamCard}>
                            <h3>Carissa Edwards</h3>
                            <p className={styles.role}>Founder & Lead Developer</p>
                            <p>
                                Self-taught developer with a background in small business operations and a BA in English Literature from St. Mary of the Woods College.
                                14+ months building with AI collaboration, a decade of experience making complex systems work for real people.
                            </p>
                        </div>
                        <div className={styles.teamCard}>
                            <h3>IT Division</h3>
                            <p className={styles.role}>Small Business IT Services</p>
                            <p>
                                Hardware, networks, and infrastructure handled by someone who actually 
                                knows what they're doing. Associate degree in IT and Infrastructure, 
                                real-world experience setting up and supporting small business systems.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className={styles.services}>
                <div className={styles.container}>
                    <h2>What We Offer</h2>
                    <div className={styles.serviceGrid}>
                        <Link to="/services/web-development" className={styles.serviceCard}>
                            <h3>Web Development</h3>
                            <p>Fast, modern websites for small businesses at prices that make sense.</p>
                        </Link>
                        <Link to="/services/technical-writing" className={styles.serviceCard}>
                            <h3>Technical Writing</h3>
                            <p>Documentation, whitepapers, and content that humans can actually read.</p>
                        </Link>
                        <Link to="/services/small-business-it" className={styles.serviceCard}>
                            <h3>Small Business IT</h3>
                            <p>Hardware, networks, servers — assessed, installed, and supported.</p>
                        </Link>
                        <Link to="/services/system-rebellion" className={styles.serviceCard}>
                            <h3>System Rebellion</h3>
                            <p>Infrastructure monitoring with personality. Coming Spring 2026.</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Approach */}
            <section className={styles.approach}>
                <div className={styles.container}>
                    <h2>How We Work</h2>
                    <div className={styles.approachGrid}>
                        <div className={styles.approachCard}>
                            <h3>Clear Pricing</h3>
                            <p>You know what it costs before we start. No hidden fees, no surprise invoices.</p>
                        </div>
                        <div className={styles.approachCard}>
                            <h3>Solid Terms</h3>
                            <p>Everything in writing. Contracts, timelines, deliverables — all transparent.</p>
                        </div>
                        <div className={styles.approachCard}>
                            <h3>Quality Work</h3>
                            <p>We do it right the first time. And we stand behind what we build.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Deeper Story */}
            <section className={styles.deeper}>
                <div className={styles.container}>
                    <h2>The Longer Story</h2>
                    <p>
                        There's more to how Hawkington Technologies came to be — a longer road 
                        with some unexpected turns. If you're curious about the person behind the company, 
                        these will tell you more than a bio ever could.
                    </p>
                    <div className={styles.articleLinks}>
                        <Link to="/blog/barefoot-with-a-machete" className={styles.articleCard}>
                            <span className={styles.articleLabel}>The Origin Story</span>
                            <h3>Barefoot With a Machete</h3>
                            <p>How an unexpected path led to building something that matters.</p>
                        </Link>
                        <Link to="/blog/the-path-in-between" className={styles.articleCard}>
                            <span className={styles.articleLabel}>The Philosophy</span>
                            <h3>The Path In Between</h3>
                            <p>On AI collaboration, partnership, and the third option nobody's talking about.</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.cta}>
                <div className={styles.container}>
                    <h2>Ready to work together?</h2>
                    <p>
                        Whether you need a website, documentation, or IT infrastructure — let's talk 
                        about what you need and how we can help.
                    </p>
                    <Link to="/contact" className={styles.ctaButton}>Get In Touch</Link>
                    <p className={styles.emailDirect}>
                        Or email directly: <a href="mailto:carissa@hawkington.tech">carissa@hawkington.tech</a>
                    </p>
                </div>
            </section>
        </div>
    )
}