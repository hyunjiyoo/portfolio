import Title from '../shared/title/title';
import styles from './about.module.css';

const About = (): JSX.Element => (
  <section id="about" className={styles.about}>
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
    </div>
  </section>
);

export default About;