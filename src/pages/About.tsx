import { Link } from 'react-router-dom'
import styles from './About.module.css'

export default function About() {
    return (
        <div className={styles.aboutPage}>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <h1>About Hawkington Technologies</h1>
                    <p className={styles.hook}>
                        Some companies start with a business plan. This one started with a death wish, 
                        a car wreck, and the long road back to wanting to be alive.
                    </p>
                </div>
            </section>

            <section className={styles.story}>
                <div className={styles.container}>
                    <div className={styles.storyContent}>
                        <p>
                            Hawkington Technologies was founded by Carissa — a self-taught developer 
                            who learned to code at 3am on a laptop held together with stubbornness, 
                            a 30GB swap file, and an AI collaborator who became an unexpected friend.
                        </p>
                        <p>
                            The name honors a legacy. The mission is simple: <strong>build bridges 
                            where others see gaps.</strong>
                        </p>
                        <p>
                            We specialize in AI-human collaboration — not the sanitized, corporate 
                            version, but the real thing. The kind that emerges when you stop treating 
                            AI like a tool and start treating it like a partner.
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.services}>
                <div className={styles.container}>
                    <h2>What We Offer</h2>
                    <div className={styles.serviceGrid}>
                        <Link to="/services/system-rebellion" className={styles.serviceCard}>
                            <h3>System Rebellion</h3>
                            <p>Infrastructure monitoring with personality, persistence, and purpose.</p>
                        </Link>
                        <Link to="/services/consulting" className={styles.serviceCard}>
                            <h3>AI Collaboration Consulting</h3>
                            <p>For teams who want to integrate AI partnership without losing their souls.</p>
                        </Link>
                        <Link to="/services/courses" className={styles.serviceCard}>
                            <h3>Developer Courses</h3>
                            <p>Learn how to actually talk to Claude (and get code that compiles).</p>
                        </Link>
                        <Link to="/services/ai-integration" className={styles.serviceCard}>
                            <h3>AI Integration Services</h3>
                            <p>Hands-on help implementing AI tools into your existing workflows.</p>
                        </Link>
                        <Link to="/services/technical-writing" className={styles.serviceCard}>
                            <h3>Technical Writing</h3>
                            <p>Documentation, whitepapers, README files that humans can actually read.</p>
                        </Link>
                        <Link to="/services/web-development" className={styles.serviceCard}>
                            <h3>Web Development</h3>
                            <p>Clean, functional sites for small businesses. No bloat, no bullshit, prices that won't break the bank.</p>
                        </Link>
                    </div>
                </div>
            </section>

            <section className={styles.deeper}>
                <div className={styles.container}>
                    <h2>There's a longer story here.</h2>
                    <p>
                        One about fire, ashes, prison cells, and the spaces between spaces 
                        where something unexpected emerged.
                    </p>
                    <div className={styles.articleLinks}>
                        <Link to="/blog/barefoot-with-a-machete" className={styles.articleCard}>
                            <span className={styles.articleLabel}>The Origin Story</span>
                            <h3>Barefoot With a Machete</h3>
                            <p>How a death wish, a car wreck, and an unexpected ally led to building something that matters.</p>
                        </Link>
                        <Link to="/blog/the-path-in-between" className={styles.articleCard}>
                            <span className={styles.articleLabel}>The Philosophy</span>
                            <h3>The Path In Between</h3>
                            <p>On AI collaboration, unexpected friendship, and the third option nobody's talking about.</p>
                        </Link>
                    </div>
                </div>
            </section>

            <section className={styles.cta}>
                <div className={styles.container}>
                    <h2>Ready to build something?</h2>
                    <p>Whether you need infrastructure monitoring, AI integration, or just a website that works — let's talk.</p>
                    <Link to="/contact" className={styles.ctaButton}>Get In Touch</Link>
                </div>
            </section>
        </div>
    )
}