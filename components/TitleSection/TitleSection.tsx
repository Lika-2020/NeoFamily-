import RegistrationForm from '../RegistrationForm/RegistrationForm';
import styles from './TitleSection.module.css';
import InfoTitleSection from '../InfoTitleSection/InfoTitleSection';
import IconPlus from '@/public/images/icon-plus.svg';
import IconLike from '@/public/images/icon-like.svg';

export default function TitleSection() {
  return (
    <div className={styles.container}>
      <section className={styles.title}>
        <InfoTitleSection
          title="NeoFamily — умная подготовка к ЕГЭ"
          subtitle="Более 30 000 заданий по всем предметам ЕГЭ"
          p ="Бесплатная теория, тесты и умное повторение"
        />
      </section>

      <section className={styles.registration}>
        <div className={styles['block-IconPlus']}>
          <IconPlus />
        </div>
   
        <RegistrationForm className={styles['registration-form']}/>
      

      </section>

      <section className={styles['section-like']}>
        <IconLike />
      </section>
    </div>
  );
}
