export type SectionKeyType = 'about' | 'note' | 'skills' | 'work' | 'testimonials' | 'contact';

export interface Title {
  name: string;
  description: string;
  position: 'L' | 'R';
};

export type NoteCategoryType = 'React' | 'Typescript' | 'Nodejs' | 'Algorithm';

interface NoteImgInterface {
  src: string;
  alt?: string;
};

export interface NoteImgElement extends NoteImgInterface {
  category: Lowercase<NoteCategoryType>;
}

export type NoteType = {
  category: Lowercase<NoteCategoryType>;
  images: NoteImgInterface[];
};

export type WorkType = {
  title : string;
  description: string;
  imgUrl: string;
  imgAlt?: string;
  color: 'yellow' | 'purple';
}