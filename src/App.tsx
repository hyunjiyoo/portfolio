import Navbar from './components/navbar/navbar';
import styles from './app.module.css';
import Home from './components/home/home';
import About from './components/about/about';
import Note from './components/note/note';
import Footer from './components/footer/footer';

function App(): JSX.Element {
  return (
    <div className={styles.container}>
      <Navbar />
      <Home />
      <About />
      <Note />
      <Footer />
    </div>
  );
}

export default App;
