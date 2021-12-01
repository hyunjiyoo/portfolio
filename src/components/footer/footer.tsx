import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './footer.module.css';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = (): JSX.Element => (
  <footer className={styles.footer}>
    <div className={styles.icon}>
      <a href="https://github.com/hyunjiyoo" target="blank">
        <FontAwesomeIcon className={styles.github} icon={faGithub} />
      </a>
      <a href="https://hjyooo.notion.site/Dream-Coding-92e6b3a0f6e04c9cb2cf7eae5ef0f2b4" target="blank">
        <img className={styles.notion} src="https://cdn.iconscout.com/icon/free/png-256/notion-1693557-1442598.png" alt="" />
      </a>
    </div>
    <p className={styles.text}>HyunjiYoo portfolio © 2021 | All rights reserved. </p>
  </footer>
);

export default Footer;