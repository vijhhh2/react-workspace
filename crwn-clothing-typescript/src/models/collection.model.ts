export interface Collections {
    [key: string]: Collection
  }

  export interface Collection {
    id: number;
    title: string;
    routeName: string;
    items: ShopItem[];
  }
  
 export interface ShopItem {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    quantity?: number;
  }