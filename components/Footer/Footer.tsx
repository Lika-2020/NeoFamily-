import styles from './Footer.module.css';
import classnames from 'classnames';
import Button from '../Buttons/Button';
import IconLogo from '@/public/images/icon-logoConteiner.svg';
import IconYoutube from '@/public/images/icon-youtube.svg';
import IconVk from '@/public/images/icon-VK.svg';
import IconTelegram from '@/public/images/icon-telegram.svg';
import IconArrowUp from '@/public/images/icon-arrowUp.svg';
import IconPhone from '@/public/images/icon-phone.svg';
import IconMail from '@/public/images/icon-mail.svg';
import IconLicense from '@/public/images/icon-license.svg';
import IconSkolkovo from '@/public/images/icon-skolkovo.svg';

export default function Footer() {
  const contactClasses = classnames(styles.contact, styles.email);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <nav className={styles['footer-nav']}>
          <IconLogo />
          <div className={styles['block__social-media']}>
            <IconYoutube className={styles['social-media']} />
            <IconVk className={styles['social-media']} />
            <IconTelegram className={styles['social-media']} />
          </div>

          <Button text="Наверх" className={styles.button}>
           
              <IconArrowUp className={styles['arrow-up']} />
        
          </Button>
        </nav>
        <div className={styles['block-contacts']}>
          <div className={styles.contacts}>
            <div className={styles.title}> Выслушаем и поможем 😉✌</div>

            <div className={styles['block-contact']}>
              <div className={styles.contact}>
                <IconPhone className={styles['icon-contact']} />

                <a
                  className={styles['link-info']}
                  href="tel: +7 (952) 722-87-33"
                >
                  +7 (952) 722-87-33
                </a>
              </div>
              <div className={contactClasses}>
                <IconMail className={styles['icon-contact']} />

                <a
                  className={styles['link-info']}
                  href="mailto: school@neofamily.ru"
                >
                  school@neofamily.ru
                </a>
              </div>
            </div>
            <span className={styles.address}>
              197101, г. Санкт-Петербург, вн.тер.г. муниципальный округ
              Посадский, ул. <br />
              Рентгена, д. 9Б, помещ. 1-Н, офис 9
            </span>
            <div className={styles['group-document']}>
              <div className={styles.license}>
                <IconLicense />
              </div>
              <div className={styles.skolkovo}>
                <IconSkolkovo />
              </div>
            </div>
          </div>
          <div className={styles['block-description']}>
            <div className={styles.description}>
              NeoFamily - умная подготовка к ЕГЭ
            </div>

            <div className={styles.sections}>Всё для подготовки к ЕГЭ</div>
            <div className={styles.sections}>Предметы</div>
            <div className={styles.sections}>Особенности обучения</div>
            <div className={styles['block__link-document']}>
              <a className={styles['link-document']} href="#">
                Правовая информация
              </a>
              <a className={styles['link-document']} href="#">
                Оферта
              </a>
            </div>
          </div>
          <div className={styles['block-project']}>
            <div className={styles.description}>Проекты</div>
            <div className={styles.sections}>NeoFamily</div>
            <div className={styles.sections}>
              <a href="#">Ссылка на другой проект</a>
            </div>
          </div>
        </div>

        <div className={styles.requisites}>
          <div>© ООО “НЕОФЭМИЛИ”</div>
          <div>ИНН: 7813660849</div>
          <div>КПП: 781301001</div>
          <div>ОГРН: 1227800019105</div>
        </div>
      </div>
    </footer>
  );
}
