import Navbar from './components/navbar/navbar';
import styles from './app.module.css';
import Home from './components/home/home';
import About from './components/about/about';

function App(): JSX.Element {
  return (
    <div className={styles.container}>
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
