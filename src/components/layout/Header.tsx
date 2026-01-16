import { Link } from 'react-router-dom'
import styles from './Header.module.css'

export default function Header() {
    return (
        <header className={styles.navbar}>
            <div className={styles.navbarContainer}>
                <Link to="/" className={styles.logoLink}>
                    <img 
                        src="/images/hti-logomark.png" 
                        alt="Hawkington Technologies" 
                        className={styles.logo}
                    />
                </Link>
                
                <nav className={styles.nav}>
                    <Link to="/" className={styles.navLink}>Home</Link>
                    <Link to="/about" className={styles.navLink}>About</Link>
                    
                    <div className={styles.dropdown}>
                        <Link to="/services" className={styles.navLink}>
                            Services
                        </Link>
                        <div className={styles.dropdownMenu}>
                                <Link to="/services/system-rebellion">System Rebellion</Link>
                                <Link to="/services/web-development">Web Development</Link>
                                <Link to="/services/technical-writing">Technical Writing</Link>
                                <Link to="/services/small-business-it">Small Business IT</Link>

                        </div>
                    </div>
                    
                    <Link to="/blog" className={styles.navLink}>Blog</Link>
                    <Link to="/contact" className={styles.navLink}>Contact</Link>
                </nav>

                <Link to="/contact" className={styles.ctaButton}>
                    Get In Touch
                </Link>
            </div>
        </header>
    )
}