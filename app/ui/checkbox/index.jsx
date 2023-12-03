"use client"

import styles from './checkbox.module.scss';
import Image from 'next/image';
import { checkbox } from '@/public/svg';
import clsx from 'clsx';

export const Checkbox = ({onClick, className, checked}) => {
  return (
    <div className={clsx(styles.checkbox, className)} onClick={onClick}>
      <div className={clsx(styles.square, !checked && styles.display)} />
      <Image src={checkbox} alt={'checkbox'} className={clsx(checked && styles.display )} />
    </div>
  )
}