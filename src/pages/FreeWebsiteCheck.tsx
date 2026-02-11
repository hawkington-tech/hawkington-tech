import { useState } from 'react'
import LandingLayout from '../components/layout/LandingLayout'
import styles from './FreeWebsiteCheck.module.css'

export default function FreeWebsiteCheck() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        website: '',
        biggestFrustration: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        
        // TODO: Submit to Supabase
        console.log('Submitting:', formData)
        
        // Simulate submission
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        setIsSubmitting(false)
        setIsSubmitted(true)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    if (isSubmitted) {
        return (
            <LandingLayout>
                <div className={styles.container}>
                    <div className={styles.thankYou}>
                        <h1>Got it.</h1>
                        <p>I'll take a look at your site and send you my notes within 48 hours.</p>
                        <p className={styles.subtle}>No sales pitch. Just observations.</p>
                    </div>
                </div>
            </LandingLayout>
        )
    }

    return (
        <LandingLayout>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1>A second set of eyes on your website</h1>
                    <p className={styles.subtitle}>No pitch. No pressure. Just honest observations.</p>
                    
                    <div className={styles.valueProps}>
                        <p>I'll look at your site and tell you:</p>
                        <ul>
                            <li>What's working</li>
                            <li>What's confusing</li>
                            <li>What might be costing you customers</li>
                        </ul>
                        <p className={styles.subtle}>
                            Takes me 15 minutes. Costs you nothing. 
                            If you want help fixing things after, we can talk. If not, no hard feelings.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.field}>
                            <label htmlFor="name">Your name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        
                        <div className={styles.field}>
                            <label htmlFor="email">Email address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        
                        <div className={styles.field}>
                            <label htmlFor="website">Your website URL</label>
                            <input
                                type="url"
                                id="website"
                                name="website"
                                value={formData.website}
                                onChange={handleChange}
                                placeholder="https://"
                                required
                            />
                        </div>
                        
                        <div className={styles.field}>
                            <label htmlFor="biggestFrustration">
                                What's your biggest frustration with your current site?
                                <span className={styles.optional}> (optional)</span>
                            </label>
                            <textarea
                                id="biggestFrustration"
                                name="biggestFrustration"
                                value={formData.biggestFrustration}
                                onChange={handleChange}
                                rows={3}
                            />
                        </div>
                        
                        <button 
                            type="submit" 
                            className={styles.submitButton}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : 'Send me your honest take'}
                        </button>
                        
                        <p className={styles.privacy}>
                            Your info stays between us. No list. No spam. No sharing.
                        </p>
                    </form>
                </div>
            </div>
        </LandingLayout>
    )
}