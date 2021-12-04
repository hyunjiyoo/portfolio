import styles from './intro.module.css';

const Intro = (): JSX.Element => (
  <section id={styles.intro} className={styles.section}>
    <div className={styles.contents}>
      <span className={styles.span}>___ Hello Hyunji World!</span>
      <h1 className={styles.title}>
        FRONT-END<br/>
        DEVELOPER,<br/>
        who have good habits.
      </h1>
      <button className={styles.button}>CONTACT ME</button>
    </div>
    <img className={styles.img} src="/images/profile.png" alt="profile" />
  </section>
);

export default Intro;