import React from 'react'
import {v4 as uuidv4} from 'uuid'
import { Title } from '../shared/title/title';
import { SectionKeyType } from '../../../db/dataStructure';
import styles from './note.module.css';
import { useRef } from 'react';
import { NoteCategoryType } from '../../../db/dataStructure';
import { getTypes, getAllImg } from '../../../controller/note';
import { onCategory } from '../shared/common';

const SECTION_KEY: SectionKeyType = "note";

const menus: NoteCategoryType[] = getTypes();

const Note = (): JSX.Element => {

  const imgRef = useRef<HTMLDivElement>(null);

  const handleCategory = (event: React.MouseEvent<HTMLLIElement>) => {
    onCategory(event, imgRef);
  }

  return (
    <section id="note" className={styles.note}>
      <Title id={SECTION_KEY} />
      <div className="container">
        <ul className={styles.tab_menu}>
          <li className={`${styles.tab_item} ${styles.active}`} onClick={handleCategory}>All</li>
          {
            menus.map((menu: NoteCategoryType) => (
              <li key={uuidv4()} className={styles.tab_item} onClick={handleCategory}>{menu}</li>
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
                <img key={uuidv4()} src={img.src} alt={img.alt} data-category={img.category} />
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
};

export default Note;