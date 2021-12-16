export type NoteCategoryType = 'React' | 'Typescript' | 'Nodejs' | 'Algorithm';

type ImgData = {
  sep?: string;
  src: string;
  alt?: string;
}[];

type NoteData = {
  sep: Lowercase<NoteCategoryType>;
  data: ImgData;
};

const noteData: Record<NoteCategoryType, NoteData> = {
  'React': {
    sep: 'react',
    data: 
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
    data: [
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
    data: [
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
    data: [
      {
        src: 'https://picsum.photos/seed/ghd/120/100',
        alt: 'note list'
      }
    ],
  }
};

export function getTypes(): NoteCategoryType[] {
  return (Object.keys(noteData) as NoteCategoryType[]);
}

export function getAllImg() {
  let dataset: ImgData = [];

  Object.values(noteData).forEach(note => {
    const data = note.data.map(row => ({...row, sep: note.sep}));
    dataset.push(...data);
  });
  
  return dataset;
}

export function getImgByType(type: NoteCategoryType) {

  const key = Object.keys(noteData).filter(key => (key === type))[0] as NoteCategoryType;
  
  return noteData[key];
}