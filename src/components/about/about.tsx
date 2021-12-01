import styles from './about.module.css';

const About = (): JSX.Element => (
  <section id={styles.about}>
    <h1 className={styles.title}>ABOUT ME</h1>
    <p className={styles.title_desc}>
      이곳은 about 섹션을 설명하는 곳입니다.<br />
      이곳은 about 섹션을 설명하는 곳입니다. 이곳은 about 섹션을 설명하는 곳입니다.
    </p>
    <div className={styles.container}>
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
  </section>
);

export default About;