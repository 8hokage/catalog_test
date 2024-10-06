import { FC, PropsWithChildren } from 'react'
import styles from './style.module.css'

export interface ButtonProps {
    type?: 'button' | 'submit'
    onClick?: () => void
}

export const Button: FC<ButtonProps & PropsWithChildren> = ({type = 'button', onClick, children}) => {
    return (
        <button type={type} onClick={onClick} className={styles.button}>
            {children}
        </button>
    )
}