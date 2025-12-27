import React, { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function FloatingCard({
  children,
  className,
  variant = 'default',
  tilt = true,
  glow = true,
  delay = 0,
  ...props
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card || !tilt) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      setMousePosition({ x: rotateX, y: rotateY });
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => {
      setIsHovered(false);
      setMousePosition({ x: 0, y: 0 });
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [tilt]);

  const cardStyle = {
    transform: tilt 
      ? `perspective(1000px) rotateX(${mousePosition.x}deg) rotateY(${mousePosition.y}deg) scale(${isHovered ? 1.02 : 1})`
      : `scale(${isHovered ? 1.02 : 1})`,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    animationDelay: `${delay}ms`,
  };

  const glowStyle = glow && isHovered ? {
    background: `radial-gradient(circle at ${50 + mousePosition.y}% ${50 + mousePosition.x}%, rgba(102, 126, 234, 0.1), transparent 40%)`,
  } : {};

  return (
    <div
      ref={cardRef}
      className={clsx(
        styles.floatingCard,
        styles[variant],
        isHovered && styles.hovered,
        className
      )}
      style={cardStyle}
      {...props}
    >
      <div className={styles.cardGlow} style={glowStyle} />
      <div className={styles.cardContent}>
        {children}
      </div>
    </div>
  );
}