import Intro from './intro/intro';
import About from './about/about';
import Note from './note/note';
import Skills from './skills/skills';
import Work from './work/work';
import Contact from './contact/contact';
import Testimonials from './testimonials/testimonials';
import Divider from './divider/divider';
import Arrow from './arrow/arrow';
import './shared/common.css';

interface BodyProps {
  activeEffect: (target: HTMLElement) => void;
}

const Body = ({activeEffect}: BodyProps) => (
  <>
    <Intro activeEffect={activeEffect} /><Divider gradient="asc" />
    <About /><Divider gradient="desc" />
    <Note /><Divider gradient="asc" />
    <Skills /><Divider gradient="desc" />
    <Work /><Divider gradient="asc" />
    <Testimonials /><Divider gradient="desc" />
    <Contact />
    <Arrow activeEffect={activeEffect} />
  </>
);

export default Body;