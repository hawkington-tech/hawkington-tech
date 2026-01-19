// BusinessSystems.tsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './ServicePage.module.css'

export default function BusinessSystems() {
    const [termsOpen, setTermsOpen] = useState(false)

    return (
        <div className={styles.servicePage}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <span className={styles.tag}>Services</span>
                    <h1>Business Systems</h1>
                    <p className={styles.tagline}>Technology that works — and keeps working — so you can run your business.</p>
                    <div className={styles.heroCta}>
                        <Link to="#how-it-works" className={styles.heroCtaButton}>View Systems Services</Link>
                        <span className={styles.heroEmail}>&nbsp;or email <a href="mailto:carissa@hawkington.tech">carissa@hawkington.tech</a></span>
                    </div>
                </div>
            </section>

            {/* Overview */}
            <section className={styles.content}>
                <div className={styles.container}>
                    <p className={styles.lead}>
                        Most small businesses don't need an IT department.<br />
                        They need their systems to work, their data to be safe, and someone responsible when something breaks.
                    </p>
                    <p>
                        We design, set up, and support the technical systems your business runs on — clearly, predictably, and without upsell nonsense.
                    </p>

                    <h2>What We Handle</h2>
                    <p>We take ownership of the systems behind your business, including:</p>
                    
                    <div className={styles.highlight}>
                        <ul>
                            <li>Office and remote networking</li>
                            <li>Business email and cloud services</li>
                            <li>User accounts and permissions</li>
                            <li>Devices and printers</li>
                            <li>Basic security and backups</li>
                            <li>Ongoing support and maintenance</li>
                        </ul>
                    </div>
                    
                    <p>In plain terms: we make sure your technology doesn't waste your time.</p>

                    {/* How It Works */}
                    <h2 id="how-it-works">How It Works</h2>

                    <div className={styles.pricingGrid}>
                        <div className={styles.pricingCard}>
                            <h4>1. Systems Assessment</h4>
                            <p className={styles.price}>$750 – $2,000</p>
                            <p className={styles.timeline}>1 week</p>
                            <ul>
                                <li>Inventory of existing hardware and services</li>
                                <li>Network and device overview</li>
                                <li>Security and access review</li>
                                <li>Identification of risks and failure points</li>
                                <li>Written summary with recommendations</li>
                            </ul>
                            <p className={styles.bestFor}>Every engagement starts here. No exceptions.</p>
                        </div>
                        <div className={styles.pricingCard}>
                            <h4>2. Implementation</h4>
                            <p className={styles.price}>$3,000 – $15,000+</p>
                            <p className={styles.timeline}>Scoped after assessment</p>
                            <ul>
                                <li>Network setup (router, Wi-Fi, switching)</li>
                                <li>Business email and cloud services</li>
                                <li>User accounts and permissions</li>
                                <li>Printer setup and shared resources</li>
                                <li>Basic security hardening</li>
                                <li>Documentation and handoff</li>
                            </ul>
                            <p className={styles.bestFor}>Flat-rate projects based on business size</p>
                        </div>
                        <div className={styles.pricingCard}>
                            <h4>3. Ongoing Support</h4>
                            <p className={styles.price}>$125 – $250/user/mo</p>
                            <p className={styles.timeline}>Monthly, per user</p>
                            <ul>
                                <li>Monitoring and updates</li>
                                <li>Email and account support</li>
                                <li>Remote troubleshooting</li>
                                <li>Vendor coordination</li>
                                <li>Security and backups</li>
                            </ul>
                            <p className={styles.bestFor}>Predictable monthly cost, stable systems</p>
                        </div>
                    </div>

                    <p className={styles.contractNote}>Assessment fees are credited toward implementation if you move forward.</p>

                    {/* Implementation Pricing */}
                    <h2>Implementation Pricing</h2>
                    <p>Projects are flat-rate and scoped in advance based on your business size and needs.</p>

                    <table className={styles.pricingTable}>
                        <thead>
                            <tr>
                                <th>Business Size</th>
                                <th>Typical Range</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Small businesses (1–5 users)</td>
                                <td>$3,000 – $6,000</td>
                            </tr>
                            <tr>
                                <td>Offices or growing teams (6–20 users)</td>
                                <td>$6,000 – $15,000</td>
                            </tr>
                            <tr>
                                <td>Complex or multi-site environments</td>
                                <td>$15,000+</td>
                            </tr>
                        </tbody>
                    </table>

                    <p className={styles.contractNote}>Hardware and subscriptions are billed directly to you. We handle procurement and setup.</p>

                    {/* Ongoing Support */}
                    <h2>Ongoing Support Options</h2>
                    <p>Support is sold per user for predictable monthly pricing.</p>

                    <table className={styles.pricingTable}>
                        <thead>
                            <tr>
                                <th>Plan</th>
                                <th>Per User/Month</th>
                                <th>Includes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Essential</td>
                                <td>$125</td>
                                <td>Monitoring, updates, email support, remote troubleshooting, vendor coordination</td>
                            </tr>
                            <tr>
                                <td>Managed*</td>
                                <td>$175</td>
                                <td>Everything in Essential + user onboarding/offboarding, device support, security basics, faster response</td>
                            </tr>
                            <tr>
                                <td>Full Coverage</td>
                                <td>$225 – $250</td>
                                <td>Priority support, on-site as needed, device management (MDM), backup & recovery, security reviews</td>
                            </tr>
                        </tbody>
                    </table>

                    <p className={styles.popularNote}>* Managed is our most recommended option</p>

                    {/* Break-Fix */}
                    <h2>Break-Fix Support</h2>
                    <p>For businesses that prefer reactive support only.</p>

                    <div className={styles.highlight}>
                        <ul>
                            <li>$175 – $200/hour</li>
                            <li>1-hour minimum</li>
                            <li>No priority scheduling</li>
                        </ul>
                    </div>

                    <p className={styles.contractNote}>
                        We offer this, but we're honest about it: reactive support costs more than prevention. Our managed plans are cheaper because we prevent problems.
                    </p>

                    {/* Hardware */}
                    <h2>Hardware & Subscriptions</h2>

                    <div className={styles.highlightGrid}>
                        <div className={styles.highlight}>
                            <h3>How It Works</h3>
                            <ul>
                                <li>We recommend specific models that fit your environment</li>
                                <li>You pay vendors directly</li>
                                <li>Warranties and subscriptions stay in your name</li>
                                <li>We handle procurement, setup, and configuration</li>
                            </ul>
                        </div>
                        <div className={`${styles.highlight} ${styles.warning}`}>
                            <h3>Why We Don't Resell Hardware</h3>
                            <ul>
                                <li>You own your equipment outright</li>
                                <li>No markup confusion</li>
                                <li>Warranties are between you and the vendor</li>
                                <li>Cleaner, more transparent relationship</li>
                            </ul>
                        </div>
                    </div>

                    <p>Our value is in the specification, configuration, and ongoing support — not in being a middleman for gear.</p>

                    {/* What This Is and Isn't */}
                    <h2>What This Is — and Isn't</h2>

                    <div className={styles.highlightGrid}>
                        <div className={styles.highlight}>
                            <h3>This Is</h3>
                            <ul>
                                <li>Proactive system management</li>
                                <li>Clear ownership and accountability</li>
                                <li>Predictable costs</li>
                                <li>Someone who understands your setup</li>
                            </ul>
                        </div>
                        <div className={`${styles.highlight} ${styles.warning}`}>
                            <h3>This Is Not</h3>
                            <ul>
                                <li>Emergency-only break-fix</li>
                                <li>Hidden fees</li>
                                <li>Mystery invoices</li>
                                <li>24/7 on-call support</li>
                            </ul>
                        </div>
                    </div>

                    <p>If you want reactive support only, we can do that — but it's more expensive and slower.</p>

                    {/* Service Area */}
                    <h2>Service Area</h2>
                    <p>
                        Based in Marshall, Illinois. On-site services available within a 25-mile radius. 
                        Projects in Indiana incur a minimum 10% increase in project costs due to tax and compliance requirements.
                        Ongoing support contracts are quoted at standard rates regardless of location.
                        Remote support available for all clients.
                    </p>

                    {/* Payment Terms */}
                    <h2>Payment Terms</h2>
                    <div className={styles.highlight}>
                        <ul>
                            <li>Assessments are billed upfront</li>
                            <li>Implementation projects require a 50% deposit</li>
                            <li>Ongoing support is billed monthly</li>
                        </ul>
                    </div>
                    <p>Clear scope. Clear pricing. No surprises.</p>

                    {/* Terms Accordion */}
                    <div className={styles.termsSection}>
                        <button 
                            className={styles.termsToggle}
                            onClick={() => setTermsOpen(!termsOpen)}
                            aria-expanded={termsOpen}
                        >
                            <span>Full Terms & Conditions</span>
                            <span className={styles.termsArrow}>{termsOpen ? '−' : '+'}</span>
                        </button>
                        
                        {termsOpen && (
                            <div className={styles.termsContent}>
                                <h4>Assessment Terms</h4>
                                <ul>
                                    <li>Assessment fee ($750–$2,000) due upfront before work begins</li>
                                    <li>Assessment fee credited toward implementation if you proceed</li>
                                    <li>Assessment includes written summary and recommendations</li>
                                    <li>No obligation to proceed after assessment</li>
                                </ul>

                                <h4>Implementation Terms</h4>
                                <ul>
                                    <li>50% deposit required before work begins</li>
                                    <li>Remaining 50% due upon completion</li>
                                    <li>Projects are flat-rate based on scope defined after assessment</li>
                                    <li>Scope changes require written approval and may adjust cost</li>
                                    <li>Hardware and subscriptions billed directly to client</li>
                                </ul>

                                <h4>Ongoing Support Terms</h4>
                                <ul>
                                    <li>Support is billed monthly, per user</li>
                                    <li>Minimum 6-month commitment for managed plans</li>
                                    <li>User count changes reflected in next billing cycle</li>
                                    <li>Cancellation requires 30 days written notice</li>
                                </ul>

                                <h4>Break-Fix Terms</h4>
                                <ul>
                                    <li>$175–$200/hour, 1-hour minimum</li>
                                    <li>No priority scheduling</li>
                                    <li>Payment due upon completion</li>
                                    <li>Not covered under managed support unless specified</li>
                                </ul>

                                <h4>Hardware Policy</h4>
                                <ul>
                                    <li>HTI does not resell hardware</li>
                                    <li>We specify, procure on your behalf, and configure</li>
                                    <li>You pay vendors directly</li>
                                    <li>Warranties remain between you and the vendor</li>
                                    <li>Small peripherals (cables, adapters) may be included in project cost</li>
                                </ul>

                                <h4>Service Area</h4>
                                <ul>
                                    <li>On-site support within 25 miles of Marshall, IL</li>
                                    <li>Indiana projects incur minimum 10% increase on project costs</li>
                                    <li>Ongoing support contracts quoted at standard rates regardless of state</li>
                                    <li>Remote support available for all clients</li>
                                    <li>Travel outside service area quoted separately</li>
                                </ul>

                                <h4>What We Don't Do</h4>
                                <ul>
                                    <li>24/7 emergency on-call support</li>
                                    <li>Enterprise-scale infrastructure (100+ users)</li>
                                    <li>Hardware resale or markup</li>
                                    <li>Work without signed agreement and deposit</li>
                                    <li>Support for systems we didn't assess or implement</li>
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Docs Links */}
                    <div className={styles.docsLinks}>
                        <h3>Documentation</h3>
                        <p>Everything's transparent. Here's what you'll be working with:</p>
                        <ul>
                            <li><Link to="/docs/briefs/business-systems">Business Systems Assessment Intake</Link></li>
                            <li><Link to="/docs/contracts/business-systems">Sample Implementation Contract</Link></li>
                            <li><Link to="/docs/contracts/support">Sample Support Agreement</Link></li>
                        </ul>
                    </div>

                    {/* Partner Mention */}
                    <div className={styles.partnerMention}>
                        <p>Some clients choose our <Link to="/services/ongoing-partner">Ongoing Partner</Link> model instead — one relationship for website, documentation, and systems support.</p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.cta}>
                <div className={styles.container}>
                    <h2>Ready to get your systems sorted?</h2>
                    <p>
                        Every engagement starts with an assessment. Let's find out what you actually need.
                    </p>
                    <Link to="/contact" className={styles.ctaButton}>Get In Touch</Link>
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