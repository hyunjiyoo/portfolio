import { Title } from '../shared/title/title';
import Project from './project';
import styles from './work.module.css';
import { SectionKeyType } from '../../../db/dataStructure';
import { getAllProjects, getAllCategory } from '../../../controller/work';
import {v4 as uuidv4} from 'uuid'

const SECTION_KEY: SectionKeyType = "work";

const Work = (): JSX.Element => {

  return (
    <section id="work" className={styles.work}>
      <Title id={SECTION_KEY} />
      <div className={`container ${styles.workset}`}>
        <ul className={styles.categories}>
          <li className={`${styles.category} ${styles.active}`}>All</li>
          {
            getAllCategory().map(category => (
              <li className={styles.category}>{category}</li>    
            ))
          }
        </ul>
        <div className={styles.projects}>
          {
            getAllProjects().map(project => (
              <Project key={uuidv4()} project={project} />
            ))
          }
        </div>
      </div>
    </section> 
  )
};

export default Work;