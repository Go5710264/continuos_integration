import calculateTotal from '../calculate'; // позволяет извлеч пакет

test('basic test', () => {
  const result = 4;
  expect(result).toBe(4);
});

test('calculateTotal sum', () => {
  const list = [
    {
      id: 456,
      name: 'Война и мир',
      count: 3,
      price: 400,
    },
    {
      id: 77,
      name: 'JS',
      count: 1,
      price: 1300,
    },
  ];

  const result = calculateTotal(list);
  expect(result).toBe(2500); // какой результат должен быть получен
});

test('calculateTotal sum with discount', () => {
  const list = [
    {
      id: 456,
      name: 'Война и мир',
      count: 3,
      price: 401,
    },
    {
      id: 77,
      name: 'JS',
      count: 1,
      price: 1300,
    },
  ];

  const result = calculateTotal(list, true);
  expect(result).toBeCloseTo(2230.173); // результат должен быть примерно равен данному значению
});
