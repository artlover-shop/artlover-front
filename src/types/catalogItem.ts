import { JSX } from 'react';

export interface CatalogItem {
  icon?: JSX.Element;
  slug: string;
  title: string;
  description?: string;
  subcategories?: { title: string; slug: string }[];
}
