import styles from './Button.module.css';
import React, { ReactNode } from 'react';

interface ButtonProps {
  text?: string;
  onClick?: () => void;
  children?: ReactNode;
  className?: string;
  customStyles?: string;
}

function Button(props: ButtonProps) {
  const { text = '', onClick, children, className } = props;

const buttonClasses = `${styles.entrance} ${className || ''}`


  return (
    <header>
      <div>
        <div onClick={onClick} className={buttonClasses}>
          <div className={styles['entrance__block']}>
            {children}
            <div className={styles['entrance__text']}>{text}</div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Button;
