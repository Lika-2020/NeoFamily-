'use client';

import React, { useState, useEffect } from 'react';
import InfoTitleSection from '../InfoTitleSection/InfoTitleSection';
import AnimatedTextBlock from '../AnimatedTextBlock/AnimatedTextBlock';
import IconCallToAction from '@/public/images/icon-callToAction.svg';
import styles from './СallToAction.module.css';

export default function CallToAction() {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);

      // Через 1 секунду после начала анимации снова устанавливаем isAnimating в false
      setTimeout(() => {
        setIsAnimating(false);
      }, 1000);
    }, 10000);

    // Очистка интервала при размонтировании компонента
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <InfoTitleSection
          title="Начни подготовку прямо сейчас!"
          subtitle="Это бесплатно и точно тебе понравится."
        />
      </div>

      <AnimatedTextBlock text="Дерзай" isAnimating={isAnimating} />

      <div>
        <IconCallToAction />
      </div>
    </div>
  );
}
