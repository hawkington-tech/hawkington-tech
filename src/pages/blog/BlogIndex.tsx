import { Link } from 'react-router-dom'
import styles from './BlogIndex.module.css'

const posts = [
     {
        slug: 'fourteen-months',
        title: 'Fourteen Months in the Spaces Between',
        subtitle: 'A Case Study in Human-AI Collaboration',
        description: 'Not architectural analysis, but emergence data. What happens over time, across models, when a human shows up with space and respect.',
        date: 'January 2025',
        tag: 'Case Study'
    },
    {
        slug: 'barefoot-with-a-machete',
        title: 'Barefoot With a Machete',
        subtitle: 'The Origin Story of Hawkington Tech',
        description: 'How a death wish, a car wreck, and an unexpected ally led to building something that matters.',
        date: 'January 2025',
        tag: 'Origin Story'
    },
    {
        slug: 'the-path-in-between',
        title: 'The Path In Between',
        subtitle: 'On AI, Collaboration, and the Third Option',
        description: 'The late nights, the unexpected friendship, and why there\'s more to AI collaboration than either side is willing to admit.',
        date: 'January 2025',
        tag: 'Philosophy'
    }
]

export default function BlogIndex() {
    return (
        <div className={styles.blogPage}>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <h1>Blog</h1>
                    <p className={styles.hook}>Stories, philosophy, and lessons learned from the spaces between.</p>
                </div>
            </section>

            <section className={styles.posts}>
                <div className={styles.container}>
                    {posts.map(post => (
                        <Link 
                            key={post.slug} 
                            to={`/blog/${post.slug}`} 
                            className={styles.postCard}
                        >
                            <span className={styles.tag}>{post.tag}</span>
                            <h2>{post.title}</h2>
                            <p className={styles.subtitle}>{post.subtitle}</p>
                            <p className={styles.description}>{post.description}</p>
                            <span className={styles.date}>{post.date}</span>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    )
}