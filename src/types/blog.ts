export type Blog = {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  publishedAt: string;
  revisedAt: string;
  category: Category;
  thumbnail?: {
    url: string;
    width: number;
    height: number;
  };
};

export type Category = {
  id: string;
  name: string;
};

export type BlogResponse = {
  contents: Blog[];
  totalCount: number;
  offset: number;
  limit: number;
};
