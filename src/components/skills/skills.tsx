import styles from './skills.module.css';

const Skills = (): JSX.Element => (
  <section id={styles.skills}>
    <h1 className={styles.title}>SKILLS</h1>
    <p className={styles.title__desc}>
      이곳은 skills 섹션을 설명하는 곳입니다.<br />
      이곳은 skills 섹션을 설명하는 곳입니다. 이곳은 skills 섹션을 설명하는 곳입니다.
    </p>
    <div className={styles.skillset}>
      <div className={styles.skillset__left}>
        <h2 className={styles.skillset__frontend}>Front-end</h2>
        
        <div className={styles.skill}>
          <h3 className={styles.skill__title}>CSS</h3>
          <div className={styles.skill__desc}>
            <div className={styles.skill__bar}>
              <div className={styles.skill__value}></div>
            </div>
            <span>99%</span>
          </div>
        </div>

        <div className={styles.skill}>
          <h3 className={styles.skill__title}>Javascript</h3>
          <div className={styles.skill__desc}>
            <div className={styles.skill__bar}>
              <div className={styles.skill__value}></div>
            </div>
            <span>99%</span>
          </div>
        </div>

        <div className={styles.skill}>
          <h3 className={styles.skill__title}>React</h3>
          <div className={styles.skill__desc}>
            <div className={styles.skill__bar}>
              <div className={styles.skill__value}></div>
            </div>
            <span>99%</span>
          </div>
        </div>

        <div className={styles.skill}>
          <h3 className={styles.skill__title}>Typescript</h3>
          <div className={styles.skill__desc}>
            <div className={styles.skill__bar}>
              <div className={styles.skill__value}></div>
            </div>
            <span>99%</span>
          </div>
        </div>

      </div>
      <div className={styles.skillset__right}>
        <div className={styles.skillset__backend}>
          <h2>Back-end</h2>

          <div className={styles.skill}>
          <h3 className={styles.skill__title}>Nodejs</h3>
          <div className={styles.skill__desc}>
            <div className={styles.skill__bar}>
              <div className={styles.skill__value}></div>
            </div>
            <span>99%</span>
          </div>

          <div className={styles.skill}>
          <h3 className={styles.skill__title}>Python</h3>
          <div className={styles.skill__desc}>
            <div className={styles.skill__bar}>
              <div className={styles.skill__value}></div>
            </div>
            <span>99%</span>
          </div>
        </div>

        </div>
        </div>
        <div className={styles.skillset__infra}>
          <h2>Infra</h2>

          <div className={styles.skill}>
          <h3 className={styles.skill__title}>Docker</h3>
          <div className={styles.skill__desc}>
            <div className={styles.skill__bar}>
              <div className={styles.skill__value}></div>
            </div>
            <span>99%</span>
          </div>
        </div>
        </div>
      </div>
    </div>

  </section>
);

export default Skills;