export const FAQ_ITEMS = Array.from({ length: 3 }, (_, index) => ({
  question: `page.task.section.faq.${index}.question` as MessagePath,
  answer: `page.task.section.faq.${index}.answer` as MessagePath
}));
