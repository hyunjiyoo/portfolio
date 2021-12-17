import { SectionKeyType } from "../db/dataStructure";
import { titleset } from "../db/title";

export function getTitle(id: SectionKeyType) {
  const key: SectionKeyType = Object.keys(titleset).filter(key => key === id)[0] as SectionKeyType;
  
  return titleset[key];
}