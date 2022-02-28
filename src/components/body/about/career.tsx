import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef } from 'react';
import styles from './career.module.css';

const Career = () => {

  const aRef = useRef<HTMLAnchorElement>(null);

  const clickLink = () => {
    const link = aRef.current as HTMLElement;
    link.click();
  }

  return (
    <div className={styles.container} onClick={clickLink}>
      <div className={styles.title}>
        <span className={styles.decoration}>✔️</span>
        <img className={styles.logo} src="/images/kirbs_logo.png" alt="kirbs__logo" />
      </div>
      <div className={styles.contents}>
        <p>[기간] 2019.08 ~ 2021.01 (약 1년 6개월)</p>
        <p>[업무] 기존 시스템 유지보수 및 신규 프로젝트 개발</p>
      </div>
      <a 
        ref={aRef}
        className={styles.icon} 
        href="https://www.notion.so/hjyooo/b77e2ecdc3d64b9ba673acec984a1815" 
        target="_blank" 
        rel="noreferrer"
      >
        <FontAwesomeIcon className={styles.icon__link} icon={faLink} />
      </a>
    </div>
  )
};

export default Career