export type NoteCategoryType = 'React' | 'Typescript' | 'Nodejs' | 'Algorithm';

interface NoteImgInterface {
  src: string;
  alt?: string;
};

interface NoteImgElement extends NoteImgInterface {
  sep: Lowercase<NoteCategoryType>;
}

type NoteType = {
  sep: Lowercase<NoteCategoryType>;
  images: NoteImgInterface[];
};

const notes: Record<NoteCategoryType, NoteType> = {
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

export function getTypes(): NoteCategoryType[] {
  return (Object.keys(notes) as NoteCategoryType[]);
}

export function getAllImg() {
  let noteImgElements: NoteImgElement[] = [];

  Object.values(notes).forEach(note => {
    const data: NoteImgElement[] = note.images.map(image => ({...image, sep: note.sep}));
    noteImgElements.push(...data);
  });
  
  return noteImgElements;
}

export function getImgByType(type: NoteCategoryType) {

  const key = Object.keys(notes).filter(key => (key === type))[0] as NoteCategoryType;
  
  return notes[key];
}