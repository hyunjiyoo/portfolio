import { WorkCategoryType, WorkType } from "./dataStructure";

export const works : Record<WorkCategoryType, WorkType[]> = {
  'Front-end': [
    {
      title: 'P-SEEK',
      description: 'Nodejs, MySQL, CentOS7...sdafsadfsadfsadfsadfsad',
      imgUrl: 'https://picsum.photos/seed/aasd/200/150',
      imgAlt: 'p-seek',
      color: 'yellow'
    },
    {
      title: 'P-SEEK',
      description: 'Nodejs, MySQL, CentOS7...sdafsadfsadfsadfsadfsad',
      imgUrl: 'https://picsum.photos/seed/aasd/200/150',
      imgAlt: 'p-seek',
      color: 'purple'
    }
  ],
  'Back-end': [
    {
      title: 'P-SEEK',
      description: 'Nodejs, MySQL, CentOS7...sdafsadfsadfsadfsadfsad',
      imgUrl: 'https://picsum.photos/seed/aasd/200/150',
      imgAlt: 'p-seek',
      color: 'yellow'
    }
  ]
};