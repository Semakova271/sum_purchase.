// Импортируем класс Cart из файла Cart.ts
import Cart from '../service/Cart';

// Тест: проверяем, что новая корзина пуста
test('new card should be empty', () => {
  const cart = new Cart(); // Создаем новый экземпляр корзины
  expect(cart.items.length).toBe(0); // Проверяем, что в корзине нет товаров
});

// Тест: добавляем товар в корзину
test('add item to cart', () => {
  const cart = new Cart(); // Создаем новый экземпляр корзины
  const item = { id: 1, name: 'Product 1', price: 100 }; // Создаем объект товара
  cart.add(item); // Добавляем товар в корзину
  expect(cart.items.length).toBe(1); // Проверяем, что в корзине теперь один товар
  expect(cart.items[0]).toEqual(item); // Проверяем, что добавленный товар соответствует ожидаемому
});

// Тест: рассчитываем общую стоимость без скидки
test('calculate total without discount', () => {
  const cart = new Cart(); // Создаем новый экземпляр корзины
  const item1 = { id: 1, name: 'Product 1', price: 100 }; // Создаем первый товар
  const item2 = { id: 2, name: 'Product 2', price: 200 }; // Создаем второй товар
  cart.add(item1); // Добавляем первый товар в корзину
  cart.add(item2); // Добавляем второй товар в корзину
  expect(cart.calculateTotal()).toBe(300); // Проверяем, что общая стоимость равна сумме цен товаров
});

// Тест: рассчитываем общую стоимость со скидкой
test('calculate total with discount', () => {
  const cart = new Cart(); // Создаем новый экземпляр корзины
  const item1 = { id: 1, name: 'Product 1', price: 100 }; // Создаем первый товар
  const item2 = { id: 2, name: 'Product 2', price: 200 }; // Создаем второй товар
  cart.add(item1); // Добавляем первый товар в корзину
  cart.add(item2); // Добавляем второй товар в корзину
  const discount = 10; // Устанавливаем скидку в 10%
  expect(cart.calculateTotalWithDiscount(discount)).toBe(270); // Проверяем, что стоимость с учетом скидки верна
});

// Тест: удаляем товар по ID
test('remove item by id', () => {
  const cart = new Cart(); // Создаем новый экземпляр корзины
  const item1 = { id: 1, name: 'Product 1', price: 100 }; // Создаем первый товар
  const item2 = { id: 2, name: 'Product 2', price: 200 }; // Создаем второй товар
  cart.add(item1); // Добавляем первый товар в корзину
  cart.add(item2); // Добавляем второй товар в корзину
  cart.removeItemById(1); // Удаляем товар с ID 1
  expect(cart.items.length).toBe(1); // Проверяем, что в корзине остался один товар
  expect(cart.items[0]).toEqual(item2); // Проверяем, что оставшийся товар соответствует ожидаемому
});

// Тест: попытка удалить несуществующий товар не должна влиять на корзину
test('remove non-existent item should not affect the cart', () => {
  const cart = new Cart(); // Создаем новый экземпляр корзины
  const item = { id: 1, name: 'Product 1', price: 100 }; // Создаем товар
  cart.add(item); // Добавляем товар в корзину
  cart.removeItemById(999); // Пытаемся удалить несуществующий товар с ID 999
  expect(cart.items.length).toBe(1); // Проверяем, что количество товаров в корзине не изменилось
  expect(cart.items[0]).toEqual(item); // Проверяем, что товар остался в корзине
});
