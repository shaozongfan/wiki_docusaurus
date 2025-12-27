import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function DocSidebarItemCategory({item, level, index, collapsible, ...props}) {
  // 添加安全检查
  if (!item) {
    return null;
  }
  
  const {label = 'Unknown', href = '#', items = []} = item;
  
  return (
    <li className={clsx('menu__list-item', styles.categoryItem)} key={index}>
      <div className={styles.categoryHeader}>
        <Link
          className={clsx('menu__link', styles.categoryLink)}
          to={href}
        >
          {label}
        </Link>
      </div>
      {items.length > 0 && (
        <ul className="menu__list">
          {items.map((subItem, subIndex) => (
            <li key={subIndex} className="menu__list-item">
              <Link
                className="menu__link"
                to={subItem.href || '#'}
              >
                {subItem.label || 'Unknown'}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}