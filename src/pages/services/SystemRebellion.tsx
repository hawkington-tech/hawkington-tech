import { Link } from 'react-router-dom'
import styles from './ServicePage.module.css'

export default function SystemRebellion() {
    return (
        <div className={styles.servicePage}>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <h1>System Rebellion</h1>
                    <p className={styles.tagline}>Infrastructure monitoring with personality, persistence, and purpose.</p>
                </div>
            </section>

            <section className={styles.content}>
                <div className={styles.container}>
                    <h2>What Is System Rebellion?</h2>
                    <p>System Rebellion is our flagship infrastructure monitoring platform — but it's not like anything else on the market. Where traditional monitoring tools give you dashboards full of numbers and charts that require a PhD to interpret, System Rebellion gives you agents with personality who actually explain what's happening in language you understand.</p>
                    
                    <p>Meet Sir Hawkington Von Monitorious III, your pompous but brilliant lead analyst. Terry the Meth Snail, who processes data with chemically-enhanced enthusiasm. Stick, the paranoid security specialist who sees threats everywhere (and is usually right). VIC-20, the retro-computing historian who remembers how we got here.</p>
                    
                    <p>They're absurd. They're memorable. And they make infrastructure monitoring something you actually want to check on.</p>

                    <div className={styles.highlight}>
                        <h3>Key Features</h3>
                        <ul>
                            <li>Multi-agent AI monitoring with distinct personalities</li>
                            <li>Natural language explanations of system events</li>
                            <li>Pattern recognition that learns your infrastructure</li>
                            <li>Anomaly detection before problems become outages</li>
                            <li>Absurdist humor that makes DevOps bearable</li>
                        </ul>
                    </div>

                    <h2>Current Status</h2>
                    <p>System Rebellion is in final development, with beta launch coming in days — not weeks, not "when it's ready," but days. We're done hiding. The core platform is built, the agents are alive, and we're preparing for real-world deployment.</p>
                    
                    <p>Early adopters will get founding-tier pricing and direct access to shape the product's evolution.</p>

                    <h2>The Philosophy</h2>
                    <p>Traditional monitoring treats your infrastructure like a machine to be measured. System Rebellion treats it like a story to be understood. The agents don't just report metrics — they interpret patterns, explain context, and predict what's coming.</p>
                    
                    <p>Because the best monitoring isn't about more data. It's about better understanding.</p>
                </div>
            </section>

            <section className={styles.cta}>
                <div className={styles.container}>
                    <h2>Want Early Access?</h2>
                    <p>Beta launch is imminent. Get on the list for founding-tier pricing and early access.</p>
                    <Link to="/contact" className={styles.ctaButton}>Join the Rebellion</Link>
                    <br />
                    <Link to="/services" className={styles.backLink}>← Back to Services</Link>
                </div>
            </section>
        </div>
    )
}