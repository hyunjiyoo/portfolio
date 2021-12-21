import { Title } from '../shared/title/title';
import Project from './project';
import styles from './work.module.css';
import { SectionKeyType, WorkCategoryType, WorkType } from '../../../db/dataStructure';
import { getAllProjects, getAllCategory, getProjectByCategory } from '../../../controller/work';
import {v4 as uuidv4} from 'uuid'
import { useState } from 'react';

const SECTION_KEY: SectionKeyType = "work";
const categories = getAllCategory();

const Work = (): JSX.Element => {
  const [projects, setProjects] = useState<WorkType[]>(getAllProjects());
  const [activeTarget, setActiveTarget] = useState<(WorkCategoryType | 'All')>('All');

  const onCategory = <T extends HTMLElement>(event: React.MouseEvent<T>) => {
    const target = event.target as T;
    const category = target.textContent as (WorkCategoryType & 'All');

    setProjects(() => {
      let updated: WorkType[];

      if (category === 'All') {
        updated = getAllProjects();
      }
      else {
        updated = getProjectByCategory(category);
      }

      return updated;
    });

    setActiveTarget(category);
  }

  const getStyle = (category: WorkCategoryType | 'All') => {
    let classList = styles.category;

    if (activeTarget === category) {
      classList += ` ${styles.active}`;
    }

    return classList;
  }
  
  return (
    <section id="work" className={styles.work}>
      <Title id={SECTION_KEY} />
      <div className={`container ${styles.workset}`}>
        <ul className={styles.categories}>
          <li className={getStyle('All')} onClick={onCategory}>All</li>
          {
            categories.map(category => (
              <li key={uuidv4()} className={getStyle(category)} onClick={onCategory}>{category}</li>    
            ))
          }
        </ul>
        <div className={styles.projects}>
          {
            projects.map(project => (
              <Project key={uuidv4()} project={project} />
            ))
          }
        </div>
      </div>
    </section> 
  )
};

export default Work;