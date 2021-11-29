import React from 'react';
import Home from './components/home/home';
import Navbar from './components/navbar/navbar';
import About from './components/about/about';
import styles from './app.module.css';


function App(): JSX.Element {
  return (
    <div className={styles.container}>
      <Home />
      <Navbar />
      <About />
    </div>
  );
}

export default App;
