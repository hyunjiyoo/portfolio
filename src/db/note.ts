export type ImgType = 'React' | 'Typescript' | 'Nodejs' | 'Algorithm';

type ImgData = {
  sep: Lowercase<ImgType>;
  src: string;
  alt?: string;
}[];

const noteData: Record<ImgType, ImgData> = {
  'React': [
    {
      sep: 'react',
      src: 'https://picsum.photos/seed/llskd/120/100',
      alt: 'note list'
    },
    {
      sep: 'react',
      src: 'https://picsum.photos/seed/aadf/120/100',
      alt: 'note list'
    }
  ],
  'Typescript': [
    {
      sep: 'typescript',
      src: 'https://picsum.photos/seed/gg/120/100',
      alt: 'note list'
    },
    {
      sep: 'typescript',
      src: 'https://picsum.photos/seed/as/120/100',
      alt: 'note list'
    },
  ],
  'Nodejs': [
    {
      sep: 'nodejs',
      src: 'https://picsum.photos/seed/df/120/100',
      alt: 'note list'
    },
  ],
  'Algorithm': [
    {
      sep: 'algorithm',
      src: 'https://picsum.photos/seed/ghd/120/100',
      alt: 'note list'
    }
  ],
};

export function getTypes() {
  return Object.keys(noteData);
}

export function getAllImg() {
  let data: ImgData = [];

  Object.values(noteData).forEach(note => {
    data.push(...note);
  });
  
  return data;
}

export function getImgByType(type: ImgType) {

  const key = Object.keys(noteData).filter(key => (key === type))[0] as ImgType;
  
  return noteData[key];
}