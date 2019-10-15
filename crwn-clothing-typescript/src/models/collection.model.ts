export interface Collection {
    id: number;
    title: string;
    routeName: string;
    items: CollectionEachItem[];
  }
  
 export interface CollectionEachItem {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
  }