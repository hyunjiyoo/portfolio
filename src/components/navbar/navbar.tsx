import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './navbar.module.css';
import { faBars, faGem } from '@fortawesome/free-solid-svg-icons'

const Navbar = (): JSX.Element => (
  <nav className={styles.navbar}>
    <div className={styles.logo}>
      <FontAwesomeIcon icon={faGem} />
      <a className={styles.name} href="#top">
        <span id={styles.firstName}>HYUNJI.</span>
        <span id={styles.secondName}>YOO</span>
      </a>
    </div>
    <ul className={styles.menu}>
      <li className={styles.menu_item} data-link="#home">Home</li>
      <li className={styles.menu_item} data-link="#about">About</li>
      <li className={styles.menu_item} data-link="#note">Note</li>
      <li className={styles.menu_item} data-link="#skills">Skills</li>
      <li className={styles.menu_item} data-link="#work">My work</li>
      <li className={styles.menu_item} data-link="#testimonial">Testimonial</li>
      <li className={styles.menu_item} data-link="#contact">Contact</li>
      <li className={styles.menu_item} data-link="#social">Social</li>
    </ul>
    <button className={styles.button}>
      <FontAwesomeIcon icon={faBars} />
    </button>
  </nav>
);

export default Navbar;