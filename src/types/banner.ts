export interface Banner {
  id: string;
  image: string;
  order: number;
  title: string;
  slogan: string;
  description: string;
  button: {
    label: string;
    categorySlug: string;
    subcategorySlug?: string;
  };
}
