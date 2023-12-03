import styles from './welcome.module.scss';
import clsx from 'clsx';

export const WelcomeSection  = ({children, onClick, className}) => {
  return (
    <button className={clsx(styles.button, className)} onClick={onClick}>
      {children}
    </button>
  )
}