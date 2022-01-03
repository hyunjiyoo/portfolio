import { NoteCategoryType, NoteType } from "./dataStructure";

export const notes: Record<NoteCategoryType, NoteType[]> = {
  'React': [
    {
      src: 'https://picsum.photos/seed/llskd/120/100',
      alt: 'note list',
      url: '',
    },
    {
      src: 'https://picsum.photos/seed/aadf/120/100',
      alt: 'note list',
      url: '',
    }
  ],
  'Typescript': [
    {
      src: 'https://picsum.photos/seed/gg/120/100',
      alt: 'note list',
      url: '',
    },
    {
      src: 'https://picsum.photos/seed/as/120/100',
      alt: 'note list',
      url: '',
    },
  ],
  'Nodejs': [
    {
      src: 'https://picsum.photos/seed/df/120/100',
      alt: 'note list',
      url: '',
    },
    {
      src: 'https://picsum.photos/seed/gggg/120/100',
      alt: 'note list',
      url: '',
    },
  ],
  'Algorithm': [
    {
      src: '/images/note/algorithm/algo-1.png',
      alt: 'note list',
      url: 'https://bit.ly/3mNR427',
    },
    {
      src: '/images/note/algorithm/algo-2.png',
      alt: 'note list',
      url: '',
    },
    {
      src: '/images/note/algorithm/algo-3.png',
      alt: 'note list',
      url: 'https://bit.ly/3eIqSkW',
    }
  ],
};