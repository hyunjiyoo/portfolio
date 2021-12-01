import styles from './note.module.css';

const Note = (): JSX.Element => (
  <section id={styles.note}>
    <h1 className={styles.title}>MY NOTE</h1>
    <p className={styles.title_desc}>
      이곳은 note 섹션을 설명하는 곳입니다.<br />
      이곳은 note 섹션을 설명하는 곳입니다. 이곳은 note 섹션을 설명하는 곳입니다.
    </p>
    <div className={styles.container}>
      <div className={styles.tab_menu}>
        <div className={`${styles.tab_item} ${styles.active}`}>All</div>
        <div className={styles.tab_item}>React</div>
        <div className={styles.tab_item}>Typescript</div>
        <div className={styles.tab_item}>Nodejs</div>
        <div className={styles.tab_item}>Algorithm</div>
      </div>
      <div className={styles.contents}>
        <div className={styles.contents_img}>
          {/* notion link */}
          <img src="https://picsum.photos/500/300" alt="note" />
          {/* arrow */}
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