export const FAQ_ITEMS = [0, 1, 2, 3, 4].map((index) => ({
  question: `page.testers.faq.${index}.question` as MessagePath,
  answer: `page.testers.faq.${index}.answer` as MessagePath
}));
