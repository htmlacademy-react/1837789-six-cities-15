import {Review} from '../types/review';

export const reviews: Review[] = [
  {
    id: '1380fbcc-414b-484a-b5cb-60022a231f40',
    comment: 'Beautiful space, fantastic location and atmosphere, really a wonderful place to spend a few days. Will be back.',
    date: '2024-02-02T21:00:00.342Z',
    rating: 2,
    user: {
      name: 'Christina',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/1.jpg',
      isPro: false
    }
  },
  {
    id: '8e3d2a53-04e4-4694-be43-2d46d71a6114',
    comment: 'I stayed here for one night and it was an unpleasant experience.',
    date: '2024-01-31T21:00:00.342Z',
    rating: 2,
    user: {
      name: 'Mollie',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/3.jpg',
      isPro: true
    }
  },
  {
    id: 'ace2040d-2cef-4a33-9333-af02bcb2c63d',
    comment: 'Bathed in the nature. Completely unplugged. Unforgettable.',
    date: '2024-01-31T21:00:00.342Z',
    rating: 5,
    user: {
      name: 'Zak',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/5.jpg',
      isPro: false
    }
  }
];

