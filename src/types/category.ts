export interface Category {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description?: string;
  slug: string;
  subcategories?: { title: string; slug: string }[];
}
