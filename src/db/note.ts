import { NoteCategoryType, NoteType } from "./dataStructure";

export const notes: Record<NoteCategoryType, NoteType> = {
  'React': {
    sep: 'react',
    images: 
      [
        {
          src: 'https://picsum.photos/seed/llskd/120/100',
          alt: 'note list'
        },
        {
          src: 'https://picsum.photos/seed/aadf/120/100',
          alt: 'note list'
        }
      ]
    },
  'Typescript': {
    sep: 'typescript',
    images: [
      {
        src: 'https://picsum.photos/seed/gg/120/100',
        alt: 'note list'
      },
      {
        src: 'https://picsum.photos/seed/as/120/100',
        alt: 'note list'
      },
    ]
  },
  'Nodejs': {
    sep: 'nodejs',
    images: [
      {
        src: 'https://picsum.photos/seed/df/120/100',
        alt: 'note list'
      },
      {
        src: 'https://picsum.photos/seed/gggg/120/100',
        alt: 'note list'
      },
    ]
  },
  'Algorithm': {
    sep: 'algorithm',
    images: [
      {
        src: 'https://picsum.photos/seed/ghd/120/100',
        alt: 'note list'
      }
    ],
  }
};