type Data = {
  id: string;
  section: string;
}[];

type Title = {
  id: string;
  name: string;
  description: string;
  position: 'L' | 'R';
}[];

export const title: Title = [
  {
    id: 'about',
    name: 'ABOUT ME',
    description: 'hello about',
    position: 'R'
  },
  {
    id: 'note',
    name: 'MY NOTE',
    description: 'hello note',
    position: 'L'
  },
  {
    id: 'skills',
    name: 'SKILLS',
    description: 'hello note',
    position: 'L'
  },
  {
    id: 'work',
    name: 'MY WORK',
    description: 'hello note',
    position: 'R'
  },
  {
    id: 'testimonials',
    name: 'TESTIMONIALS',
    description: 'hello note',
    position: 'L'
  },
  {
    id: 'contact',
    name: 'CONTACT',
    description: 'hello note',
    position: 'R'
  }
];

export const data: Data = [
  {
    id: '1',
    section: 'Intro',
  },
  {
    id: '2',
    section: 'About',
  },
  {
    id: '3',
    section: 'Note',
  },
  {
    id: '4',
    section: 'Skills',
  },
  {
    id: '5',
    section: 'Work',
  },
  {
    id: '6',
    section: 'Testimonials',
  },
  {
    id: '7',
    section: 'Contact',
  }
];

export function getTitle(id: string) {
  return title.filter(t => t.id === id)[0];
}