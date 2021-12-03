import styles from './home.module.css';

const Home = (): JSX.Element => (
  <section id={styles.home}>
    <aside id={styles.home__container} className={styles.section}>
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
    </aside>
  </section>
);

export default Home;