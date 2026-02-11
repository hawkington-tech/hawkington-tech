import { useBeforeWeTalk } from '../../hooks/useBeforeWeTalk'
import styles from './BeforeWeTalk.module.css'

export default function TechWritingQuestions() {
    const { data, updateField, toggleArrayField } = useBeforeWeTalk('technical-writing')
    
    return (
        <>
            {/* Section 1: Context */}
            <div className={styles.section}>
                <div className={styles.sectionTitle}>Context</div>
                
                <div className={styles.field}>
                    <label className={styles.label}>Business / organization name</label>
                    <input
                        type="text"
                        className={styles.input}
                        value={data.orgName || ''}
                        onChange={(e) => updateField('orgName', e.target.value)}
                    />
                </div>
                
                <div className={styles.field}>
                    <label className={styles.label}>Type of documentation</label>
                    <div className={styles.checkboxGroup}>
                        {[
                            'Internal (SOPs, manuals)',
                            'Client-facing',
                            'Developer / technical',
                            'Not sure yet'
                        ].map((option) => (
                            <label key={option} className={styles.checkbox}>
                                <input
                                    type="checkbox"
                                    checked={(data.docType || []).includes(option)}
                                    onChange={() => toggleArrayField('docType', option)}
                                />
                                <span>{option}</span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
            
            {/* Section 2: What prompted this */}
            <div className={styles.section}>
                <div className={styles.sectionTitle}>What Prompted This</div>
                <p className={styles.helperText}>Check any that apply</p>
                
                <div className={styles.checkboxGroup}>
                    {[
                        'Existing docs are outdated',
                        "Information lives in people's heads",
                        'New staff struggle to onboard',
                        'Clients keep asking the same questions',
                        'We need things written clearly, once'
                    ].map((option) => (
                        <label key={option} className={styles.checkbox}>
                            <input
                                type="checkbox"
                                checked={(data.docPrompt || []).includes(option)}
                                onChange={() => toggleArrayField('docPrompt', option)}
                            />
                            <span>{option}</span>
                        </label>
                    ))}
                </div>
                
                <div className={styles.field} style={{ marginTop: '1rem' }}>
                    <label className={styles.label}>What's not working right now?</label>
                    <textarea
                        className={styles.textarea}
                        value={data.docPromptOther || ''}
                        onChange={(e) => updateField('docPromptOther', e.target.value)}
                    />
                </div>
            </div>
            
            {/* Section 3: Scope */}
            <div className={styles.section}>
                <div className={styles.sectionTitle}>Scope (rough is fine)</div>
                
                <div className={styles.field}>
                    <label className={styles.label}>Approximate size</label>
                    <div className={styles.radioGroup}>
                        {[
                            'One short document',
                            'A few related documents',
                            'A full documentation set',
                            'No idea yet'
                        ].map((option) => (
                            <label key={option} className={styles.radio}>
                                <input
                                    type="radio"
                                    name="docScope"
                                    checked={data.docScope === option}
                                    onChange={() => updateField('docScope', option)}
                                />
                                <span>{option}</span>
                            </label>
                        ))}
                    </div>
                </div>
                
                <div className={styles.field}>
                    <label className={styles.label}>Do you already have source material?</label>
                    <div className={styles.radioGroup}>
                        {['Yes, mostly', 'Some', 'Very little', 'None'].map((option) => (
                            <label key={option} className={styles.radio}>
                                <input
                                    type="radio"
                                    name="hasSourceMaterial"
                                    checked={data.hasSourceMaterial === option}
                                    onChange={() => updateField('hasSourceMaterial', option)}
                                />
                                <span>{option}</span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
            
            {/* Section 4: Timeline */}
            <div className={styles.section}>
                <div className={styles.sectionTitle}>Timeline & Constraints</div>
                
                <div className={styles.field}>
                    <label className={styles.label}>Timing</label>
                    <div className={styles.radioGroup}>
                        {['Flexible', 'Needed by a specific date'].map((option) => (
                            <label key={option} className={styles.radio}>
                                <input
                                    type="radio"
                                    name="docTimeline"
                                    checked={data.docTimeline === option}
                                    onChange={() => updateField('docTimeline', option)}
                                />
                                <span>{option}</span>
                            </label>
                        ))}
                    </div>
                </div>
                
                <div className={styles.field}>
                    <label className={styles.label}>Any internal approvals involved?</label>
                    <div className={styles.radioGroup}>
                        {['Yes', 'No'].map((option) => (
                            <label key={option} className={styles.radio}>
                                <input
                                    type="radio"
                                    name="hasApprovals"
                                    checked={data.hasApprovals === option}
                                    onChange={() => updateField('hasApprovals', option)}
                                />
                                <span>{option}</span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
            
            {/* Section 5: Notes */}
            <div className={styles.section}>
                <div className={styles.sectionTitle}>Notes</div>
                <textarea
                    className={styles.textarea}
                    value={data.notes || ''}
                    onChange={(e) => updateField('notes', e.target.value)}
                    style={{ minHeight: '100px' }}
                />
                <p className={styles.helperText}>Plain language is fine. Bullet points are fine. This isn't writing homework.</p>
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