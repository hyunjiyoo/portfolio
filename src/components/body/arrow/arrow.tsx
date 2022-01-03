import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef } from 'react';
import styles from './arrow.module.css';

const Arrow = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const clickArrow = () => {
    const root = document.querySelector('#root') as HTMLDivElement;
    root.scrollIntoView({behavior: 'smooth'});
  }

  const showArrow = () => {
    const arrow = buttonRef.current as HTMLButtonElement;

    document.addEventListener('scroll', () => {

      if (window.pageYOffset > 100) {
        arrow.style.display = "block";
      } else {
        arrow.style.display = "none";
      }

    });
  }

  useEffect(showArrow, []);

  return (
    <button ref={buttonRef} id="arrow" className={styles.arrow} onClick={clickArrow}>
      <FontAwesomeIcon className={styles.arrow__icon} icon={faArrowCircleUp} />
    </button>
  )
};

export default Arrow;