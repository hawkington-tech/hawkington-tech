// TechnicalWriting.tsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './ServicePage.module.css'

export default function TechnicalWriting() {
    const [scopeOpen, setScopeOpen] = useState(false)
    const [researchOpen, setResearchOpen] = useState(false)
    const [termsOpen, setTermsOpen] = useState(false)

    return (
        <div className={styles.servicePage}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <span className={styles.tag}>Services</span>
                    <h1>Technical Writing</h1>
                    <p className={styles.tagline}>
                        Clear documentation for businesses that need things explained correctly — not marketed.
                    </p>
                    <div className={styles.heroCta}>
                        <a href="#packages" className={styles.heroCtaButton}>See pricing below</a>
                        <span className={styles.heroEmail}>
                            &nbsp;or email <a href="mailto:carissa@hawkington.tech">carissa@hawkington.tech</a>
                        </span>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className={styles.content}>
                <div className={styles.container}>

                    {/* PACKAGES (anchor section) */}
                    <h2 id="packages">Writing Packages</h2>

                    <div className={styles.pricingGrid}>
                        <div className={`${styles.pricingCard} ${styles.featuredCard}`}>
                            <div className={styles.badge}>Most Popular</div>
                            <h4>Standard Documentation</h4>
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

                    {/* POSITIONING BREAK */}
                    <div className={styles.positioningBreak}>
                        <p>
                            Most technical docs are either written by engineers who can't explain things to humans, 
                            or by writers who don't understand the technology. The result is documentation that's 
                            technically accurate but practically useless — or readable but dangerously wrong.
                        </p>
                        <p>
                            We're neither. What you get is an English Lit BA who became a developer — someone who 
                            can understand the architecture, understand the system, and explain it in language 
                            that doesn't require a decoder ring.
                        </p>
                    </div>

                    {/* WHAT WE DOCUMENT (compressed) */}
                    <h2>What We Document</h2>
                    <div className={styles.referenceBlock}>
                        <ul>
                            <li>Internal processes and SOPs</li>
                            <li>Client onboarding and support materials</li>
                            <li>Technical systems and workflows</li>
                            <li>Product or service explanations</li>
                            <li>Knowledge bases and internal manuals</li>
                            <li>Developer and API documentation</li>
                        </ul>
                        <p className={styles.referenceNote}>
                            Everything is written in plain language, organized for reuse, and structured so it is accessible to users.
                        </p>
                    </div>

                    {/* RUSH FEES */}
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

                    {/* OPTIONAL ADD-ONS (reference blocks) */}
                    <h2>Optional Add-Ons</h2>
                    <div className={styles.addOnsContainer}>
                        <p>Reference pricing — quoted clearly before work begins.</p>
                        
                        <div className={styles.addOnsGrid}>
                            <div className={styles.referenceBlock}>
                                <h3>
                                    Editing & Cleanup
                                    <span className={styles.priceRange}>$100 – $150/hour</span>
                                </h3>
                                <ul>
                                    <li>Editing existing documentation</li>
                                    <li>Reorganizing messy content</li>
                                    <li>Plain-language rewrites</li>
                                </ul>
                            </div>

                            <div className={styles.referenceBlock}>
                                <h3>
                                    CMS / Website Integration
                                    <span className={styles.priceRange}>$250 – $500</span>
                                </h3>
                                <ul>
                                    <li>Formatting for websites</li>
                                    <li>Markdown conversion</li>
                                    <li>Knowledge base structuring</li>
                                </ul>
                            </div>

                            <div className={styles.referenceBlock}>
                                <h3>
                                    Ongoing Documentation Support
                                    <span className={styles.priceRange}>$300 – $750/month</span>
                                </h3>
                                <ul>
                                    <li>Living documentation updates</li>
                                    <li>Process changes</li>
                                    <li>Light revisions as your business evolves</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* SCOPE: COPYWRITING VS TECHNICAL WRITING (collapsed) */}
                    <div className={styles.disclosure}>
                        <button 
                            className={styles.disclosureToggle}
                            onClick={() => setScopeOpen(!scopeOpen)}
                            aria-expanded={scopeOpen}
                        >
                            <span>Copywriting vs Technical Writing (what we do / don't do)</span>
                            <span className={styles.disclosureArrow}>{scopeOpen ? '−' : '+'}</span>
                        </button>
                        
                        {scopeOpen && (
                            <div className={styles.disclosureContent}>
                                <p>We focus on clarity and accuracy.</p>
                                <div className={styles.scopeGrid}>
                                    <div className={styles.scopeBlock}>
                                        <h4>What We Do</h4>
                                        <ul>
                                            <li>Technical documentation</li>
                                            <li>Process explanations</li>
                                            <li>System guides</li>
                                            <li>Clear, structured written materials</li>
                                        </ul>
                                    </div>
                                    <div className={`${styles.scopeBlock} ${styles.warning}`}>
                                        <h4>What We Don't Do</h4>
                                        <ul>
                                            <li>Brand voice development</li>
                                            <li>Marketing slogans</li>
                                            <li>Ad copy</li>
                                            <li>Sales pages</li>
                                        </ul>
                                    </div>
                                </div>
                                <p className={styles.smallNote}>
                                    Marketing copy and branding work are handled by trusted freelance copywriters and billed separately at cost + coordination.
                                </p>
                                <p className={styles.smallNoteTight}>
                                    If you're not sure which you need, we'll help you figure it out before quoting.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* SOURCE MATERIALS & RESEARCH (collapsed) */}
                    <div className={styles.disclosure}>
                        <button 
                            className={styles.disclosureToggle}
                            onClick={() => setResearchOpen(!researchOpen)}
                            aria-expanded={researchOpen}
                        >
                            <span>Source Materials & Research</span>
                            <span className={styles.disclosureArrow}>{researchOpen ? '−' : '+'}</span>
                        </button>
                        
                        {researchOpen && (
                            <div className={styles.disclosureContent}>
                                <div className={styles.scopeGrid}>
                                    <div className={styles.scopeBlock}>
                                        <h4>Client Provides Research</h4>
                                        <ul>
                                            <li>1–2 hours research/review time included in quote</li>
                                            <li>You provide data, documentation, source materials</li>
                                            <li>We read, absorb, and write</li>
                                        </ul>
                                    </div>
                                    <div className={`${styles.scopeBlock} ${styles.warning}`}>
                                        <h4>HTI Does Research</h4>
                                        <ul>
                                            <li>$125/hour, billed in 15-minute increments</li>
                                            <li>No exceptions</li>
                                            <li>Research time quoted separately from writing time</li>
                                        </ul>
                                    </div>
                                </div>
                                <p className={styles.smallNote}>
                                    <strong>Case Studies:</strong> Client provides ALL research, interviews, and data. We write. We don't report.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* PAYMENT TERMS (demoted) */}
                    <div className={styles.paymentTerms}>
                        <h3>Payment & Engagement</h3>
                        <ul>
                            <li>50% deposit due at project start</li>
                            <li>Remaining balance due before delivery</li>
                            <li>Work does not begin without a signed agreement and deposit</li>
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
                                    <li>Interviews or investigative reporting</li>
                                    <li>Ghost writing for AI-generated content mills</li>
                                </ul>

                                <p className={styles.smallNote} style={{ fontStyle: 'italic' }}>
                                    Payment terms, rush fees, and research policies are as listed above. Full details provided in the signed agreement.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* DOCS LINKS (reframed) */}
                    <div className={styles.docsLinks}>
                        <h3>What Working Together Looks Like</h3>
                        <p>Want to prepare for our first conversation? Start here:</p>
                        <ul>
                            <li><Link to="/docs/briefs/technical-writing">Technical Writing Project Brief</Link></li>
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
                    <h2>Need documentation that actually works?</h2>
                    <p className={styles.ctaLead}>
                        If you want clear writing, honest pricing, and someone who actually understands what they're documenting — let's talk.
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