export enum SortType {
  Popular = 'Popular',
  LowToHigh = 'Price: low to high',
  HighToLow = 'Price: high to low',
  TopRated = 'Top rated first',
}

export type SortName = SortType.Popular | SortType.LowToHigh | SortType.HighToLow | SortType.TopRated;
