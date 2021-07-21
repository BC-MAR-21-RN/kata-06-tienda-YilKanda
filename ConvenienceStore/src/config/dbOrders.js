export const orders = [
  {
    id: '0001',
    numberOrder: '0001',
    products: [
      {
        id: 1,
        name: 'Baya Frambu',
        amount: 2,
        price: 200,
      },
      {
        id: 2,
        name: 'Baya Latano',
        amount: 3,
        price: 300,
      },
      {
        id: 3,
        name: 'Baya Pinia',
        amount: 1,
        price: 100,
      },
    ],
    delivery: 10,
    shipped: true,
    total: 610,
  },
  {
    id: '0002',
    numberOrder: '0002',
    products: [
      {
        id: 1,
        name: 'Poción Normal',
        amount: 5,
        price: 500,
      },
      {
        id: 2,
        name: 'Super Poción',
        amount: 5,
        price: 1000,
      },
      {
        id: 3,
        name: 'Hyper Poción',
        amount: 1,
        price: 200,
      },
      {
        id: 4,
        name: 'Poción Maxima',
        amount: 1,
        price: 100,
      },
    ],
    delivery: 0,
    shipped: true,
    total: 1800,
  },
  {
    id: '0003',
    numberOrder: '0003',
    products: [
      {
        id: 1,
        name: 'Pokocho',
        amount: 2,
        price: 200,
      },
      {
        id: 2,
        name: 'Pase de Incursión Remota',
        amount: 5,
        price: 500,
      },
    ],
    delivery: 10,
    shipped: false,
    total: 710,
  },
];
