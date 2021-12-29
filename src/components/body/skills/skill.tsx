import { useCallback, useEffect, useRef } from 'react';
import styles from './skill.module.css';

interface SkillProps {
  title: string;
  value: number;
}

const Skill = ({ title, value }: SkillProps) => {

  const valueRef = useRef<HTMLDivElement>(null);

  const handleAnimation = (valueRef: React.RefObject<HTMLDivElement>, value: number): void => {
    let width: number = 0;
    const valueDiv = valueRef.current as HTMLDivElement;

    const interval = setInterval(() => {

      if (width === value) {
        clearInterval(interval);
      }

      valueDiv.style.width = `${width++}%`;
    }, 18);
  }

  const handleIntersect = useCallback((entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    if (entries[0].isIntersecting) {
      handleAnimation(valueRef, value);
    }
  }, [value]);

  useEffect(() => {
    const skillSection = document.querySelector('#skills') as HTMLElement;
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    }
    
    const observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(skillSection);
  }, [handleIntersect]);

  return (
    <div className={styles.skill}>
      <h3 className={styles.skill__title}>{title}</h3>
      <div className={styles.skill__desc}>
        <div className={styles.skill__bar}>
          <div ref={valueRef} className={styles.skill__value}></div>
        </div>
        <span>{value}%</span>
      </div>
    </div> 
  )
};

export default Skill;