export interface CartItem {
  id: string;
  cmsId: string;
  title: string;
  categorySlug: string;
  slug: string;
  price: number;
  discountedPrice?: number;
  mainImage: string;
  addons?: { title: string; price: number; id: string; checked: boolean }[];
  color?: { title: string; hex: string };
  quantity: number;
}
