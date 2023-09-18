export interface Iproduct {
    _id?: number | string;
    author: string;
    name: string;
    price: number;
    priceSale?: number;
    featured: boolean;
    image: string;
    description: string;
    description_short?: string;
    hot_sale?: number;
    isNew : boolean;
    quantity: number;
    category: string;
    inventoryStatus: string;
    rating: number;
  }