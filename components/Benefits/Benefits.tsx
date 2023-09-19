import styles from './Benefits.module.css';
import InfoBox from '../InfoBox/InfoBox';
import IconContentSubject from '@/public/images/icon-contentSubject.svg';

export default function Benefits() {
  return (
    <div className={styles.container}>
      <InfoBox
        className={styles['block-text']}
        title="Умные справочники"
        p="и с дизайнерскими иллюстрациями. Идеально, чтобы"
        subtitle="Вся нужная теория по темам ЕГЭ — на понятном языке "
        pText="создать фундамент знаний по предмету."
      />

      <div className={styles['container-informationBlock']}>
        <IconContentSubject />
      </div>
    </div>
  );
}
