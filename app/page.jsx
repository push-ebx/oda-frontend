import styles from './page.module.scss';
import Image from 'next/image';
import clsx from "clsx";
import { Carousel } from "@/app/ui/carousel";
import { FAQ } from "@/app/ui/faq";
import { card_bg_5, card_bg_2 } from '@/public/svg';
import { lock, people, headphone, management } from '@/public/png';
import { card_bg_4, card_bg_1, card_bg_3 } from '@/public/jpg';
import {getCarouselButtons, getCarouselCards, getFAQ, getHomePageData, getUxCards} from "@/app/api";
import {ButtonLink} from "@/app/ui/link-button";
import {PopupButton} from "@/app/ui/popup-button";
import {Form} from "@/app/ui/form";
import {UxCard} from "@/app/ui/ux-card";

export default async function Home() {
  const carousel_cards = await getCarouselCards();
  const carousel_buttons = await getCarouselButtons();
  const faq = await getFAQ();
  const {presentation_url=''} = await getHomePageData();
  const ux_cards = await getUxCards();

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <section className={clsx(styles.welcome_section, styles.section)}>
          <h1 className={'title_1'}>Все процессы таксопарка в одной системе</h1>
          <span className={'subhead_1'}>Готовое решение ваших повседневных задач</span>

          <div className={styles.buttons_image}>
            <div className={styles.buttons}>
              <PopupButton />
              <ButtonLink link={presentation_url} download>
                Открыть презентацию
              </ButtonLink>
            </div>
            <div className={styles.image_wrapper}>
              <div className={styles.rects}>
                <div className={styles.rect}></div>
                <div className={styles.group}>
                  <div className={styles.rect}></div>
                  <div className={styles.rect}></div>
                  <div className={styles.rect}></div>
                </div>
              </div>
              <Image src={management} alt={'management'}/>
            </div>
          </div>
        </section>

        <section id={'advantages'} className={clsx(styles.cards_section, styles.section)}>
          <h2 className={'title_2'}>Удобный и гибкий</h2>
          <span className={'subhead_2'}>Все, что нужно именно вам и для вашего автопарка</span>

          <div className={styles.cards}>
            {
              ux_cards?.length &&
              ux_cards?.map((ux_card, i) => (
                <div className={styles.row}>
                  {
                    ux_card.type === 'two' ?
                      <>
                        <UxCard
                          description={ux_card.description_1}
                          title={ux_card.title_1}
                          image={ux_card.image_1_url}
                          type={ux_card.type}
                          key={i}
                        />
                        <UxCard
                          description={ux_card.description_2}
                          title={ux_card.title_2}
                          image={ux_card.image_2_url}
                          type={ux_card.type}
                          key={i}
                        />
                      </>
                      :
                      <UxCard
                        description={ux_card.description_1}
                        title={ux_card.title_1}
                        image={ux_card.image_1_url}
                        type={ux_card.type}
                        key={i}
                      />
                  }
                </div>
              ))
            }
          </div>
          <div className={styles.buttons}>
            <PopupButton />
            <ButtonLink link={presentation_url} download>
              Открыть презентацию
            </ButtonLink>
          </div>
        </section>

        <section id={'modules'} className={clsx(styles.section, styles.carousel_section)}>
          <h2 className={'title_2'}>Сделает все за вас</h2>
          <span className={'subhead_2'}>Гибкая система модулей позволяет автоматизировать именно те процессы, которые нужны вам</span>
          <Carousel cards={carousel_cards} buttons={carousel_buttons} presentation_link={presentation_url} />
        </section>

        <section id={'connection'} className={clsx(styles.connect_train_section, styles.section)}>
          <h2 className={'title_2'}>Подключаем и обучаем</h2>
          <span className={'subhead_2'}>Автоматизируем ваш автопарк за несколько дней</span>
          <div className={styles.cards}>
            <div className={styles.two_cards}>
              <div className={styles.card}>
                <Image src={lock} alt={lock}/>
                <div className={styles.description}>
                  <span className={'headline_1'}>Сохраним все ваши данные</span>
                  <span className={'text_1'}>Если вы уже используете какую-либо систему управления – ваши данные будут сконвертированы для ОДЫ</span>
                </div>
              </div>
              <div className={styles.card}>
                <Image src={people} alt={people}/>
                <div className={styles.description}>
                  <span className={'headline_1'}>Обучаем сотрудников</span>
                  <span className={'text_1'}>Сотрудник поддержки проведет обучение персонала пользователя аспектам работы с системой и будет осуществлять непрерывную поддержку. Также, при подключении для пользователя станет доступен подробный мануал.</span>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <Image src={headphone} alt={headphone}/>
              <div className={styles.description}>
                <span className={'headline_1'}>Поддержка на связи 24/7</span>
                <span className={'text_1'}>Поддержка по телефону, через e-mail, через удаленное подключение. Поддержку оказывают профессиональные пользователи ОДЫ, с непосредственным опытом работы в системе, поэтому они разбираются не только в самой программе, но и в специфике бизнеса.</span>
              </div>
            </div>
          </div>
        </section>

        <section id={'faq'} className={clsx(styles.faq_section, styles.section)}>
          <h2 className={'title_2'}>F.A.Q.</h2>
          <FAQ faq={faq}/>
        </section>

        <section className={styles.form_section}>
          <div className={styles.description}>
            <h2 className={'title_2'}>Автоматизируйте ваш автопарк</h2>
            <span className={'subhead_2'}>Оставьте заявку и мы свяжемся с вами в ближайшее время</span>
          </div>
          <Form className={styles.form}/>
        </section>
      </div>
    </main>
  )
}