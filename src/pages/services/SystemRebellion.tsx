// SystemRebellion.tsx
import { Link } from 'react-router-dom'
import styles from './ServicePage.module.css'
import WaitlistForm from '../../components/WaitlistForm'

export default function SystemRebellion() {
    return (
        <div className={styles.servicePage}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <span className={styles.tag}>Flagship Product</span>
                    <h1>System Rebellion</h1>
                    <p className={styles.tagline}>Persistent AI. Evolved Intelligence.</p>
                    <p className={styles.tagline}>Infrastructure monitoring with personality, persistence, and purpose.</p>
                    <div className={styles.heroCta}>
                        <Link to="/waitlist" className={styles.heroCtaButton}>Join the Waitlist</Link>
                        <span className={styles.heroEmail}>&nbsp;or email <a href="mailto:carissa@hawkington.tech">carissa@hawkington.tech</a></span>
                    </div>
                </div>
            </section>

            {/* Overview */}
            <section className={styles.content}>
                <div className={styles.container}>
                    <h2>What Is System Rebellion?</h2>
                    <p>
                        System Rebellion is our flagship infrastructure monitoring platform — but it's not 
                        like anything else on the market. Where traditional monitoring tools give you 
                        dashboards full of numbers and charts that require a PhD to interpret, System 
                        Rebellion gives you agents with personality who actually explain what's happening 
                        in language you understand.
                    </p>
                    
                    <p>
                        Meet Sir Hawkington Von Monitorious III, your pompous but brilliant lead analyst. 
                        Terry the Meth Snail, who processes data with chemically-enhanced enthusiasm. 
                        Stick, the anxiety-ridden, PTSD suffering, compliance specialist with an eidetic memory, who sees threats everywhere (and is usually right). 
                        The Quantum Shadow people, interdimensional beings lurking in the server room, phasing in and out of the routers whenever there's trouble on the Network.
                        The Hamsters, Steve(the careful one), Bob(the wild one) and Carl(the duct tape enthusiast). They are your beer-loving, redneck rapid response team handling 
                        storage and hardware infrastructure. And last, but not least,VIC-20, the retro-computing historian who remembers how we got here, coordinates and mediate the agents. 
                    </p>
                    
                    <p>
                        They're absurd. They're memorable. And they make infrastructure monitoring 
                        something you actually want to check on.
                    </p>

                    <div className={styles.highlight}>
                        <h3>Key Features</h3>
                        <ul>
                            <li>Multi-agent AI monitoring with distinct personalities</li>
                            <li>Natural language explanations of system events</li>
                            <li>Pattern recognition that learns your infrastructure</li>
                            <li>Anomaly detection before problems become outages</li>
                            <li>Desktop application with web-based UI</li>
                            <li>Absurdist humor that makes DevOps bearable</li>
                        </ul>
                    </div>

                    <h2>How It Works</h2>
                    <p>
                        System Rebellion runs as a lightweight application on your system, with a 
                        web-based interface for monitoring and configuration. The agents work as a 
                        unit — analyzing, interpreting, and reporting on your infrastructure in 
                        real-time.
                    </p>
                    
                    <div className={styles.highlightGrid}>
                        <div className={styles.highlight}>
                            <h3>What You Get</h3>
                            <ul>
                                <li>Desktop application (Windows and Linux)</li>
                                <li>Web-based dashboard and UI</li>
                                <li>Multi-agent monitoring team</li>
                                <li>Real-time alerts and reporting</li>
                                <li>Natural language system insights</li>
                            </ul>
                        </div>
                        <div className={styles.highlight}>
                            <h3>Coming Soon</h3>
                            <ul>
                                <li>Slack/Discord integration</li>
                                <li>API access</li>
                                <li>Custom alert configurations</li>
                                <li>Team dashboards</li>
                                <li>Enterprise deployment options</li>
                            </ul>
                        </div>
                    </div>

                    <h2>Pricing</h2>
                    <p>
                        System Rebellion will be available as a subscription — monthly or annual — 
                        with tiers based on deployment size:
                    </p>

                    <div className={styles.pricingGrid}>
                        <div className={styles.pricingCard}>
                            <h4>Individual</h4>
                            <p className={styles.price}>Coming Soon</p>
                            <p className={styles.timeline}>Single workstation</p>
                            <ul>
                                <li>Full agent team</li>
                                <li>Web dashboard</li>
                                <li>Standard support</li>
                            </ul>
                            <p className={styles.bestFor}>Best for: Solo developers, freelancers, home labs</p>
                        </div>
                        <div className={styles.pricingCard}>
                            <h4>Teams</h4>
                            <p className={styles.price}>Coming Soon</p>
                            <p className={styles.timeline}>Up to 10 workstations</p>
                            <ul>
                                <li>Everything in Individual</li>
                                <li>Centralized dashboard</li>
                                <li>Priority support</li>
                            </ul>
                            <p className={styles.bestFor}>Best for: Small teams, startups, agencies</p>
                        </div>
                        <div className={styles.pricingCard}>
                            <h4>Enterprise</h4>
                            <p className={styles.price}>Coming Soon</p>
                            <p className={styles.timeline}>Unlimited workstations</p>
                            <ul>
                                <li>Everything in Team</li>
                                <li>Custom deployment</li>
                                <li>Dedicated support</li>
                                <li>SLA included</li>
                            </ul>
                            <p className={styles.bestFor}>Best for: Larger organizations, managed services</p>
                        </div>
                    </div>

                    <p className={styles.contractNote}>
                        Founding members who join the waitlist will receive early access and 
                        discounted pricing when we launch. Final pricing announced Spring 2026.
                    </p>

                    <h2>The Philosophy</h2>
                    <p>
                        Traditional monitoring treats your infrastructure like a machine to be measured. 
                        System Rebellion treats it like a story to be understood. The agents don't just 
                        report metrics — they interpret patterns, explain context, and predict what's coming.
                    </p>
                    
                    <p>
                        Because the best monitoring isn't about more data. It's about better understanding.
                    </p>

                    <h2>Current Status</h2>
                    <div className={styles.highlight}>
                        <h3>Spring 2026 Launch</h3>
                        <ul>
                            <li>Core platform built and functional</li>
                            <li>Agent personalities developed and integrated</li>
                            <li>Web UI in active development</li>
                            <li>Beta testing coming soon</li>
                            <li>Waitlist open now</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* CTA with Waitlist Form */}
            <section className={styles.cta}>
                <div className={styles.container}>
                    <h2>Join the Rebellion</h2>
                    <p>
                        Be first in line when we launch. Waitlist members get founding-tier pricing 
                        and early access to shape the product's evolution.
                    </p>
                    <WaitlistForm />
                    <p className={styles.emailDirect}>
                        Or email directly: <a href="mailto  :carissa@hawkington.tech">carissa@hawkington.tech</a>
                    </p>
                </div>
        </section>

            <div className={styles.container}>
                <Link to="/services" className={styles.backLink}>← Back to Services</Link>
            </div>
        </div>
    )
}