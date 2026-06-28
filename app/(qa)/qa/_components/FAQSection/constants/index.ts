export const FAQ_ITEMS = Array.from({ length: 5 }, (_, index) => ({
  question: `page.qa.faq.${index}.question` as MessagePath,
  answer: `page.qa.faq.${index}.answer` as MessagePath
}));
