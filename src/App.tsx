import Navbar from './components/navbar/navbar';
import styles from './app.module.css';
import Home from './components/home/home';
import About from './components/about/about';
import Footer from './components/footer/footer';

function App(): JSX.Element {
  return (
    <div className={styles.container}>
      <Navbar />
      <Home />
      <About />
      <Footer />
    </div>
  );
}

export default App;
