import { Link } from 'react-router-dom'
import styles from './LandingLayout.module.css'

interface LandingLayoutProps {
    children: React.ReactNode
}

export default function LandingLayout({ children }: LandingLayoutProps) {
    return (
        <div className={styles.landingPage}>
            <header className={styles.header}>
                <Link to="/" className={styles.brand}>
                    <img 
                        src="/images/hti-logomark.png" 
                        alt="Hawkington Technologies" 
                        className={styles.logo}
                    />
                    <span className={styles.brandName}>Hawkington Technologies</span>
                </Link>
            </header>
            
            <main className={styles.main}>
                {children}
            </main>
            
            <footer className={styles.footer}>
                <p>© 2026 Hawkington Technologies, Inc.</p>
                <Link to="/privacy">Privacy Policy</Link>
                <span className={styles.separator}>·</span>
                <Link to="/services/web-development" className={styles.escapeHatch}>
                    View our full site
                </Link>
            </footer>
        </div>
    )
}