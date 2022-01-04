import { WorkType } from '../../../db/dataStructure';
import styles from './project.module.css';
import {v4 as uuidv4} from 'uuid'
import { useRef } from 'react';

interface ProjectProps {
  project: WorkType;
}

const Project = ({ project }: ProjectProps): JSX.Element => {
  const { title, description, projectUrl, imgUrl, imgAlt, skillset, color } = project;
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const contentsRef = useRef<HTMLDivElement>(null);

  const handleHover = (isHover: boolean) => {
    const desc = descriptionRef.current as HTMLParagraphElement;
    const contents = contentsRef.current as HTMLDivElement;
    
    if (isHover) {
      contents.style.opacity = "0.1";
      desc.style.display = "block";
    }
    else {
      contents.style.opacity = "1.0";
      desc.style.display = "none";
    }
  }

  return (
    <a 
      className={`${styles.project} ${getStyle(color)}`}
      href={projectUrl}
      rel="noreferrer"
      target="_blank"
      onMouseOver={() => handleHover(true)}
      onMouseOut={() => handleHover(false)}
    >
      <div ref={contentsRef} className={styles.contents}>
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
      </div>
      <p ref={descriptionRef}>{description}</p>
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

