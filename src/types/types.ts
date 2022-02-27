export interface Project {
  id: number;
  status: string;
  sort?: any;
  user_created: string;
  date_created: Date;
  user_updated: string;
  date_updated: Date;
  name: string;
  image: string;
  url: string;
  repo: string;
  description_short: string;
  description_long: string;
  tags: number[];
}
