import Navbar from './components/navbar/navbar';
import styles from './app.module.css';
import Intro from './components/body/intro/intro';
import About from './components/body/about/about';
import Note from './components/note/note';
import Footer from './components/footer/footer';
import Skills from './components/skills/skills';
import Work from './components/work/work';
import Contact from './components/contact/contact';
import Social from './components/social/social';
import Testimonials from './components/testimonials/testimonials';
import Divider from './components/divider/divider';

function App(): JSX.Element {
  return (
    <div className={styles.container}>
      <Navbar />
      <Intro /><Divider />
      <About /><Divider />
      <Note /><Divider />
      <Skills /><Divider />
      <Work />
      <Testimonials />
      <Contact />
      <Social />
      <Footer />
    </div>
  );
}

export default App;
