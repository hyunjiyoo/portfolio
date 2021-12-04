import Title from '../title/title';
import Skill from './skill';
import styles from './skills.module.css';

const Skills = (): JSX.Element => (
  <section id={styles.skills} className={styles.section}>
    <Title 
      title="SKILLS"
      description="이곳은 skills 섹션을 설명하는 곳입니다."
      position="R"
    />
    <div className={styles.skillset}>
      <div className={styles.skillset__left}>
        <h2 className={styles.skillset__frontend}>Front-end</h2>
        <Skill title="CSS" value={90} />
        <Skill title="Javascript" value={80} />
        <Skill title="React" value={70} />
        <Skill title="Typescript" value={60} />
      </div>

      <div className={styles.skillset__right}>
        <div className={styles.skillset__backend}>
          <h2>Back-end</h2>
          <Skill title="Nodejs" value={80} />
          <Skill title="Python" value={70} />
        </div>
        
        <div className={styles.skillset__infra}>
          <h2>Infra</h2>
          <Skill title="Docker" value={70} />
        </div>
      </div>
    </div>
  </section>
);

export default Skills;