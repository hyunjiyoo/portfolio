export type SectionKeyType = 'about' | 'note' | 'skills' | 'work' | 'testimonials' | 'contact';

export interface Title {
  name: string;
  description: string;
  position: 'L' | 'R';
};

export type NoteCategoryType = 'React' | 'Typescript' | 'Nodejs' | 'Algorithm';

export interface NoteType {
  src: string;
  alt?: string;
};

export type WorkCategoryType = 'Front-end' | 'Back-end';

export interface WorkType {
  title : string;
  description: string;
  imgUrl: string;
  imgAlt?: string;
  color: 'yellow' | 'purple';
};