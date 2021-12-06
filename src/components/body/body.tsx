import Intro from './intro/intro';
import About from './about/about';
import Note from './note/note';
import Skills from './skills/skills';
import Work from './work/work';
import Contact from './contact/contact';
import Social from './social/social';
import Testimonials from './testimonials/testimonials';
import Divider from './divider/divider';
import './shared/common.css';

const Body = () => (
  <>
    <Intro /><Divider gradient="asc" />
    <About /><Divider gradient="desc" />
    <Note /><Divider gradient="asc" />
    <Skills /><Divider gradient="desc" />
    <Work /><Divider gradient="asc" />
    <Testimonials /><Divider gradient="desc" />
    <Contact />
    <Social />
  </>
);

export default Body;