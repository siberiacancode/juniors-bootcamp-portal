const FAQ_INDEXES = [0, 1, 2, 3] as const;

interface FAQItem {
  answer: MessagePath;
  question: MessagePath;
}

export const FAQ_ITEMS = FAQ_INDEXES.map(
  (index): FAQItem => ({
    question: `page.home.section.faq.${index}.question`,
    answer: `page.home.section.faq.${index}.answer`
  })
);
