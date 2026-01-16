// TechnicalWriting.tsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './ServicePage.module.css'

export default function TechnicalWriting() {
    const [termsOpen, setTermsOpen] = useState(false)

    return (
        <div className={styles.servicePage}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <span className={styles.tag}>Services</span>
                    <h1>Technical Writing</h1>
                    <p className={styles.tagline}>Documentation, whitepapers, README files that humans can actually read.</p>
                    <div className={styles.heroCta}>
                        <Link to="/contact" className={styles.heroCtaButton}>Get Started</Link>
                        <span className={styles.heroEmail}>&nbsp;or email <a href="mailto:carissa@hawkington.tech">carissa@hawkington.tech</a></span>
                    </div>
                </div>
            </section>

            {/* The Problem */}
            <section className={styles.content}>
                <div className={styles.container}>
                    <h2>The Problem With Most Technical Docs</h2>
                    <p>
                        They're either written by engineers who can't explain things to humans, or by writers 
                        who don't understand the technology. The result is documentation that's technically 
                        accurate but practically useless, or readable but dangerously wrong.
                    </p>
                    <p>
                        I'm neither. What I am is an English Lit BA who became a developer — someone who can 
                        understand the architecture, understand the system, and explain it in language that 
                        doesn't require a decoder ring.
                    </p>

                    {/* What I Write */}
                    <div className={styles.highlight}>
                        <h3>What I Write</h3>
                        <ul>
                            <li>API documentation that developers actually use</li>
                            <li>README files that get people started in minutes</li>
                            <li>Architecture documents that explain the why, not just the what</li>
                            <li>User guides that reduce support tickets</li>
                            <li>Whitepapers that establish thought leadership</li>
                            <li>Blog posts that drive traffic and demonstrate expertise</li>
                            <li>Case studies (client provides all research, interviews, and data)</li>
                            <li>Website copy (see pricing — billed separately from web development)</li>
                        </ul>
                    </div>

                    <h2>My Approach</h2>
                    <p>
                        I start by understanding. Not just the technology, but who's reading and what they 
                        need to accomplish. Then I write for that person — not for the engineers who built it, 
                        not for some abstract "user," but for the specific human who will be reading this at 
                        2am trying to solve a problem.
                    </p>
                    <p>Clear. Concise. Useful.</p>

                    <h2>Samples</h2>
                    <p>
                        Check out the <Link to="/blog">blog</Link> on this site. "Barefoot With a Machete," 
                        "The Path In Between," and "Fourteen Months in the Spaces Between" are all examples 
                        of my writing — technical concepts made accessible without dumbing them down.
                    </p>

                    {/* Pricing */}
                    <h2>Pricing</h2>

                    <div className={styles.pricingSection}>
                        <h3>Ad-Hoc Projects</h3>
                        <div className={styles.pricingGrid}>
                            <div className={styles.pricingCard}>
                                <h4>Hourly Rate</h4>
                                <p className={styles.price}>$125/hour</p>
                                <p className={styles.timeline}>2-hour minimum</p>
                                <ul>
                                    <li>Any project type</li>
                                    <li>Time billed in 15-minute increments</li>
                                    <li>Quote provided upfront</li>
                                </ul>
                                <p className={styles.bestFor}>Best for: One-off projects, small docs, quick turnarounds</p>
                            </div>
                            <div className={styles.pricingCard}>
                                <h4>Retainer Contract</h4>
                                <p className={styles.price}>Custom Pricing</p>
                                <p className={styles.timeline}>6-month minimum</p>
                                <ul>
                                    <li>Ongoing documentation needs</li>
                                    <li>Predictable monthly output</li>
                                    <li>Priority scheduling</li>
                                    <li>Objectives defined upfront</li>
                                </ul>
                                <p className={styles.bestFor}>Best for: Startups, SaaS companies, ongoing content needs</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.pricingSection}>
                        <h3>Common Project Estimates</h3>
                        <p className={styles.addOnNote}>Actual time varies by complexity — these are typical ranges at standard rate</p>
                        <table className={styles.pricingTable}>
                            <thead>
                                <tr>
                                    <th>Project Type</th>
                                    <th>Typical Hours</th>
                                    <th>Estimated Cost</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>README file</td>
                                    <td>2–4 hours</td>
                                    <td>$250 – $500</td>
                                </tr>
                                <tr>
                                    <td>Blog post (1,000–1,500 words)</td>
                                    <td>2–3 hours</td>
                                    <td>$250 – $375</td>
                                </tr>
                                <tr>
                                    <td>Case study</td>
                                    <td>4–6 hours</td>
                                    <td>$500 – $750</td>
                                </tr>
                                <tr>
                                    <td>Whitepaper (2,500–5,000 words)</td>
                                    <td>8–15 hours</td>
                                    <td>$1,000 – $1,875</td>
                                </tr>
                                <tr>
                                    <td>Full documentation suite</td>
                                    <td>20+ hours</td>
                                    <td>$2,500+</td>
                                </tr>
                                <tr>
                                    <td>Website copy (5 pages)</td>
                                    <td>6–10 hours</td>
                                    <td>$750 – $1,250</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className={styles.pricingSection}>
                        <h3>Rush Fees</h3>
                        <p className={styles.addOnNote}>Need it fast? We can do that — for a price.</p>
                        <table className={styles.pricingTable}>
                            <thead>
                                <tr>
                                    <th>Turnaround</th>
                                    <th>Markup</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>24 hours</td>
                                    <td>2x quoted price</td>
                                </tr>
                                <tr>
                                    <td>48 hours – 5 days</td>
                                    <td>1.5x quoted price</td>
                                </tr>
                                <tr>
                                    <td>7 days – 2 weeks</td>
                                    <td>1.25x quoted price</td>
                                </tr>
                                <tr>
                                    <td>Standard (2+ weeks)</td>
                                    <td>Quoted price</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className={styles.pricingSection}>
                        <h3>Source Materials & Research</h3>
                        <div className={styles.highlightGrid}>
                            <div className={styles.highlight}>
                                <h3>Client Provides Research</h3>
                                <ul>
                                    <li>1-2 hours research/review time included in quote</li>
                                    <li>You provide data, documentation, source materials</li>
                                    <li>I read, absorb, and write</li>
                                </ul>
                            </div>
                            <div className={`${styles.highlight} ${styles.warning}`}>
                                <h3>HTI Does Research</h3>
                                <ul>
                                    <li>$125/hour, billed in 15-minute increments</li>
                                    <li>No exceptions</li>
                                    <li>Research time quoted separately from writing time</li>
                                </ul>
                            </div>
                        </div>
                        <p className={styles.contractNote}>
                            <strong>Case Studies:</strong> Client provides ALL research, interviews, and data. We write. We don't report.
                        </p>
                    </div>

                    {/* Pricing Expectations */}
                    <div className={styles.pricingSection}>
                        <h3>Pricing Expectations</h3>
                        <p>
                            Let's be clear about what's included and what's not.
                        </p>
                        
                        <div className={styles.highlightGrid}>
                            <div className={styles.highlight}>
                                <h3>What's Included</h3>
                                <ul>
                                    <li>Brief via email or phone</li>
                                    <li>Quote provided before work begins</li>
                                    <li>1-2 hours research time (client-provided materials)</li>
                                    <li>One round of revisions</li>
                                    <li>Final deliverable in requested format</li>
                                </ul>
                            </div>
                            <div className={`${styles.highlight} ${styles.warning}`}>
                                <h3>What's NOT Included</h3>
                                <ul>
                                    <li>Research beyond 1-2 hours (billed separately)</li>
                                    <li>Interviews or reporting</li>
                                    <li>Additional revision rounds (billed at $125/hour)</li>
                                    <li>Exclusivity/full copyright transfer (negotiated separately)</li>
                                    <li>Rush delivery without rush fees</li>
                                </ul>
                            </div>
                        </div>

                        <p className={styles.contractNote}>
                            <strong>Payment Terms:</strong><br />
                            50% deposit due before work begins.<br />
                            Remaining 50% due before final deliverable is released.<br />
                            No exceptions.
                        </p>
                    </div>

                    {/* Retainer Payment Options */}
                    <div className={styles.pricingSection}>
                        <h3>Retainer Payment Options</h3>
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
                            Minimum contract: 6 months<br />
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
                                <h4>Project Terms</h4>
                                <ul>
                                    <li>50% deposit required before work begins</li>
                                    <li>Remaining 50% due before final deliverable is released</li>
                                    <li>Work does not begin without signed agreement and deposit</li>
                                </ul>

                                <h4>Kill Fee</h4>
                                <ul>
                                    <li>Cancel mid-project: 50% deposit is non-refundable</li>
                                    <li>Work completed beyond deposit value is billable</li>
                                    <li>Partial deliverables released only after full payment for work completed</li>
                                </ul>

                                <h4>Rush Fees</h4>
                                <ul>
                                    <li>24-hour turnaround: 2x quoted price</li>
                                    <li>48 hours – 5 days: 1.5x quoted price</li>
                                    <li>7 days – 2 weeks: 1.25x quoted price</li>
                                    <li>Standard turnaround (2+ weeks): quoted price</li>
                                    <li>Rush availability not guaranteed — contact us first</li>
                                </ul>

                                <h4>Research & Source Materials</h4>
                                <ul>
                                    <li>Client-provided materials: 1-2 hours review time included</li>
                                    <li>HTI-conducted research: $125/hour, billed in 15-minute increments</li>
                                    <li>Case studies: Client provides ALL research, interviews, and data</li>
                                    <li>We write. We don't report.</li>
                                </ul>

                                <h4>Revisions</h4>
                                <ul>
                                    <li>One round of revisions included in quoted price</li>
                                    <li>Additional revision rounds billed at $125/hour</li>
                                    <li>Scope creep ("while you're at it, can you also...") is billable</li>
                                </ul>

                                <h4>Copyright & Ownership</h4>
                                <ul>
                                    <li>HTI retains all rights to final work until exclusivity is purchased</li>
                                    <li>Exclusivity terms negotiated and written into contract at project start</li>
                                    <li>Copyright terms determined by scope of project — discussed before work begins</li>
                                    <li>HTI retains right to display work in portfolio unless exclusivity is purchased</li>
                                </ul>

                                <h4>Retainer Contract Terms</h4>
                                <ul>
                                    <li>Minimum term: 6 months</li>
                                    <li>Pay in full at signing: 1 month free</li>
                                    <li>50% upfront: Remainder billed monthly starting month 2, no fees</li>
                                    <li>Monthly billing: 2.5% administrative upcharge, due on or before the 1st</li>
                                    <li>Clear objectives and deliverables outlined at contract start</li>
                                    <li>Changes to scope incur additional costs</li>
                                    <li>Late payments incur fees</li>
                                    <li>Failed payments may result in immediate contract termination</li>
                                    <li>Upon termination, remaining balance due immediately</li>
                                    <li>No refunds for early termination except in special circumstances at HTI's discretion</li>
                                    <li>Termination requests must be submitted in writing by the 21st of the month</li>
                                </ul>

                                <h4>What I Don't Do</h4>
                                <ul>
                                    <li>Refunds for completed work</li>
                                    <li>Unlimited revisions</li>
                                    <li>Work without a signed agreement and deposit</li>
                                    <li>Interviews or investigative reporting</li>
                                    <li>Ghost writing for AI-generated content mills</li>
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Docs Links */}
                    <div className={styles.docsLinks}>
                        <h3>Documentation</h3>
                        <p>Everything's transparent. Here's what you'll be working with:</p>
                        <ul>
                            <li><Link to="/docs/briefs/technical-writing">Technical Writing Project Brief</Link></li>
                            <li><Link to="/docs/contracts/technical-writing">Sample Technical Writing Contract</Link></li>
                            <li><Link to="/docs/contracts/retainer">Sample Retainer Agreement</Link></li>
                            <li><Link to="/docs/sla/technical-writing">Technical Writing SLA</Link></li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.cta}>
                <div className={styles.container}>
                    <h2>Need Documentation That Works?</h2>
                    <p>
                        Let's talk about your project and what you need written. 
                        No fluff, no filler — just a conversation about what you need.
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