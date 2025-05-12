interface FiltersProps {
  setMinPrice: (minPrice: number) => void;
  setMaxPrice: (maxPrice: number) => void;
  setSortBy: (sortBy: 'price' | 'name') => void;
}
interface UseFiltersProps {
  setSortBy: (sortBy: 'price' | 'name') => void;
}
export type {FiltersProps, UseFiltersProps};
