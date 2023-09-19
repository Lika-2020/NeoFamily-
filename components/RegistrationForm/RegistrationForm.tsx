'use client';

import React, { useState } from 'react';
import styles from './RegistrationForm.module.css';
import Button from '../Buttons/Button';
import AnimatedInput from '../AnimatedInput/AnimatedInput';

export default function RegistrationForm({ className }: { className: string }) {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [repeatPasswordValue, setRepeatPasswordValue] = useState('');

  return (
    <form className={`${styles.form} ${className}`}>
      <span className={styles.title}>Регистрируйся, чтобы начать обучение</span>
      <div className={styles['form__input']}>
        <AnimatedInput
          id="email"
          label="Email"
          type="text"
          value={emailValue}
          onFocus={() => {}}
          onBlur={() => {}}
          onChange={(e) => setEmailValue(e.target.value)}
        />
        <AnimatedInput
          id="password"
          label="Пароль"
          type="password"
          value={passwordValue}
          onFocus={() => {}}
          onBlur={() => {}}
          onChange={(e) => setPasswordValue(e.target.value)}
        />
        <AnimatedInput
          id="repeatPassword"
          label="Пароль еще раз"
          type="password"
          value={repeatPasswordValue}
          onFocus={() => {}}
          onBlur={() => {}}
          onChange={(e) => setRepeatPasswordValue(e.target.value)}
        />
      </div>
      <Button className={styles.customButton} text="Зарегистрироваться" />
      <div className={styles['text-agreement']}>
        <p>Нажимая «Зарегистрироваться», вы выражаете</p>
        <p>
          <a className={styles['link-agreement']} href="#">
            согласие на обработку персональных данных, а
          </a>
        </p>
        <p> также подтверждаете ознакомление и согласие с </p>
        <p>
          условиями&nbsp;
          <a className={styles['link-agreement']} href="#">
            Оферты&nbsp;
          </a>
          и&nbsp;
          <a className={styles['link-agreement']} href="#">
            Политики&nbsp;
          </a>
        </p>
        <p>
          <a className={styles['link-agreement']} href="#">
            конфиденциальности
          </a>
          .
        </p>
      </div>
    </form>
  );
}
