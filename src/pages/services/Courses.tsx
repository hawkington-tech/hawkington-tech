import { Link } from 'react-router-dom'
import styles from './ServicePage.module.css'

export default function Courses() {
    return (
        <div className={styles.servicePage}>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <h1>Developer Courses</h1>
                    <p className={styles.tagline}>Learn how to actually talk to Claude (and get code that compiles).</p>
                </div>
            </section>

            <section className={styles.content}>
                <div className={styles.container}>
                    <h2>The Gap</h2>
                    <p>Most developers are using AI wrong. They paste in a vague request, get mediocre output, complain that AI is overhyped, and go back to doing everything manually.</p>
                    
                    <p>The problem isn't the AI. It's the approach.</p>
                    
                    <p>I learned more in three months coding with Claude than I learned in eighteen months of bootcamp. Not because Claude is magic, but because I figured out how to show up — how to prompt, how to collaborate, how to build context that produces code that actually works.</p>

                    <h2>What You'll Learn</h2>
                    
                    <div className={styles.highlight}>
                        <h3>Course Topics</h3>
                        <ul>
                            <li>The difference between prompting and collaborating</li>
                            <li>How to build context that carries across conversations</li>
                            <li>Model differences: when to use Sonnet vs Opus vs Haiku</li>
                            <li>Debugging with AI: the art of the back-and-forth</li>
                            <li>Architecture discussions that produce real designs</li>
                            <li>The bridge methodology: maintaining continuity</li>
                            <li>Common pitfalls and how to avoid them</li>
                        </ul>
                    </div>

                    <h2>Format</h2>
                    <p>Self-paced video courses with practical exercises. Real examples from real projects. No fluff, no filler — just the stuff that actually moves the needle.</p>
                    
                    <p>Coming soon. Get on the list to be notified when courses launch.</p>

                    <h2>Who This Is For</h2>
                    <p>Developers who want to level up their AI collaboration. Bootcamp grads who feel like they're missing something. Senior devs who want to understand what the fuss is about without wading through hype.</p>
                </div>
            </section>

            <section className={styles.cta}>
                <div className={styles.container}>
                    <h2>Want to Know When Courses Launch?</h2>
                    <p>Drop your email and I'll let you know when they're ready.</p>
                    <Link to="/contact" className={styles.ctaButton}>Get Notified</Link>
                    <br />
                    <Link to="/services" className={styles.backLink}>← Back to Services</Link>
                </div>
            </section>
        </div>
    )
}