"use client"

import styles from './form.module.scss';
import {Button} from "@/app/ui";
import clsx from "clsx";
import {Checkbox} from "@/app/ui/checkbox";
import {useState} from "react";
import {sendApplication} from "@/app/api";

export const Form = ({className, onClose}) => {
  const [checked, setChecked] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const send = async () => {
    if (!checked && !name.trim() && !phone.trim()) return;
    await sendApplication(name, phone);
    setPhone('');
    setName('');
    onClose && onClose();
  }

  return (
    <div className={clsx(styles.form, className)}>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder={'Ваше имя'}
      />
      <input
        type="text"
        value={phone}
        onChange={e => setPhone(e.target.value)}
        placeholder={'Ваш телефон'}
      />
      <div className={styles.confirm}>
        <Checkbox checked={checked} onClick={() => setChecked(prev => !prev)} />
        <span>Нажимая на кнопку “Оставить заявку” вы соглашаетесь на обработку персональных данных</span>
      </div>
      <Button onClick={send}>Отправить заявку</Button>
    </div>
  )
}