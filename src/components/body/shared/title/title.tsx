import styles from './title.module.css';
import { SectionKeyType } from '../../../../db/dataStructure';
import { getTitle } from '../../../../db/title';
interface TitleProps {
  readonly id: SectionKeyType;
}

export const Title = ({ id }: TitleProps) => {
  const { name, description, position } = getTitle(id);

  return (
    <div className={`container ${position === 'R' ? styles.right : styles.left}`}>
      <h1 className={styles.title}>{name}</h1>
      <p className={styles.description}>{description}</p>
    </div>
  )
};

export default Title;