import { Title } from '../shared/title/title';
import Project from './project';
import styles from './work.module.css';
import { SectionKeyType } from '../../../db/dataStructure';
import { works } from '../../../db/work';

const SECTION_KEY: SectionKeyType = "work";

const Work = (): JSX.Element => {

  return (
    <section id="work" className={styles.work}>
      <Title id={SECTION_KEY} />
      <div className={`container ${styles.workset}`}>
        <div className={styles.categories}>
          <h3 className={`${styles.category} ${styles.active}`}>All</h3>
          <h3 className={styles.category}>Front-end</h3>
          <h3 className={styles.category}>Back-end</h3>
        </div>
        <div className={styles.projects}>
          {
            Object.keys(works).map((key) => (
              <Project key={key} project={works[key]} />
            ))
          }
        </div>

      </div>
    </section> 
  )
};

export default Work;