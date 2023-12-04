"use client"

import styles from './popup_button.module.scss';
import {Button} from "@/app/ui";
import {Popup} from "@/app/ui/popup";
import {useEffect, useState} from "react";
import {Form} from "@/app/ui/form";
import clsx from "clsx";

export const PopupButton = ({rounded, className, is_span, additionalHandleClick, text}) => {
  const [isOpen, setIsOpen] = useState(false);

  const lockScroll = () => document.getElementsByTagName('html')[0].style.overflowY = 'hidden';
  const unlockScroll = () => document.getElementsByTagName('html')[0].style.overflowY = 'auto';

  return (
    <>
      {
        is_span ?
        <span
          style={{cursor: 'pointer'}}
          onClick={() => {
            setIsOpen(true);
            additionalHandleClick && additionalHandleClick();
            lockScroll();
          }}
        >
          {text || 'Подключиться'}
        </span>
          :
        <Button className={clsx(rounded && styles.rounded, className)} onClick={() => {
          setIsOpen(true);
          lockScroll();
        }}>
          Подключиться
        </Button>
      }
      <Popup className={styles.popup} isOpen={isOpen} closePopup={() => {
        setIsOpen(false);
        unlockScroll();
      }}>
        <h1 className={'headline_2'}>Оставьте заявку <br/> и мы с вами свяжемся</h1>
        <Form onClose={() => {
          setIsOpen(false);
          unlockScroll();
        }} className={styles.form} />
      </Popup>
    </>
  )
}