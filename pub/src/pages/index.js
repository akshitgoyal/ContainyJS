import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Easy to Use',
    imageUrl: 'img/easytouse.svg',
    description: (
      <>
        Containy was designed in such a way that you can make containers on 
        your website with just one line of code with absolutely no hassle.
      </>
    ),
  },
  {
    title: 'Diverse Features',
    imageUrl: 'img/features.svg',
    description: (
      <>
        Containy has some amazing set of functionalities. You don't need to worry about DOM manipulation, or adding animations, we have a feature for everything!
      </>
    ),
  },
  {
    title: 'Many Use Cases',
    imageUrl: 'img/usecases.svg',
    description: (
      <>
        Whether you are making any type of website, containy objects can be placed anywhere! Let it be flash cards, contact directoy, we got you covered!
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted, styles.spaceButton
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted, styles.spaceButton
              )}
              to={useBaseUrl('docs/api')}>
              API
            </Link>
            <a
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted, styles.spaceButton
              )}
              href= '/example.html'>
              Examples
            </a>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
