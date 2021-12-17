import { WorkCategoryType, WorkType } from "../db/dataStructure";
import { works } from "../db/work";

export function getAllProjects(): WorkType[] {
  let projects: WorkType[] = [];
  Object.values(works).map(work => projects.push(...work));

  return projects;  
}

export function getAllCategory() {
  return (Object.keys(works) as WorkCategoryType[]);
}

export function getProjectByCategory(category: WorkCategoryType) {
  return works[category];
}