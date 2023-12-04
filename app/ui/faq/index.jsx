"use client"

import styles from './faq.module.scss';
import clsx from 'clsx';
import {useState} from "react";
import Image from 'next/image'
import plus from '@/public/svg/plus.svg';
import React from 'react';

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
    </div>
  )
}