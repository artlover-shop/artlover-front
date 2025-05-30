import { Article } from '@/types/article';

export const calculateReadingTime = (
  article: Article,
  wordsPerMinute: number = 200
): number => {
  const countWords = (text: string) => text.split(/\s+/).filter(Boolean).length;

  let totalWords = 0;

  // Підрахунок слів у title та description
  totalWords += countWords(article.title);
  totalWords += countWords(article.description);

  // Підрахунок слів у mainContent (масив параграфів)
  article.text.forEach(para => {
    totalWords += countWords(para);
  });

  return Math.ceil(totalWords / wordsPerMinute);
};
