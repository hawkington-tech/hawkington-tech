// WebDevelopment.tsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './ServicePage.module.css'

export default function WebDevelopment() {
    const [scopeOpen, setScopeOpen] = useState(false)
    const [termsOpen, setTermsOpen] = useState(false)

    return (
        <div className={styles.servicePage}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <span className={styles.tag}>Services</span>
                    <h1>Web Development</h1>
                    <p className={styles.tagline}>
                        Clean, functional websites for small businesses that need a professional online presence — without the five-figure agency invoice.
                    </p>
                    <p className={styles.heroMeta}>
                        <a href="#packages">See pricing below</a> or email{" "}
                        <a href="mailto:carissa@hawkington.tech">carissa@hawkington.tech</a>
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className={styles.content}>
                <div className={styles.container}>

                    {/* PACKAGES (anchor section) */}
                    <h2 id="packages">Website Packages</h2>

                    <div className={styles.pricingGrid}>
                        <div className={`${styles.pricingCard} ${styles.featuredCard}`}>
                            <div className={styles.badge}>Most Popular</div>
                            <h4>Standard Site</h4>
                            <p className={styles.price}>$2,000 – $2,500</p>
                            <p className={styles.timeline}>2–3 weeks</p>
                            <ul>
                                <li>Multi-page website (up to 5 pages)</li>
                                <li>Mobile responsive design</li>
                                <li>Contact form</li>
                                <li>Basic SEO</li>
                                <li>Deployment and domain pointing</li>
                            </ul>
                            <p className={styles.bestFor}>Best for: service businesses, consultants, local companies</p>
                        </div>
                        <div className={styles.pricingCard}>
                            <h4>Starter Site</h4>
                            <p className={styles.price}>$1,250 – $1,500</p>
                            <p className={styles.timeline}>1–2 weeks</p>
                            <ul>
                                <li>Single-page layout</li>
                                <li>Mobile responsive design</li>
                                <li>Contact form</li>
                                <li>Basic SEO</li>
                                <li>Deployment and domain pointing</li>
                            </ul>
                            <p className={styles.bestFor}>Best for: cafes, trades, solo service businesses</p>
                        </div>

                        <div className={styles.pricingCard}>
                            <h4>Expanded Site</h4>
                            <p className={styles.price}>$3,000 – $4,000</p>
                            <p className={styles.timeline}>3–4 weeks</p>
                            <ul>
                                <li>Everything in Standard</li>
                                <li>Additional pages or advanced layouts</li>
                                <li>Booking, payments, or ordering integrations</li>
                                <li>More involved deployment setup</li>
                            </ul>
                            <p className={styles.bestFor}>Best for: growing businesses with operational needs</p>
                        </div>
                    </div>

                    {/* POSITIONING BREAK */}
                    <div className={styles.positioningBreak}>
                        <p>
                            We build custom-coded websites that are fast, reliable, and easy to maintain. 
                            No bloated platforms, no mystery fees, and no endless "strategy phases."
                        </p>
                        <p>
                            You tell us what you need. We tell you what it costs. We build it. Done. You own your accounts — we set it up correctly.
                        </p>
                    </div>

                    {/* WHAT YOU GET (compressed, wrapped) */}
                    <h2>What We Include in Every Build</h2>
                    <div className={styles.referenceBlock}>
                        <ul>
                            <li>Custom-coded website (no page builders)</li>
                            <li>Mobile-responsive design</li>
                            <li>Contact form</li>
                            <li>Basic SEO setup</li>
                            <li>Deployment and domain pointing</li>
                        </ul>
                    </div>

                    {/* OPTIONAL ADD-ONS (reference blocks) */}
                    <h2>Optional Add-Ons</h2>
                    <div className={styles.addOnsContainer}>
                        <p>Reference pricing — quoted clearly before work begins.</p>
                        
                        <div className={styles.addOnsGrid}>
                            <div className={styles.referenceBlock}>
                                <h3>
                                    Business Functionality
                                    <span className={styles.priceRange}>$500 – $1,200</span>
                                </h3>
                                <ul>
                                    <li>Booking or appointment systems</li>
                                    <li>Payment processing</li>
                                    <li>Online ordering</li>
                                    <li>Menus or pricing catalogs</li>
                                </ul>
                            </div>

                            <div className={styles.referenceBlock}>
                                <h3>
                                    Brand & Visual Support
                                    <span className={styles.priceRange}>$300 – $900 + external</span>
                                </h3>
                                <ul>
                                    <li>Stock photography sourcing</li>
                                    <li>Photo optimization</li>
                                    <li>Light visual cleanup</li>
                                </ul>
                                <p className={styles.referenceNote}>
                                    Design, logo work, and photography are handled by vetted freelancers and billed separately at cost + coordination.
                                </p>
                            </div>

                            <div className={styles.referenceBlock}>
                                <h3>
                                    Email & Deployment
                                    <span className={styles.priceRange}>$250 – $500</span>
                                </h3>
                                <ul>
                                    <li>Business email setup (Google / Microsoft)</li>
                                    <li>Custom notification schedules</li>
                                    <li>Advanced deployment configuration</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* HOSTING & MAINTENANCE */}
                    <h2>Hosting & Maintenance</h2>
                    <p>We can manage hosting and updates, or hand everything off after launch.</p>

                    <table className={styles.pricingTable}>
                        <thead>
                            <tr>
                                <th>Plan</th>
                                <th>Monthly</th>
                                <th>Includes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Essential</td>
                                <td>$100</td>
                                <td>Quarterly updates, hosting support</td>
                            </tr>
                            <tr>
                                <td>Managed</td>
                                <td>$175</td>
                                <td>Monthly updates, minor content changes</td>
                            </tr>
                            <tr>
                                <td>Partner</td>
                                <td>$300</td>
                                <td>Priority support, analytics, coordination</td>
                            </tr>
                        </tbody>
                    </table>
                    <p className={styles.contractNote}>
                        Minimum 6-month contract. Ad-hoc work outside contract: $125/hour.
                    </p>

                    {/* SCOPE DETAILS (collapsed by default) */}
                    <div className={styles.disclosure}>
                        <button 
                            className={styles.disclosureToggle}
                            onClick={() => setScopeOpen(!scopeOpen)}
                            aria-expanded={scopeOpen}
                        >
                            <span>Scope details (what's included / not included)</span>
                            <span className={styles.disclosureArrow}>{scopeOpen ? '−' : '+'}</span>
                        </button>
                        
                        {scopeOpen && (
                            <div className={styles.disclosureContent}>
                                <div className={styles.scopeGrid}>
                                    <div className={styles.scopeBlock}>
                                        <h4>Included</h4>
                                        <ul>
                                            <li>Website build as quoted</li>
                                            <li>Deployment and domain pointing</li>
                                            <li>Contact form setup</li>
                                            <li>Mobile-responsive design</li>
                                            <li>Basic SEO</li>
                                        </ul>
                                    </div>
                                    <div className={`${styles.scopeBlock} ${styles.warning}`}>
                                        <h4>Not Included</h4>
                                        <ul>
                                            <li>Copywriting or photography (available separately)</li>
                                            <li>Domain purchase</li>
                                            <li>Email setup (optional add-on)</li>
                                            <li>Advanced integrations unless quoted</li>
                                            <li>Anything outside the agreed scope</li>
                                        </ul>
                                    </div>
                                </div>
                                <p className={styles.smallNote}>
                                    The price you're quoted is the price you pay. If you want more than the basics, we'll quote it clearly before work begins.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* PAYMENT TERMS (demoted) */}
                    <div className={styles.paymentTerms}>
                        <h3>Payment & Engagement</h3>
                        <ul>
                            <li>50% deposit due at project start</li>
                            <li>Remaining 50% due 24 hours before launch</li>
                            <li>Site does not go live until paid in full</li>
                            </ul>
                            <p className={styles.smallNoteTight}>No surprises. No hidden fees.</p>
                    </div>

                    {/* FULL TERMS (accordion) */}
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
                                    <li>One round of revisions included per project phase</li>
                                    <li>Additional revisions billed at $125/hour</li>
                                    <li>Scope changes require written approval and may adjust timeline and cost</li>
                                </ul>

                                <h4>Client Responsibilities</h4>
                                <ul>
                                    <li>Provide copy, images, and brand assets unless otherwise quoted</li>
                                    <li>Timely feedback (delays may affect timeline)</li>
                                    <li>Access to domain registrar and hosting accounts as needed</li>
                                </ul>

                                <h4>What We Don't Do</h4>
                                <ul>
                                    <li>Work without signed agreement and deposit</li>
                                    <li>Unlimited revisions</li>
                                    <li>Scope changes without written approval</li>
                                    <li>Emergency timelines without rush fees</li>
                                </ul>

                                <p className={styles.smallNoteTight}>
                                    Payment and maintenance terms are as listed above. Full details provided in the signed agreement.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* DOCS LINKS (reframed) */}
                    <div className={styles.docsLinks}>
                        <h3>What Working Together Looks Like</h3>
                        <p>Everything's transparent. Here's what you'll be working with:</p>
                        <ul>
                            <li><Link to="/docs/briefs/website">Website Project Brief</Link></li>
                            <li><Link to="/docs/contracts/web-development">Sample Web Development Contract</Link></li>
                            <li><Link to="/docs/contracts/maintenance">Sample Maintenance Agreement</Link></li>
                        </ul>
                    </div>

                    {/* PARTNER MENTION */}
                    <div className={styles.partnerMention}>
                        <p>
                            Some clients choose our <Link to="/services/ongoing-partner">Ongoing Partner</Link> model instead — one relationship for website, systems, and support.
                        </p>
                    </div>

                </div>
            </section>

            {/* CTA */}
            <section className={styles.cta}>
                <div className={styles.container}>
                    <h2>Ready to get started?</h2>
                    <p className={styles.ctaLead}>
                        If you want a clean site, clear pricing, and a process that doesn't waste your time — let's talk.
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