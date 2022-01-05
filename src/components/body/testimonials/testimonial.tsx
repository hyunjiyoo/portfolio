import { testimonial } from '../../../db/dataStructure';
import styles from './testimonial.module.css';

interface TestimonialProp {
  key: string;
  person: testimonial;
}

const Testimonial = ({ person }: TestimonialProp):JSX.Element => {
  const { name, img, text, company, position, part } = person;

  const rightStyle = (position?: 'R') => {
    return position && styles.right;
  }

  return (
    <div className={styles.testimonial}>
      <img className={`${styles.img} ${rightStyle(position)}`} src={img} alt="" />
      <div className={styles.contents}>
        <p className={styles.text}>{text}</p>
        <div className={styles.tag}>
          <img className={styles.logo} src={company} alt="kirbs__logo" />
          <span className={styles.name}>{name}</span>
          <span className={styles.part}>{part}</span>
        </div>
      </div>
    </div>
  )
};

export default Testimonial;