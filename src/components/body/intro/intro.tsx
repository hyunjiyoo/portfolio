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
        <span className={styles.span}>홍익인간의 정신으로</span>
        <h1 className={styles.title}>
          널리 세상을 이롭게 하고 싶은 <br />
          프론트엔드 개발자 <br />
          유현지입니다
        </h1>
        <button className={styles.button} onClick={moveContactSection}>CONTACT ME</button>
      </div>
      <img className={styles.img} src="/images/profile.png" alt="profile" />
    </section>
  )
};

export default Intro;