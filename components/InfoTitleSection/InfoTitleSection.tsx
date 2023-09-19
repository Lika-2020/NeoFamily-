import React from 'react';
import styles from './InfoTitleSection.module.css';
import Button from '../Buttons/Button';
import IconButtonVk from '@/public/images/icon-buttonVk.svg';

interface InfoTitleSectionProps {
  title: string;
  subtitle: string;
  p: string;
  style?: React.CSSProperties;
}

export default function InfoTitleSection(props: InfoTitleSectionProps) {
  const { title, subtitle, style, p } = props;

  return (
    <div style={style}>
      <h3 className={styles['title__text']}>{title}</h3>
   

      <div className={styles.subtitle}>
        <span className={styles['subtitle__text']}>{subtitle}</span>
        <p className={styles['subtitle__text']}>{p}</p>
      </div>
      <div className={styles.buttons}>
        <Button
          className={styles['buttons__entrance']}
          text="Войти через VK ID"
        >
          <IconButtonVk />
        </Button>
        <Button className={styles['buttons__enter']} text="Войти" />
      </div>
    </div>
  );
}
