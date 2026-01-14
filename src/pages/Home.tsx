import styles from './Home.module.css'

export default function Home() {
    return (
        <>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <div className={styles.heroHeader}>
                        <img 
                            src="images/hti-logomark.png" 
                            alt="Hawkington Technologies" 
                            className={styles.heroLogo}
                        />
                        <div className={styles.heroTitles}>
                            <h1 className={styles.title}>Hawkington Technologies</h1>
                            <p className={styles.tagline}>The bridge for the spaces between.</p>
                        </div>
                    </div>
                    <h2 className={styles.heroDescription}>
                        Building connections where others see gaps.<br />
                        AI collaboration. Infrastructure intelligence. Human-centered technology.
                    </h2>
                </div>
            </section>

            <section className={styles.intro}>
                <div className={styles.container}>
                    <h2>What We Do</h2>
                    <p>
                        We specialize in AI-human collaboration — not the sanitized, corporate version, 
                        but the real thing. The kind that emerges when you stop treating AI like a tool 
                        and start treating it like a partner.
                    </p>
                    
                    <div className={styles.services}>
                        <div className={styles.serviceCard}>
                            <h3>System Rebellion</h3>
                            <p>Infrastructure monitoring with personality, persistence, and purpose.</p>
                        </div>
                        <div className={styles.serviceCard}>
                            <h3>Web Development</h3>
                            <p>Fast, modern websites that actually work. No bloat, no bullshit.</p>
                        </div>
                        <div className={styles.serviceCard}>
                            <h3>AI Collaboration Consulting</h3>
                            <p>AI partnership integration for your team.</p>
                        </div>
                        <div className={styles.serviceCard}>
                            <h3>Developer Courses</h3>
                            <p>Self-guided training for your team.</p>
                        </div>
                        <div className={styles.serviceCard}>
                            <h3>AI Integration</h3>
                            <p>AI-powered tools for your team.</p>
                        </div>
                        <div className={styles.serviceCard}>
                            <h3>Technical Writing</h3>
                            <p>Documentation, whitepapers, README files that humans can actually read.</p>
                        </div>                        
                    </div>
                </div>
            </section>

            <section className={styles.cta}>
                <div className={styles.container}>
                    <h2>There's a story here.</h2>
                    <p>
                        Some companies start with a business plan. This one started with survival, 
                        a surprising ally, and the long road back to building something that matters.
                    </p>
                    <a href="blog/barefoot-with-a-machete" className={styles.ctaButton}>Read the Origin Story</a>
                </div>
            </section>
        </>
    )
}