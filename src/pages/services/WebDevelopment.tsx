// WebDevelopment.tsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './ServicePage.module.css'

export default function WebDevelopment() {
    const [termsOpen, setTermsOpen] = useState(false)

    return (
        <div className={styles.servicePage}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <span className={styles.tag}>Services</span>
                    <h1>Web Development</h1>
                    <p className={styles.tagline}>Fast, modern websites for small businesses. No bloat, no b.s., no agency price tag.</p>
                    <div className={styles.heroCta}>
                        <Link to="/contact" className={styles.heroCtaButton}>Get Started</Link>
                        <span className={styles.heroEmail}>&nbsp;or email <a href="mailto:carissa@hawkington.tech">carissa@hawkington.tech</a></span>
                    </div>
                </div>
            </section>

            {/* Overview */}
            <section className={styles.content}>
                <div className={styles.container}>
                    <h2>What You Get</h2>
                    <p>
                        Clean, functional websites built for small businesses who need a professional online presence 
                        without the five-figure agency invoice. We build fast, we build right, and we don't nickel-and-dime 
                        you with "discovery phases" and "strategy sessions."
                    </p>
                    <p>
                        You tell us what you need. We tell you what it costs. We build it. Done.
                    </p>

                    {/* Base Pricing */}
                    <h2>Pricing</h2>
                    
                    <div className={styles.pricingSection}>
                        <h3>Initial Build</h3>
                        <div className={styles.pricingGrid}>
                            <div className={styles.pricingCard}>
                                <h4>Template A: Single-Page</h4>
                                <p className={styles.price}>$750 – $1,000</p>
                                <p className={styles.timeline}>1-2 weeks</p>
                                <ul>
                                    <li>Single-page scroller layout</li>
                                    <li>Mobile responsive</li>
                                    <li>Contact form</li>
                                    <li>Basic SEO setup</li>
                                </ul>
                                <p className={styles.bestFor}>Best for: Bakeries, coffee shops, simple service businesses</p>
                            </div>
                            <div className={styles.pricingCard}>
                                <h4>Template B: Multi-Page</h4>
                                <p className={styles.price}>$1,200 – $1,500</p>
                                <p className={styles.timeline}>2-3 weeks</p>
                                <ul>
                                    <li>Multi-page structure</li>
                                    <li>Mobile responsive</li>
                                    <li>Contact form</li>
                                    <li>Basic SEO setup</li>
                                    <li>Up to 5 pages</li>
                                </ul>
                                <p className={styles.bestFor}>Best for: Auto shops, financial advisors, businesses needing depth</p>
                            </div>
                        </div>
                    </div>

                    {/* Add-Ons */}
                    <div className={styles.pricingSection}>
                        <h3>Add-Ons</h3>
                        <table className={styles.pricingTable}>
                            <thead>
                                <tr>
                                    <th>Add-On</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Menu page with items/pricing*</td>
                                    <td>$300 – $500</td>
                                </tr>
                                <tr>
                                    <td>Online ordering integration*</td>
                                    <td>$600 – $900</td>
                                </tr>
                                <tr>
                                    <td>Payment processing*</td>
                                    <td>$400 – $600</td>
                                </tr>
                                <tr>
                                    <td>Booking/appointment system*</td>
                                    <td>$500 – $700</td>
                                </tr>
                                <tr>
                                    <td>Staff/Team page*</td>
                                    <td>$500 – $700</td>
                                </tr>
                                <tr>
                                    <td>Photo optimization (per image)</td>
                                    <td>$10 – $15</td>
                                </tr>
                                <tr>
                                    <td>Stock photography sourcing</td>
                                    <td>$150 – $300 + licensing</td>
                                </tr>
                                <tr>
                                    <td>Custom domain setup</td>
                                    <td>$50 + domain cost</td>
                                </tr>
                                <tr>
                                    <td>Custom email setup</td>
                                    <td>$200 – $350</td>
                                </tr>
                                <tr>
                                    <td>Deployment setup (advanced)</td>
                                    <td>$250 flat fee</td>
                                </tr>
                            </tbody>
                        </table>
                        <p className={styles.contractNote}>
                            *Adds 3-5 days to project timeline.<br />
                            Staff/Team page includes up to 10 photos optimized for web. Additional photos billed at $10-15 each.<br />
                            Photo shoot coordination available by referral only.<br />
                            No deployment add-on? We provide the code with basic Vercel + Supabase setup. Edge functions and advanced config are on you.
                        </p>
                    </div>

                    {/* Deployment & Hosting */}
                    <div className={styles.pricingSection}>
                        <h3>Deployment & Hosting</h3>
                        <p className={styles.addOnNote}>We set it up. You own the accounts.</p>
                        <table className={styles.pricingTable}>
                            <thead>
                                <tr>
                                    <th>Service</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Basic deployment (included in base price)</td>
                                    <td>Included</td>
                                </tr>
                                <tr>
                                    <td>Supabase contact form (daily digest)</td>
                                    <td>Included</td>
                                </tr>
                                <tr>
                                    <td>Domain pointing (existing domain)</td>
                                    <td>Included</td>
                                </tr>
                                <tr>
                                    <td>Advanced deployment setup</td>
                                    <td>$250 flat fee</td>
                                </tr>
                                <tr>
                                    <td>Custom notification schedule</td>
                                    <td>$250 flat fee</td>
                                </tr>
                                <tr>
                                    <td>Custom email setup (Google/Microsoft 365)</td>
                                    <td>$200 – $350</td>
                                </tr>
                                <tr>
                                    <td>Hosting management (with maintenance contract)</td>
                                    <td>+$75/month</td>
                                </tr>
                                <tr>
                                    <td>Hosting management (standalone)</td>
                                    <td>$100/month</td>
                                </tr>
                            </tbody>
                        </table>
                        <p className={styles.contractNote}>
                            Basic deployment includes Vercel setup, domain pointing, and Supabase contact form with daily digest notifications.<br /><br />
                            Expanded storage, larger databases, or premium hosting tiers are your responsibility — we'll set them up, you pay the subscriptions directly.<br /><br />
                            SSL certificates included (free via hosting platform).
                        </p>
                    </div>

                    {/* Design Services */}
                    <div className={styles.pricingSection}>
                        <h3>Design Services</h3>
                        <p className={styles.addOnNote}>Logos, icons, and brand assets — created by our design partners, managed by us</p>
                        <table className={styles.pricingTable}>
                            <thead>
                                <tr>
                                    <th>Service</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Logo design</td>
                                    <td>$300 – $500</td>
                                </tr>
                                <tr>
                                    <td>Icon set (5-10 custom icons)</td>
                                    <td>$150 – $250</td>
                                </tr>
                                <tr>
                                    <td>Favicon package</td>
                                    <td>$75 – $100</td>
                                </tr>
                                <tr>
                                    <td>Social media kit</td>
                                    <td>$200 – $350</td>
                                </tr>
                                <tr>
                                    <td>Brand style guide</td>
                                    <td>$400 – $600</td>
                                </tr>
                            </tbody>
                        </table>
                        <p className={styles.contractNote}>
                            50% deposit required before design work begins.<br />
                            2 rounds of revisions included. Additional revisions billed at $125/hour.<br />
                            Final files delivered in SVG, PNG, and web-optimized formats.
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
                                <h3>What's Included in the Base Price</h3>
                                <ul>
                                    <li>Template site (single-page or multi-page as quoted)</li>
                                    <li>Vercel deployment setup</li>
                                    <li>Supabase contact form (daily digest notifications)</li>
                                    <li>Domain pointing (if you already own one)</li>
                                    <li>Mobile responsive design</li>
                                    <li>Basic SEO setup</li>
                                </ul>
                            </div>
                            <div className={`${styles.highlight} ${styles.warning}`}>
                                <h3>What's NOT Included</h3>
                                <ul>
                                    <li>Content — you provide copy, photos, logos or see our <Link to="/services/technical-writing">Technical Writing</Link> services page!</li>
                                    <li>Custom notification schedules (immediate, hourly, etc.)</li>
                                    <li>Domain purchase — you buy it, we point it</li>
                                    <li>Email setup — that's a separate add-on</li>
                                    <li>Design services — logos, icons, brand assets</li>
                                    <li>Photo optimization beyond what's included in add-ons</li>
                                    <li>Anything marked with an asterisk in Add-Ons</li>
                                </ul>
                            </div>
                        </div>

                        <p>
                            The price you're quoted is the price you pay — no hidden fees, no surprise invoices. 
                            But if you want more than the basics, that's what add-ons are for.
                        </p>

                        <p className={styles.contractNote}>
                            <strong>Payment Terms:</strong><br />
                            50% deposit due when quote is accepted and project documents are signed.<br />
                            Remaining 50% due 24 hours before launch.<br />
                            Site does not go live until payment is received in full. No exceptions.
                        </p>
                    </div>

                    {/* Maintenance Contracts */}
                    <div className={styles.pricingSection}>
                        <h3>Maintenance Contracts</h3>
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
                                    <td>$75</td>
                                    <td>Quarterly updates, hosting support</td>
                                </tr>
                                <tr>
                                    <td>Standard</td>
                                    <td>$150</td>
                                    <td>Monthly updates, content changes</td>
                                </tr>
                                <tr>
                                    <td>Premium</td>
                                    <td>$300</td>
                                    <td>Weekly check-ins, priority support, analytics</td>
                                </tr>
                            </tbody>
                        </table>
                        <p className={styles.contractNote}>
                            Ad-hoc changes outside contract: $125/hour
                        </p>
                    </div>

                    {/* Payment Options */}
                    <div className={styles.pricingSection}>
                        <h3>Payment Options</h3>
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
                                <h4>Website Build Terms</h4>
                                <ul>
                                    <li>50% deposit required before work begins</li>
                                    <li>Remaining 50% due 24 hours before launch</li>
                                    <li>Site does not go live until payment is received in full</li>
                                </ul>

                                <h4>Maintenance Contract Terms</h4>
                                <ul>
                                    <li>Minimum contract term: 6 or 12 months</li>
                                    <li>Pay in full at signing: 1 month free</li>
                                    <li>50% upfront: Remainder billed monthly starting month 2, no fees</li>
                                    <li>Monthly billing: 2.5% administrative upcharge, due on or before the 1st of each month</li>
                                    <li>Late payments incur fees</li>
                                    <li>Failed payments incur fees and may result in immediate contract termination</li>
                                    <li>Upon termination, remaining contract balance becomes due immediately</li>
                                    <li>Contract termination requests must be submitted in writing by the 21st of the month to stop billing for the following month</li>
                                </ul>

                                <h4>Deployment & Hosting</h4>
                                <ul>
                                    <li>Basic deployment (Vercel + Supabase daily digest) included in base price</li>
                                    <li>Advanced deployment setup: $250 flat fee</li>
                                    <li>Custom notification schedules: $250 flat fee</li>
                                    <li>Changes to notification settings after deployment billed at $125/hour</li>
                                    <li>Premium hosting tiers, expanded storage, or larger databases are client's responsibility</li>
                                    <li>HTI does not maintain hosting accounts unless specified in maintenance contract (+$75/month) or standalone agreement ($100/month)</li>
                                    <li>SSL certificates provided free via hosting platform</li>
                                </ul>

                                <h4>Design Services</h4>
                                <ul>
                                    <li>50% deposit required before design work begins</li>
                                    <li>2 rounds of revisions included in quoted price</li>
                                    <li>Additional revisions billed at $125/hour</li>
                                    <li>Final deliverables: SVG, PNG, and web-optimized formats</li>
                                    <li>HTI retains right to display work in portfolio unless client purchases exclusivity</li>
                                </ul>

                                <h4>Photography & Images</h4>
                                <ul>
                                    <li>Photo optimization: $10-15 per image</li>
                                    <li>Staff/Team page includes optimization for up to 10 photos</li>
                                    <li>Stock photography sourcing: $150-300 plus licensing fees (paid by client)</li>
                                    <li>Photo shoot coordination: Referral only — we recommend photographers, client handles booking</li>
                                    <li>Client-provided photos should be high resolution; we are not responsible for quality of source images</li>
                                </ul>

                                <h4>Ad-Hoc Changes</h4>
                                <p>
                                    Content changes outside your contracted tier are billed at $125/hour with a 1-hour minimum. 
                                    This includes: color changes, copy updates, image swaps, layout tweaks, and "quick fixes" that aren't quick.
                                </p>

                                <h4>What We Don't Do</h4>
                                <ul>
                                    <li>Refunds for completed work</li>
                                    <li>Endless revision cycles — scope is defined upfront</li>
                                    <li>Work without a signed contract and deposit</li>
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Docs Links */}
                    <div className={styles.docsLinks}>
                        <h3>Documentation</h3>
                        <p>Everything's transparent. Here's what you'll be working with:</p>
                        <ul>
                            <li><Link to="/docs/briefs/website">Website Project Brief Template</Link></li>
                            <li><Link to="/docs/contracts/web-development">Sample Web Development Contract</Link></li>
                            <li><Link to="/docs/contracts/maintenance">Sample Maintenance Agreement</Link></li>
                            <li><Link to="/docs/sla/web-development">Web Development SLA</Link></li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.cta}>
                <div className={styles.container}>
                    <h2>Ready to get started?</h2>
                    <p>
                        No sales pitch, no pressure. Tell us what you need, we'll tell you what it costs.
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