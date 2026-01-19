// OngoingPartner.tsx
import { Link } from 'react-router-dom'
import styles from './ServicePage.module.css'

export default function OngoingPartner() {
    return (
        <div className={styles.servicePage}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <span className={styles.tag}>Partnership</span>
                    <h1>Ongoing Partner</h1>
                    <p className={styles.tagline}>One technical partner for the systems your business runs on — inside and out.</p>
                    <div className={styles.heroCta}>
                        <Link to="/contact" className={styles.heroCtaButton}>Work With Us</Link>
                        <span className={styles.heroEmail}>&nbsp;or email <a href="mailto:carissa@hawkington.tech">carissa@hawkington.tech</a></span>
                    </div>
                </div>
            </section>

            {/* Overview */}
            <section className={styles.content}>
                <div className={styles.container}>
                    <p className={styles.lead}>
                        Most small businesses don't need a collection of vendors.<br />
                        They need one responsible partner who understands their website, systems, documentation, and day-to-day operations.
                    </p>
                    <p>
                        That's what this is.
                    </p>

                    <h2>What the Ongoing Partner Model Includes</h2>
                    <p>Depending on the bundle you choose, we handle:</p>
                    
                    <div className={styles.highlight}>
                        <ul>
                            <li>Website design, development, and maintenance</li>
                            <li>Technical and operational documentation</li>
                            <li>Business systems setup and support</li>
                            <li>Ongoing updates, coordination, and troubleshooting</li>
                        </ul>
                    </div>
                    
                    <p>Instead of juggling multiple providers, you get one team that already understands your business.</p>

                    {/* Bundles */}
                    <h2>Ongoing Partner Bundles</h2>

                    <div className={styles.pricingGrid}>
                        <div className={styles.pricingCard}>
                            <h4>Ongoing Partner — Systems + Web</h4>
                            <p className={styles.price}>$300 – $600/month</p>
                            <p className={styles.timeline}>After initial setup</p>
                            <ul>
                                <li>Website build or refresh</li>
                                <li>Hosting and maintenance</li>
                                <li>Business systems setup and support</li>
                                <li>Ongoing updates and coordination</li>
                            </ul>
                            <p className={styles.bestFor}>Best for: businesses that already have content or documentation in place</p>
                        </div>
                        <div className={styles.pricingCard}>
                            <h4>Ongoing Partner — Complete*</h4>
                            <p className={styles.price}>$600 – $1,200/month</p>
                            <p className={styles.timeline}>After initial setup</p>
                            <ul>
                                <li>Website build or refresh</li>
                                <li>Hosting and maintenance</li>
                                <li>Technical and operational documentation</li>
                                <li>Business systems setup (network, email, devices)</li>
                                <li>Ongoing systems and website support</li>
                            </ul>
                            <p className={styles.bestFor}>Best for: businesses that want clarity, stability, and long-term technical ownership</p>
                        </div>
                    </div>

                    <p className={styles.popularNote}>* Complete covers both your external presence and internal operations</p>

                    <p className={styles.contractNote}>Technical writing can be added to Systems + Web at any time if documentation needs arise.</p>

                    {/* How Pricing Works */}
                    <h2>How Pricing Works</h2>
                    <p>Ongoing Partner engagements include:</p>

                    <div className={styles.highlightGrid}>
                        <div className={styles.highlight}>
                            <h3>Initial Setup (One-Time)</h3>
                            <ul>
                                <li>Website build or refresh</li>
                                <li>Systems assessment</li>
                                <li>Implementation</li>
                                <li>Documentation (if Complete)</li>
                            </ul>
                        </div>
                        <div className={styles.highlight}>
                            <h3>Ongoing Support (Monthly)</h3>
                            <ul>
                                <li>Website maintenance</li>
                                <li>Systems support</li>
                                <li>Updates and coordination</li>
                                <li>Documentation updates (if Complete)</li>
                            </ul>
                        </div>
                    </div>

                    <h3>Initial Setup — Typical Ranges</h3>
                    <table className={styles.pricingTable}>
                        <thead>
                            <tr>
                                <th>Business Size</th>
                                <th>Setup Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Small businesses (1–5 users)</td>
                                <td>$4,500 – $8,000</td>
                            </tr>
                            <tr>
                                <td>Growing teams (6–20 users)</td>
                                <td>$8,000 – $20,000</td>
                            </tr>
                        </tbody>
                    </table>

                    <p className={styles.contractNote}>
                        Final pricing depends on the size of your business, the systems involved, and the level of support required.<br />
                        Everything is scoped clearly before work begins.
                    </p>

                    {/* Who This Is For */}
                    <h2>Who This Is For</h2>
                    <p>This model is a good fit if:</p>

                    <div className={styles.highlight}>
                        <ul>
                            <li>You want one partner instead of multiple vendors</li>
                            <li>You don't want to manage hosting, updates, or systems yourself</li>
                            <li>You value predictable costs over emergency invoices</li>
                            <li>You want someone who understands how everything connects</li>
                        </ul>
                    </div>

                    <p>If you just need a one-off website or document, our <Link to="/services/web-development">standalone services</Link> are a better fit.</p>

                    {/* What This Replaces */}
                    <h2>What This Replaces</h2>

                    <div className={styles.highlightGrid}>
                        <div className={styles.highlight}>
                            <h3>Instead Of</h3>
                            <ul>
                                <li>One-off web projects</li>
                                <li>Emergency IT calls</li>
                                <li>Unmaintained documentation</li>
                                <li>Vendor hand-offs and blame games</li>
                            </ul>
                        </div>
                        <div className={styles.highlight}>
                            <h3>You Get</h3>
                            <ul>
                                <li>Continuity</li>
                                <li>One point of contact</li>
                                <li>Someone who already knows your setup</li>
                                <li>No re-explaining every time something breaks</li>
                            </ul>
                        </div>
                    </div>

                    {/* Service Area */}
                    <h2>Service Area</h2>
                    <p>
                        Based in Marshall, Illinois. On-site services available within a 25-mile radius.
                        Projects in Indiana incur a minimum 10% increase on project costs due to tax and compliance requirements.
                        Ongoing support contracts are quoted at standard rates regardless of location.
                        Remote support available for all clients.
                    </p>

                    {/* Getting Started */}
                    <h2>Getting Started</h2>
                    <p>
                        Every engagement starts with a conversation and a clear plan.
                    </p>
                    <p>
                        We'll review your current setup, identify gaps, and recommend the right bundle — no pressure, no upsell games.
                    </p>

                </div>
            </section>

            {/* CTA */}
            <section className={styles.cta}>
                <div className={styles.container}>
                    <h2>Ready for one partner instead of five vendors?</h2>
                    <p>
                        Let's talk about what you need and whether this model makes sense for your business.
                    </p>
                    <Link to="/contact" className={styles.ctaButton}>Work With Us</Link>
                    <p className={styles.emailDirect}>
                        Or email directly: <a href="mailto:carissa@hawkington.tech">carissa@hawkington.tech</a>
                    </p>
                </div>
            </section>

            <div className={styles.container}>
                <Link to="/services" className={styles.backLink}>← Back to Services</Link>
            </div>
        </div>
    )
}