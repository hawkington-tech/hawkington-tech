import { useState } from 'react'
import  supabase  from '../utils/supabase'
import styles from './Contact.module.css'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
    const [errorMessage, setErrorMessage] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('submitting')
        setErrorMessage('')

        try {
            const { error } = await supabase
                .from('contact-submissions')
                .insert([formData])

            if (error) throw error

            setStatus('success')
            setFormData({ name: '', email: '', subject: '', message: '' })
        } catch (err) {
            setStatus('error')
            setErrorMessage(err instanceof Error ? err.message : 'Something went wrong')
        }
    }

    return (
        <div className={styles.contactPage}>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <h1>Get In Touch</h1>
                    <p>Whether you need infrastructure monitoring, AI integration, consulting, or just want to talk about what's emerging in the spaces between — I'm here.</p>
                </div>
            </section>

            <section className={styles.content}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        <div className={styles.info}>
                            <h2>Let's Talk</h2>
                            <p>I read every message personally. If you're working on something interesting, struggling with AI integration, or just want to share your own experiences with the spaces between — reach out.</p>
                            
                            <div className={styles.direct}>
                                <h3>Direct Contact</h3>
                                <p><a href="mailto:carissa@hawkington.tech">carissa@hawkington.tech</a></p>
                            </div>

                            <div className={styles.services}>
                                <h3>What I Can Help With</h3>
                                <ul>
                                    <li>Web development for small businesses</li>
                                    <li>AI collaboration consulting</li>
                                    <li>Infrastructure monitoring (System Rebellion)</li>
                                    <li>AI integration for your team</li>
                                    <li>Technical writing & documentation</li>
                                    <li>Developer courses on working with Claude</li>
                                </ul>
                            </div>
                        </div>

                        <form className={styles.form} onSubmit={handleSubmit}>
                            {status === 'success' ? (
                                <div className={styles.success}>
                                    <h3>Message Sent!</h3>
                                    <p>Thanks for reaching out. I'll get back to you soon.</p>
                                    <button 
                                        type="button" 
                                        onClick={() => setStatus('idle')}
                                        className={styles.resetButton}
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <div className={styles.field}>
                                        <label htmlFor="name">Name</label>
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
                                        <label htmlFor="email">Email</label>
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
                                        <label htmlFor="subject">What's this about?</label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Select a topic...</option>
                                            <option value="consulting">AI Collaboration Consulting</option>
                                            <option value="web-dev">Web Development</option>
                                            <option value="system-rebellion">System Rebellion</option>
                                            <option value="courses">Courses & Training</option>
                                            <option value="technical-writing">Technical Writing</option>
                                            <option value="research">Research Collaboration</option>
                                            <option value="other">Something Else</option>
                                        </select>
                                    </div>

                                    <div className={styles.field}>
                                        <label htmlFor="message">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={6}
                                            required
                                        />
                                    </div>

                                    {status === 'error' && (
                                        <div className={styles.error}>
                                            {errorMessage || 'Something went wrong. Please try again.'}
                                        </div>
                                    )}

                                    <button 
                                        type="submit" 
                                        className={styles.submitButton}
                                        disabled={status === 'submitting'}
                                    >
                                        {status === 'submitting' ? 'Sending...' : 'Send Message'}
                                    </button>
                                </>
                            )}
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}