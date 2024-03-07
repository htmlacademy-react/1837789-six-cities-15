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
        latitude: 52.37454,
        longitude: 4.897976,
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
        latitude: 52.37454,
        longitude: 4.897976,
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
        latitude: 52.37454,
        longitude: 4.897976,
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
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
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
        latitude: 52.37454,
        longitude: 4.897976,
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
  },

  {
    id: '5',
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
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 13
    },
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
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
    id: '6',
    title: 'Cozy and warm apartment in the heart of Paris',
    type: 'apartment',
    price: 80,
    rating: 2.5,
    bedrooms: 2,
    maxAdults: 3,
    isPremium: true,
    isFavorite: false,
    description: 'A cozy and warm apartment located in the heart of Paris, perfect for a romantic getaway.',
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/5.jpg',
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/1.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/5.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/6.jpg'
    ],
    location: {
      latitude: 50.932361,
      longitude: 6.937974,
      zoom: 13
    },
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
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
    id: '7',
    title: 'Spacious and modern apartment in New York',
    type: 'apartment',
    price: 200,
    rating: 4.9,
    bedrooms: 4,
    maxAdults: 6,
    isPremium: true,
    isFavorite: true,
    description: 'A spacious and modern apartment located in the heart of New York City, perfect for a family vacation.',
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/6.jpg',
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/12.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/7.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/8.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/9.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/11.jpg'
    ],
    location: {
      latitude: 50.854557,
      longitude: 4.364697,
      zoom: 13
    },
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
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
    id: '8',
    title: 'Charming and cozy cottage in the countryside',
    type: 'house',
    price: 150,
    rating: 4.3,
    bedrooms: 2,
    maxAdults: 4,
    isPremium: false,
    isFavorite: false,
    description: 'A charming and cozy cottage located in the beautiful countryside, perfect for a peaceful retreat.',
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/7.jpg',
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/7.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/1.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/6.jpg'
    ],
    location: {
      latitude: 53.538341,
      longitude: 9.976654000000002,
      zoom: 13
    },
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 16
      }
    },
    host: {
      name: 'Ann',
      isPro: false,
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/8.jpg'
    },
    goods: [
      'Fireplace',
      'Garden',
      'Parking'
    ]
  }
];

