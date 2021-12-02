import styles from './skill.module.css';

interface SkillProps {
  title: string;
  value: number;
}

const Skill = ({ title, value }: SkillProps) => (
  <div className={styles.skill}>
    <h3 className={styles.skill__title}>{title}</h3>
    <div className={styles.skill__desc}>
      <div className={styles.skill__bar}>
        <div className={styles.skill__value}></div>
      </div>
      <span>{value}%</span>
    </div>
  </div> 
);

export default Skill;