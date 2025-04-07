export type Experience = {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
};

export type Project = {
  id: string;
  title: string;
  description: string;
  thumbnail?: {
    url: string;
    width: number;
    height: number;
  };
  skills: string[];
  demoUrl?: string;
  githubUrl?: string;
};
