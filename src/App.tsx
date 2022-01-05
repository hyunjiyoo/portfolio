import styles from './app.module.css';
import Navbar from './components/navbar/navbar';
import Body from './components/body/body';
import Footer from './components/footer/footer';

const App = (): JSX.Element => {
  
  const activeEffect = (target: HTMLElement) => {
    const prevTarget = document.querySelector('.active') as HTMLLIElement;
    prevTarget.classList.remove('active');
    target.classList.add('active');
  }

  return (
    <div className={styles.container}>
      <Navbar activeEffect={activeEffect} />
      <Body activeEffect={activeEffect}/>
      <Footer />
    </div>
  )
};

export default App;
