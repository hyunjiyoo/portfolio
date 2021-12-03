import Title from '../title/title';
import Testimonial from './testimonial';
import styles from './testimonials.module.css';

export type testimonial__info = {
  name: string;
  img: string;
  text: string;
  company: string;
  position?: 'R';
}

const testimonials:Record<string, testimonial__info> = {
  '1': {
    name: '서상덕 이사',
    img: 'https://picsum.photos/seed/paoppps/150/150',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat voluptatibus, illo iure saepe, quaerat quia ab quam iusto error nesciunt architecto at libero explicabo odit. Temporibus voluptas ipsum omnis eius.',
    company: '/images/kirbs_logo.png',
  },
  '2': {
    name: '서상덕 이사',
    img: 'https://picsum.photos/seed/awqq/150/150',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat voluptatibus, illo iure saepe, quaerat quia ab quam iusto error nesciunt architecto at libero explicabo odit. Temporibus voluptas ipsum omnis eius.',
    company: '/images/kirbs_logo.png',
    position: 'R'
  },
};

const Testimonials = () => (
  <section id={styles.testimonials} className={styles.section}>
    <Title 
      title="TESTIMONIALS" 
      description="여기는 testimonials 설명구간입니다." 
      position="R"
    />
    <div className={styles.testimonials}>
      {
        Object.keys(testimonials).map((key: string) => (
          <Testimonial key={key} person={testimonials[key]} />
        ))
      }
    </div>
  </section>
);

export default Testimonials;