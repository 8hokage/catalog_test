import styles from './style.module.css'

export const Sidebar = () => {
    return (
        <nav className={styles.sidebar}>
            <ul className={styles.menu}>
                <li>Menu option 1</li>
            </ul>
        </nav>
    )
}