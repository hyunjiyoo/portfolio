import styles from './project.module.css';

interface ProjectProps {
  title : string;
  description: string;
  imgUrl: string;
  imgAlt: string;
}

const Project = (project: ProjectProps) => {
  const { title, description, imgUrl, imgAlt } = project;

  return (
    <div className={styles.project}>
      <img src={imgUrl} alt={imgAlt} />
      <h3>{title}</h3>
      <hr />
      <p>{description}</p>
    </div>
  )
};

export default Project;