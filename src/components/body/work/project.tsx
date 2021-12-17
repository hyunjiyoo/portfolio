import { WorkType } from '../../../db/dataStructure';
import styles from './project.module.css';

interface ProjectProps {
  project: WorkType;
}

const Project = ({ project }: ProjectProps): JSX.Element => {
  const { title, description, imgUrl, imgAlt, color } = project;

  return (
      <div className={`${styles.project} ${getStyle(color)}`}>
      <img src={imgUrl} alt={imgAlt} />
      <h3>{title}</h3>
      <hr />
      <p>{description}</p>
    </div>
  )
};

export default Project;

const getStyle = (color: WorkType["color"]) => {
  switch(color) {
    case 'yellow':
      return styles.yellow;
    case 'purple':
      return styles.purple;
    default:
      throw new Error(`unknown color: ${color}`);
  }
}