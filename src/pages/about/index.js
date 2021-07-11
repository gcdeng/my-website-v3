import React from 'react';
import Layout from '@theme/Layout';
import ericDengImgUrl from '@site/static/img/ericdeng.jpg';
import Intro from './intro.md';
import { FiGithub, FiLinkedin, FiFacebook, FiTwitter } from 'react-icons/fi';
import styles from './styles.module.css';

const About = () => {
  return (
    <Layout title="Hello">
      <div className="container margin-vert--lg">
        <img src={ericDengImgUrl} className={styles.avatar}></img>
        <div className={styles.icons}>
          <a href="https://github.com/gcdeng" target="_blank">
            <FiGithub className={styles.icon} />
          </a>
          <a href="https://www.linkedin.com/in/gcdeng/" target="_blank">
            <FiLinkedin className={styles.icon} />
          </a>
          <a href="https://www.facebook.com/ericdenggc" target="_blank">
            <FiFacebook className={styles.icon} />
          </a>
          <a href="https://twitter.com/ericdenggc" target="_blank">
            <FiTwitter className={styles.icon} />
          </a>
        </div>
        <div className={styles.intro}>
          <Intro />
        </div>
      </div>
    </Layout>
  );
};

export default About;
