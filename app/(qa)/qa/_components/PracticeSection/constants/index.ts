interface PracticeSlide {
  description: MessagePath;
  image: string;
  title: MessagePath;
}

export const PRACTICE_SLIDES = Array.from({ length: 5 }, (_, index) => ({
  title: `page.qa.practice.${index}.title` as MessagePath,
  description: `page.qa.practice.${index}.description` as MessagePath,
  image: `/images/tester/task-${index}.png`
})) satisfies readonly PracticeSlide[];
