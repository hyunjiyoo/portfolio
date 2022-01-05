import { Title } from '../shared/title/title';
import Testimonial from './testimonial';
import styles from './testimonials.module.css';
import { SectionKeyType } from '../../../db/dataStructure';

const SECTION_KEY: SectionKeyType = "testimonials";

export type testimonial__info = {
  name: string;
  img: string;
  text: string;
  company: string;
  position?: 'R';
}

const testimonials:Record<string, testimonial__info> = {
  // '1': {
  //   name: '',
  //   img: 'https://picsum.photos/seed/paoppps/150/150',
  //   text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat voluptatibus, illo iure saepe, quaerat quia ab quam iusto error nesciunt architecto at libero explicabo odit. Temporibus voluptas ipsum omnis eius.',
  //   company: '/images/kirbs_logo.png',
  // },
  '1': {
    name: '유원상 검색엔진팀',
    img: '/images/testimonials/ws_profile.png',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat voluptatibus, illo iure saepe, quaerat quia ab quam iusto error nesciunt architecto at libero explicabo odit. Temporibus voluptas ipsum omnis eius.',
    company: '/images/testimonials/naver_logo.png',
    // position: 'L'
  },
};

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