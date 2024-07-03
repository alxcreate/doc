import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './styles.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header>
      <div className="container">
        <Heading as="h1">
          {siteConfig.title}
        </Heading>
      </div>
    </header>
  );
}

function HeroBanner() {
  return (
    <div className={styles.hero} data-theme="dark">
      <div className={styles.heroInner}>
        <Heading as="h1" className={styles.heroProjectTagline}>
          <img
            className={styles.heroLogo}
            src='img/docusaurus.png'
            width="200"
            height="200"
          />
          <span class={styles.heroTitleTextHtml}>
              <p>My public <b>notes</b> and <b>blog</b>.</p>
          </span>
        </Heading>
        <div className={styles.indexCtas}>
          <a className="button button--primary" href="https://alxcreate.github.io">Personal Page</a>
          {/* <a className="button button--info" to="/docs">Try a Demo</a> */}

          {/* <span className={styles.indexCtasGitHubButtonWrapper}>
            <iframe
              className={styles.indexCtasGitHubButton}
              src="https://ghbtns.com/github-btn.html?user=alxcreate&amp;repo=doc&amp;type=star&amp;count=true&amp;size=large"
              width={160}
              height={30}
              title="GitHub Stars"
            />
          </span> */}
        </div>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <HeroBanner />
      <main>
     
      </main>
    </Layout>
  );
}
