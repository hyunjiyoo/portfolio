import { useCallback, useEffect, useRef } from 'react';
import styles from './navbar.module.css';
import { FaGem, FaBars } from 'react-icons/fa';
interface NavbarProps {
  activeEffect: (target: HTMLElement) => void;
}

const sectionIds: string[] = ['#intro', '#about', '#note', '#skills', '#work', '#testimonials', '#contact'];

let sections: HTMLElement[];
let navItems: HTMLElement[];
let selectedNavIndex: number = 0;

const Navbar = ({ activeEffect }: NavbarProps): JSX.Element => {
  const ulRef = useRef<HTMLUListElement>(null);

  const initSectionInfo = () => {
    sections = sectionIds.map((sectionId) => document.querySelector(sectionId)) as HTMLElement[];
    navItems = sectionIds.map((sectionId) => document.querySelector(`[data-link="${sectionId}"]`)) as HTMLElement[];

    return { sections, navItems };
  };

  const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting && entry.intersectionRatio > 0) {
        const index = sectionIds.indexOf(`#${entry.target.id}`);

        if (entry.boundingClientRect.y < 0) {
          selectedNavIndex = index < navItems.length - 1 ? index + 1 : index;
        } else {
          selectedNavIndex = index - 1;
        }
      }
    });
  };

  const createObserver = useCallback((sections: HTMLElement[]) => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    sections.forEach((section: HTMLElement) => observer.observe(section));
  }, []);

  const scrollTopByWheel = () => {
    window.addEventListener('wheel', () => {
      if (window.scrollY === 0) {
        selectedNavIndex = 0;
      }

      activeEffect(navItems[selectedNavIndex]);
    });
  };

  const downScrollNavStyle = () => {
    const nav = document.querySelector('nav') as HTMLElement;
    window.addEventListener('scroll', () => {
      navDarkStyle(nav);
      closeMenu();
    });
  };

  const scrollTo = (event: React.MouseEvent<HTMLUListElement>) => {
    const target = event.target as HTMLLIElement;
    const link = target.dataset.link;

    if (link == null) {
      return;
    }

    activeEffect(target);
    scrollIntoView(link);
  };

  const openMenu = () => {
    ulRef.current!.classList.toggle(`${styles.open}`);
  };

  const closeMenu = () => {
    ulRef.current!.classList.remove(`${styles.open}`);
  };

  useEffect(scrollTopByWheel, [activeEffect]);
  useEffect(downScrollNavStyle, []);
  useEffect(() => {
    const { sections } = initSectionInfo();
    createObserver(sections);
  }, [createObserver]);

  return (
    <nav id={styles.navbar}>
      <div className={styles.section}>
        <div className={styles.logo}>
          <FaGem />
          <a className={styles.name} href='#top'>
            <span id={styles.firstName}>HYUNJI.</span>
            <span id={styles.secondName}>YOO</span>
          </a>
        </div>
        <ul ref={ulRef} className={styles.menu} onClick={scrollTo}>
          <li className={`${styles.menu_item} active`} data-link='#intro'>
            Home
          </li>
          <li className={styles.menu_item} data-link='#about'>
            About
          </li>
          <li className={styles.menu_item} data-link='#note'>
            Note
          </li>
          <li className={styles.menu_item} data-link='#skills'>
            Skills
          </li>
          <li className={styles.menu_item} data-link='#work'>
            Work
          </li>
          <li className={styles.menu_item} data-link='#testimonials'>
            Testimonial
          </li>
          <li className={styles.menu_item} data-link='#contact'>
            Contact
          </li>
        </ul>
        <button className={styles.button} onClick={openMenu}>
          <FaBars />
        </button>
      </div>
    </nav>
  );
};

const scrollIntoView = (selector: string) => {
  const element = document.querySelector(selector) as HTMLLIElement;
  element.scrollIntoView({ behavior: 'smooth' });
};

const navDarkStyle = (nav: HTMLElement) => {
  if (window.scrollY > 0) {
    nav.classList.add(`${styles.dark}`);
  } else {
    nav.classList.remove(`${styles.dark}`);
  }
};

export default Navbar;
