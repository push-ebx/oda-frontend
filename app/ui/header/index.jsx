import styles from './header.module.scss';
import Image from 'next/image';
import { company_name, logo } from '@/public/svg';
import clsx from 'clsx';
import {PopupButton} from "@/app/ui/popup-button";
import {BurgerButton} from "@/app/ui/burger-button";

export const Header = async ({className, presentation_url}) => {
  return (
    <header className={clsx(styles.header, className)}>
      <div className={styles.logo}>
        <Image className={styles.icon} src={logo} alt="logo"/>
        <Image className={styles.name} src={company_name} alt="company_name"/>
      </div>

      <nav className={clsx('text_2', styles.navbar)}>
        <a href="#advantages"><span>Преимущества</span></a>
        <a href="#modules"><span>Модули</span></a>
        <a href="#connection"><span>Подключение</span></a>
        <a href="#faq"><span>Основные вопросы</span></a>
      </nav>

      <PopupButton className={styles.button} rounded/>
      <BurgerButton link={presentation_url}/>
    </header>
  )
}