import React from 'react';
import NavbarItem from '@theme/NavbarItem';
import IconMail from '@site/src/theme/Icon/Mail';
import styles from './styles.module.css';

export default function ContactButton() {
  return (
    <NavbarItem
      className={`navbar__item ${styles.contactButton}`}
      component="a"
      href="mailto:contact@knowledge-wiki.com"
      aria-label="联系我们"
    >
      <IconMail className={styles.mailIcon} />
      <span className={styles.mailText}>联系我们</span>
    </NavbarItem>
  );
}