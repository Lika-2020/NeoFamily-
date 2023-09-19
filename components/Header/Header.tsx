import styles from './Header.module.css';
import Button from '../Buttons/Button';
import IconLogo from '@/public/images/icon-logoConteiner.svg';
import IconContainer from '@/public/images/icon-container.svg';


function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <IconLogo />
      </div>

      <div className={styles['nav__container']}>
        <nav className={styles.nav}>
          <a className={styles['nav__active-link']} href="#subjects">
            Предметы
          </a>
          <a className={styles['nav__link']} href="#theory">
            Теория
          </a>
          <a className={styles['nav__link']} href="#repetition">
            Повторение
          </a>
          <div className={styles['nav__elements']}>
            <a className={styles['nav__link']} href="#tests">
              Тесты
            </a>
          </div>
        </nav>
        <div>
     
          <Button className={styles.button} text="В Банк заданий">
            <IconContainer className={styles['icon-container']} />
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
