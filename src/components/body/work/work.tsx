import { Title } from '../shared/title/title';
import Project from './project';
import styles from './work.module.css';
import { SectionKeyType } from '../../../db/dataStructure';
import { works } from '../../../db/work';
import {v4 as uuidv4} from 'uuid'

const SECTION_KEY: SectionKeyType = "work";

const Work = (): JSX.Element => {
  
  return (
    <section id="work" className={styles.work}>
      <Title id={SECTION_KEY} />
      <div className={`container ${styles.workset}`}>
        <div className={styles.projects}>
          {
            works.map(project => (
              <Project key={uuidv4()} project={project} />
            ))
          }
        </div>
      </div>
    </section> 
  )
};

export default Work;