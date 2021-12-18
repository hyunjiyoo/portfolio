import { NoteCategoryType, NoteType } from "../db/dataStructure";
import { notes } from "../db/note";

export function getAllImgs(): NoteType[] {
  let projects: NoteType[] = [];
  Object.values(notes).map(work => projects.push(...work));

  return projects;  
}

export function getAllCategory() {
  return (Object.keys(notes) as NoteCategoryType[]);
}

export function getImgByCategory(category: NoteCategoryType) {
  return notes[category];
}