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
  sep: Lowercase<NoteCategoryType>;
}

export type NoteType = {
  sep: Lowercase<NoteCategoryType>;
  images: NoteImgInterface[];
};