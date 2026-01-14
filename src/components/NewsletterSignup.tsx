// components/NewsletterSignup.tsx
import { useState } from 'react';
import supabase from '../utils/supabase'; 
import styles from '../components/NewsletterSignup.module.css';
// adjust path to your supabase client

export function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const { error } = await supabase
      .from('email_subscribers')
      .insert({ email, source: 'website-footer' });

    if (error) {
      if (error.code === '23505') {
        // unique constraint violation = already subscribed
        setStatus('error');
        setMessage("You are already subscribed!");
      } else {
        setStatus('error');
        setMessage('Something went wrong. Try again?');
      }
    } else {
      setStatus('success');
      setMessage('Thanks for subscribing!');
      setEmail('');
    }
  };

  return (
    <div className={styles.newsletterSignup}>
        <p>Get Updates. No Spam. Just the good stuff!</p>
      {status === 'success' ? (
        <p className={styles.successMessage}>{message}</p>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className={styles.input}
          />
          <button type="submit" disabled={status === 'loading'} className={styles.button}>
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
          {status === 'error' && <p className={styles.errorMessage}>{message}</p>}
        </form>
      )}
    </div>
  );
}