// components/WaitlistForm.tsx
import { useState } from 'react'
import supabase from '../utils/supabase'
import styles from './WaitlistForm.module.css'

export default function WaitlistForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('submitting')
        setErrorMessage('')

        try {
            const { error } = await supabase
                .from('waitlist')
                .insert([{ name, email }])

            if (error) {
                if (error.code === '23505') {
                    setErrorMessage('You\'re already on the list!')
                    setStatus('error')
                } else {
                    throw error
                }
            } else {
                setStatus('success')
                setName('')
                setEmail('')
            }
        } catch (err) {
            setErrorMessage('Something went wrong. Try again or email us directly.')
            setStatus('error')
        }
    }

    if (status === 'success') {
        return (
            <div className={styles.successMessage}>
                <h3>You're in.</h3>
                <p>Welcome to the Rebellion. We'll be in touch when it's time.</p>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
                <input
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className={styles.input}
                    disabled={status === 'submitting'}
                />
                <input
                    type="email"
                    placeholder="johndoe@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className={styles.input}
                    disabled={status === 'submitting'}
                />
            </div>
            <div className={styles.submitButtonContainer}>                
                    <button 
                        type="submit" 
                        className={styles.submitButton}
                        disabled={status === 'submitting'}
                    >
                        {status === 'submitting' ? 'Joining...' : 'Join the Waitlist'}
                    </button>
            </div>
            {status === 'error' && (
                <p className={styles.errorMessage}>{errorMessage}</p>
            )}
        </form>
    )
}