import { useRef } from "react";
import styles from "./career.module.css";
import { BiLinkExternal } from 'react-icons/bi';

const Career = () => {
  const aRef = useRef<HTMLAnchorElement>(null);

  const gotoResume = () => {
    const link = aRef.current as HTMLElement;
    link.click();
  }

  return (
    <div className={styles.container}>
      <div className={styles.logo__wrapper}>
        <img
          className={styles.logo}
          src="/images/career/kirbs_logo.png"
          alt="kirbs__logo"
        />
        <img
          className={styles.logo}
          src="/images/career/yogiyo_logo.png"
          alt="yogiyo__logo"
        />
      </div>
      <div className={styles.resume}>
        <p onClick={gotoResume}>Go to resume</p>
        <a
          ref={aRef}
          className={styles.icon}
          href="https://bit.ly/3VxlCE6"
          target="_blank"
          rel="noreferrer"
        >
          <BiLinkExternal className={styles.icon__link} />
        </a>
      </div>
    </div>
  );
};

export default Career;
