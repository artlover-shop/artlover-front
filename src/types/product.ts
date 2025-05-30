export interface Product {
  id: string;
  createdAt: string;
  categorySlug: string;
  categoryTitle: string;
  subcategorySlug: string;
  subcategoryTitle: string;
  slug: string;
  title: string;
  inStock: string;
  description: string;
  fullDescription: string;
  delivery: string;
  price: number;
  discountedPrice?: number;
  mainImage: string;
  images: string[];
  bestseller?: boolean;
  newProduct?: boolean;
  idealFor: string[];
  characteristics: {
    weight: string;
    dimensions: { height: number; width: number; length: number };
    article: string;
    kitContents: string[];
    manufacturer: string;
    materials: string;
  };
  benefits: { icon: string; description: string }[];
  addons: { title: string; price: number; id: string }[];
  colors: { title: string; hex: string }[];
  reviews: { author: string; rating: number; text: string }[];
  isBestseller: boolean;
  professions: { title: string; value: string }[];
  ageMin: number;
  ageMax: number;
}
