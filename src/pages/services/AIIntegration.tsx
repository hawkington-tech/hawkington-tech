import { Link } from 'react-router-dom'
import styles from './ServicePage.module.css'

export default function AIIntegration() {
    return (
        <div className={styles.servicePage}>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <h1>AI Integration Services</h1>
                    <p className={styles.tagline}>Hands-on help implementing AI tools into your existing workflows.</p>
                </div>
            </section>

            <section className={styles.content}>
                <div className={styles.container}>
                    <h2>Beyond the API Call</h2>
                    <p>Integrating AI into your product isn't just about making API calls to Claude or GPT. It's about understanding where AI adds value, how to structure prompts for consistency, how to handle edge cases, and how to build systems that gracefully degrade when the AI does something unexpected.</p>
                    
                    <p>I've built production systems with AI at the core. I know where the bodies are buried.</p>

                    <div className={styles.highlight}>
                        <h3>What I Can Help With</h3>
                        <ul>
                            <li>AI feature design and architecture</li>
                            <li>Prompt engineering for consistent outputs</li>
                            <li>Building context management systems</li>
                            <li>Error handling and fallback strategies</li>
                            <li>Cost optimization (tokens aren't free)</li>
                            <li>Testing AI-integrated features</li>
                            <li>Choosing the right model for the job</li>
                        </ul>
                    </div>

                    <h2>How It Works</h2>
                    <p>We start with a conversation about what you're trying to build. I assess your current stack, your team's capabilities, and your actual needs (not what you think you need).</p>
                    
                    <p>Then we build. Together. I'm not going to hand you a strategy deck and walk away. I'll be in the code with you, implementing, iterating, and teaching your team as we go.</p>

                    <h2>The Goal</h2>
                    <p>When we're done, your team should be able to maintain and extend what we built without me. I'm not here to create dependency. I'm here to transfer capability.</p>
                </div>
            </section>

            <section className={styles.cta}>
                <div className={styles.container}>
                    <h2>Have a Project in Mind?</h2>
                    <p>Let's talk about what you're building and how AI might fit.</p>
                    <Link to="/contact" className={styles.ctaButton}>Let's Discuss</Link>
                    <br />
                    <Link to="/services" className={styles.backLink}>← Back to Services</Link>
                </div>
            </section>
        </div>
    )
}