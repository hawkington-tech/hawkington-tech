sketch a wireframe outline of the revised page

or I can help you refactor this into a shared Services page pattern so Web / Writing / Systems all feel coherent

But honestly?
You’re already operating at a level most small firms never reach.

Ship the refactor when you’re ready — and then stop touching it for a while.

so do you need to see the WebDevelopment.tsx file? I can copy and paste it. I know GitHub connector was being a total shit yesterday and you weren't able to actually see any code. Or i can just connect the local file?

Short answer: yes, I want to see it — and the fastest, cleanest way right now is for you to paste the file.

Longer answer, with rationale and a recommendation so you don’t waste time:

The best option for what we’re doing
✅ Copy-paste WebDevelopment.tsx directly into chat

Why this is ideal right now:

We’re not debugging logic — we’re refactoring structure, hierarchy, and component boundaries

I care about:

section order

component grouping

repetition

where containers vs full-width sections live

Paste gives me:

immediate visibility

ability to quote exact sections back to you

ability to say “move this block above X” or “collapse these three into one component”

You do not need to sanitize it. Types, imports, JSX, comments — all good.

If it’s long, that’s fine. This is exactly the moment where seeing the whole thing is valuable.

Acceptable alternatives (if you really don’t want to paste)
Option 2: Upload the local file

This also works, but:

it adds friction

I still need to open and mentally reflow it

paste is faster for back-and-forth iteration

Option 3: GitHub connector

Honestly? Skip it for now.

Yesterday’s issues weren’t you

We already lost momentum once

This is a design/IA refactor, not a repo audit

What I’ll do once I have the file (so expectations are clear)

I will not rewrite your whole component.

I will:

annotate the file conceptually (section-by-section)

call out:

duplicated sections

sections that should be extracted

sections that should move

propose:

a cleaner component breakdown (e.g. PricingSection, AddOnsReference, MaintenanceTable)

which ones are “sales flow” vs “reference flow”

give you a clear before/after mental model so the refactor feels obvious, not risky

Think of it like:

“Here’s how this file wants to be organized.”

One important constraint (and reassurance)

We are not redesigning visuals here.
We’re refactoring information flow and component intent.

So you won’t get:

CSS bikeshedding

animation suggestions

tailwind micro-optimizations

You will get:

clarity

reduced repetition

easier maintenance

a page that feels lighter without looking different

Do this next

Paste WebDevelopment.tsx in your next message.

If it’s huge:

paste it anyway

or split it across two messages and say “part 1 / part 2”

Once I have it, we’ll do one clean pass — and then you can implement and be done with this page.

You’re asking exactly the right question at exactly the right time.

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
                    <p className={styles.tagline}>Clean, functional websites for small businesses that need a professional online presence — without the five-figure agency invoice.</p>
                    <div className={styles.heroCta}>
                        <Link to="/contact" className={styles.heroCtaButton}>View Website Packages</Link>
                        <span className={styles.heroEmail}>&nbsp;or email <a href="mailto:carissa@hawkington.tech">carissa@hawkington.tech</a></span>
                    </div>
                </div>
            </section>

            {/* Overview */}
            <section className={styles.content}>
                <div className={styles.container}>
                    <p className={styles.lead}>
                        We build custom-coded websites that are fast, reliable, and easy to maintain. No bloated platforms, no mystery fees, and no endless "strategy phases."
                    </p>
                    <p>
                        You tell us what you need.<br />
                        We tell you what it costs.<br />
                        We build it.<br />
                        Done.
                    </p>

                    <h2>What You Get</h2>
                    <p>Every site we build includes:</p>
                    
                    <div className={styles.highlight}>
                        <ul>
                            <li>Custom-coded website (no page builders)</li>
                            <li>Mobile-responsive design</li>
                            <li>Contact form</li>
                            <li>Basic SEO setup</li>
                            <li>Deployment and domain pointing</li>
                            <li>SSL via hosting platform</li>
                        </ul>
                    </div>
                    
                    <p>You own your accounts. We set it up correctly.</p>

                    {/* Packages */}
                    <h2>Website Packages</h2>

                    <div className={styles.pricingGrid}>
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
                            <h4>Standard Site*</h4>
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
                            <p className={styles.popularNote}>* Standard Site is our most popular option</p>

                    {/* Add-Ons */}
                    <h2>Optional Add-Ons</h2>

                    <div className={styles.pricingSection}>
                        <h3>Business Functionality</h3>
                        <p className={styles.addOnNote}>$500 – $1,200 depending on complexity</p>
                        <ul>
                            <li>Booking or appointment systems</li>
                            <li>Payment processing</li>
                            <li>Online ordering</li>
                            <li>Menus or pricing catalogs</li>
                        </ul>
                    </div>

                    <div className={styles.pricingSection}>
                        <h3>Brand & Visual Support</h3>
                        <p className={styles.addOnNote}>$300 – $900 + external costs</p>
                        <ul>
                            <li>Stock photography sourcing</li>
                            <li>Photo optimization</li>
                            <li>Light visual cleanup</li>
                        </ul>
                        <p className={styles.contractNote}>
                            Design, logo work, and photography are handled by vetted freelancers and billed separately at cost + coordination.
                        </p>
                    </div>

                    <div className={styles.pricingSection}>
                        <h3>Email & Deployment Services</h3>
                        <p className={styles.addOnNote}>$250 – $500</p>
                        <ul>
                            <li>Business email setup (Google / Microsoft)</li>
                            <li>Custom notification schedules</li>
                            <li>Advanced deployment configuration</li>
                        </ul>
                    </div>

                    {/* Maintenance */}
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
                        Minimum 6-month contract.<br />
                        Ad-hoc work outside contract: $125/hour.
                    </p>

                    {/* What's Included */}
                    <h2>What's Included — and What's Not</h2>

                    <div className={styles.highlightGrid}>
                        <div className={styles.highlight}>
                            <h3>Included</h3>
                            <ul>
                                <li>Website build as quoted</li>
                                <li>Deployment and domain pointing</li>
                                <li>Contact form setup</li>
                                <li>Mobile-responsive design</li>
                                <li>Basic SEO</li>
                            </ul>
                        </div>
                        <div className={${styles.highlight} ${styles.warning}}>
                            <h3>Not Included</h3>
                            <ul>
                                <li>Copywriting or photography (available separately)</li>
                                <li>Domain purchase</li>
                                <li>Email setup (optional add-on)</li>
                                <li>Advanced integrations unless quoted</li>
                                <li>Anything outside the agreed scope</li>
                            </ul>
                        </div>
                    </div>

                    <p>The price you're quoted is the price you pay.<br />
                    If you want more than the basics, we'll quote it clearly before work begins.</p>

                    {/* Payment Terms */}
                    <h2>Payment Terms</h2>
                    <div className={styles.highlight}>
                        <ul>
                            <li>50% deposit due at project start</li>
                            <li>Remaining 50% due 24 hours before launch</li>
                            <li>Site does not go live until paid in full</li>
                        </ul>
                    </div>
                    <p>No surprises. No hidden fees.</p>

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
                                    <li>Remaining 50% due 24 hours before launch</li>
                                    <li>Site does not go live until payment is received in full</li>
                                    <li>Timeline begins after deposit and signed agreement received</li>
                                </ul>

                                <h4>Scope & Revisions</h4>
                                <ul>
                                    <li>Scope is defined in writing before work begins</li>
                                    <li>One round of revisions included per project phase</li>
                                    <li>Additional revisions billed at $125/hour</li>
                                    <li>Scope changes require written approval and may adjust timeline and cost</li>
                                </ul>

                                <h4>Maintenance Contracts</h4>
                                <ul>
                                    <li>Minimum 6-month commitment</li>
                                    <li>Billed monthly, due on the 1st</li>
                                    <li>Ad-hoc work outside contract scope: $125/hour</li>
                                    <li>Cancellation requires 30 days written notice</li>
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
                            </div>
                        )}
                    </div>

                    {/* Docs Links */}
                    <div className={styles.docsLinks}>
                        <h3>Documentation</h3>
                        <p>Everything's transparent. Here's what you'll be working with:</p>
                        <ul>
                            <li><Link to="/docs/briefs/website">Website Project Brief</Link></li>
                            <li><Link to="/docs/contracts/web-development">Sample Web Development Contract</Link></li>
                            <li><Link to="/docs/contracts/maintenance">Sample Maintenance Agreement</Link></li>
                        </ul>
                    </div>

                    {/* Partner Mention */}
                    <div className={styles.partnerMention}>
                        <p>Some clients choose our <Link to="/services/ongoing-partner">Ongoing Partner</Link> model instead — one relationship for website, systems, and support.</p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.cta}>
                <div className={styles.container}>
                    <h2>Ready to get started?</h2>
                    <p>
                        Tell us what you need. We'll tell you what it costs.
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

Yep — this is exactly what I needed. And good news: your code is clean. The refactor you want is mostly reordering + extracting a few sections into components + reclassifying “sales flow” vs “reference flow.” No rewrite.

Below is a true “markup + redesign” plan you can follow line-by-line. I’ll show:

what stays

what moves

what collapses

what becomes a reusable component

what to delete because it’s redundant

Then I’ll give you a suggested component breakdown and a revised section order.

What’s causing the “listy / heavy” feeling (in code terms)

You’re stacking a lot of reference sections at full visual weight:

What You Get (highlight list)

add-ons (3 list sections)

maintenance (table + note)

included/not included (two lists)

payment terms (list)

terms accordion (more lists)

docs links (list)

You’re repeating terms in multiple places:

payment terms appear as bullets AND in accordion

maintenance contract terms appear under table AND in accordion

“what we don’t do” exists inside accordion, but also implied elsewhere

The page has only one “breather” type: styles.highlight. Everything else reads like “another section.”

So: we fix this by turning some sections into compressed reference blocks, and by moving “heavy details” toward the bottom.

The new scroll order (what you implement)
Keep at top (decision layer)

Hero (unchanged, tiny tweak)

Website Packages (anchor)

“What you get” (short, not a big list)

Optional add-ons (compressed reference)

Hosting & Maintenance (keep table)

Move down (trust + boundaries layer)

Included / Not included (collapsed by default OR visually demoted)

Payment terms (demoted)

Full terms accordion (still there, but don’t repeat content above)

Documentation links (move near bottom, reframe)

Partner mention (keep, near bottom)

CTA + Back link

This matches the mental model: understand → price → options → ongoing → boundaries → details → paperwork → act.

Concrete markup: what to change in your file
1) Hero CTA is pointing to /contact, but says “View Website Packages”

Right now:

<Link to="/contact" className={styles.heroCtaButton}>View Website Packages</Link>


That’s a mismatch. Either:

change text to “Get a Quote” (and keep /contact)

OR make it an in-page anchor to packages

Recommended:

Button: href="#packages" (or to with hash if your router supports it cleanly)

Secondary link: “Contact” or email

This single fix improves flow instantly.

2) Convert “What You Get” into a tighter section (less list, more punch)

Currently you have:

<h2>What You Get</h2>

“Every site we build includes”

styles.highlight wrapping a list

Suggestion:

keep the list, but shorten it (5 items max)

move the “You own your accounts…” line into the same block as a final sentence

don’t use styles.highlight here unless you also use it elsewhere as a true “reference container” (right now it’s the default look)

Implementation idea:

create ReferenceBlock component (see below) and use it consistently.

3) Website packages: mark Standard as “Most Popular” visually and structurally

Right now all three cards are identical.

Change:

add styles.featuredCard to Standard Site

add a small badge element

Example:

<div className={`${styles.pricingCard} ${styles.featuredCard}`}>
  <div className={styles.badge}>Most Popular</div>
  ...
</div>


This isn’t “flashy,” it’s just hierarchy.



4) Optional add-ons: make them compressed reference blocks

Right now you have three identical “pricingSection” blocks. That’s fine — the issue is their visual weight.

Change:

wrap the whole add-ons section in a single container

make each category a smaller sub-block, not a big “section” feeling

Also: consider putting price note inline with header so it scans faster.

5) Hosting & Maintenance: keep table, but don’t repeat contract terms elsewhere

You currently have:

minimum contract + $125/hr under table

the same stuff repeated in the accordion

Fix:

keep the table and the Minimum 6-month contract… note

remove duplicate “Maintenance Contracts” list inside accordion, OR change accordion section to only cover what isn’t already stated.

In other words: accordion should be “fine print,” not “repeat the page.”

6) “What’s Included / Not Included” should be collapsed or demoted

Your screenshot confirmed this is where the page feels like a long grocery receipt.

You have:

<h2>What's Included — and What's Not</h2>
<div className={styles.highlightGrid}>...</div>


Two good options:

Option A (best UX): turn this into an accordion (closed by default)

Label it: “Scope details (included / not included)”

Keep the exact two-column content inside

Option B: keep it open but compress

reduce font size

reduce padding

treat it visually like “reference material”

Given your audience, Option A is cleaner.

7) Payment Terms: demote + remove duplication from accordion

You currently have:

Payment terms list in highlight block

Same content again under “Project Terms” in accordion

Fix:

Keep the visible Payment Terms section (it’s confidence-building)

In accordion, remove the duplicate bullets and replace with one line:

“Payment terms are as listed above. Additional details provided in the signed agreement.”

Less repetition = more premium.

8) Docs links: keep, but reframe and move near bottom

You asked earlier whether docs should be public. Given your current structure, this is already “quiet.”

But: put it under a heading like:

“What working together looks like”

“Project documents”

And move it below terms accordion, above partner mention.

9) CTA repetition: make CTA feel earned

Your CTA is fine. But the page is very “facts, facts, facts, CTA.”

Add one sentence above CTA inside the CTA section:

“If you want a clean site, clear pricing, and a process that doesn’t waste your time — let’s talk.”

That’s it. No extra buttons.

Suggested component extraction (so this becomes maintainable)

Right now you’ve got one monolith. It’s readable, but refactoring will be easier if you extract these:

PackageCards

accepts an array of packages, highlights one

AddOns

accepts an array of categories

MaintenanceTable

data-driven rows

Disclosure (accordion)

reusable, you’ll use it across service pages

DocsLinks

shared across pages (or at least consistent)

This also lets you reuse the layout on Technical Writing and Business Systems later.

Revised outline (pseudo JSX)

This is the “after” structure:

<Hero ... />

<section className={styles.content}>
  <Container>

    <Section id="packages" title="Website Packages">
      <PackageCards ... featured="Standard" />
      <SmallNote>* Standard Site is our most popular option</SmallNote>
    </Section>

    <Section title="What You Get">
      <ReferenceBlock>
        <ShortList ... />
        <p>You own your accounts. We set it up correctly.</p>
      </ReferenceBlock>
    </Section>

    <Section title="Optional Add-Ons" tone="reference">
      <AddOns ... />
    </Section>

    <Section title="Hosting & Maintenance">
      <MaintenanceTable ... />
      <Note>Minimum 6-month contract…</Note>
    </Section>

    <Disclosure title="Scope details (what’s included / not included)">
      <IncludedNotIncludedGrid />
    </Disclosure>

    <Section title="Payment Terms" tone="reference">
      <ReferenceBlock><ShortList ... /></ReferenceBlock>
    </Section>

    <Disclosure title="Full Terms & Conditions">
      <TermsContent deduped />
    </Disclosure>

    <Section title="Project documents" tone="reference">
      <DocsLinks ... />
    </Section>

    <Section tone="reference">
      <PartnerMention />
    </Section>

  </Container>
</section>

<CTA ... />
<BackLink ... />


That’s the whole redesign. Same content, better flow, less fatigue.

If you want, I can go one level deeper

If you paste ServicePage.module.css (or at least the relevant classes: highlight, pricingSection, pricingGrid, termsSection, docsLinks), I can tell you exactly how to:

create a “reference tone” container

compress list sections without harming readability

add the featured card styling cleanly

But you can also implement 80% of the improvement with just the structural changes above.

Want me to do the CSS pass too?

/* ServicePage.module.css */

.servicePage {
    background: var(--deep-navy);
    min-height: 100vh;
}

/* Hero */
.hero {
    padding: 8rem 0 4rem;
    text-align: center;
    background: linear-gradient(to bottom, #0c2d4a, var(--deep-navy));
}

.container {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 2rem;
}

.tag {
    display: inline-block;
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    padding: 0.35rem 1rem;
    border-radius: 20px;
    font-size: 0.85rem;
    color: var(--intelligence-teal);
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.hero h1 {
    font-size: 2.75rem;
    margin-bottom: 1rem;
    background: linear-gradient(to right, #FFFFFF, var(--intelligence-teal));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.tagline {
    font-size: 1.3rem;
    color: var(--text-secondary);
    font-style: italic;
}

/* Content */
.content {
    padding: 4rem 0;
}

.content h2 {
    font-size: 1.75rem;
    color: var(--text-primary);
    margin: 3rem 0 1rem;
}

.content h2:first-child {
    margin-top: 0;
}

.content p {
    color: var(--text-secondary);
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1.25rem;
}

.content ul {
    list-style: none;
    padding: 0;
    margin: 1rem 0;
}

.content li {
    color: var(--text-secondary);
    padding: 0.5rem 0;
    padding-left: 1.5rem;
    position: relative;
    font-size: 1.05rem;
}

.content li::before {
    content: '→';
    position: absolute;
    left: 0;
    color: var(--intelligence-teal);
}

/* Pricing Sections */
.pricingSection {
    margin: 2.5rem 0;
}

.pricingSection h3 {
    font-size: 1.4rem;
    color: var(--intelligence-teal);
    margin-bottom: 1.25rem;
}

.addOnNote {
    font-size: 0.95rem;
    color: var(--text-secondary);
    font-style: italic;
    margin-bottom: 1rem;
}

.contractNote {
    margin-top: 1rem;
    padding: 1rem 1.25rem;
    background: var(--glass-bg);
    border-left: 3px solid var(--intelligence-teal);
    border-radius: 0 8px 8px 0;
    font-size: 0.95rem;
    color: var(--text-secondary);
    line-height: 1.8;
}

/* Pricing Grid (for side-by-side cards) */
.pricingGrid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    margin: 1.5rem 0;
}

.pricingCard {
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    border-radius: 12px;
    padding: 1.75rem;
    transition: all 0.3s ease;
}

.pricingCard:hover {
    border-color: var(--intelligence-teal);
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(6, 182, 212, 0.15);
}

.pricingCard h4 {
    font-size: 1.2rem;
    color: var(--text-primary);
    margin-bottom: 0.75rem;
}

.pricingCard .price {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--intelligence-teal);
    margin-bottom: 0.25rem;
}

.pricingCard .timeline {
    font-size: 0.9rem;
    color: var(--text-secondary);
    margin-bottom: 1.25rem;
    font-style: italic;
}

.pricingCard ul {
    margin: 1rem 0;
}

.pricingCard li {
    font-size: 0.95rem;
    padding: 0.35rem 0;
    padding-left: 1.25rem;
}

.pricingCard li::before {
    content: '✓';
    color: var(--intelligence-teal);
}

.bestFor {
    font-size: 0.9rem;
    color: var(--text-secondary);
    font-style: italic;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid var(--glass-border);
}

/* Pricing Tables */
.pricingTable {
    width: 100%;
    border-collapse: collapse;
    margin: 1rem 0;
    background: var(--glass-bg);
    border-radius: 12px;
    overflow: hidden;
}

.pricingTable thead {
    background: rgba(6, 182, 212, 0.1);
}

.pricingTable th {
    text-align: left;
    padding: 1rem 1.25rem;
    color: var(--intelligence-teal);
    font-weight: 600;
    font-size: 0.95rem;
    text-transform: uppercase;
    letter-spacing: 0.03em;
}

.pricingTable td {
    padding: 1rem 1.25rem;
    color: var(--text-secondary);
    border-top: 1px solid var(--glass-border);
    font-size: 1rem;
}

.pricingTable tbody tr:hover {
    background: rgba(6, 182, 212, 0.05);
}

/* Terms Accordion */
.termsSection {
    margin: 3rem 0;
    border: 1px solid var(--glass-border);
    border-radius: 12px;
    overflow: hidden;
}

.termsToggle {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.25rem 1.5rem;
    background: var(--glass-bg);
    border: none;
    color: var(--text-primary);
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.termsToggle:hover {
    background: rgba(6, 182, 212, 0.1);
}

.termsArrow {
    font-size: 1.5rem;
    color: var(--intelligence-teal);
    font-weight: 300;
}

.termsContent {
    padding: 1.5rem;
    background: var(--deep-navy);
    border-top: 1px solid var(--glass-border);
}

.termsContent h4 {
    font-size: 1.1rem;
    color: var(--intelligence-teal);
    margin: 1.75rem 0 0.75rem;
}

.termsContent h4:first-child {
    margin-top: 0;
}

.termsContent ul {
    margin: 0.75rem 0;
}

.termsContent li {
    font-size: 0.95rem;
    padding: 0.4rem 0;
    line-height: 1.6;
}

.termsContent p {
    font-size: 0.95rem;
    line-height: 1.7;
}

/* Docs Links */
.docsLinks {
    margin: 3rem 0;
    padding: 2rem;
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    border-radius: 12px;
}

.docsLinks h3 {
    font-size: 1.25rem;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
}

.docsLinks > p {
    font-size: 1rem;
    color: var(--text-secondary);
    margin-bottom: 1rem;
}

.docsLinks ul {
    margin: 0;
}

.docsLinks li {
    padding: 0.5rem 0;
    padding-left: 2rem;
}

.docsLinks li::before {
    content: '→';
    position: absolute;
    left: 0;
}

.docsLinks a {
    color: var(--intelligence-teal);
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s ease;
}

.docsLinks a:hover {
    color: var(--bright-cyan);
    text-decoration: underline;
}

/* CTA Section */
.cta {
    padding: 4rem 0;
    text-align: center;
    background: linear-gradient(to bottom, var(--deep-navy), #0c2d4a);
}

.cta h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
    color: var(--text-primary);
}

.cta p {
    font-size: 1.1rem;
    color: var(--text-secondary);
    margin-top: 1rem;
    margin-bottom: 1rem;
}

.ctaButton {
    display: inline-block;
    background: var(--intelligence-teal);
    color: var(--deep-navy);
    padding: 1rem 2.5rem;
    font-size: 1.1rem;
    font-weight: 600;
    border-radius: 8px;
    text-decoration: none;
    transition: all 0.3s ease;
}

.ctaButton:hover {
    background: var(--bright-cyan);
    transform: translateY(-2px);
    color: rgb(38, 209, 252);
    box-shadow: 0 5px 20px rgba(6, 182, 212, 0.4);
}

.emailDirect {
    margin-top: 1.5rem;
    font-size: 0.95rem;
    color: var(--text-secondary);
}

.emailDirect a {
    color: var(--intelligence-teal);
    text-decoration: none;
}

.emailDirect a:hover {
    color: var(--bright-cyan);
    text-decoration: underline;
}

/* Back Link */
.backLink {
    display: inline-block;
    margin: 2rem 0 4rem;
    color: var(--intelligence-teal);
    font-size: 0.95rem;
    text-decoration: none;
    transition: color 0.3s ease;
}

.backLink:hover {
    color: var(--bright-cyan);
}

/* Responsive */
@media (max-width: 768px) {
    .hero {
        padding: 6rem 0 3rem;
    }

    .hero h1 {
        font-size: 2rem;
    }

    .tagline {
        font-size: 1.1rem;
    }

    .content {
        padding: 3rem 0;
    }

    .content h2 {
        font-size: 1.5rem;
    }

    .pricingGrid {
        grid-template-columns: 1fr;
    }

    .pricingTable th,
    .pricingTable td {
        padding: 0.75rem 1rem;
        font-size: 0.9rem;
    }

    .termsToggle {
        padding: 1rem 1.25rem;
        font-size: 1rem;
    }

    .termsContent {
        padding: 1.25rem;
    }

    .docsLinks {
        padding: 1.5rem;
    }

    .cta {
        padding: 3rem 0;
    }

    .cta h2 {
        font-size: 1.75rem;
    }
}

@media (max-width: 480px) {
    .hero h1 {
        font-size: 1.75rem;
    }

    .pricingCard {
        padding: 1.25rem;
    }

    .pricingCard .price {
        font-size: 1.3rem;
    }

    /* Hero CTA */
.heroCta {
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    font-size: 1rem;
}

.heroCtaButton {
    display: inline-block;
    background: var(--intelligence-teal);
    color: var(--deep-navy);
    padding: 0.85rem 2rem;
    font-size: 1.5rem;
    font-weight: 600;
    border-radius: 8px;
    text-decoration: none;
    transition: all 0.3s ease;
}

.heroCtaButton:hover {
    background: var(--bright-cyan);
    transform: translateY(-2px);
    box-shadow: 0 5px 20px rgba(6, 182, 212, 0.4);
}

.heroEmail {
    font-size: 1rem;
    color: var(--text-secondary);
}

.heroEmail a {
    color: var(--intelligence-teal);
    text-decoration: none;
}

.heroEmail a:hover {
    color: var(--bright-cyan);
    text-decoration: underline;
}

/* Responsive tweak */
@media (max-width: 480px) {
    .heroCta {
        flex-direction: column;
    }
}
/* Lead paragraph */
.lead {
    font-size: 1.25rem;
    line-height: 1.8;
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
}

/* Popular badge */
.popularBadge {
    display: inline-block;
    background: var(--intelligence-teal);
    color: var(--deep-navy);
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding: 0.25rem 0.75rem;
    border-radius: 4px;
    margin-bottom: 0.75rem;
}

/* Partner mention */
.partnerMention {
    margin: 3rem 0;
    padding: 1.5rem 2rem;
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    border-left: 3px solid var(--intelligence-teal);
    border-radius: 0 8px 8px 0;
    text-align: center;
}

.partnerMention p {
    margin: 0;
    font-size: 1.05rem;
    color: var(--text-secondary);
}

.partnerMention a {
    color: var(--intelligence-teal);
    text-decoration: none;
    font-weight: 600;
}

.partnerMention a:hover {
    color: var(--bright-cyan);
    text-decoration: underline;
}
}

Hell yes — this CSS is close, but there are a couple of structural landmines and a few high-leverage tweaks that will make the whole page feel less “receipt-y” without changing your aesthetic.

I’m going to give you:

The bugs / structural issues (stuff that can behave weirdly right now)

The CSS additions that implement the refactor goals:

“reference blocks” (compressed sections)

featured “Standard” card

better list rhythm

less repetition weight

A clean patch you can paste in (with notes where to update TSX classes)

1) Bugs / structural issues in your CSS (fix these first)
A) You have nested media queries and braces in the wrong place

At the bottom, you start:

@media (max-width: 480px) {
  ...
  /* Hero CTA */
  .heroCta { ... }
  ...
  /* Responsive tweak */
  @media (max-width: 480px) {
      .heroCta { flex-direction: column; }
  }
  ...
}


That nested @media (max-width: 480px) inside itself is invalid/pointless, and more importantly: a bunch of your classes (.lead, .popularBadge, .partnerMention) are currently defined inside that 480px media block. That means they won’t apply on desktop at all.

So right now, you think you have .lead or .partnerMention styles globally, but you don’t. They’re mobile-only.

Fix: move those definitions out of the media query.

B) .docsLinks li::before uses position:absolute but the li isn’t position:relative

You have:

.docsLinks li::before {
  position: absolute;
  left: 0;
}


…but .docsLinks li has no position: relative, so the arrow may anchor weirdly depending on layout. Add:

.docsLinks li { position: relative; }

C) Your hero CTA button font size is huge on mobile

Inside the (broken) mobile block you’ve got:

.heroCtaButton { font-size: 1.5rem; }


On small screens, that makes the button feel like the headline. It should be closer to ~1.0–1.1rem.

2) What to add/change to achieve the redesign goals

We want two “tones” of section styling:

Primary sections: packages, maintenance

Reference sections: add-ons, included/not included, payment terms, docs links

Your existing glass-bg is good. The change is compression + spacing + subtle “this is reference” signposting.

Key tactics

Add a .section wrapper that creates consistent spacing

Add a .referenceBlock style that makes lists smaller/tighter

Add .featuredCard + .badge for Standard

Reduce list density globally slightly, then tighten it further inside reference blocks

3) Paste-ready CSS patch

Below is a cleaned-up patch. I’m not rewriting everything — I’m fixing the broken structure and adding the new primitives.

Replace your entire “Responsive” section with this

(and also move the “Hero CTA / lead / popularBadge / partnerMention” blocks OUT of media queries)

/* ---------- New layout primitives ---------- */

.section {
  margin-top: 3.25rem;
}

.sectionTight {
  margin-top: 2.25rem;
}

/* Use this for add-ons, scope, payment terms, docs, etc */
.referenceBlock {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--glass-border);
  border-radius: 12px;
  padding: 1.25rem 1.5rem;
}

.referenceBlock p {
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 0.75rem;
}

.referenceBlock ul {
  margin: 0.75rem 0 0;
}

.referenceBlock li {
  font-size: 0.98rem;
  padding: 0.35rem 0;
}

/* Optional: visually demote dense lists */
.referenceBlock li::before {
  opacity: 0.9;
}

/* ---------- Hero CTA (global, not trapped in media query) ---------- */

.heroCta {
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;
}

.heroCtaButton {
  display: inline-block;
  background: var(--intelligence-teal);
  color: var(--deep-navy);
  padding: 0.85rem 2rem;
  font-size: 1.05rem;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.heroCtaButton:hover {
  background: var(--bright-cyan);
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(6, 182, 212, 0.4);
}

.heroEmail {
  font-size: 1rem;
  color: var(--text-secondary);
}

.heroEmail a {
  color: var(--intelligence-teal);
  text-decoration: none;
}

.heroEmail a:hover {
  color: var(--bright-cyan);
  text-decoration: underline;
}

/* ---------- Lead paragraph (global) ---------- */
.lead {
  font-size: 1.25rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

/* ---------- Featured package card ---------- */

.featuredCard {
  border-color: rgba(6, 182, 212, 0.55);
  box-shadow: 0 10px 30px rgba(6, 182, 212, 0.10);
  position: relative;
}

.badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(6, 182, 212, 0.15);
  border: 1px solid rgba(6, 182, 212, 0.35);
  color: var(--intelligence-teal);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.25rem 0.65rem;
  border-radius: 999px;
}

/* If you still want a "popular note", keep it small */
.popularNote {
  font-size: 0.95rem;
  color: var(--text-secondary);
  font-style: italic;
  margin-top: 0.5rem;
}

/* ---------- Docs Links fixes ---------- */

.docsLinks li {
  position: relative;
  padding-left: 2rem;
}

/* You already set ::before absolute; this makes it anchor correctly */
.docsLinks li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--intelligence-teal);
}

/* ---------- Partner mention (global) ---------- */

.partnerMention {
  margin: 3rem 0;
  padding: 1.5rem 2rem;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-left: 3px solid var(--intelligence-teal);
  border-radius: 0 8px 8px 0;
  text-align: center;
}

.partnerMention p {
  margin: 0;
  font-size: 1.05rem;
  color: var(--text-secondary);
}

.partnerMention a {
  color: var(--intelligence-teal);
  text-decoration: none;
  font-weight: 600;
}

.partnerMention a:hover {
  color: var(--bright-cyan);
  text-decoration: underline;
}

/* ---------- Responsive ---------- */

@media (max-width: 768px) {
  .hero {
    padding: 6rem 0 3rem;
  }

  .hero h1 {
    font-size: 2rem;
  }

  .tagline {
    font-size: 1.1rem;
  }

  .content {
    padding: 3rem 0;
  }

  .content h2 {
    font-size: 1.5rem;
  }

  .pricingGrid {
    grid-template-columns: 1fr;
  }

  .pricingTable th,
  .pricingTable td {
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
  }

  .termsToggle {
    padding: 1rem 1.25rem;
    font-size: 1rem;
  }

  .termsContent {
    padding: 1.25rem;
  }

  .docsLinks {
    padding: 1.5rem;
  }

  .cta {
    padding: 3rem 0;
  }

  .cta h2 {
    font-size: 1.75rem;
  }
}

@media (max-width: 480px) {
  .hero h1 {
    font-size: 1.75rem;
  }

  .pricingCard {
    padding: 1.25rem;
  }

  .pricingCard .price {
    font-size: 1.3rem;
  }

  .heroCta {
    flex-direction: column;
  }

  .heroCtaButton {
    width: 100%;
    text-align: center;
    font-size: 1.05rem;
  }

  .referenceBlock {
    padding: 1rem 1.1rem;
  }
}

4) Tiny TSX changes you should make to use this properly
A) Feature the Standard card

In WebDevelopment.tsx:

<div className={`${styles.pricingCard} ${styles.featuredCard}`}>
  <div className={styles.badge}>Most popular</div>
  ...
</div>

B) Wrap reference-heavy sections in referenceBlock

Example for Add-ons:

<div className={styles.referenceBlock}>
  ...your existing pricingSection blocks...
</div>


Same idea for Payment Terms and/or Included/Not Included if you don’t turn it into an accordion yet.

5) One strategic note on hover effects

Your .pricingCard:hover has translate + shadow. It looks nice, but it makes the page feel a bit more “SaaS-y” than “services firm.”

If you want it more mature:

keep border-color change

drop the translateY (or reduce it to 1px)

Not required, just an option.