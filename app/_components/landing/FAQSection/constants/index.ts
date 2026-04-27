const FAQ_INDEXES = [0, 1, 2, 3] as const;

export const FAQ_ITEMS = FAQ_INDEXES.map((index) => ({
  question: `page.home.section.faq.${index}.question` as MessagePath,
  answer: `page.home.section.faq.${index}.answer` as MessagePath
}));
