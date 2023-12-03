"use client"

import styles from './carousel.module.scss';
import clsx from 'clsx';
import { useState } from "react";
import { Button } from "@/app/ui";
import Image from 'next/image'
import {ButtonLink} from "@/app/ui/link-button";

export const Carousel = ({cards, buttons, presentation_link, className}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <>
      <div className={styles.nav}>
        <div className={styles.buttons}>
          {
            buttons?.length &&
            buttons.map((button, i) => (
              <Button
                className={clsx(i === currentSlide && styles.active)}
                key={i}
                onClick={() => setCurrentSlide(i)}
              >
                <Image width={10} height={10} src={button.icon_button} alt={button.icon_button} /> {button.text_button}
              </Button>
            ))
          }
        </div>
      </div>

      <div className={clsx(styles.carousel, className)}>
        <div
          className={styles.slider}
          style={{transform: `translateX(calc(${-100 * currentSlide}% - ${15 * currentSlide}rem))`}}
        >
          {
            cards?.length ?
            cards.map((card, i) => (
              <div className={styles.card} key={i}>
                <div className={styles.info_button}>
                  <div className={styles.card_info}>
                    <span className={'headline_2'}>{card.title}</span>
                    <ul>
                      { card.list?.length && card.list.map((item, j) => (<li key={j} className={'text_1'}>{item}</li>)) }
                    </ul>
                  </div>
                  <ButtonLink link={presentation_link} download>
                    Открыть презентацию
                  </ButtonLink>
                </div>

                <div className={styles.img_wrapper}>
                  <Image width={400} height={400} src={card.image} alt={'image'}/>
                </div>
              </div>
            ))
              :
            ''
          }
        </div>
      </div>
    </>
  )
}