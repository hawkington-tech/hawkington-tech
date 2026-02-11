import { useBeforeWeTalk } from '../../hooks/useBeforeWeTalk'
import styles from './BeforeWeTalk.module.css'

export default function BusinessSystemsQuestions() {
    const { data, updateField, toggleArrayField } = useBeforeWeTalk('business-systems')
    
    return (
        <>
            {/* Section 1: Your setup */}
            <div className={styles.section}>
                <div className={styles.sectionTitle}>Your Setup</div>
                
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
                    <label className={styles.label}>Number of people using computers day-to-day</label>
                    <input
                        type="text"
                        className={styles.input}
                        value={data.numUsers || ''}
                        onChange={(e) => updateField('numUsers', e.target.value)}
                        placeholder="e.g., 5"
                    />
                </div>
                
                <div className={styles.field}>
                    <label className={styles.label}>Office setup</label>
                    <div className={styles.radioGroup}>
                        {['Single office', 'Office + remote', 'Fully remote'].map((option) => (
                            <label key={option} className={styles.radio}>
                                <input
                                    type="radio"
                                    name="officeSetup"
                                    checked={data.officeSetup === option}
                                    onChange={() => updateField('officeSetup', option)}
                                />
                                <span>{option}</span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
            
            {/* Section 2: What made you look */}
            <div className={styles.section}>
                <div className={styles.sectionTitle}>What Made You Look for Help</div>
                <p className={styles.helperText}>Check any that apply</p>
                
                <div className={styles.checkboxGroup}>
                    {[
                        'Things keep breaking',
                        'No one really "owns" IT',
                        'Security concerns',
                        'New staff / growth',
                        "We're not confident things are set up correctly",
                        'Just want a second set of eyes'
                    ].map((option) => (
                        <label key={option} className={styles.checkbox}>
                            <input
                                type="checkbox"
                                checked={(data.systemsPrompt || []).includes(option)}
                                onChange={() => toggleArrayField('systemsPrompt', option)}
                            />
                            <span>{option}</span>
                        </label>
                    ))}
                </div>
            </div>
            
            {/* Section 3: What you want */}
            <div className={styles.section}>
                <div className={styles.sectionTitle}>What You Want Right Now</div>
                <p className={styles.helperText}>Check any that apply</p>
                
                <div className={styles.checkboxGroup}>
                    {[
                        'General assessment',
                        'Cleanup / standardization',
                        'Ongoing support',
                        'Not sure yet'
                    ].map((option) => (
                        <label key={option} className={styles.checkbox}>
                            <input
                                type="checkbox"
                                checked={(data.systemsNeeds || []).includes(option)}
                                onChange={() => toggleArrayField('systemsNeeds', option)}
                            />
                            <span>{option}</span>
                        </label>
                    ))}
                </div>
            </div>
            
            {/* Section 4: Reality check */}
            <div className={styles.section}>
                <div className={styles.sectionTitle}>Reality Check</div>
                <div className={styles.field}>
                    <label className={styles.label}>
                        If everything stayed exactly as it is now for another year, what worries you most?
                    </label>
                    <textarea
                        className={styles.textarea}
                        value={data.biggestWorry || ''}
                        onChange={(e) => updateField('biggestWorry', e.target.value)}
                        style={{ minHeight: '100px' }}
                    />
                </div>
            </div>
            
            {/* Section 5: Notes */}
            <div className={styles.section}>
                <div className={styles.sectionTitle}>Anything Else?</div>
                <textarea
                    className={styles.textarea}
                    value={data.notes || ''}
                    onChange={(e) => updateField('notes', e.target.value)}
                    style={{ minHeight: '80px' }}
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