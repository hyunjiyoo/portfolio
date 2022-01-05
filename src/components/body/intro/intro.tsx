import styles from './intro.module.css';

interface IntroProps {
  activeEffect: (target: HTMLElement) => void;
}

const Intro = ({activeEffect}: IntroProps): JSX.Element => {

  const moveContactSection = () => {
    const contact = document.querySelector('#contact') as HTMLElement;
    const contactNavItem = document.querySelector(`[data-link="#contact"]`) as HTMLLIElement;

    contact.scrollIntoView({behavior: 'smooth'});
    activeEffect(contactNavItem);
  }

  return (
    <section id="intro" className={`${styles.intro} container`}>
      <div className={styles.contents}>
        <span className={styles.span}>___ Hello Hyunji World!</span>
        <h1 className={styles.title}>
          FRONT-END<br/>
          DEVELOPER,<br/>
          who have good habits.
        </h1>
        <button className={styles.button} onClick={moveContactSection}>CONTACT ME</button>
      </div>
      <img className={styles.img} src="/images/profile.png" alt="profile" />
    </section>
  )
};

export default Intro;