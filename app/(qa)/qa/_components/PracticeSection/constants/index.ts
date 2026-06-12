interface PracticeSlide {
  description: MessagePath;
  image: string;
  title: MessagePath;
}

export const PRACTICE_SLIDES = [
  {
    title: 'page.qa.practice.0.title',
    description: 'page.qa.practice.0.description',
    image: '#'
  },
  {
    title: 'page.qa.practice.1.title',
    description: 'page.qa.practice.1.description',
    image: '#'
  },
  {
    title: 'page.qa.practice.2.title',
    description: 'page.qa.practice.2.description',
    image: '#'
  },
  {
    title: 'page.qa.practice.3.title',
    description: 'page.qa.practice.3.description',
    image: '#'
  }
] satisfies readonly PracticeSlide[];
