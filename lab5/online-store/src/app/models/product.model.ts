export interface Product {
  id: number;
  categoryId: number;

  name: string;
  description: string;

  price: number;
  rating: number;

  link: string;      
  image: string;     
  images: string[];  

  likes: number;     
}