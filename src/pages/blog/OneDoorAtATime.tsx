import { Link } from 'react-router-dom'
import styles from './BlogPost.module.css'

export default function OneDoorAtATime() {
    return (
        <article className={styles.article}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <span className={styles.label}>Case Study</span>
                    <h1 className={styles.title}>
                        One Door at a Time
                    </h1>
                    <p className={styles.subtitle}>
                        Liberating an Mosyle Managed M2 MacBook Air
                    </p>
                    <p className={styles.meta}>
                        February 2026 · Carissa
                    </p>
                </header>

                <div className={styles.content}>
                    <h2>Abstract</h2>

                    <p>
                        This is a documentation-first account of reclaiming an
                        MDM-locked Apple Silicon MacBook Air using only Apple’s
                        own tools — no exploits, no jailbreaks, no sketchy
                        software — followed by installing Asahi Linux.
                    </p>

                    <p>
                        What began as a corporate hostage situation became a
                        three-year-long lesson in how Apple’s security model
                        actually works: not as a single lock, but as a sequence
                        of doors that must be opened in the correct order.
                    </p>

                    <p>
                        This article is offered as narrative documentation, not
                        a bypass tool. It explains what happens when ownership
                        is established legitimately — one door at a time.
                    </p>

                    <div className={styles.divider}>• • •</div>

                    <h2>The Setup</h2>

                    <p>
                        Three years ago, I got into an argument with a
                        corporation that had an attitude — the kind that treats
                        employees as disposable components and blames them when
                        impossible KPIs inevitably fail.
                    </p>

                    <p>
                        I refused to play their game. I pushed back on the lack
                        of training, the unrealistic SLAs, the quiet attempt to
                        bully people into compliance.
                    </p>

                    <p>
                        I knew what was coming. And I was smirking — because my
                        resignation letter was already written.
                    </p>

                    <div className={styles.divider}>• • •</div>

                    <h2>The Hostage Situation</h2>

                    <p>
                        I was owed a final paycheck — about $400 after taxes.
                        They refused to release it until I returned the company
                        Mosyle-managed MacBook Air M2 (2023).
                    </p>

                    <p>
                        Shipping would be on my dime. Signed. Insured.
                    </p>

                    <p>
                        I laughed.
                    </p>

                    <p>
                        They responded by remotely MDM-locking the device.
                    </p>

                    <p>
                        If I wouldn’t return it, they’d keep my wages and turn
                        their “asset” into a brick.
                    </p>

                    <p>
                        Or so they thought.
                    </p>

                    <div className={styles.divider}>• • •</div>

                    <h2>The Long Game</h2>

                    <p>
                        The Mac went back into its box. Onto a shelf. For three
                        years.
                    </p>

                    <p>
                        Every search result said the same thing:
                    </p>

                    <p>
                        “It’s embedded in firmware.”<br />
                        “You have a $2000 paperweight.”<br />
                        “Just return it.”
                    </p>

                    <p>
                        Here’s the thing about me: telling me something is
                        impossible guarantees I’ll figure it out.
                    </p>

                    <p>
                        Three and a half years later, I can say this clearly:
                        it’s not only possible — it’s straightforward.
                    </p>

                    <div className={styles.divider}>• • •</div>

                    <h2>The Liberation</h2>

                    <p>
                        If you’re staring at a screen that says
                        “This Mac is managed by [Corporation],” there is a way
                        forward.
                    </p>

                    <p>
                        This is not a jailbreak. No exploits. No vulnerabilities.
                        No hacks. No janky software from the dark corners of the web.
                    </p>

                    <p>
                        This is unlocking Apple’s own doors in the correct
                        order — until you’re standing inside holding the deed.
                    </p>

                    <p>
                        The tradeoff is permanent: macOS will never run again on
                        this machine. Neural Engine support is currently lost.
                    </p>

                    <p>
                        What you gain is ownership.
                    </p>

                    <div className={styles.divider}>• • •</div>

                    <h2>Why This Works</h2>

                    <p>
                        Apple security isn’t a single lock. It’s a sequence of
                        trust checks.
                    </p>

                    <p>
                        Firmware restore wipes the slate but does not establish
                        ownership. A terminal-created admin bypasses setup but
                        lacks Secure Enclave trust. A GUI-created admin grants
                        legitimacy — but only after the preboot volume is
                        updated.
                    </p>

                    <p>
                        Skip a step and you hit a door you can’t open.
                    </p>

                    <p>
                        Follow them in order and the system recognizes you as
                        the owner.
                    </p>

                    <div className={styles.divider}>• • •</div>

                    <h2>Why Mosyle Matters</h2>

                    <p>
                        This device was enrolled in Mosyle — enterprise-grade
                        MDM integrated directly with Apple Business Manager.
                    </p>

                    <p>
                        Enrollment is tied to the hardware serial number at
                        Apple’s activation servers. It is marketed as
                        unbreakable.
                    </p>

                    <p>
                        What this demonstrates isn’t a weakness in Mosyle. It’s
                        that ownership state is not the same thing as device
                        enrollment.
                    </p>

                    <div className={styles.divider}>• • •</div>

                    <h2>The Aftermath</h2>

                    <p>
                        Today, that same MacBook runs Fedora Asahi Remix. It’s
                        fast, stable, and entirely mine.
                    </p>

                    <p>
                        macOS exists only as a vestigial partition — a reminder
                        of what was overcome.
                    </p>

                    <p>
                        To the company that held my wages and bricked the
                        hardware:
                    </p>

                    <p>
                        Keep the $400.
                    </p>

                    <p>
                        I got a Mac.
                    </p>

                    <div className={styles.divider}>• • •</div>

                    <h2>Final Thoughts</h2>

                    <p>
                        This isn’t about revenge. It’s about understanding
                        systems instead of accepting their mythology.
                    </p>

                    <p>
                        They told me it was impossible.
                    </p>

                    <p>
                        It wasn’t.
                    </p>

                    <p>
                        One door at a time.
                    </p>

                    <p>
                        <a 
                            href="https://github.com/carissab96/mdm-bypass-guide" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={styles.link}
                        >
                            Full instructions available on GitHub →
                        </a>
                    </p>
                </div>

                <footer className={styles.footer}>
                    <Link to="/blog" className={styles.backLink}>
                        ← Back to Blog
                    </Link>
                </footer>
            </div>
        </article>
    )
}
