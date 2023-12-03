import styles from './ux-card.module.scss';
import clsx from 'clsx';
import Image from "next/image";


export const UxCard = ({title, description, image, type}) => {

  return (
    <div className={styles.column}>
      <div className={clsx(styles.card, styles[`${type}-card`])}>
        <div className={styles.description}>
          <span className={'headline_1'}>{title}</span>
          <span className={'text_1'}>{description}</span>
        </div>
        <Image width={1000} height={1000} src={image} alt={image}/>
      </div>
    </div>
  )
}