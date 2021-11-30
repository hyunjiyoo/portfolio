import Navbar from './components/navbar/navbar';
import styles from './app.module.css';

function App(): JSX.Element {
  return (
    <div className={styles.container}>
      <Navbar />
    </div>
  );
}

export default App;
