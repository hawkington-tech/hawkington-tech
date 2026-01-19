import { Link } from 'react-router-dom'
import { NewsletterSignup } from '../NewsletterSignup'
import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.brand}>
                        <h3>Hawkington Technologies</h3>
                        <p>The bridge for the spaces between.</p>
                        <Link to="/services/ongoing-partner" className={styles.ctaLink}>
                            Work With Us →
                        </Link>
                    </div>
                    
                    <div className={styles.links}>
                        <h4>Services</h4>
                        <Link to="/services/web-development">Web Development</Link>
                        <Link to="/services/technical-writing">Technical Writing</Link>
                        <Link to="/services/business-systems">Business Systems</Link>
                        <Link to="/services/system-rebellion">System Rebellion</Link>
                    </div>
                    
                    <div className={styles.links}>
                        <h4>Company</h4>
                        <Link to="/about">About</Link>
                        <Link to="/blog">Blog</Link>
                        <Link to="/contact">Contact</Link>
                    </div>

                    <div className={styles.newsletter}>
                        <NewsletterSignup />
                    </div>
                </div>
                
                <div className={styles.bottom}>
                    <p>© 2026 Hawkington Technologies, Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}