import { useEffect, useRef } from 'react';
import styles from './arrow.module.css';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
interface ArrowProps {
  activeEffect: (target: HTMLElement) => void;
}

const Arrow = ({ activeEffect }: ArrowProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const clickArrow = () => {
    const root = document.querySelector('#root') as HTMLDivElement;
    const homeNavItem = document.querySelector(`[data-link="#intro"]`) as HTMLLIElement;

    root.scrollIntoView({ behavior: 'smooth' });
    activeEffect(homeNavItem);
  };

  const showArrow = () => {
    const arrow = buttonRef.current as HTMLButtonElement;

    document.addEventListener('scroll', () => {
      if (window.pageYOffset > 100) {
        arrow.style.display = 'block';
      } else {
        arrow.style.display = 'none';
      }
    });
  };

  useEffect(showArrow, []);

  return (
    <button ref={buttonRef} id='arrow' className={styles.arrow} onClick={clickArrow}>
      <BsFillArrowUpCircleFill className={styles.arrow__icon} />
    </button>
  );
};

export default Arrow;
