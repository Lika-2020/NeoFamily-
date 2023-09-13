'use client';

import React, { useState, useEffect } from 'react';
import AnimatedTextBlock from '../AnimatedTextBlock/AnimatedTextBlock';
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
        <svg
          width="59"
          height="43"
          viewBox="0 0 59 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.72246 4.73983C1.72246 4.73983 8.00144 18.5169 25.9072 21.3914C43.8129 24.266 52.874 7.87343 46.7966 2.89576C40.7191 -2.08192 22.1551 6.94921 30.2483 26.0549C37.535 43.257 57.8433 41.6994 57.8433 41.6994"
            stroke="#302A3E"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <AnimatedTextBlock text="Попробуй" isAnimating={isAnimating} />
    </div>
  );
}
