import Intro from './intro/intro';
import About from './about/about';
import Note from './note/note';
import Skills from './skills/skills';
import Work from './work/work';
import Contact from './contact/contact';
import Social from './social/social';
import Testimonials from './testimonials/testimonials';
import Divider from './divider/divider';

const Body = () => (
  <>
    <Intro /><Divider />
    <About /><Divider />
    <Note /><Divider />
    <Skills /><Divider />
    <Work /><Divider />
    <Testimonials />
    <Contact />
    <Social />
  </>
);

export default Body;