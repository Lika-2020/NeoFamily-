'use client';

import React from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './AnimatedTextBlock.module.css'

interface AnimatedTextBlockProps {
    text: string;
    isAnimating: boolean;
    className: string;
  }
  

export default function AnimatedTextBlock(props: AnimatedTextBlockProps) {
    const { text, isAnimating, className } = props;

  const textSpringProps = useSpring({
    to: {
      transform: isAnimating
        ? 'scale(1.5) rotate(12.37deg)'
        : 'scale(1) rotate(12.37deg)',
    },
    from: { transform: 'scale(1) rotate(12.37deg)' },
    config: { duration: 2000, loop: true },
  });

  return (
    <animated.div style={textSpringProps}  className={`${styles['block-text']} ${className}`}>

        <span>{text}</span>
     
    </animated.div>
  );
}
