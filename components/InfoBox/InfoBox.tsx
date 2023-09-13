import React from 'react';
import styles from './InfoBox.module.css'
import Button from '../Buttons/Button';

interface InfoBoxProps {
  title: string;
  subtitle: string;
  style?: React.CSSProperties;
}

function InfoBox(props: InfoBoxProps) {
  const { title, subtitle, style } = props;

  return (
    <div style={style}>
      <div className={styles['block-title']}>
        <h3 className={styles.title}>{title}</h3>
      </div>
      <div className={styles['block-subtitle']}>
        <article className={styles.subtitle}>{subtitle}</article>
      </div>
      
      <Button className={styles.button} text="Зарегистрироваться бесплатно" />
    </div>
  );
}

export default InfoBox;
