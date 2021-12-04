import Title from '../shared/title/title';
import styles from './about.module.css';

const About = (): JSX.Element => (
  <section id={styles.about}>
    <Title 
      title="ABOUT ME" 
      description="여기는 about 설명구간입니다." 
      position="R"
    />
    <div className="container">
      <div className={styles.items}>
        <div className={styles.item}>
          <div className={styles.subject}>FRONT END</div>
          <p className={styles.description}>HTML, CSS, Javascript, React, Typescript</p>
        </div>

        <div className={styles.item}>
          <div className={styles.subject}>INFRA</div>
          <p className={styles.description}>Docker</p>
        </div>

        <div className={styles.item}>
          <div className={styles.subject}>BACK END</div>
          <p className={styles.description}>Nodejs, Python</p>
        </div>

        <div className={styles.item}>
          <div className={styles.subject}>DESIGN</div>
          <p className={styles.description}>Photoshop, Illustrator</p>
        </div>
      </div>
      <div className={styles.kirbs}>
        <img className={styles.kirbs_logo} src="/images/kirbs_logo.png" alt="kirbs logo" />
        <div className={styles.career}>웹 풀스택 개발 | 2019.08 ~ 2021.01 (약 1년 6개월)</div>
      </div>
    </div>
  </section>
);

export default About;