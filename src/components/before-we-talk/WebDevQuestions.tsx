import { useBeforeWeTalk } from '../../hooks/useBeforeWeTalk'
import styles from './BeforeWeTalk.module.css'

export default function WebDevQuestions() {
    const { data, updateField, toggleArrayField } = useBeforeWeTalk('web-development')
    
    return (
        <>
            {/* Section 1: About your business */}
            <div className={styles.section}>
                <div className={styles.sectionTitle}>About Your Business</div>
                
                <div className={styles.field}>
                    <label className={styles.label}>Business name</label>
                    <input
                        type="text"
                        className={styles.input}
                        value={data.businessName || ''}
                        onChange={(e) => updateField('businessName', e.target.value)}
                    />
                </div>
                
                <div className={styles.field}>
                    <label className={styles.label}>Current website (if you have one)</label>
                    <input
                        type="text"
                        className={styles.input}
                        value={data.currentWebsite || ''}
                        onChange={(e) => updateField('currentWebsite', e.target.value)}
                        placeholder="https://"
                    />
                </div>
                
                <div className={styles.field}>
                    <label className={styles.label}>Industry</label>
                    <input
                        type="text"
                        className={styles.input}
                        value={data.industry || ''}
                        onChange={(e) => updateField('industry', e.target.value)}
                    />
                </div>
                
                <div className={styles.field}>
                    <label className={styles.label}>Rough size</label>
                    <div className={styles.radioGroup}>
                        {['Solo', '2–5 people', '6–15', '15+'].map((option) => (
                            <label key={option} className={styles.radio}>
                                <input
                                    type="radio"
                                    name="businessSize"
                                    checked={data.businessSize === option}
                                    onChange={() => updateField('businessSize', option)}
                                />
                                <span>{option}</span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
            
            {/* Section 2: Why now */}
            <div className={styles.section}>
                <div className={styles.sectionTitle}>Why You're Thinking About This Now</div>
                <p className={styles.helperText}>Check any that apply</p>
                
                <div className={styles.checkboxGroup}>
                    {[
                        'The site feels outdated',
                        "It doesn't reflect the quality of our work",
                        "It's hard to update or maintain",
                        "It doesn't work well on phones",
                        "We're embarrassed to send people to it",
                        "We don't really know what we want yet"
                    ].map((option) => (
                        <label key={option} className={styles.checkbox}>
                            <input
                                type="checkbox"
                                checked={(data.websiteIssues || []).includes(option)}
                                onChange={() => toggleArrayField('websiteIssues', option)}
                            />
                            <span>{option}</span>
                        </label>
                    ))}
                </div>
                
                <div className={styles.field} style={{ marginTop: '1rem' }}>
                    <label className={styles.label}>Anything specific bothering you about the current site?</label>
                    <textarea
                        className={styles.textarea}
                        value={data.websiteIssuesOther || ''}
                        onChange={(e) => updateField('websiteIssuesOther', e.target.value)}
                    />
                </div>
            </div>
            
            {/* Section 3: What you need */}
            <div className={styles.section}>
                <div className={styles.sectionTitle}>What You Think You Need</div>
                <p className={styles.helperText}>No wrong answers</p>
                
                <div className={styles.checkboxGroup}>
                    {[
                        'Single-page site',
                        'Multi-page site',
                        'Content cleanup or rewrite',
                        'Better structure / clarity',
                        'Contact or booking forms',
                        'Not sure — want guidance'
                    ].map((option) => (
                        <label key={option} className={styles.checkbox}>
                            <input
                                type="checkbox"
                                checked={(data.websiteNeeds || []).includes(option)}
                                onChange={() => toggleArrayField('websiteNeeds', option)}
                            />
                            <span>{option}</span>
                        </label>
                    ))}
                </div>
            </div>
            
            {/* Section 4: Timing */}
            <div className={styles.section}>
                <div className={styles.sectionTitle}>Timing & Comfort Level</div>
                
                <div className={styles.field}>
                    <label className={styles.label}>Ideal timeline</label>
                    <div className={styles.radioGroup}>
                        {['ASAP', '1–2 months', 'This year', 'No rush'].map((option) => (
                            <label key={option} className={styles.radio}>
                                <input
                                    type="radio"
                                    name="timeline"
                                    checked={data.timeline === option}
                                    onChange={() => updateField('timeline', option)}
                                />
                                <span>{option}</span>
                            </label>
                        ))}
                    </div>
                </div>
                
                <div className={styles.field}>
                    <label className={styles.label}>Budget comfort (optional)</label>
                    <div className={styles.radioGroup}>
                        {['Under $2k', '$2k–$4k', '$4k+', 'Not sure yet'].map((option) => (
                            <label key={option} className={styles.radio}>
                                <input
                                    type="radio"
                                    name="budget"
                                    checked={data.budget === option}
                                    onChange={() => updateField('budget', option)}
                                />
                                <span>{option}</span>
                            </label>
                        ))}
                    </div>
                    <p className={styles.helperText}>This just helps us frame the conversation. It's not a quote.</p>
                </div>
            </div>
            
            {/* Section 5: Notes */}
            <div className={styles.section}>
                <div className={styles.sectionTitle}>Anything Else?</div>
                <textarea
                    className={styles.textarea}
                    value={data.notes || ''}
                    onChange={(e) => updateField('notes', e.target.value)}
                    style={{ minHeight: '100px' }}
                />
            </div>
            
            {/* Email for submission */}
            <div className={styles.section}>
                <div className={styles.sectionTitle}>Your Email</div>
                <p className={styles.helperText}>Only needed if you choose to send this to us</p>
                <input
                    type="email"
                    className={styles.input}
                    value={data.email || ''}
                    onChange={(e) => updateField('email', e.target.value)}
                    placeholder="you@example.com"
                />
            </div>
        </>
    )
}