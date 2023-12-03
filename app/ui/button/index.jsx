import styles from './button.module.scss';
import clsx from 'clsx';

export const Button = ({children, onClick, className}) => {
  return (
    <button className={clsx(styles.button, className)} onClick={onClick}>
      {children}
    </button>
  )
}