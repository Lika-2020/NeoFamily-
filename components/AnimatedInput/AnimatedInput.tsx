'use client';

import React, { useState } from 'react';
import styles from './AnimatedInput.module.css';
import { useSpring, animated } from 'react-spring';
import IconUnion from '@/public/images/icon-union.svg';


interface AnimatedInputProp {
    id: string;
    label: string;
    type: string;
    value: string;
    onFocus: () => void;
    onBlur: () => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }

export default function AnimatedInput(props: AnimatedInputProp) {

    const { id, label, type, value, onFocus, onBlur, onChange } = props;

  const [focused, setFocused] = useState(false);

  const labelSpring = useSpring({
    transform: focused || value ? 'translateY(-10px)' : 'translateY(0px)',
    fontSize: focused || value ? '10px' : '14px',
    color: focused || value ? 'rgba(48,42,62,.6)' : '#302a3e',
  });

  const handleFocus = () => {
    setFocused(true);
    onFocus();
  };

  const handleBlur = () => {
    setFocused(false);
    onBlur();
  };

  return (
    <div className={styles['block__label-input']}>
      <animated.label
        style={labelSpring}
        className={styles['label-input']}
        htmlFor={id}
      >
        {label}
      </animated.label>
      <input
        type={type}
        id={id}
        name={id}
        className={styles.input}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        onChange={onChange}
      />
      {type === 'password' && (
        <button type='button' className={styles['icon-union']}>
          <IconUnion />
        </button>
      )}
    </div>
  );
}