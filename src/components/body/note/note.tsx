import React, { useRef, useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import { Title } from '../shared/title/title';
import { SectionKeyType, NoteCategoryType, NoteType } from '../../../db/dataStructure';
import styles from './note.module.css';
import * as Controller from '../../../controller/note';

const SECTION_KEY: SectionKeyType = "note";
const NOTION_ICON: string = "https://bit.ly/3r19OMX";

const categories = Controller.getAllCategory();
const initImgs = Controller.getAllImgs();
const { src, alt, url } = initImgs[0];

const Note = (): JSX.Element => {

  const linkRef = useRef<HTMLAnchorElement>(null);
  const mainImgRef = useRef<HTMLImageElement>(null);
  const imgListRef = useRef<HTMLDivElement>(null);
  const [imgs, setImgs] = useState<NoteType[]>(initImgs);
  const [selectedImg, setSelectedImg] = useState<NoteType>({ src, alt, url });
  const [activeTarget, setActiveTarget] = useState<(NoteCategoryType | 'All')>('All');

  const scrollPositionInit = () => {
    const target = imgListRef.current as HTMLDivElement;
    target.scrollLeft = 0;
  }

  const onCategory = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    const category = target.textContent as (NoteCategoryType | 'All');

    setImgs(() => {
      let updated: NoteType[];
      
      if (category === 'All') {
        updated = Controller.getAllImgs();
      }
      else {
        updated = Controller.getImgByCategory(category);
      }

      const { src, alt, url } = updated[0];
      setSelectedImg({ src, alt, url });
      
      return updated;
    });

    setActiveTarget(category);
    scrollPositionInit();
  };

  const getStyle = (category: NoteCategoryType | 'All') => {
    let classList = styles.tab_item;

    if (activeTarget === category) {
      classList += ` active`;
    }

    return classList;
  }

  const selectImg = (event: React.MouseEvent) => {
    const target = event.target as HTMLImageElement;

    if (target.src == null) {
      return;
    }
    
    const { src, alt } = target;
    const url = target.dataset.url!;
    setSelectedImg({ src, alt, url });
  };

  const showLink = (isFocus: boolean) => {
    const link = linkRef.current as HTMLAnchorElement;
    const mainImg = mainImgRef.current as HTMLImageElement;

    if (isFocus) {
      link.style.display = "flex";
      mainImg.style.opacity = "0.2";
    }
    else {
      link.style.display = "none";
      mainImg.style.opacity = "1.0";
    }
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
          <div 
            className={styles.contents_img} 
            onClick={() => linkRef.current?.click()}
            onMouseOver={() => showLink(true)} 
            onMouseOut={() => showLink(false)} 
          >
            <a ref={linkRef} className={styles.link} href={selectedImg.url} target="blank">
              <img className={styles.notion} src={NOTION_ICON} alt="notion icon" />
              <p>Notion Note Link 🔗</p>
            </a>
            <img ref={mainImgRef} className={styles.main_img} src={selectedImg.src} alt={selectedImg.alt} />
          </div>
          <div ref={imgListRef} className={styles.contents_img_list} onClick={selectImg}>
            {
              imgs.map(img => (
                <img key={uuidv4()} src={img.src} alt={img.alt} data-url={img.url} />
              ))
            }
          </div>
        </div>
        <p className={styles.info}>
          * 노트의 일부분만 발췌하여 미리보기로 제공합니다. <br />
          * 전체 노트를 확인하고 싶으시면 맨 아래 노션 아이콘을 클릭해주세요.
        </p>
      </div>
    </section>
  )
};

export default Note;