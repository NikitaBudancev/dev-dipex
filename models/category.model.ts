export interface Category {
  id: number;
  title: string;
  image: string;
  link: string;
  subCategories: {
    id: number;
    title: string;
    link: string;
  }[];
}
