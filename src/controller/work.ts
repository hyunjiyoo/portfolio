import { WorkType } from "../db/dataStructure";
import { works } from "../db/work";

export function getAllProjects() {
  let projects: WorkType[] = [];
  Object.values(works).map(work => projects.push(...work));

  return projects;  
}
