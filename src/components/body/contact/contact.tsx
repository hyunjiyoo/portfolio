import { Title } from '../shared/title/title';
import styles from './contact.module.css';
import { SectionKeyType } from '../../../db/dataStructure';

const SECTION_KEY: SectionKeyType = "contact";

const Contact = (): JSX.Element => (
  <section id="contact">

    <Title id={SECTION_KEY} />
    
    <div className="container">
      <form className={styles.form}>

        <div className={styles.info}>
          <div className={styles.name}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="user_name" placeholder="성함을 입력해주세요"/>
          </div>
          <div className={styles.email}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="user_email" placeholder="이메일을 입력해주세요" />
          </div>
        </div>
        
        <div className={styles.message}>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={10} placeholder="메세지를 입력해주세요" />  
        </div>
        
        <input className={styles.button} type="submit" value="Send" />
      </form>

    </div>
  </section>
);

export default Contact;