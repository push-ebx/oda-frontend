"use client"

import styles from './burger-button.module.scss';
import {burger} from "@/public/svg";
import Image from "next/image";
import {BurgerMenu} from "@/app/ui/burger-menu";
import {useEffect, useState} from "react";
import {getHomePageData} from "@/app/api";

export const BurgerButton = ({link}) => {
  const [opened, setOpened] = useState(false);
  const lockScroll = () => document.getElementsByTagName('html')[0].style.overflowY = 'hidden';
  const unlockScroll = () => document.getElementsByTagName('html')[0].style.overflowY = 'auto';


  return (
    <>
      <Image className={styles.burger} src={burger} alt="burger" onClick={() => {
        setOpened(true);
        lockScroll();
      }}/>
      <BurgerMenu link={link} opened={opened} onClose={() => {
        setOpened(false);
        unlockScroll();
      }}/>
    </>
  )
}