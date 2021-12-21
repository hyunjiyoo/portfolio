import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './navbar.module.css';
import { faBars, faGem } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react';

const sectionIds: string[] = [
  '#intro',
  '#about',
  '#note',
  '#skills',
  '#work',
  '#testimonials',
  '#contact'
];

let sections : HTMLElement[];
let navItems : HTMLElement[];
let selectedNavIndex : number = 0;

const Navbar = (): JSX.Element => {
  
  const initSectionInfo = () => {

    sections = sectionIds.map(sectionId => (document.querySelector(sectionId))) as HTMLElement[];
    navItems = sectionIds.map(sectionId => (document.querySelector(`[data-link="${sectionId}"]`))) as HTMLElement[];  

    return { sections, navItems };
  }

  const createObserver = (sections: HTMLElement []) => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    sections.forEach((section: HTMLElement) => observer.observe(section));  
  }

  useEffect(() => {
    const { sections } = initSectionInfo();
    createObserver(sections);
  }, []);

  const scrollTo = (event: React.MouseEvent<HTMLUListElement>) => {
    const target = event.target as HTMLLIElement;
    const link = target.dataset.link;

    if (link == null) {
      return;
    }

    activeEffect(target);
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
        </ul>
        <button className={styles.button}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </nav>
  )
};

const scrollIntoView = (selector: string) => {
  const element = document.querySelector(selector) as HTMLLIElement;
  element.scrollIntoView({behavior: 'smooth'});
}

const activeEffect = (target: HTMLElement) => {
  const prevTarget = document.querySelector(`.${styles.active}`) as HTMLLIElement;
  prevTarget.classList.remove(`${styles.active}`);
  target.classList.add(`${styles.active}`);
}

const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting && entry.intersectionRatio > 0) {
      const index = sectionIds.indexOf(`#${entry.target.id}`);
      
      if (entry.boundingClientRect.y < 0) {
        selectedNavIndex = (index < navItems.length - 1) ? index + 1: index;
      } else {
        selectedNavIndex = index - 1;
      } 
    }
  });
}

window.addEventListener('wheel', () => {

  if (window.scrollY === 0) {
    selectedNavIndex = 0;
  } 
  
  activeEffect(navItems[selectedNavIndex]);
});

export default Navbar;