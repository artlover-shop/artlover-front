import { Product } from '@/types/product';

export interface FiltersState {
  type?: string[];
  profession?: string[];
  ageFrom?: number;
  ageTo?: number;
  priceFrom?: number;
  priceTo?: number;
}

export const filterProducts = (
  products: Product[],
  filters: FiltersState
): Product[] => {
  const { type, profession, ageFrom, ageTo, priceFrom, priceTo } = filters;

  let filtered = [...products];

  if (type?.includes('discounts')) {
    filtered = filtered.filter(product => !!product.discountedPrice);
  }

  if (type?.includes('newProducts')) {
    filtered = filtered.sort((a, b) => {
      const dateA = new Date(a.createdAt || '').getTime();
      const dateB = new Date(b.createdAt || '').getTime();
      return dateB - dateA;
    });
  }

  // Фільтр за profession (по value)
  if (profession?.length && profession.length > 0) {
    filtered = filtered.filter(product =>
      product.professions?.some(p => profession.includes(p.value))
    );
  }

  // Фільтр за віком (враховує діапазон перетину)
  if (ageFrom !== undefined) {
    filtered = filtered.filter(
      product => product.ageMax === undefined || product.ageMax >= ageFrom
    );
  }
  if (ageTo !== undefined) {
    filtered = filtered.filter(
      product => product.ageMin === undefined || product.ageMin <= ageTo
    );
  }

  // Фільтр за ціною
  if (priceFrom !== undefined) {
    filtered = filtered.filter(product => {
      const price = product.discountedPrice ?? product.price;
      return price === undefined || price >= priceFrom;
    });
  }

  if (priceTo !== undefined) {
    filtered = filtered.filter(product => {
      const price = product.discountedPrice ?? product.price;
      return price === undefined || price <= priceTo;
    });
  }

  return filtered;
};
