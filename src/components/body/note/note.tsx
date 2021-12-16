import React from 'react'
import {v4 as uuidv4} from 'uuid'
import { Title } from '../shared/title/title';
import { SectionKeyType } from '../../../db/title';
import styles from './note.module.css';
import { useRef } from 'react';
import { getTypes, getImgByType, getAllImg } from '../../../db/note';

const SECTION_KEY: SectionKeyType = "note";

const menus: string[] = getTypes();
console.log(getImgByType('React'));

const Note = (): JSX.Element => {

  const imgRef = useRef<HTMLDivElement>(null);

  // ref를 배열형태로 변경해서 리팩토링 시도 예정
  const onShowNote = (event: React.MouseEvent<HTMLLIElement>) => {
    
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
        <ul className={styles.tab_menu}>
          <li className={`${styles.tab_item} ${styles.active}`} onClick={onShowNote}>All</li>
          {
            menus.map((menu: string) => (
              <li key={uuidv4()} className={styles.tab_item} onClick={onShowNote}>{menu}</li>
            ))
          }
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
            {
              getAllImg().map(img => (
                <img key={uuidv4()} src={img.src} alt={img.alt} data-sep={img.sep} />
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
};

export default Note;