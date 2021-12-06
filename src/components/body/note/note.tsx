import Title from '../shared/title/title';
import styles from './note.module.css';

const Note = (): JSX.Element => (
  <section id="note" className={styles.note}>
    <Title 
      title="MY NOTE" 
      description="여기는 note 설명구간입니다." 
      position="L"
    />
    <div className="container">
      <div className={styles.tab_menu}>
        <h3 className={`${styles.tab_item} ${styles.active}`}>All</h3>
        <h3 className={styles.tab_item}>React</h3>
        <h3 className={styles.tab_item}>Typescript</h3>
        <h3 className={styles.tab_item}>Nodejs</h3>
        <h3 className={styles.tab_item}>Algorithm</h3>
      </div>
      <div className={styles.contents}>
        <div className={styles.contents_img}>
          <a className={styles.link} href="https://hjyooo.notion.site/Dream-Coding-92e6b3a0f6e04c9cb2cf7eae5ef0f2b4" target="blank">
            <img className={styles.notion} src="https://cdn.iconscout.com/icon/free/png-256/notion-1693557-1442598.png" alt="" />
            <p>Notion Note Link 🔗</p>
          </a>
          <img className={styles.main_img} src="https://picsum.photos/500/300" alt="note" />
        </div>
        <div className={styles.contents_img_list}>
          <img src="https://picsum.photos/seed/asdf/120/100" alt="note list" />
          <img src="https://picsum.photos/seed/ss/120/100" alt="note list" />
          <img src="https://picsum.photos/seed/aa/120/100" alt="note list" />
          <img src="https://picsum.photos/seed/svd/120/100" alt="note list" />
          <img src="https://picsum.photos/seed/wer/120/100" alt="note list" />
          <img src="https://picsum.photos/seed/wte/120/100" alt="note list" />
          <img src="https://picsum.photos/seed/vdsf/120/100" alt="note list" />
          <img src="https://picsum.photos/seed/wergg/120/100" alt="note list" />
          <img src="https://picsum.photos/seed/etdg/120/100" alt="note list" />
          <img src="https://picsum.photos/seed/gdag/120/100" alt="note list" />
          <img src="https://picsum.photos/seed/hhdf/120/100" alt="note list" />
          <img src="https://picsum.photos/seed/te/120/100" alt="note list" />
          <img src="https://picsum.photos/seed/wq/120/100" alt="note list" />
          <img src="https://picsum.photos/seed/yfh/120/100" alt="note list" />

        </div>
      </div>
    </div>
  </section>
);

export default Note;