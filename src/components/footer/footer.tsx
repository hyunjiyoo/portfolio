import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import styles from './footer.module.css';

const Footer = (): JSX.Element => (
  <footer className={styles.footer}>
    <div className={styles.icon}>
      <a href="https://github.com/hyunjiyoo" target="blank">
        <FontAwesomeIcon className={styles.github} icon={faGithub} />
      </a>
      <a href="https://bit.ly/32GAoT6" target="blank">
        <img className={styles.notion} src="https://bit.ly/3r19OMX" alt="" />
      </a>
    </div>
    <p className={styles.text}>HyunjiYoo portfolio © {new Date().getFullYear()} | All rights reserved. </p>
  </footer>
);

export default Footer;