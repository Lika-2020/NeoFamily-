'use client';

import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import IconArrowCurl from '@/public/images/icon-arrowCurl.svg';
import IconTransition from '@/public/images/icon-transition.svg';
import styles from './Description.module.css';

export default function Description() {
  const [isAnimating, setIsAnimating] = useState(true);

  const subjects = [
    { id: 1, name: 'Биология', color: '#CDE0A4' },
    { id: 2, name: 'Химия', color: '#D4DDEE' },
    { id: 3, name: 'Русский язык', color: '#F9E48A' },
    { id: 4, name: 'Профильная математика', color: '#B3D4E5' },
    { id: 5, name: 'Обществознание', color: '#ACD5B7' },
    { id: 6, name: 'История', color: '#F5C6AA' },
    { id: 7, name: 'Физика', color: '#76C1C1' },
    { id: 8, name: 'Литература', color: '#F4BE9A' },
    { id: 9, name: 'Информатика', color: '#DBDBDB' },
    { id: 10, name: 'Английский язык', color: '#7CB8E0' },
    { id: 11, name: 'География', color: '#A3D8AF' },
    { id: 12, name: 'Базовая математика', color: '#B3D4E5' },
  ];

  const textSpringProps = useSpring({
    to: async (next) => {
      if (isAnimating) {
        await next({ transform: 'rotate(-10deg)' });
        await next({ transform: 'rotate(10deg)' });
        await next({ transform: 'rotate(0deg)' });
      }
    },
    from: { transform: 'rotate(0deg)' },
    config: { duration: 500 },
    onRest: () => {
      // Когда анимация завершена, устанавливаем isAnimating в false
      setIsAnimating(false);
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
    }, 17000);

    // Очистка интервала при размонтировании компонента
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles['block-subject']}>
        {subjects.map((subject) => (
          <animated.a
            href="#"
            key={subject.id}
            className={styles['subject']}
            style={{ ...textSpringProps, backgroundColor: subject.color }}
          >
            <IconTransition className={styles['svg-iconTransition']} />

            {subject.name}
          </animated.a>
        ))}
        <div className={styles.vector}>
          <IconArrowCurl className={styles['svg-icon']} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles['section-description']}>
          <div>
            <h3 className={styles.title}>
              {' '}
              Банк заданий по всем <p>предметам</p>{' '}
            </h3>
          </div>
          <div className={styles['block-description']}>
            <span className={styles.description}>
              <p>Десятки тысяч качественных заданий по твоим</p> <p> предметам.{' '}
              Формата ЕГЭ-2024, уровня сложности</p>{' '}
              <p>экзамена и выше, с ответами и пояснениями. Можно</p>{' '}
              <p>фильтровать по темам, линиям или использовать</p>{' '}
              <p> поиск! </p>
            </span>
          </div>

          <div className={styles['block-call']}>
            <span className={styles.call}>
             Выбирай предмет и переходи <p>в Банк заданий прямо сейчас!</p> 
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
