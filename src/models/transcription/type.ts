declare class Id<T extends string> {
  private IDENTITY: T;
}
export type TranscriptionArticle = {
  id: Id<'TaId'>;
  title: string;
  desc: string;
  author: string;
};
