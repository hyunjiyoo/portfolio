import styles from './testimonial.module.css';
import { testimonial__info } from './testimonials';

interface TestimonialProp {
  key: string;
  person: testimonial__info;
}

const Testimonial = ({ person }: TestimonialProp):JSX.Element => {
  const { name, img, text, company, position } = person;

  const rightStyle = (position?: 'R') => {
    return position && styles.right;
  }

  return (
    <div className={styles.testimonial}>
      <img className={`${styles.testimonial__img} ${rightStyle(position)}`} src={img} alt="" />
      <div className={styles.contents}>
        <p>{text}</p>
        <img src={company} alt="kirbs__logo" />
        <span>{name}</span>
      </div>
    </div>
  )
};

export default Testimonial;