import styles from './footer.module.scss';
import Image from 'next/image';
import logo from '@/public/svg/logo.svg';
import company_name from '@/public/svg/company-name.svg';
import clsx from 'clsx';
import {getHomePageData} from "@/app/api";

export const Footer = async () => {
  const {footer_email='', footer_phone=''} = await getHomePageData();

  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <Image className={styles.icon} src={logo} alt="logo"/>
        <Image className={styles.name} src={company_name} alt="company_name"/>
      </div>

      <nav className={clsx('text_2', styles.navbar)}>
        <div>
          <span>Преимущества</span>
          <span>Модули</span>
          <span>Подключение</span>
          <span>Основные вопросы</span>
        </div>
        <div className={styles.contacts}>
          <span>{footer_phone}</span>
          <span>{footer_email}</span>
        </div>
      </nav>

      <div className={styles.docs}>
        <span className={'footer_1'}>Политика конфиденциальности</span>
        <span className={'footer_1'}>Пользовательское соглашение</span>
      </div>
    </footer>
  )
}