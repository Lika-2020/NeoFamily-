import styles from './Repetitions.module.css';
import InfoBox from '../InfoBox/InfoBox';
import IconRepeat from '@/public/images/icon-repeat.svg' 

export default function Repetitions() {
  return (
    <div className={styles.container}>
      <div>
        <IconRepeat/>
      </div>
      <InfoBox   title="Умное повторение"
        subtitle="Система интервального повторения, которая позволит тебе запоминать миллиарды терминов/правил без особых усилий. Основана на новейших исследованиях памяти."/>
    </div>
  );
}
