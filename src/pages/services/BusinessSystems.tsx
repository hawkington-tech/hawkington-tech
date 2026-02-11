// BusinessSystems.tsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './ServicePage.module.css'

export default function BusinessSystems() {
    const [hardwareOpen, setHardwareOpen] = useState(false)
    const [scopeOpen, setScopeOpen] = useState(false)
    const [termsOpen, setTermsOpen] = useState(false)

    return (
        <div className={styles.servicePage}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <span className={styles.tag}>Services</span>
                    <h1>Business Systems</h1>
                    <p className={styles.tagline}>
                        Technology that works — and keeps working — so you can run your business.
                    </p>
                    <div className={styles.heroCta}>
                        <a href="#how-it-works" className={styles.heroCtaButton}>See how it works</a>
                        <span className={styles.heroEmail}>
                            &nbsp;or email <a href="mailto:carissa@hawkington.tech">carissa@hawkington.tech</a>
                        </span>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className={styles.content}>
                <div className={styles.container}>

                    {/* HOW IT WORKS (anchor section) */}
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
                    

                    <div className={`${styles.pricingCard} ${styles.featuredCard}`}>
                        <div className={styles.badge}>The Relationship</div>
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

                    {/* POSITIONING BREAK */}
                    <div className={styles.positioningBreak}>
                        <p>
                            Most small businesses don't need an IT department. They need their systems to work, 
                            their data to be safe, and someone responsible when something breaks.
                        </p>
                        <p>
                            We design, set up, and support the technical systems your business runs on — 
                            clearly, predictably, and without upsell nonsense.
                        </p>
                    </div>

                    {/* WHAT WE HANDLE (compressed) */}
                    <h2>What We Handle</h2>
                    <div className={styles.referenceBlock}>
                        <ul>
                            <li>Office and remote networking</li>
                            <li>Business email and cloud services</li>
                            <li>User accounts and permissions</li>
                            <li>Devices and printers</li>
                            <li>Basic security and backups</li>
                            <li>Ongoing support and maintenance</li>
                        </ul>
                        <p className={styles.referenceNote}>
                            In plain terms: we make sure your technology doesn't waste your time.
                        </p>
                    </div>

                    {/* IMPLEMENTATION PRICING */}
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

                    {/* ONGOING SUPPORT OPTIONS */}
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

                    {/* BREAK-FIX (reference block) */}
                    <h2>Break-Fix Support</h2>
                    <div className={styles.referenceBlock}>
                        <p>For businesses that prefer reactive support only.</p>
                        <ul>
                            <li>$175 – $200/hour</li>
                            <li>1-hour minimum</li>
                            <li>No priority scheduling</li>
                        </ul>
                        <p className={styles.referenceNote}>
                            We offer this, but we're honest about it: reactive support costs more than prevention. 
                            Our managed plans are cheaper because we prevent problems.
                        </p>
                    </div>

                    {/* HARDWARE & SUBSCRIPTIONS (collapsed) */}
                    <div className={styles.disclosure}>
                        <button 
                            className={styles.disclosureToggle}
                            onClick={() => setHardwareOpen(!hardwareOpen)}
                            aria-expanded={hardwareOpen}
                        >
                            <span>Hardware & Subscriptions (how we handle equipment)</span>
                            <span className={styles.disclosureArrow}>{hardwareOpen ? '−' : '+'}</span>
                        </button>
                        
                        {hardwareOpen && (
                            <div className={styles.disclosureContent}>
                                <div className={styles.scopeGrid}>
                                    <div className={styles.scopeBlock}>
                                        <h4>How It Works</h4>
                                        <ul>
                                            <li>We recommend specific models that fit your environment</li>
                                            <li>You pay vendors directly</li>
                                            <li>Warranties and subscriptions stay in your name</li>
                                            <li>We handle procurement, setup, and configuration</li>
                                        </ul>
                                    </div>
                                    <div className={`${styles.scopeBlock} ${styles.warning}`}>
                                        <h4>Why We Don't Resell Hardware</h4>
                                        <ul>
                                            <li>You own your equipment outright</li>
                                            <li>No markup confusion</li>
                                            <li>Warranties are between you and the vendor</li>
                                            <li>Cleaner, more transparent relationship</li>
                                        </ul>
                                    </div>
                                </div>
                                <p className={styles.smallNote}>
                                    Our value is in the specification, configuration, and ongoing support — not in being a middleman for gear.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* WHAT THIS IS / ISN'T (collapsed) */}
                    <div className={styles.disclosure}>
                        <button 
                            className={styles.disclosureToggle}
                            onClick={() => setScopeOpen(!scopeOpen)}
                            aria-expanded={scopeOpen}
                        >
                            <span>What this is — and isn't</span>
                            <span className={styles.disclosureArrow}>{scopeOpen ? '−' : '+'}</span>
                        </button>
                        
                        {scopeOpen && (
                            <div className={styles.disclosureContent}>
                                <div className={styles.scopeGrid}>
                                    <div className={styles.scopeBlock}>
                                        <h4>This Is</h4>
                                        <ul>
                                            <li>Proactive system management</li>
                                            <li>Clear ownership and accountability</li>
                                            <li>Predictable costs</li>
                                            <li>Someone who understands your setup</li>
                                        </ul>
                                    </div>
                                    <div className={`${styles.scopeBlock} ${styles.warning}`}>
                                        <h4>This Is Not</h4>
                                        <ul>
                                            <li>Emergency-only break-fix</li>
                                            <li>Hidden fees</li>
                                            <li>Mystery invoices</li>
                                            <li>24/7 on-call support</li>
                                        </ul>
                                    </div>
                                </div>
                                <p className={styles.smallNote}>
                                    If you want reactive support only, we can do that — but it's more expensive and slower.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* SERVICE AREA */}
                    <div className={styles.referenceBlock}>
                        <h3>Service Area</h3>
                        <p>
                            Based in Marshall, Illinois. On-site services available within a 25-mile radius. 
                            Projects in Indiana incur a minimum 10% increase in project costs due to tax and compliance requirements.
                            Remote support available for all clients.
                        </p>
                    </div>

                    {/* PAYMENT TERMS (demoted) */}
                    <div className={styles.paymentTerms}>
                        <h3>Payment & Engagement</h3>
                        <ul>
                            <li>Assessments are billed upfront</li>
                            <li>Implementation projects require a 50% deposit</li>
                            <li>Ongoing support is billed monthly</li>
                        </ul>
                        <p className={styles.smallNoteTight}>Clear scope. Clear pricing. No surprises.</p>
                    </div>

                    {/* FULL TERMS (accordion, de-duplicated) */}
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
                                </ul>

                                <h4>What We Don't Do</h4>
                                <ul>
                                    <li>24/7 emergency on-call support</li>
                                    <li>Enterprise-scale infrastructure (100+ users)</li>
                                    <li>Hardware resale or markup</li>
                                    <li>Work without signed agreement and deposit</li>
                                    <li>Support for systems we didn't assess or implement</li>
                                </ul>

                                <p className={styles.smallNote} style={{ fontStyle: 'italic' }}>
                                    Hardware policy and service area details are as listed above. Full details provided in the signed agreement.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* DOCS LINKS (reframed) */}
                    <div className={styles.docsLinks}>
                        <h3>What Working Together Looks Like</h3>
                        <p>Want to prepare for our first conversation? Start here:</p>
                        <ul>
                            <li><Link to="/docs/briefs/business-systems">Business Systems Assessment Intake</Link></li>
                        </ul>
                    </div>

                    {/* PARTNER MENTION */}
                    <div className={styles.partnerMention}>
                        <p>
                            Some clients choose our <Link to="/services/ongoing-partner">Ongoing Partner</Link> model instead — one relationship for website, documentation, and systems support.
                        </p>
                    </div>

                </div>
            </section>

            {/* CTA */}
            <section className={styles.cta}>
                <div className={styles.container}>
                    <h2>Ready to get your systems sorted?</h2>
                    <p className={styles.ctaLead}>
                        If you want technology that works, predictable costs, and someone who actually takes responsibility — let's start with an assessment.
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