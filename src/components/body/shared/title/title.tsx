import styles from './title.module.css';

interface TitleProps {
  title: string;
  description: string;
  position: 'L' | 'R';
}

const Title = ({ title, description, position }: TitleProps) => (
  <div className={`container ${position === 'R' ? styles.right : styles.left}`}>
    <h1 className={styles.title}>{title}</h1>
    <p className={styles.description}>{description}</p>
  </div>
);

export default Title;