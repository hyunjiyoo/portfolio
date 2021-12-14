import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './career.module.css';

const Career = () => (
  <div className={styles.container}>
    <div className={styles.title}>
      <span className={styles.decoration}>✔️</span>
      <img className={styles.logo} src="/images/kirbs_logo.png" alt="kirbs__logo" />
    </div>
    <div className={styles.contents}>
      <p>[기간] 2019.08 ~ 2021.01 (약 1년 6개월)</p>
      <p>[업무] 기존 시스템 유지보수 및 신규 프로젝트 개발</p>
    </div>
    <a 
      className={styles.icon} 
      href="https://hjyooo.notion.site/3635ae9f47f04b57ba4731d828de225d" 
      target="_blank" 
      rel="noreferrer"
    >
      <FontAwesomeIcon className={styles.icon__link} icon={faLink} />
    </a>
  </div>
);

export default Career