'use client';

import React, { useState, useEffect } from 'react';
import AnimatedTextBlock from '../AnimatedTextBlock/AnimatedTextBlock';
import IconCurl from '@/public/images/icon-curl.svg';
import styles from './Sticker.module.css';

export default function Sticker() {
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
    <div className={styles.curl}>
      <div>
        <IconCurl />
      
      </div>

      <AnimatedTextBlock text="Попробуй" isAnimating={isAnimating} className={''} />
    </div>
  );
}
