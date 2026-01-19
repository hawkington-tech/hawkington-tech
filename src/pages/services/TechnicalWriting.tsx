/// TechnicalWriting.tsx
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
                    <p className={styles.tagline}>Clear documentation for businesses that need things explained correctly — not marketed.</p>
                    <div className={styles.heroCta}>
                        <Link to="#packages" className={styles.heroCtaButton}>View Writing Packages</Link>
                        <span className={styles.heroEmail}>&nbsp;or email <a href="mailto:carissa@hawkington.tech">carissa@hawkington.tech</a></span>
                    </div>
                </div>
            </section>

            {/* Overview */}
            <section className={styles.content}>
                <div className={styles.container}>
                    <p className={styles.lead}>
                        We write technical and operational documentation for small businesses that need clarity, structure, and accuracy.
                    </p>
                    <p>
                        If your systems, processes, or services are hard to explain — we make them readable.
                    </p>

                    <h2>The Problem With Most Technical Docs</h2>
                    <p>
                        They're either written by engineers who can't explain things to humans, or by writers who don't understand the technology. The result is documentation that's technically accurate but practically useless, or readable but dangerously wrong.
                    </p>
                    <p>
                        I'm neither. What I am is an English Lit BA who became a developer — someone who can understand the architecture, understand the system, and explain it in language that doesn't require a decoder ring.
                    </p>

                    <h2>What We Do</h2>
                    <p>We help businesses document:</p>
                    
                    <div className={styles.highlight}>
                        <ul>
                            <li>Internal processes and SOPs</li>
                            <li>Client onboarding and support materials</li>
                            <li>Technical systems and workflows</li>
                            <li>Product or service explanations</li>
                            <li>Knowledge bases and internal manuals</li>
                            <li>Developer and API documentation</li>
                        </ul>
                    </div>
                    
                    <p>Everything is written in plain language, organized for reuse, and structured so it actually helps someone.</p>

                    {/* Packages */}
                    <h2 id="packages">Writing Packages</h2>

                    <div className={styles.pricingGrid}>
                        <div className={styles.pricingCard}>
                            <h4>Starter Documentation</h4>
                            <p className={styles.price}>$500 – $750</p>
                            <p className={styles.timeline}>1 week</p>
                            <ul>
                                <li>One short document or guide (up to ~1,500 words)</li>
                                <li>Light structural editing</li>
                                <li>Clear headings and formatting</li>
                                <li>Delivered in Google Docs or Markdown</li>
                            </ul>
                            <p className={styles.bestFor}>Best for: internal SOPs, simple user guides, process documentation</p>
                        </div>
                        <div className={styles.pricingCard}>
                            <h4>Standard Documentation*</h4>
                            <p className={styles.price}>$1,200 – $1,800</p>
                            <p className={styles.timeline}>2–3 weeks</p>
                            <ul>
                                <li>2–4 documents or sections</li>
                                <li>Up to ~5,000 total words</li>
                                <li>Technical clarification and restructuring</li>
                                <li>Cross-references and internal consistency</li>
                                <li>One round of revisions</li>
                            </ul>
                            <p className={styles.bestFor}>Best for: knowledge bases, internal operations manuals, client onboarding documentation</p>
                        </div>
                        <div className={styles.pricingCard}>
                            <h4>Extended Documentation</h4>
                            <p className={styles.price}>$2,500 – $4,000+</p>
                            <p className={styles.timeline}>3–5 weeks</p>
                            <ul>
                                <li>Larger documentation sets</li>
                                <li>Technical interviews and discovery</li>
                                <li>Structured outlines and information architecture</li>
                                <li>Multiple revision passes</li>
                                <li>Optional Markdown or CMS-ready delivery</li>
                            </ul>
                            <p className={styles.bestFor}>Best for: full internal documentation systems, developer docs, complex operational processes</p>
                        </div>
                    </div>

                    <p className={styles.popularNote}>* Standard Documentation is our most popular option</p>

                    {/* Rush Fees */}
                    <h2>Rush Fees</h2>
                    <p>Need it faster? We can accommodate — for a price.</p>

                    <table className={styles.pricingTable}>
                        <thead>
                            <tr>
                                <th>Turnaround</th>
                                <th>Rate</th>
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

                    <p className={styles.contractNote}>Rush availability is not guaranteed. Contact us first to confirm timeline.</p>

                    {/* Add-Ons */}
                    <h2>Optional Add-Ons</h2>

                    <div className={styles.pricingSection}>
                        <h3>Editing & Cleanup</h3>
                        <p className={styles.addOnNote}>$100 – $150/hour</p>
                        <ul>
                            <li>Editing existing documentation</li>
                            <li>Reorganizing messy content</li>
                            <li>Plain-language rewrites</li>
                        </ul>
                    </div>

                    <div className={styles.pricingSection}>
                        <h3>CMS / Website Integration</h3>
                        <p className={styles.addOnNote}>$250 – $500</p>
                        <ul>
                            <li>Formatting for websites</li>
                            <li>Markdown conversion</li>
                            <li>Knowledge base structuring</li>
                        </ul>
                    </div>

                    <div className={styles.pricingSection}>
                        <h3>Ongoing Documentation Support</h3>
                        <p className={styles.addOnNote}>$300 – $750/month</p>
                        <ul>
                            <li>Living documentation updates</li>
                            <li>Process changes</li>
                            <li>Light revisions as your business evolves</li>
                        </ul>
                    </div>

                    {/* Copywriting vs Technical Writing */}
                    <h2>Copywriting vs Technical Writing</h2>
                    <p>We focus on clarity and accuracy.</p>

                    <div className={styles.highlightGrid}>
                        <div className={styles.highlight}>
                            <h3>What We Do</h3>
                            <ul>
                                <li>Technical documentation</li>
                                <li>Process explanations</li>
                                <li>System guides</li>
                                <li>Clear, structured written materials</li>
                            </ul>
                        </div>
                        <div className={`${styles.highlight} ${styles.warning}`}>
                            <h3>What We Don't Do</h3>
                            <ul>
                                <li>Brand voice development</li>
                                <li>Marketing slogans</li>
                                <li>Ad copy</li>
                                <li>Sales pages</li>
                            </ul>
                        </div>
                    </div>

                    <p className={styles.contractNote}>
                        Marketing copy and branding work are handled by trusted freelance copywriters and billed separately at cost + coordination.
                    </p>

                    <p>If you're not sure which you need, we'll help you figure it out before quoting.</p>

                    {/* Source Materials */}
                    <h2>Source Materials & Research</h2>

                    <div className={styles.highlightGrid}>
                        <div className={styles.highlight}>
                            <h3>Client Provides Research</h3>
                            <ul>
                                <li>1–2 hours research/review time included in quote</li>
                                <li>You provide data, documentation, source materials</li>
                                <li>We read, absorb, and write</li>
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

                    {/* Payment Terms */}
                    <h2>Payment Terms</h2>
                    <div className={styles.highlight}>
                        <ul>
                            <li>50% deposit due at project start</li>
                            <li>Remaining balance due before delivery</li>
                            <li>Work does not begin without a signed agreement and deposit</li>
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
                                <h4>Project Terms</h4>
                                <ul>
                                    <li>50% deposit required before work begins</li>
                                    <li>Remaining 50% due before final deliverable is released</li>
                                    <li>Work does not begin without signed agreement and deposit</li>
                                    <li>Timeline begins after deposit and brief/materials received</li>
                                </ul>

                                <h4>Scope & Revisions</h4>
                                <ul>
                                    <li>Scope is defined in writing before work begins</li>
                                    <li>One round of revisions included (Standard and Extended packages)</li>
                                    <li>Additional revisions billed at $125/hour</li>
                                    <li>Scope changes require written approval and may adjust timeline and cost</li>
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
                                    <li>Rush availability not guaranteed — contact us first</li>
                                </ul>

                                <h4>Research & Source Materials</h4>
                                <ul>
                                    <li>Client-provided materials: 1–2 hours review time included</li>
                                    <li>HTI-conducted research: $125/hour, billed in 15-minute increments</li>
                                    <li>Case studies: Client provides ALL research, interviews, and data</li>
                                </ul>

                                <h4>Copyright & Ownership</h4>
                                <ul>
                                    <li>HTI retains all rights to final work until exclusivity is purchased</li>
                                    <li>Exclusivity terms negotiated and written into contract at project start</li>
                                    <li>Copyright terms determined by scope of project — discussed before work begins</li>
                                    <li>HTI retains right to display work in portfolio unless exclusivity is purchased</li>
                                </ul>

                                <h4>Client Responsibilities</h4>
                                <ul>
                                    <li>Provide source materials, data, and context as agreed</li>
                                    <li>Timely feedback (delays may affect timeline)</li>
                                    <li>Access to subject matter experts if needed for technical accuracy</li>
                                </ul>

                                <h4>What We Don't Do</h4>
                                <ul>
                                    <li>Work without signed agreement and deposit</li>
                                    <li>Unlimited revisions</li>
                                    <li>Marketing copy, ad copy, or sales pages</li>
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
                    <h2>Need documentation that actually works?</h2>
                    <p>
                        Tell us what needs explaining. We'll tell you what it costs.
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