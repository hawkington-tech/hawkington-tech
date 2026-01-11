import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.brand}>
                        <h3>Hawkington Technologies</h3>
                        <p>The bridge for the spaces between.</p>
                    </div>
                    
                    <div className={styles.links}>
                        <h4>Company</h4>
                        <Link to="/about">About</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/blog">Blog</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                    
                    <div className={styles.links}>
                        <h4>Connect</h4>
                        <a href="mailto:carissa@hawkington.tech">carissa@hawkington.tech</a>
                        <a href="https://github.com/hawkington-tech" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                </div>
                
                <div className={styles.bottom}>
                    <p>© 2025 Hawkington Technologies, Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}