import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '编程技术',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        涵盖前端、后端、移动开发等各种编程技术的学习笔记和实践经验分享。
      </>
    ),
    link: '/docs/programming',
  },
  {
    title: '系统设计',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        软件架构设计、分布式系统、微服务架构等系统设计相关知识整理。
      </>
    ),
    link: '/docs/system-design',
  },
  {
    title: '图表支持',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        内置 Mermaid 支持，可以轻松创建流程图、时序图、类图等多种图表。
      </>
    ),
    link: '/docs/mermaid-examples',
  },
];

function Feature({Svg, title, description, link}) {
  return (
    <div className={clsx('col col--4', styles.featureCol)}>
      <div className={clsx('featureCard', styles.featureCard)}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
          <a href={link} className={styles.featureLink}>
            了解更多 →
          </a>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
