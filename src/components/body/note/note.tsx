import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import { Title } from '../shared/title/title';
import { SectionKeyType, NoteCategoryType, NoteType } from '../../../db/dataStructure';
import styles from './note.module.css';
import * as Controller from '../../../controller/note';

const SECTION_KEY: SectionKeyType = "note";
const NOTION_URL: string = "https://hjyooo.notion.site/Dream-Coding-92e6b3a0f6e04c9cb2cf7eae5ef0f2b4";
const NOTION_ICON: string = "https://cdn.iconscout.com/icon/free/png-256/notion-1693557-1442598.png";

const categories = Controller.getAllCategory();
const initImgs = Controller.getAllImgs();

const Note = (): JSX.Element => {

  const [imgs, setImgs] = useState<NoteType[]>(initImgs);
  const [selectedImg, setSelectedImg] = useState<NoteType>({ src: imgs[0].src, alt: imgs[0].alt });
  const [activeTarget, setActiveTarget] = useState<(NoteCategoryType | 'All')>('All');

  const onCategory = <T extends HTMLElement>(event: React.MouseEvent<T>) => {
    const target = event.target as T;
    const category = target.textContent as (NoteCategoryType | 'All');

    setImgs(() => {
      let updated: NoteType[];
      
      if (category === 'All') {
        updated = Controller.getAllImgs();
      }
      else {
        updated = Controller.getImgByCategory(category);
      }

      const { src, alt } = updated[0];
      setSelectedImg({ src, alt });
      
      return updated;
    });

    setActiveTarget(category);
  };

  const getStyle = (category: NoteCategoryType | 'All') => {
    let classList = styles.tab_item;

    if (activeTarget === category) {
      classList += ` ${styles.active}`;
    }

    return classList;
  }

  const selectImg = (event: React.MouseEvent) => {
    const { src, alt } = event.target as HTMLImageElement;
    setSelectedImg({ src, alt });
  }

  return (
    <section id="note" className={styles.note}>
      <Title id={SECTION_KEY} />
      <div className="container">
        <ul className={styles.tab_menu}>
          <li className={getStyle('All')} onClick={onCategory}>All</li>
          {
            categories.map((category: NoteCategoryType) => (
              <li key={uuidv4()} className={getStyle(category)} onClick={onCategory}>{category}</li>
            ))
          }
        </ul>
        <div className={styles.contents}>
          <div className={styles.contents_img}>
            <a className={styles.link} href={NOTION_URL} target="blank">
              <img className={styles.notion} src={NOTION_ICON} alt="notion icon" />
              <p>Notion Note Link 🔗</p>
            </a>
            <img className={styles.main_img} src={selectedImg.src} alt={selectedImg.alt} />
          </div>
          <div className={styles.contents_img_list} onClick={selectImg}>
            {
              imgs.map(img => (
                <img key={uuidv4()} src={img.src} alt={img.alt} />
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
};

export default Note;