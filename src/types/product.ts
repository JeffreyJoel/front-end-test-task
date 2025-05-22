export interface Product {
  id: number;
  name: string;
  priceUsdc: string;
  imageUrl: string;
  setName: string;
  language: string;
  year: string;
  grader: string;
  grade: string;
  cardNumber: string;
  isForSale?: boolean;
}
