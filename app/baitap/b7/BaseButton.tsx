import React from 'react';
import styles from './BaseButton.module.css';
import cn from 'classnames';

export default function BaseButton({ type, children }) {
  const buttonClass = cn(styles.button, {
    [styles.primary]: type === 'primary',
    [styles.success]: type === 'success',
    [styles.warning]: type === 'warning',
    [styles.danger]: type === 'danger',
  });

  return (
    <button className={buttonClass}>
      {children}
    </button>
  );
}
