import { NoteCategoryType, NoteType } from "./dataStructure";

export const notes: Record<NoteCategoryType, NoteType[]> = {
  'React': [
    {
      src: 'https://picsum.photos/seed/llskd/120/100',
      alt: 'note list'
    },
    {
      src: 'https://picsum.photos/seed/aadf/120/100',
      alt: 'note list'
    }
  ],
  'Typescript': [
    {
      src: 'https://picsum.photos/seed/gg/120/100',
      alt: 'note list'
    },
    {
      src: 'https://picsum.photos/seed/as/120/100',
      alt: 'note list'
    },
  ],
  'Nodejs': [
    {
      src: 'https://picsum.photos/seed/df/120/100',
      alt: 'note list'
    },
    {
      src: 'https://picsum.photos/seed/gggg/120/100',
      alt: 'note list'
    },
  ],
  'Algorithm': [
    {
      src: 'https://picsum.photos/seed/ghd/120/100',
      alt: 'note list'
    }
  ],
};