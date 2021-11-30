import Navbar from './components/navbar/navbar';
import styles from './app.module.css';
import Home from './components/home/home';

function App(): JSX.Element {
  return (
    <div className={styles.container}>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
