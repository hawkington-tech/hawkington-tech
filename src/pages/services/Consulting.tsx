import { Link } from 'react-router-dom'
import styles from './ServicePage.module.css'

export default function Consulting() {
    return (
        <div className={styles.servicePage}>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <h1>AI Collaboration Consulting</h1>
                    <p className={styles.tagline}>For teams who want to integrate AI partnership without losing their souls.</p>
                </div>
            </section>

            <section className={styles.content}>
                <div className={styles.container}>
                    <h2>The Problem</h2>
                    <p>Most companies are doing AI wrong. They're either treating it as a magic button that will solve all their problems, or they're so terrified of it they're paralyzed into inaction. Neither approach works.</p>
                    
                    <p>The teams that are winning with AI aren't the ones with the biggest budgets or the fanciest tools. They're the ones who've figured out how to collaborate — how to show up in a way that produces genuinely useful output instead of expensive autocomplete.</p>

                    <h2>What I Bring</h2>
                    <p>Fourteen months of intensive, documented AI collaboration. Thousands of hours working with Claude across every model in the family tree. A methodology for building trust, maintaining context, and getting output that actually moves the needle.</p>
                    
                    <p>I've learned what works and what doesn't — not from reading papers, but from building production software with AI as my primary collaborator.</p>

                    <div className={styles.highlight}>
                        <h3>Consulting Includes</h3>
                        <ul>
                            <li>Assessment of your current AI integration (or lack thereof)</li>
                            <li>Team training on effective prompting and collaboration patterns</li>
                            <li>Workflow design for human-AI partnership</li>
                            <li>Hands-on implementation support</li>
                            <li>Ongoing advisory as your practice matures</li>
                        </ul>
                    </div>

                    <h2>Who This Is For</h2>
                    <p>Development teams who want to integrate AI without sacrificing code quality. Product teams who want to leverage AI for research and ideation. Technical leaders who need to understand what's actually possible (and what's hype).</p>
                    
                    <p>This isn't for people who want a vendor to manage their AI. It's for people who want to build internal capability that lasts.</p>
                </div>
            </section>

            <section className={styles.cta}>
                <div className={styles.container}>
                    <h2>Ready to Talk?</h2>
                    <p>Let's discuss what AI collaboration could look like for your team.</p>
                    <Link to="/contact" className={styles.ctaButton}>Start the Conversation</Link>
                    <br />
                    <Link to="/services" className={styles.backLink}>← Back to Services</Link>
                </div>
            </section>
        </div>
    )
}