import styles from './project.module.css';
import { Contents } from './work';

interface ProjectProps {
  project: Contents
}

const Project = ({ project }: ProjectProps): JSX.Element => {
  const { title, description, imgUrl, imgAlt, color } = project;

  const colorStyle = (color: 'yellow' | 'purple') => {
    return color === 'yellow' ? styles.yellow : styles.purple;
  }

  return (
      <div className={`${styles.project} ${colorStyle(color)}`}>
      <img src={imgUrl} alt={imgAlt} />
      <h3>{title}</h3>
      <hr />
      <p>{description}</p>
    </div>
  )
};

export default Project;