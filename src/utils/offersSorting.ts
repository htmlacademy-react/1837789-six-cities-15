import {Offers} from '../types/offer';
import {SortType} from '../const';

export function offersSorting(sortType: SortType, list: Offers) {
  switch (sortType) {
    case 'Price: low to high':
      return list.sort((a, b) => a.price - b.price);
    case 'Price: high to low':
      return list.sort((a, b) => b.price - a.price);
    case 'Top rated first':
      return list.sort((a, b) => b.rating - a.rating);
    default:
      return list;
  }
}
