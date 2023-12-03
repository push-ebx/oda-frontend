"use client"

import clsx from 'clsx';
import styles from './popup.module.scss';
import {cross} from "@/public/svg";
import Image from "next/image";

export const Popup = ({children, closePopup, isOpen, className}) => {
  return (
    <div className={clsx(styles.popup, isOpen && styles.active)} onClick={closePopup}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <Image className={styles.cross} src={cross} alt="cross" onClick={closePopup}/>
        <div className={className}>
          {children}
        </div>
      </div>
    </div>
  );
};