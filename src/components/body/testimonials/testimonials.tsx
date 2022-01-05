import { Title } from '../shared/title/title';
import Testimonial from './testimonial';
import styles from './testimonials.module.css';
import { SectionKeyType } from '../../../db/dataStructure';
import { testimonials } from '../../../db/testimonial';

const SECTION_KEY: SectionKeyType = "testimonials";

const Testimonials = () => (
  <section id="testimonials" className={styles.testimonials}>
    <Title id={SECTION_KEY} />
    <div className={`container ${styles.testimonialset}`}>
      {
        Object.keys(testimonials).map((key: string) => (
          <Testimonial key={key} person={testimonials[key]} />
        ))
      }
    </div>
  </section>
);

export default Testimonials;