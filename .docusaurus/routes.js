import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/en/blog',
    component: ComponentCreator('/en/blog', '8b4'),
    exact: true
  },
  {
    path: '/en/blog/archive',
    component: ComponentCreator('/en/blog/archive', 'd28'),
    exact: true
  },
  {
    path: '/en/blog/authors',
    component: ComponentCreator('/en/blog/authors', '32d'),
    exact: true
  },
  {
    path: '/en/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/en/blog/authors/all-sebastien-lorber-articles', '444'),
    exact: true
  },
  {
    path: '/en/blog/authors/yangshun',
    component: ComponentCreator('/en/blog/authors/yangshun', '26c'),
    exact: true
  },
  {
    path: '/en/blog/first-blog-post',
    component: ComponentCreator('/en/blog/first-blog-post', 'e3f'),
    exact: true
  },
  {
    path: '/en/blog/long-blog-post',
    component: ComponentCreator('/en/blog/long-blog-post', '3fa'),
    exact: true
  },
  {
    path: '/en/blog/mdx-blog-post',
    component: ComponentCreator('/en/blog/mdx-blog-post', 'd71'),
    exact: true
  },
  {
    path: '/en/blog/tags',
    component: ComponentCreator('/en/blog/tags', 'fb7'),
    exact: true
  },
  {
    path: '/en/blog/tags/docusaurus',
    component: ComponentCreator('/en/blog/tags/docusaurus', 'db4'),
    exact: true
  },
  {
    path: '/en/blog/tags/facebook',
    component: ComponentCreator('/en/blog/tags/facebook', '7ad'),
    exact: true
  },
  {
    path: '/en/blog/tags/hello',
    component: ComponentCreator('/en/blog/tags/hello', '08b'),
    exact: true
  },
  {
    path: '/en/blog/tags/hola',
    component: ComponentCreator('/en/blog/tags/hola', '73b'),
    exact: true
  },
  {
    path: '/en/blog/welcome',
    component: ComponentCreator('/en/blog/welcome', '31d'),
    exact: true
  },
  {
    path: '/en/markdown-page',
    component: ComponentCreator('/en/markdown-page', '63b'),
    exact: true
  },
  {
    path: '/en/search',
    component: ComponentCreator('/en/search', '62b'),
    exact: true
  },
  {
    path: '/en/docs',
    component: ComponentCreator('/en/docs', '3ef'),
    routes: [
      {
        path: '/en/docs',
        component: ComponentCreator('/en/docs', 'c5b'),
        routes: [
          {
            path: '/en/docs',
            component: ComponentCreator('/en/docs', 'c4d'),
            routes: [
              {
                path: '/en/docs/contact',
                component: ComponentCreator('/en/docs/contact', '706'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/intro',
                component: ComponentCreator('/en/docs/intro', '6d2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/mermaid-examples',
                component: ComponentCreator('/en/docs/mermaid-examples', 'a70'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/programming',
                component: ComponentCreator('/en/docs/programming', '9c0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/system-design',
                component: ComponentCreator('/en/docs/system-design', 'fca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/en/docs/tutorial-basics/congratulations', '0d9'),
                exact: true
              },
              {
                path: '/en/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/en/docs/tutorial-basics/create-a-blog-post', '94d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/en/docs/tutorial-basics/create-a-document', '52a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/en/docs/tutorial-basics/create-a-page', 'a52'),
                exact: true
              },
              {
                path: '/en/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/en/docs/tutorial-basics/deploy-your-site', '35e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/en/docs/tutorial-basics/markdown-features', 'a71'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/en/docs/tutorial-extras/manage-docs-versions', 'c3b'),
                exact: true
              },
              {
                path: '/en/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/en/docs/tutorial-extras/translate-your-site', '5ed'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/en/',
    component: ComponentCreator('/en/', 'd3c'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
