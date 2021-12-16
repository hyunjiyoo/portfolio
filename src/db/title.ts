export type SectionKeyType = 'about' | 'note' | 'skills' | 'work' | 'testimonials' | 'contact';

type Title = {
  name: string;
  description: string;
  position: 'L' | 'R';
};

const titleset: Record<SectionKeyType, Title> = {
  'about': {
    name: 'ABOUT ME',
    description: 'hello about',
    position: 'R'
  },
  'note': {
    name: 'MY NOTE',
    description: 'hello note',
    position: 'L'
  },
  'skills': {
    name: 'SKILLS',
    description: 'hello note',
    position: 'R'
  },
  'work': {
    name: 'MY WORK',
    description: 'hello note',
    position: 'L'
  },
  'testimonials': {
    name: 'TESTIMONIALS',
    description: 'hello note',
    position: 'R'
  },
  'contact': {
    name: 'CONTACT',
    description: 'hello note',
    position: 'L'
  }
};

export function getTitle(id: SectionKeyType) {
  const key: SectionKeyType = Object.keys(titleset).filter(key => key === id)[0] as SectionKeyType;
  
  return titleset[key];
}