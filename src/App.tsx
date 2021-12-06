import Navbar from './components/navbar/navbar';
import styles from './app.module.css';
import Footer from './components/footer/footer';
import Body from './components/body/body';
import { useEffect } from 'react';

function App(): JSX.Element {
  
  useEffect(() => {
    document.addEventListener('scroll', () => {
      const arrow = document.querySelector('#arrow') as HTMLButtonElement;
      const position = window.pageYOffset;
      
      if (position > 100) {
        arrow.style.display = "block";
      } else {
        arrow.style.display = "none";
      }
    });
  });

  return (
    <div className={styles.container}>
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
