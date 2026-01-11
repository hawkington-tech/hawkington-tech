import { Link } from 'react-router-dom'
import styles from './ServicePage.module.css'

export default function TechnicalWriting() {
    return (
        <div className={styles.servicePage}>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <h1>Technical Writing</h1>
                    <p className={styles.tagline}>Documentation, whitepapers, README files that humans can actually read.</p>
                </div>
            </section>

            <section className={styles.content}>
                <div className={styles.container}>
                    <h2>The Problem With Most Technical Docs</h2>
                    <p>They're either written by engineers who can't explain things to humans, or by writers who don't understand the technology. The result is documentation that's technically accurate but practically useless, or readable but dangerously wrong.</p>
                    
                    <p>I'm both. An English Lit BA who became a developer. Someone who can understand the architecture and explain it in language that doesn't require a decoder ring.</p>

                    <div className={styles.highlight}>
                        <h3>What I Write</h3>
                        <ul>
                            <li>API documentation that developers actually use</li>
                            <li>README files that get people started in minutes</li>
                            <li>Architecture documents that explain the why, not just the what</li>
                            <li>User guides that reduce support tickets</li>
                            <li>Whitepapers that establish thought leadership</li>
                            <li>Blog posts that drive traffic and demonstrate expertise</li>
                        </ul>
                    </div>

                    <h2>My Approach</h2>
                    <p>I start by understanding. Not just the technology, but who's reading and what they need to accomplish. Then I write for that person — not for the engineers who built it, not for some abstract "user," but for the specific human who will be reading this at 2am trying to solve a problem.</p>
                    
                    <p>Clear. Concise. Useful. No fluff.</p>

                    <h2>Samples</h2>
                    <p>Check out the blog on this site. "Barefoot With a Machete," "The Path In Between," and "Fourteen Months in the Spaces Between" are all examples of my writing — technical concepts made accessible without dumbing them down.</p>
                </div>
            </section>

            <section className={styles.cta}>
                <div className={styles.container}>
                    <h2>Need Documentation That Works?</h2>
                    <p>Let's talk about your project and what you need written.</p>
                    <Link to="/contact" className={styles.ctaButton}>Get In Touch</Link>
                    <br />
                    <Link to="/services" className={styles.backLink}>← Back to Services</Link>
                </div>
            </section>
        </div>
    )
}