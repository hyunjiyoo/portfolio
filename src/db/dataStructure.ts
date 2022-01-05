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
  url: string;
};

export interface WorkType {
  title : string;
  description: string;
  projectUrl: string;
  imgUrl: string;
  imgAlt?: string;
  skillset: string[];
  color: 'yellow' | 'purple';
};

export type testimonial = {
  name: string;
  img: string;
  text: string;
  company: string;
  position?: 'R';
}