'use client';

import React, { useState } from 'react';
import styles from './RegistrationForm.module.css';
import Button from '../Buttons/Button';
import AnimatedInput from '../AnimatedInput/AnimatedInput';



export default function RegistrationForm() {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [repeatPasswordValue, setRepeatPasswordValue] = useState('');

 

  return (
    <form className={styles.form}>
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
      <span className={styles['text-agreement']}>
        Нажимая «Зарегистрироваться», вы выражаете{' '}
        <a className={styles['link-agreement']} href="#">
          согласие на обработку персональных данных
        </a>
        , а <br />
        также подтверждаете ознакомление и согласие с условиями{' '}
        <a className={styles['link-agreement']} href="#">
          Оферты
        </a>{' '}
        и{' '}
        <a className={styles['link-agreement']} href="#">
          Политики
        </a>{' '}
        <br />{' '}
        <a className={styles['link-agreement']} href="#">
          конфиденциальности
        </a>
        .
      </span>
    </form>
  );
}
