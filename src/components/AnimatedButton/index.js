import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function AnimatedButton({
  children,
  href,
  to,
  variant = 'primary',
  size = 'medium',
  icon,
  onClick,
  ...props
}) {
  const Component = href ? 'a' : to ? 'a' : 'button';
  const linkProps = href ? { href } : to ? { href: to } : {};
  
  return (
    <Component
      className={clsx(
        styles.animatedButton,
        styles[variant],
        styles[size],
        icon && styles.withIcon
      )}
      onClick={onClick}
      {...linkProps}
      {...props}
    >
      <span className={styles.buttonContent}>
        {icon && <span className={styles.buttonIcon}>{icon}</span>}
        <span className={styles.buttonText}>{children}</span>
      </span>
      <div className={styles.buttonRipple}></div>
    </Component>
  );
}