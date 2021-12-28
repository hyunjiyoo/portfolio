import { Title } from '../shared/title/title';
import styles from './contact.module.css';
import { SectionKeyType } from '../../../db/dataStructure';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const SECTION_KEY: SectionKeyType = "contact";
const SERVICE_ID = process.env.REACT_APP_EMAIL_SEVICE_ID!;
const TEMPLATE_ID = process.env.REACT_APP_EMAIL_TEMPLATE_ID!;
const USER_ID = process.env.REACT_APP_EMAIL_USER_ID!;

const Contact = (): JSX.Element => {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = formRef.current as HTMLFormElement;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, USER_ID)
      .then((result) => {

          if (result.status === 200) {
            alert('성공적으로 이메일을 보냈습니다.');
          }

      }, (error) => {
          console.info(error.text);
      });

      form.reset();
  };

  return (
    <section id="contact">

      <Title id={SECTION_KEY} />
      
      <div className="container">
        <form ref={formRef} className={styles.form} onSubmit={sendEmail}>

          <div className={styles.info}>
            <div className={styles.name}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="user_name" placeholder="성함을 입력해주세요" required />
            </div>
            <div className={styles.email}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="user_email" placeholder="example@gmail.com"required />
            </div>
            <div className={styles.phone}>
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" name="user_phone" placeholder="010-0000-0000 (형식을 맞춰주세요)" pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}" required />
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
  )
};

export default Contact;