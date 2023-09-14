import styles from './WithoutRegistering.module.css';
import IconArrowReg from '@/public/images/icon-arrowReg.svg';

export default function WithoutRegistering() {
  return (
    <div className={styles['without-registering']}>
      <div className={styles.vector}>
        <IconArrowReg className={styles.arrow} />

        <div className={styles.clue}>без регистрации</div>
      </div>
    </div>
  );
}
