import React from 'react';
import clsx from 'clsx';
import {useWindowSize} from '@docusaurus/theme-common';
import DocItemPaginator from '@theme/DocItem/Paginator';
import DocVersionBanner from '@theme/DocVersionBanner';
import DocVersionBadge from '@theme/DocVersionBadge';
import DocItemFooter from '@theme/DocItem/Footer';
import TOC from '@theme/TOC';
import DocItemContent from '@theme/DocItem/Content';
import DocBreadcrumbs from '@theme/DocBreadcrumbs';
import GiscusComments from '../../../components/GiscusComments';
import styles from './styles.module.css';

export default function DocItemLayout({children}) {
  const windowSize = useWindowSize();
  
  // Simple approach - just use default layout with enhanced styles
  return (
    <div className="row">
      <div className="col col--12">
        <DocVersionBanner />
        <div className={styles.docItemContainer}>
          <article>
            <DocBreadcrumbs />
            <DocVersionBadge />
            <DocItemContent>{children}</DocItemContent>
            <DocItemFooter />
          </article>
          <DocItemPaginator />
          {/* 添加评论组件 */}
          <GiscusComments />
        </div>
      </div>
      {windowSize === 'desktop' && (
        <div className="col col--3">
          <TOC />
        </div>
      )}
    </div>
  );
}