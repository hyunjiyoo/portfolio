import { useEffect, useRef } from 'react';
import styles from './skill.module.css';

interface SkillProps {
  title: string;
  value: number;
}

const Skill = ({ title, value }: SkillProps) => {

  let loading: boolean = false;
  const valueRef = useRef<HTMLDivElement>(null);

  const valueBarAnimation = () => {
    let width: number = 0;
    const valueDiv = valueRef.current as HTMLDivElement;

    const interval = setInterval(() => {

      if (width === value) {
        loading = false;
        clearInterval(interval);
      }

      valueDiv.style.width = `${width++}%`;
    }, 18);
  }

  
  useEffect(() => {
    const skillSection = document.querySelector('#skills') as HTMLElement;

    window.addEventListener('scroll', () => {

      const enterToArea = window.scrollY + window.innerHeight > skillSection.offsetTop;

      if (!loading && enterToArea) {
        loading = true;
        valueBarAnimation();
      }
    });

  }, []);

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