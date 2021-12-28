import { Title } from '../shared/title/title';
import Skill from './skill';
import styles from './skills.module.css';
import { SectionKeyType } from '../../../db/dataStructure';

const SECTION_KEY: SectionKeyType = "skills";

const Skills = (): JSX.Element => (
  <section id="skills" className={styles.skills}>
    <Title id={SECTION_KEY} />
    <div className={`container ${styles.skillset}`}>
      <div className={styles.skillset__left}>
        <h2 className={styles.skillset__frontend}>Front-end</h2>
        <Skill title="CSS" value={99} />
        <Skill title="Javascript" value={95} />
        <Skill title="React" value={85} />
        <Skill title="Typescript" value={80} />
      </div>

      <div className={styles.skillset__right}>
        <div className={styles.skillset__backend}>
          <h2>Back-end</h2>
          <Skill title="Nodejs" value={80} />
          <Skill title="Python" value={90} />
        </div>
        
        <div className={styles.skillset__infra}>
          <h2>Infra</h2>
          <Skill title="Docker" value={90} />
        </div>
      </div>
    </div>
  </section>
);

export default Skills;