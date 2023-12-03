"use client"

import styles from './burger-menu.module.scss';
import clsx from "clsx";
import Image from 'next/image';
import { cross } from '@/public/svg';

export const BurgerMenu = ({opened, onClose, link}) => {
  return (
    <>
      <div className={clsx(styles.blackout, opened && styles.blackout_opened)} onClick={onClose}/>
      <div className={clsx(styles.menu, opened && styles.menu_opened)} >
        <Image src={cross} alt={cross} onClick={onClose}/>
        <ul>
          <li>
            <a onClick={onClose} href="#advantages">Преимущества</a>
          </li>
          <li>
            <a onClick={onClose} href="#modules">Модули</a>
          </li>
          <li>
            <a onClick={onClose} href="#connection">Подключение</a>
          </li>
          <li>
            <a onClick={onClose} href="#faq">Основные вопросы</a>
          </li>
          {/*<li>*/}
          {/*  <PopupButton is_span additionalHandleClick={onClose}/>*/}
          {/*</li>*/}
          <li>
            <a href={link} target="_blank">Открыть презентацию</a>
          </li>
        </ul>
      </div>
    </>
  )
}