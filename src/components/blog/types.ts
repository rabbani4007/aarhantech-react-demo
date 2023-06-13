export interface IBlogCard {
  id: number;
  title: string;
  titleImage: string;
  createdBy: string;
  createdOn: string;
  totalComments: string;
  content: string;
}

export interface IBlogCardProps {
  blog: IBlogCard;
}

export interface IBlogCategory {
  id: number;
  name: string;
  count: number;
}
export interface IBlogTag {
  id: number;
  name: string;
}
