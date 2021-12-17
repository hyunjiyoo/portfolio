import { NoteCategoryType, NoteImgElement } from "../db/dataStructure";
import { notes } from "../db/note";

export function getAllCategory(): NoteCategoryType[] {
  return (Object.keys(notes) as NoteCategoryType[]);
}

export function getAllImg() {
  let noteImgElements: NoteImgElement[] = [];

  Object.values(notes).forEach(note => {
    const data: NoteImgElement[] = note.images.map(image => ({...image, category: note.category}));
    noteImgElements.push(...data);
  });
  
  return noteImgElements;
}

export function getImgByType(type: NoteCategoryType) {
  const key = Object.keys(notes).filter(key => (key === type))[0] as NoteCategoryType;
  
  return notes[key];
}