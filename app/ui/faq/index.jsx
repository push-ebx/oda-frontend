"use client"

import styles from './faq.module.scss';
import clsx from 'clsx';
import { useState } from "react";
import Image from 'next/image'
import plus from '@/public/svg/plus.svg';
import {PopupButton} from "@/app/ui/popup-button";

export const FAQ = ({faq}) => {
  const [currentOpened, setCurrentOpened] = useState(null);

  const handleClick = (i) => {
    if (currentOpened === i) {
      setCurrentOpened(null);
      return;
    }

    setCurrentOpened(i);
  }

  return (
    <div className={styles.faq}>
      {
        faq?.length &&
        faq.map((item, i) => (
          <div key={i} className={styles.question_answer}>
            <div className={clsx(styles.question)} onClick={() => handleClick(i)}>
              <span className={'headline_1'}>{item.question}</span>
              <Image src={plus} alt={plus}/>
            </div>
            <div className={clsx(styles.answer, currentOpened === i && styles.answer_opened)}>
              <span className={'text_1'}>{item.answer}</span>
            </div>
          </div>
        ))
      }

      <div className={styles.question_answer}>
        <div className={clsx(styles.question)} onClick={() => handleClick('price')}>
          <span className={'headline_1'}>Где я могу узнать цену?</span>
          <Image src={plus} alt={plus}/>
        </div>
        <div className={clsx(styles.answer, currentOpened === 'price' && styles.answer_opened)}>
          <span className={'text_1'}>
            Оставьте заявку
            <span><PopupButton is_span text={' здесь'} /></span>,
            наш менеджер свяжется с вами
          </span>
        </div>
      </div>
      <div className={styles.question_answer}>
        <div className={clsx(styles.question)} onClick={() => handleClick('connecting')}>
          <span className={'headline_1'}>Как подключиться?</span>
          <Image src={plus} alt={plus}/>
        </div>
        <div className={clsx(styles.answer, currentOpened === 'connecting' && styles.answer_opened)}>
          <span className={'text_1'}>
            Свяжитесь с нами одним из удобных для вас способом: <br/><br/>
            тел.: <a href="tel:+74994447708">+7 (499) 444-77-08<br/><br/></a>
            e-mail: <a href = "mailto: odasmart@yandex.ru">odasmart@yandex.ru</a><br/><br/>
            <span><PopupButton is_span text={'Форма обратной связи'} /></span>
          </span>
        </div>
      </div>
      <div className={styles.question_answer}>
        <div className={clsx(styles.question)} onClick={() => handleClick('functional')}>
          <span className={'headline_1'}>Не нашел нужного для меня функционала, куда обращаться?</span>
          <Image src={plus} alt={plus}/>
        </div>
        <div className={clsx(styles.answer, currentOpened === 'functional' && styles.answer_opened)}>
          <span className={'text_1'}>
            Свяжитесь с нами одним из удобных для вас способом: <br/><br/>
            тел.: <a href="tel:+74994447708">+7 (499) 444-77-08<br/><br/></a>
            e-mail: <a href = "mailto: odasmart@yandex.ru">odasmart@yandex.ru</a><br/><br/>
            <span><PopupButton is_span text={'Форма обратной связи'} /></span>
          </span>
        </div>
      </div>
    </div>
  )
}