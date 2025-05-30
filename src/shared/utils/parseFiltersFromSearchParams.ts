export interface FiltersState {
  type?: string[];
  profession?: string[];
  ageFrom?: number;
  ageTo?: number;
  priceFrom?: number;
  priceTo?: number;
}

export const parseFiltersFromSearchParams = (
  searchParams: URLSearchParams
): FiltersState => {
  const typeParam = searchParams.get('type');
  const professionParam = searchParams.get('profession');

  return {
    type: typeParam ? typeParam.split(',') : undefined,
    profession: professionParam ? professionParam.split(',') : undefined,
    ageFrom: searchParams.get('ageFrom')
      ? Number(searchParams.get('ageFrom'))
      : undefined,
    ageTo: searchParams.get('ageTo')
      ? Number(searchParams.get('ageTo'))
      : undefined,
    priceFrom: searchParams.get('priceFrom')
      ? Number(searchParams.get('priceFrom'))
      : undefined,
    priceTo: searchParams.get('priceTo')
      ? Number(searchParams.get('priceTo'))
      : undefined,
  };
};
