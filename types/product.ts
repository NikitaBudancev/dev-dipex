import { Price } from "./price";

export interface Product {
  name: string;
  sku: string;
  date_create: string;
  code: string;
  timestamp: string;
  brand_name: string;
  category_name: string;
  id: number;
  article_id: number;
  brand_id: number;
  article_type: number;
  amount: number;
  category_id: number;
  prices: Price[];
  titles: { code: string; value: string }[];
  descriptions: string;
  params: Array<string>;
  additionals: Array<string>;
  image: {
    dir: string;
    filename: string;
    src: string;
  };
}
