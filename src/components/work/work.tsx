import Title from '../title/title';
import Project from './project';
import styles from './work.module.css';


const Work = (): JSX.Element => {


  return (
    <section id={styles.about}>
      <Title 
        title="MY WORK" 
        description="여기는 work 설명구간입니다." 
        position="R"
      />
      <div className={styles.container}>
        <div className={styles.categories}>
          <h3 className={`${styles.category} ${styles.active}`}>ALL</h3>
          <h3 className={styles.category}>Front-end</h3>
          <h3 className={styles.category}>Back-end</h3>
        </div>
        <div className={styles.projects}>
          <Project 
            title="P-SEEK"
            description="Nodejs, MySQL, CentOS7...sdafsadfsadfsadfsadfsad"
            imgUrl="https://picsum.photos/seed/aasd/200/150"
            imgAlt="p-seek"
          />

          <Project 
            title="P-SEEK"
            description="Nodejs, MySQL, CentOS7...sdafsadfsadfsadfsadfsad"
            imgUrl="https://picsum.photos/seed/aasd/200/150"
            imgAlt="p-seek"
          />

  <Project 
            title="P-SEEK"
            description="Nodejs, MySQL, CentOS7...sdafsadfsadfsadfsadfsad"
            imgUrl="https://picsum.photos/seed/aasd/200/150"
            imgAlt="p-seek"
          />

  <Project 
            title="P-SEEK"
            description="Nodejs, MySQL, CentOS7...sdafsadfsadfsadfsadfsad"
            imgUrl="https://picsum.photos/seed/aasd/200/150"
            imgAlt="p-seek"
          />

  <Project 
            title="P-SEEK"
            description="Nodejs, MySQL, CentOS7...sdafsadfsadfsadfsadfsad"
            imgUrl="https://picsum.photos/seed/aasd/200/150"
            imgAlt="p-seek"
          />

  <Project 
            title="P-SEEK"
            description="Nodejs, MySQL, CentOS7...sdafsadfsadfsadfsadfsad"
            imgUrl="https://picsum.photos/seed/aasd/200/150"
            imgAlt="p-seek"
          />

        </div>

      </div>
    </section>
  )
};

export default Work;