import React from 'react';
import Giscus from '@giscus/react';
import styles from './styles.module.css';

const GiscusComments = () => {
  return (
    <div className={styles.commentsContainer}>
      <div className={styles.commentsDivider}>
        <span>💬 评论讨论</span>
      </div>
      <div className={styles.giscusWrapper}>
        <Giscus
          repo="shaozongfan/shaozongfan.github.io" // 替换为你的 GitHub 仓库名
          repoId="R_kgDOJ3X6JQ" // 替换为你的仓库 ID
          category="General" // 替换为你的讨论分类
          categoryId="DIC_kwDOJ3X6Jc4CgM6t" // 替换为你的分类 ID
          mapping="pathname" // 基于页面路径映射讨论
          term="Welcome to @giscus/react component!"
          strict="0"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme="preferred_color_scheme"
          lang="zh-CN" // 默认中文
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default GiscusComments;