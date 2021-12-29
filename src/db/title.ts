import { SectionKeyType, Title } from './dataStructure';

export const titleset: Record<SectionKeyType, Title> = {
  'about': {
    name: 'ABOUT ME',
    description: '분야별 주요 기술과 경력에 대해 나타냅니다.',
    position: 'R'
  },
  'note': {
    name: 'MY NOTE',
    description: '노션 어플리케이션을 이용해 메모하며 공부하는 습관을 가지고 있습니다.',
    position: 'L'
  },
  'skills': {
    name: 'SKILLS',
    description: '분야별 기술 수준을 나타냅니다.',
    position: 'R'
  },
  'work': {
    name: 'MY WORK',
    description: '팀 프로젝트 및 개인 프로젝트를 꾸준히 해오고 있습니다.',
    position: 'L'
  },
  'testimonials': {
    name: 'TESTIMONIALS',
    description: '함께 일을 했거나 스터디를 했던 사람들의 코멘트입니다.',
    position: 'R'
  },
  'contact': {
    name: 'CONTACT',
    description: '이 포트폴리오가 마음에 드셨거나 궁금한 점이 있으시다면 연락은 언제나 환영입니다.',
    position: 'L'
  }
};