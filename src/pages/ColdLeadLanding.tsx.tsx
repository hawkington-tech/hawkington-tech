// ColdLeadLanding.tsx
import { Link } from 'react-router-dom'
import styles from './ColdLeadLanding.module.css'

export default function ColdLeadLanding() {
    return (
        <div className={styles.coldLeadPage}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <h1>A second set of eyes on your website — no sales pitch</h1>
                    <p className={styles.tagline}>
                        Most small business websites don't need a full rebuild.<br />
                        They usually just need a few things fixed that quietly cause friction.
                    </p>
                </div>
            </section>

            {/* Explanation */}
            <section className={styles.content}>
                <div className={styles.container}>
                    <p className={styles.lead}>
                        If you received an email from me, it's because I noticed something specific — not because you're on a marketing list.
                    </p>

                    <h2>What This Is</h2>
                    <p>I work with small businesses on websites, systems, and documentation.</p>
                    <p>Sometimes, while researching local companies, I notice:</p>

                    <div className={styles.highlight}>
                        <ul>
                            <li>Broken forms</li>
                            <li>Outdated layouts</li>
                            <li>Mobile issues</li>
                            <li>Slow load times</li>
                            <li>Confusing structure</li>
                        </ul>
                    </div>

                    <p>If I reach out, it's simply to offer that observation.<br />
                    You're never obligated to respond.</p>

                    <h2>What Happens If You Reply</h2>
                    <p>If you ask what I noticed, I'll send:</p>

                    <div className={styles.highlight}>
                        <ul>
                            <li>A few specific points</li>
                            <li>No report</li>
                            <li>No pitch</li>
                            <li>No invoice</li>
                        </ul>
                    </div>

                    <p>If you want help fixing it, we can talk through options.<br />
                    If not, that's the end of it.</p>

                    <h2>Who This Is For</h2>
                    <p>This is a good fit if:</p>

                    <div className={styles.highlight}>
                        <ul>
                            <li>Your site hasn't been touched in a while</li>
                            <li>You suspect it could be working better</li>
                            <li>You prefer straightforward explanations over marketing talk</li>
                        </ul>
                    </div>

                    <p>If you're already happy with your setup, no action needed.</p>

                    <h2>About Hawkington Technologies</h2>
                    <p>Hawkington Technologies works with small businesses on:</p>

                    <div className={styles.highlight}>
                        <ul>
                            <li>Website development</li>
                            <li>Business systems and IT</li>
                            <li>Technical documentation</li>
                        </ul>
                    </div>

                    <p>We focus on clarity, stability, and long-term partnerships — not upsells.</p>
                </div>
            </section>

            {/* Soft CTA */}
            <section className={styles.cta}>
                <div className={styles.container}>
                    <p>
                        If you'd like a second set of eyes on your site, you can reply directly to the email you received.
                    </p>
                    <p className={styles.emailDirect}>
                        Or email: <a href="mailto:carissa@hawkington.tech">carissa@hawkington.tech</a>
                    </p>
                </div>
            </section>

            <div className={styles.container}>
                <Link to="/" className={styles.backLink}>← Back to Home</Link>
            </div>
        </div>
    )
}