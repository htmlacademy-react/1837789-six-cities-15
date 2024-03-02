import {Offers} from '../types/offer';

export const offers: Offers = [
  {
    id: '1',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    rating: 3.8,
    bedrooms: 3,
    maxAdults: 4,
    isPremium: false,
    isFavorite: true,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/8.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/6.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/1.jpg'
    ],
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 13
    },
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 16
      }
    },
    host: {
      name: 'Rick',
      isPro: true,
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/4.jpg'
    },
    goods: [
      'Heating'
    ]
  },
  {
    id: '2',
    title: 'Cozy and warm apartment in the heart of Paris',
    type: 'apartment',
    price: 80,
    rating: 2.5,
    bedrooms: 2,
    maxAdults: 3,
    isPremium: true,
    isFavorite: false,
    description: 'A cozy and warm apartment located in the heart of Paris, perfect for a romantic getaway.',
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/1.jpg',
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/1.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/5.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/6.jpg'
    ],
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 13
    },
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3609553943508,
        longitude: 4.85309666406198,
        zoom: 16
      }
    },
    host: {
      name: 'Eva',
      isPro: false,
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/8.jpg'
    },
    goods: [
      'Wi-Fi',
      'Kitchen',
      'Washing machine'
    ]
  },
  {
    id: '3',
    title: 'Spacious and modern apartment in New York',
    type: 'apartment',
    price: 200,
    rating: 4.9,
    bedrooms: 4,
    maxAdults: 6,
    isPremium: true,
    isFavorite: true,
    description: 'A spacious and modern apartment located in the heart of New York City, perfect for a family vacation.',
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/12.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/7.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/8.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/9.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/11.jpg'
    ],
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 13
    },
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 16
      }
    },
    host: {
      name: 'Sarah',
      isPro: true,
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/6.jpg'
    },
    goods: [
      'Wi-Fi',
      'Kitchen',
      'Washing machine',
      'Gym',
      'Swimming pool'
    ]
  },
  {
    id: '4',
    title: 'Charming and cozy cottage in the countryside',
    type: 'house',
    price: 150,
    rating: 4.3,
    bedrooms: 2,
    maxAdults: 4,
    isPremium: false,
    isFavorite: false,
    description: 'A charming and cozy cottage located in the beautiful countryside, perfect for a peaceful retreat.',
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/5.jpg',
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/7.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/1.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/6.jpg'
    ],
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 13
    },
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3809553943508,
        longitude:  4.939309666406198,
        zoom: 16
      }
    },
    host: {
      name: 'Ann',
      isPro: false,
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/9.jpg'
    },
    goods: [
      'Fireplace',
      'Garden',
      'Parking'
    ]
  }
];

