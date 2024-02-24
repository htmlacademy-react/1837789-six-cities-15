import {Reviews} from '../types/review';

export const reviews: Reviews = [
  {
    id: '1',
    comment: 'Beautiful space, fantastic location and atmosphere, really a wonderful place to spend a few days. Will be back.',
    date: '2024-02-02T21:00:00.342Z',
    rating: 2,
    user: {
      name: 'Ben',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/1.jpg',
      isPro: false
    }
  },
  {
    id: '2',
    comment: 'I stayed here for one night and it was an unpleasant experience.',
    date: '2024-01-31T21:00:00.342Z',
    rating: 2,
    user: {
      name: 'Pol',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/2.jpg',
      isPro: true
    }
  },
  {
    id: '3',
    comment: 'Bathed in the nature. Completely unplugged. Unforgettable.',
    date: '2024-01-31T21:00:00.342Z',
    rating: 5,
    user: {
      name: 'Zak',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/3.jpg',
      isPro: false
    }
  },
];

