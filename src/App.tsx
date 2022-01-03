import styles from './app.module.css';
import Navbar from './components/navbar/navbar';
import Body from './components/body/body';
import Footer from './components/footer/footer';

const App = (): JSX.Element => (
  <div className={styles.container}>
    <Navbar />
    <Body />
    <Footer />
  </div>
);

export default App;
