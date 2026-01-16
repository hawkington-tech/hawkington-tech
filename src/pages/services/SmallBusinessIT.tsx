// SmallBusinessIT.tsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './ServicePage.module.css'

export default function SmallBusinessIT() {
    const [termsOpen, setTermsOpen] = useState(false)

    return (
        <div className={styles.servicePage}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <span className={styles.tag}>Services</span>
                    <h1>Small Business IT</h1>
                    <p className={styles.tagline}>Hardware, networks, servers, and more — assessed, installed, and supported.</p>
                <div className={styles.heroCta}>
                    <Link to="/contact" className={styles.heroCtaButton}>Get Started</Link>
                    <span className={styles.heroEmail}>
                        &nbsp;or email <a href="mailto:carissa@hawkington.tech">carissa@hawkington.tech</a>
                    </span>
                </div>
                </div>
            </section>

            {/* Overview */}
            <section className={styles.content}>
                <div className={styles.container}>
                    <h2>The Problem With Most IT Services</h2>
                    <p>
                        Big IT companies want big contracts. They want to be your outsourced tech department, 
                        bill you monthly for "managed services," and upsell you on enterprise solutions you 
                        don't need. A 5-person law firm doesn't need the same infrastructure as a Fortune 500.
                    </p>
                    <p>
                        I set up small businesses. I get you running, make sure it's solid, and offer support 
                        for what I built. I don't move into your office and I don't bill you for problems 
                        that don't exist.
                    </p>

                    <div className={styles.highlightGrid}>
                        <div className={styles.highlight}>
                            <h3>What I Do</h3>
                            <ul>
                                <li>Workspace setup (up to 10 workstations)</li>
                                <li>Business laptops/desktops with docks, monitors, peripherals</li>
                                <li>Printer setup and configuration</li>
                                <li>VoIP phone system setup</li>
                                <li>Network infrastructure — routers, switches, cable running, WiFi</li>
                                <li>Server setup and configuration (file server, local backup)</li>
                                <li>Backup configuration (local and cloud)</li>
                                <li>Cloud services setup (Microsoft 365, Google Workspace)</li>
                                <li>Basic security — firewall, antivirus, user permissions</li>
                                <li>MDM setup for laptops and mobile devices</li>
                                <li>Break-fix and diagnostics (see pricing below)</li>
                            </ul>
                        </div>
                        <div className={`${styles.highlight} ${styles.warning}`}>
                            <h3>What I Don't Do</h3>
                            <ul>
                                <li>Projects over 10 workstations — you need dedicated IT staff</li>
                                <li>Ongoing MDM management — I set it up, you manage it</li>
                                <li>24/7 on-call support — I'm not your outsourced IT department</li>
                                <li>Enterprise-scale infrastructure (AD forests, Exchange servers)</li>
                                <li>Liability for pre-existing conditions in systems I didn't build</li>
                            </ul>
                        </div>
                    </div>

                    <h2>Service Area</h2>
                    <p>
                        Based in Marshall, Illinois. On-site services available within a 50-mile radius. 
                        Projects in Indiana incur additional costs due to tax liability. Mileage fees apply 
                        for travel outside Marshall city limits.
                    </p>

                    {/* Pricing */}
                    <h2>Pricing</h2>
                    <p>
                        Every project is custom-quoted based on your actual needs. No two offices are the same, 
                        and I'm not going to pretend a cookie-cutter package fits everyone. Here's how it works:
                    </p>

                    <div className={styles.pricingSection}>
                        <h3>How Projects Work</h3>
                        <div className={styles.pricingGrid}>
                            <div className={styles.pricingCard}>
                                <h4>1. Assessment</h4>
                                <p className={styles.price}>$150</p>
                                <p className={styles.timeline}>Waived if you sign within 7 days</p>
                                <ul>
                                    <li>On-site or remote evaluation</li>
                                    <li>Current infrastructure review</li>
                                    <li>Needs analysis</li>
                                    <li>Written quote</li>
                                </ul>
                                <p className={styles.bestFor}>Sign within 7 days: waived. Paid but come back later: credited.</p>
                            </div>
                            <div className={styles.pricingCard}>
                                <h4>2. Quote & Agreement</h4>
                                <p className={styles.price}>Custom</p>
                                <p className={styles.timeline}>Based on assessment</p>
                                <ul>
                                    <li>Itemized equipment costs</li>
                                    <li>Labor estimate (hours)</li>
                                    <li>Timeline</li>
                                    <li>Clear scope of work</li>
                                </ul>
                                <p className={styles.bestFor}>You know exactly what you're paying for before we start</p>
                            </div>
                            <div className={styles.pricingCard}>
                                <h4>3. Build & Deploy</h4>
                                <p className={styles.price}>$125/hour</p>
                                <p className={styles.timeline}>5-hour minimum</p>
                                <ul>
                                    <li>Equipment procurement</li>
                                    <li>On-site installation</li>
                                    <li>Configuration & testing</li>
                                    <li>Staff walkthrough</li>
                                </ul>
                                <p className={styles.bestFor}>Final invoice reflects actual hours worked</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.pricingSection}>
                        <h3>Equipment</h3>
                        <p>
                            All hardware is sourced based on your needs and budget. We handle procurement, 
                            shipping, and ensure everything arrives in working condition.
                        </p>
                        
                        <table className={styles.pricingTable}>
                            <thead>
                                <tr>
                                    <th>Option</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>HTI-Sourced Equipment</td>
                                    <td>1.5x purchase price (sourcing & handling fee). We procure, we deliver, we stand behind it.</td>
                                </tr>
                                <tr>
                                    <td>Client-Provided Equipment</td>
                                    <td>No markup. You source it, you're responsible for its condition.</td>
                                </tr>
                            </tbody>
                        </table>

                        <p className={styles.addOnNote}>
                            Common equipment: business laptops, docking stations, monitors, keyboards, mice, 
                            printers, routers, network switches, access points, small servers, UPS/battery backup.
                        </p>
                    </div>

                    <div className={styles.pricingSection}>
                        <h3>Client-Provided Equipment</h3>
                        <p>
                            You're welcome to provide your own hardware. We'll integrate it into your setup, 
                            configure it, and wire it in. However:
                        </p>
                        <ul>
                            <li>You are responsible for ensuring the condition of all client-provided equipment</li>
                            <li>HTI is not liable for pre-existing defects, failures, or incompatibilities</li>
                            <li>If client-provided equipment fails during setup, additional hours may be required</li>
                            <li>We'll let you know if something's not going to work — but the replacement cost is on you</li>
                        </ul>
                        <p>
                            This includes existing infrastructure. We'll wire in what you've got, but we're not 
                            responsible for the state of equipment we didn't procure.
                        </p>
                    </div>

                    <div className={styles.pricingSection}>
                        <h3>Break-Fix & Diagnostics</h3>
                        <p className={styles.addOnNote}>For systems we didn't build — because sometimes you just need it fixed</p>
                        <table className={styles.pricingTable}>
                            <thead>
                                <tr>
                                    <th>Service</th>
                                    <th>Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Diagnostic Assessment</td>
                                    <td>$150 (flat fee, credited if repair proceeds)</td>
                                </tr>
                                <tr>
                                    <td>Break-Fix Labor</td>
                                    <td>$150/hour (1-hour minimum)</td>
                                </tr>
                                <tr>
                                    <td>Emergency/Same-Day</td>
                                    <td>$200/hour (when available)</td>
                                </tr>
                            </tbody>
                        </table>
                        <p className={styles.contractNote}>
                            We'll fix what we can, but we're not liable for pre-existing conditions, 
                            undocumented configurations, or systems held together with prayers and zip ties. 
                            If we find something beyond repair, we'll tell you — and we can quote a proper rebuild.
                        </p>
                    </div>

                    <div className={styles.pricingSection}>
                        <h3>Ongoing Support Retainers</h3>
                        <p className={styles.addOnNote}>For systems I built — not break-fix for legacy infrastructure</p>
                        <table className={styles.pricingTable}>
                            <thead>
                                <tr>
                                    <th>Tier</th>
                                    <th>Monthly</th>
                                    <th>Includes</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Basic</td>
                                    <td>$100</td>
                                    <td>Quarterly check-ins, remote support, email response within 48 hours</td>
                                </tr>
                                <tr>
                                    <td>Standard</td>
                                    <td>$200</td>
                                    <td>Monthly check-ins, priority remote support, email response within 24 hours</td>
                                </tr>
                                <tr>
                                    <td>Premium</td>
                                    <td>$400</td>
                                    <td>Weekly check-ins, priority support, on-site visits (local), same-day response</td>
                                </tr>
                            </tbody>
                        </table>
                        <p className={styles.contractNote}>
                            Ad-hoc support outside contract: $125/hour
                        </p>
                    </div>

                    <div className={styles.pricingSection}>
                        <h3>Support Retainer Payment Options</h3>
                        <table className={styles.pricingTable}>
                            <thead>
                                <tr>
                                    <th>Option</th>
                                    <th>Terms</th>
                                    <th>Benefit</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Pay in Full</td>
                                    <td>100% at signing</td>
                                    <td>1 month free</td>
                                </tr>
                                <tr>
                                    <td>50% Upfront</td>
                                    <td>50% at signing, remainder monthly starting month 2</td>
                                    <td>Standard rate, no fees</td>
                                </tr>
                                <tr>
                                    <td>Monthly</td>
                                    <td>Billed monthly, due on the 1st</td>
                                    <td>2.5% admin fee</td>
                                </tr>
                            </tbody>
                        </table>
                        <p className={styles.contractNote}>
                            Minimum contract: 6 or 12 months<br />
                            Late payments incur fees. Failed payments may result in contract termination.<br />
                            Upon termination, remaining contract balance becomes due immediately.
                        </p>
                    </div>

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
                                <h4>Assessment Fee</h4>
                                <ul>
                                    <li>$150 assessment fee for all project evaluations</li>
                                    <li>Quote provided after assessment</li>
                                    <li>Sign within 7 days of quote: fee waived</li>
                                    <li>Don't sign within 7 days: fee invoiced, due upon receipt</li>
                                    <li>If fee is paid and you later decide to proceed: fee credited toward final invoice</li>
                                </ul>

                                <h4>Project Payment Terms</h4>
                                <ul>
                                    <li>50% of estimated labor + 100% of equipment cost due before work begins</li>
                                    <li>Equipment is ordered upon receipt of deposit</li>
                                    <li>Final invoice reflects actual hours worked (adjusted up or down from estimate)</li>
                                    <li>Final payment due on day of project completion</li>
                                </ul>

                                <h4>Additional Hours</h4>
                                <ul>
                                    <li>If delays are client-caused: billed at $125/hour</li>
                                    <li>If delays are our fault or equipment procurement issues: HTI absorbs up to 5 hours</li>
                                    <li>Hours beyond 5 absorbed will be discussed before proceeding</li>
                                </ul>

                                <h4>Equipment Liability</h4>
                                <ul>
                                    <li>HTI-sourced equipment: We stand behind it. If it arrives defective, we replace it.</li>
                                    <li>Client-provided equipment: Client is responsible for condition and compatibility</li>
                                    <li>HTI is not liable for failures, defects, or damage to equipment we did not procure</li>
                                    <li>Existing infrastructure integrated at client's risk</li>
                                    <li>If client-provided equipment causes project delays, additional hours are billable</li>
                                </ul>

                                <h4>Non-Payment</h4>
                                <ul>
                                    <li>HTI reserves the right to remove installed equipment equal to unpaid balance</li>
                                    <li>Equipment held until payment received in full</li>
                                    <li>Reinstallation incurs additional labor charges (2-hour minimum)</li>
                                </ul>

                                <h4>Break-Fix Services</h4>
                                <ul>
                                    <li>$150 diagnostic assessment required before work begins</li>
                                    <li>Assessment fee credited toward repair if you proceed</li>
                                    <li>Break-fix labor: $150/hour (1-hour minimum)</li>
                                    <li>Emergency/same-day service: $200/hour (subject to availability)</li>
                                    <li>HTI is not liable for pre-existing defects, undocumented configurations, or failures unrelated to the reported issue</li>
                                    <li>Scope is limited to the reported issue — additional problems are separate tickets</li>
                                    <li>If repair isn't possible, assessment fee still applies</li>
                                </ul>

                                <h4>Support Retainer Terms</h4>
                                <ul>
                                    <li>Minimum contract: 6 or 12 months</li>
                                    <li>Pay in full at signing: 1 month free</li>
                                    <li>50% upfront: Remainder billed monthly starting month 2, no fees</li>
                                    <li>Monthly billing: 2.5% administrative upcharge, due on or before the 1st</li>
                                    <li>Late/failed payments incur fees and may result in immediate termination</li>
                                    <li>Upon termination, remaining balance due immediately</li>
                                    <li>Termination requests must be in writing by the 21st of the month</li>
                                    <li>No refunds for early termination except at HTI's discretion</li>
                                </ul>

                                <h4>Scope Limits</h4>
                                <ul>
                                    <li>Maximum 10 workstations per project</li>
                                    <li>MDM is setup only — ongoing management is client responsibility</li>
                                    <li>Support retainers cover systems HTI built — not legacy infrastructure</li>
                                    <li>Projects outside 50-mile radius subject to mileage fees</li>
                                    <li>Indiana projects incur additional costs due to tax liability</li>
                                </ul>

                                <h4>What We Don't Do</h4>
                                <ul>
                                    <li>Enterprise-scale infrastructure</li>
                                    <li>24/7 on-call support</li>
                                    <li>Ongoing MDM management</li>
                                    <li>Work without a signed agreement and deposit</li>
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Docs Links */}
                    <div className={styles.docsLinks}>
                        <h3>Documentation</h3>
                        <p>Everything's transparent. Here's what you'll be working with:</p>
                        <ul>
                            <li><Link to="/docs/briefs/it-assessment">IT Assessment Intake Form</Link></li>
                            <li><Link to="/docs/contracts/small-business-it">Sample IT Project Contract</Link></li>
                            <li><Link to="/docs/contracts/it-retainer">Sample IT Support Retainer</Link></li>
                            <li><Link to="/docs/sla/small-business-it">Small Business IT SLA</Link></li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.cta}>
                <div className={styles.container}>
                    <h2>Ready to get set up?</h2>
                    <p>
                        New office? Outgrowing your current setup? Let's talk about what you actually need — 
                        no sales pitch, no pressure, just a straight conversation about your infrastructure.
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