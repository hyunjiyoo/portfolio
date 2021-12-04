import Navbar from './components/navbar/navbar';
import styles from './app.module.css';
import Home from './components/home/home';
import About from './components/about/about';
import Note from './components/note/note';
import Footer from './components/footer/footer';
import Skills from './components/skills/skills';
import Work from './components/work/work';
import Contact from './components/contact/contact';
import Social from './components/social/social';
import Testimonials from './components/testimonials/testimonials';
import Section from './components/section/section';

function App(): JSX.Element {
  return (
    <div className={styles.container}>
      <Navbar />
      <Home /><Section />
      <About /><Section />
      <Note /><Section />
      <Skills /><Section />
      <Work />
      <Testimonials />
      <Contact />
      <Social />
      <Footer />
    </div>
  );
}

export default App;
