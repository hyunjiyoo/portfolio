import { Title } from '../shared/title/title';
import { SectionKeyType } from '../../../db/portfolio';
import styles from './note.module.css';
import { useRef } from 'react';

const SECTION_KEY: SectionKeyType = "note";

const Note = (): JSX.Element => {

  const imgRef = useRef<HTMLDivElement>(null);

  const onShowNote = (event: React.MouseEvent<HTMLUListElement>) => {
    const target = event.target as HTMLLIElement;
    const selectedMenu = target.textContent?.toLowerCase();

    const imgList = imgRef.current?.childNodes as NodeListOf<HTMLImageElement>;

    imgList.forEach((img: HTMLImageElement) => {

      if (selectedMenu === 'all') {
        img.style.display = "block";
        return;
      }

      img.style.display = "none";

      const sep = img.dataset.sep;
      
      if (selectedMenu === sep) {
        const selectedImgs = document.querySelectorAll(`img[data-sep=${sep}]`) as NodeListOf<HTMLImageElement>;
        selectedImgs.forEach((img: HTMLImageElement) => {
          img.style.display = "block";
        });
      } 
    });
  }

  return (
    <section id="note" className={styles.note}>
      <Title id={SECTION_KEY} />
      <div className="container">
        <ul className={styles.tab_menu} onClick={onShowNote}>
          <li className={`${styles.tab_item} ${styles.active}`}>All</li>
          <li className={styles.tab_item}>React</li>
          <li className={styles.tab_item}>Typescript</li>
          <li className={styles.tab_item}>Nodejs</li>
          <li className={styles.tab_item}>Algorithm</li>
        </ul>
        <div className={styles.contents}>
          <div className={styles.contents_img}>
            <a className={styles.link} href="https://hjyooo.notion.site/Dream-Coding-92e6b3a0f6e04c9cb2cf7eae5ef0f2b4" target="blank">
              <img className={styles.notion} src="https://cdn.iconscout.com/icon/free/png-256/notion-1693557-1442598.png" alt="" />
              <p>Notion Note Link 🔗</p>
            </a>
            <img className={styles.main_img} src="https://picsum.photos/800/400" alt="note" />
          </div>
          <div ref={imgRef} className={styles.contents_img_list}>
            <img src="https://picsum.photos/seed/asdf/120/100" alt="note list" data-sep="react" />
            <img src="https://picsum.photos/seed/wer/120/100" alt="note list" data-sep="react" />
            <img src="https://picsum.photos/seed/wte/120/100" alt="note list" data-sep="react" />
            <img src="https://picsum.photos/seed/vdsf/120/100" alt="note list" data-sep="react" />
            <img src="https://picsum.photos/seed/wergg/120/100" alt="note list" data-sep="react" />
            <img src="https://picsum.photos/seed/etdg/120/100" alt="note list" data-sep="react" />
            <img src="https://picsum.photos/seed/gdag/120/100" alt="note list" data-sep="react" />
            <img src="https://picsum.photos/seed/hhdf/120/100" alt="note list" data-sep="react" />
            <img src="https://picsum.photos/seed/te/120/100" alt="note list" data-sep="react" />
            <img src="https://picsum.photos/seed/wq/120/100" alt="note list" data-sep="react" />
            <img src="https://picsum.photos/seed/yfh/120/100" alt="note list" data-sep="react" />

            <img src="https://picsum.photos/seed/ss/120/100" alt="note list" data-sep="typescript" />
            <img src="https://picsum.photos/seed/ss/120/100" alt="note list" data-sep="typescript" />
            <img src="https://picsum.photos/seed/ss/120/100" alt="note list" data-sep="typescript" />
            <img src="https://picsum.photos/seed/ss/120/100" alt="note list" data-sep="typescript" />
            <img src="https://picsum.photos/seed/ss/120/100" alt="note list" data-sep="typescript" />
            <img src="https://picsum.photos/seed/ss/120/100" alt="note list" data-sep="typescript" />
            <img src="https://picsum.photos/seed/ss/120/100" alt="note list" data-sep="typescript" />
            <img src="https://picsum.photos/seed/ss/120/100" alt="note list" data-sep="typescript" />
            <img src="https://picsum.photos/seed/ss/120/100" alt="note list" data-sep="typescript" />

            <img src="https://picsum.photos/seed/aa/120/100" alt="note list" data-sep="nodejs" />
            <img src="https://picsum.photos/seed/aa/120/100" alt="note list" data-sep="nodejs" />
            <img src="https://picsum.photos/seed/aa/120/100" alt="note list" data-sep="nodejs" />
            <img src="https://picsum.photos/seed/aa/120/100" alt="note list" data-sep="nodejs" />
            <img src="https://picsum.photos/seed/aa/120/100" alt="note list" data-sep="nodejs" />
            <img src="https://picsum.photos/seed/aa/120/100" alt="note list" data-sep="nodejs" />
            <img src="https://picsum.photos/seed/aa/120/100" alt="note list" data-sep="nodejs" />
            <img src="https://picsum.photos/seed/aa/120/100" alt="note list" data-sep="nodejs" />
            <img src="https://picsum.photos/seed/aa/120/100" alt="note list" data-sep="nodejs" />
            <img src="https://picsum.photos/seed/aa/120/100" alt="note list" data-sep="nodejs" />

            
            <img src="https://picsum.photos/seed/svd/120/100" alt="note list" data-sep="algorithm" />
            <img src="https://picsum.photos/seed/svd/120/100" alt="note list" data-sep="algorithm" />
            <img src="https://picsum.photos/seed/svd/120/100" alt="note list" data-sep="algorithm" />
            <img src="https://picsum.photos/seed/svd/120/100" alt="note list" data-sep="algorithm" />
            <img src="https://picsum.photos/seed/svd/120/100" alt="note list" data-sep="algorithm" />
            <img src="https://picsum.photos/seed/svd/120/100" alt="note list" data-sep="algorithm" />
            <img src="https://picsum.photos/seed/svd/120/100" alt="note list" data-sep="algorithm" />
            <img src="https://picsum.photos/seed/svd/120/100" alt="note list" data-sep="algorithm" />

            
          </div>
        </div>
      </div>
    </section>
  )
};

export default Note;