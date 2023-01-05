import { TranscriptionArticle } from './type';

export const selectTitle = (article: TranscriptionArticle) => `${article.title} ${article.author}`;
