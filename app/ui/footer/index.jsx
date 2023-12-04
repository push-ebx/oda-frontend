import styles from './footer.module.scss';
import Image from 'next/image';
import logo from '@/public/svg/logo.svg';
import company_name from '@/public/svg/company-name.svg';
import clsx from 'clsx';
import {getHomePageData} from "@/app/api";
import Link from "next/link";

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
          <a href="#advantages"><span>Преимущества</span></a>
          <a href="#modules"><span>Модули</span></a>
          <a href="#connection"><span>Подключение</span></a>
          <a href="#faq"><span>Основные вопросы</span></a>
        </div>
        <div className={styles.contacts}>
          <span>{footer_phone}</span>
          <span>{footer_email}</span>
        </div>
      </nav>

      <div className={styles.docs}>
        <Link href={"/docs/privacy-policy"}><span className={'footer_1'}>Политика конфиденциальности</span></Link>
        <Link href={"/docs/user-agreement"}><span className={'footer_1'}>Пользовательское соглашение</span></Link>
      </div>
    </footer>
  )
}