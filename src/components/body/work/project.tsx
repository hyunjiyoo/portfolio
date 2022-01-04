import { WorkType } from '../../../db/dataStructure';
import styles from './project.module.css';
import {v4 as uuidv4} from 'uuid'

interface ProjectProps {
  project: WorkType;
}

const Project = ({ project }: ProjectProps): JSX.Element => {
  const { title, projectUrl, imgUrl, imgAlt, skillset, color } = project;

  return (
    <a 
      className={`${styles.project} ${getStyle(color)}`}
      href={projectUrl}
      target="_blank"
    >
      <div className={styles.img__container}>
        <img className={styles.img} src={imgUrl} alt={imgAlt} />
      </div>
      <h3>{title}</h3>
      <hr />
      {
        skillset.map((skill: string) => (
          <img key={uuidv4()} className={styles.icon} src={`/images/project/icon/${skill}.png`} alt={skill} />
        ))
      }
      {/* <p>{description}</p> */}
    </a>
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

