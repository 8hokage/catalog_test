import { FC, PropsWithChildren } from "react"
import { Sidebar } from "../../common/Sidebar"
import { Button } from "../../common/Button"
import styles from './styles.module.css'

export const MainLayout: FC<PropsWithChildren> = ({children}) => {
    return (
        <div className={styles.wrapper}>
            <Sidebar />
            <div className={styles.mainContent}>
                <header className={styles.header}><Button>Header button</Button></header>
                <main className={styles.main}>{children}</main>
                <footer className={styles.footer}>
                    <Button>Help</Button>
                </footer>
            </div>
        </div>
    )
}