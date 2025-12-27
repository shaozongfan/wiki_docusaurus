import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.heroButtons}>
            <Link
              className="button button--primary button--lg"
              to="/docs/programming">
              开始浏览知识库 📚
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro">
              快速开始 🚀
            </Link>
          </div>
        </div>
        <div className={styles.heroIllustration}>
          <div className={styles.illustrationCard}>
            <div className={styles.codeBlock}>
              <div className={styles.codeHeader}>
                <span className={styles.codeDot}></span>
                <span className={styles.codeDot}></span>
                <span className={styles.codeDot}></span>
              </div>
              <div className={styles.codeContent}>
                <span className={styles.codeLine}>const knowledge = {`{`}</span>
                <span className={styles.codeLine}>  programming: 'Code & Design',</span>
                <span className={styles.codeLine}>  system: 'Architecture',</span>
                <span className={styles.codeLine}>  mermaid: 'Visualization',</span>
                <span className={styles.codeLine}>{`};`}</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.contactInfo}>
          <p className={styles.contactTitle}>联系方式</p>
          <div className={styles.contactMethods}>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📧</span>
              <span>邮箱：contact@knowledge-wiki.com</span>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>💬</span>
              <span>微信公众号：KnowledgeWiki</span>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>🔗</span>
              <span>GitHub：shaozongfan</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
