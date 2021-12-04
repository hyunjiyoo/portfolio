import Navbar from './components/navbar/navbar';
import styles from './app.module.css';
import Footer from './components/footer/footer';
import Body from './components/body/body';

function App(): JSX.Element {
  return (
    <div className={styles.container}>
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
