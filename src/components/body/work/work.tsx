import { Title } from '../shared/title/title';
import Project from './project';
import styles from './work.module.css';

export type Contents = {
  title : string;
  description: string;
  imgUrl: string;
  imgAlt: string;
  color: 'yellow' | 'purple';
}

const Work = (): JSX.Element => {

  // database 로 이동예정
  const projects : Record<string, Contents> = {
    '1': {
      title: 'P-SEEK',
      description: 'Nodejs, MySQL, CentOS7...sdafsadfsadfsadfsadfsad',
      imgUrl: 'https://picsum.photos/seed/aasd/200/150',
      imgAlt: 'p-seek',
      color: 'yellow'
    },
    '2': {
      title: 'P-SEEK22',
      description: 'Nodejs, MySQL, CentOS7...sdafsadfsadfsadfsadfsad',
      imgUrl: 'https://picsum.photos/seed/aasasd/200/150',
      imgAlt: 'p-seek22',
      color: 'purple'
    },
    '3': {
      title: 'P-SEEK22',
      description: 'Nodejs, MySQL, CentOS7...sdafsadfsadfsadfsadfsad',
      imgUrl: 'https://picsum.photos/seed/aeesd/200/150',
      imgAlt: 'p-seek22',
      color: 'yellow'
    },
    '4': {
      title: 'P-SEEK22',
      description: 'Nodejs, MySQL, CentOS7...sdafsadfsadfsadfsadfsad',
      imgUrl: 'https://picsum.photos/seed/tsd/200/150',
      imgAlt: 'p-seek22',
      color: 'purple'
    },
  };

  return (
    <section id="work" className={styles.work}>
      <Title id="work" />
      <div className={`container ${styles.workset}`}>
        <div className={styles.categories}>
          <h3 className={`${styles.category} ${styles.active}`}>All</h3>
          <h3 className={styles.category}>Front-end</h3>
          <h3 className={styles.category}>Back-end</h3>
        </div>
        <div className={styles.projects}>
          {
            Object.keys(projects).map((key) => (
              <Project key={key} project={projects[key]} />
            ))
          }
        </div>

      </div>
    </section> 
  )
};

export default Work;