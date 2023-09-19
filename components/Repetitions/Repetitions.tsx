import styles from './Repetitions.module.css';
import InfoBox from '../InfoBox/InfoBox';
import IconRepeat from '@/public/images/icon-repeat.svg' 


export default function Repetitions() {
  return (
    <div className={styles.container}>
      <div>
        <IconRepeat/>
      </div>
      <div>
      <InfoBox className={styles['block-text']}  title="Умное повторение"
        subtitle="Система интервального повторения, которая позволит "
        p= "тебе запоминать миллиарды терминов/правил без"
        pText="особых усилий. Основана на новейших исследованиях памяти."
        />
        
        </div>
    </div>
  );
}
