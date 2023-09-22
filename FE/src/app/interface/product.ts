export interface Iproduct {
  _id?: number | string;
  author : string;
  name: string;
  price: number;
  priceSale: number;
  isFavorite: boolean;
  featured: boolean;
  image: string;
  description: string;
  description_short?: string;
  hot_sale: number;
  quantity: number;
  categoryId: string;
  inventoryStatus: string;
  rating: number;
  isVisible: boolean;
  isNew: boolean;
}