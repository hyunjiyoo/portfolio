import styles from './footer.module.css';
import { BsGithub } from 'react-icons/bs';

const Footer = (): JSX.Element => (
  <footer className={styles.footer}>
    <div className={styles.icon}>
      <a href='https://github.com/hyunjiyoo' target='blank'>
        <BsGithub className={styles.github} />
      </a>
      <a href='https://shorturl.at/yaDQ1' target='blank'>
        <img className={styles.notion} src='https://bit.ly/3r19OMX' alt='' />
      </a>
    </div>
    <p className={styles.text}>HyunjiYoo portfolio © {new Date().getFullYear()} | All rights reserved. </p>
  </footer>
);

export default Footer;
