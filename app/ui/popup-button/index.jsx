"use client"

import styles from './popup_button.module.scss';
import {Button} from "@/app/ui";
import {Popup} from "@/app/ui/popup";
import {useEffect, useState} from "react";
import {Form} from "@/app/ui/form";
import clsx from "clsx";
import {useSearchParams} from "next/navigation";

export const PopupButton = ({rounded, className, is_span, additionalHandleClick}) => {
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();
  const popupID = searchParams.get('popup')

  const lockScroll = () => document.getElementsByTagName('html')[0].style.overflowY = 'hidden';
  const unlockScroll = () => document.getElementsByTagName('html')[0].style.overflowY = 'auto';

  useEffect(() => {
    console.log(popupID)
  }, [popupID])

  return (
    <>
      {
        is_span ?
        <span onClick={() => {
          setIsOpen(true);
          additionalHandleClick();
          lockScroll();
        }}>
          Подключиться
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