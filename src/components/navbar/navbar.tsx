import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './navbar.module.css';
import { faBars, faGem } from '@fortawesome/free-solid-svg-icons'

const Navbar = (): JSX.Element => {

  const scrollIntoView = (selector: string) => {
    const element = document.querySelector(selector) as HTMLLIElement;
    element.scrollIntoView({behavior: 'smooth'});
  }

  const scrollTo = (event: React.MouseEvent<HTMLUListElement>) => {
    const target = event.target as HTMLLIElement;
    const link = target.dataset.link;

    if (link == null) {
      return;
    }
    
    scrollIntoView(link);
  }
  
  return (
    <nav id={styles.navbar}>
      <div className={styles.section}>
        <div className={styles.logo}>
          <FontAwesomeIcon icon={faGem} />
          <a className={styles.name} href="#top">
            <span id={styles.firstName}>HYUNJI.</span>
            <span id={styles.secondName}>YOO</span>
          </a>
        </div>
        <ul className={styles.menu} onClick={scrollTo}>
          <li className={`${styles.menu_item} ${styles.active}`} data-link="#intro">Home</li>
          <li className={styles.menu_item} data-link="#about">About</li>
          <li className={styles.menu_item} data-link="#note">Note</li>
          <li className={styles.menu_item} data-link="#skills">Skills</li>
          <li className={styles.menu_item} data-link="#work">Work</li>
          <li className={styles.menu_item} data-link="#testimonials">Testimonial</li>
          <li className={styles.menu_item} data-link="#contact">Contact</li>
          <li className={styles.menu_item} data-link="#social">Social</li>
        </ul>
        <button className={styles.button}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </nav>
  )
};

export default Navbar;