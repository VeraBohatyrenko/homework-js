


// /* Задача №-1 */

// Функция calculateTotalPrice(orderedItems) принимает один параметр orderedItems - массив чисел, и рассчитывает общую сумму его элементов, которая сохраняется в переменной totalPrice и возвращается как результат работы функции.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Пиши код ниже этой строки
//   orderedItems.forEach(function (number) {
//     totalPrice += number;
//   });
 
 

//   // Пиши код выше этой строки
//   return totalPrice;
// }

// /* Задача №-2 */

// Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив, в котором будут только те элементы оригинального массива, которые больше чем значение параметра value.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Пиши код ниже этой строки
//       numbers.forEach(function (number) {
//     filteredNumbers > value;
//   });
 
//     for (let i = 0; i < numbers.length; i += 1) {
//       if (numbers[i] > value) {
//         filteredNumbers.push(numbers[i]);
//       }
//     }
  
//     // Пиши код выше этой строки
//     return filteredNumbers;
//   }


// /* Задача №-3 */

// Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины в параметры firstArray и secondArray, и возвращает новый массив их общих элементов, то есть тех которые есть в обоих массивах.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Пиши код ниже этой строки
  
//    firstArray.forEach(function (number) {
//      commonElements > secondArray;
//   });
  
//     for (let i = 0; i < firstArray.length; i += 1) {
//       if (secondArray.includes(firstArray[i])) {
//         commonElements.push(firstArray[i]);
//       }
//     }
  
//     return commonElements;
//     // Пиши код выше этой строки
//   }

// /* Задача №-4 */


// Выполни рефакторинг функции calculateTotalPrice() так, чтобы она была объявлена как стрелочная.

// // Пиши код ниже этой строки

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   // Пиши код выше этой строки
//   return quantity * pricePerItem;
// }

// /* Задача №-5 */

// Выполни рефакторинг функции calculateTotalPrice() так, чтобы она использовала неявный возврат.

// // Пиши код ниже этой строки
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// // Пиши код выше этой строки

// /* Задача №-6 */

// Выполни рефакторинг функции calculateTotalPrice(orderedItems) заменив её объявление на стрелочную функцию.Замени коллбек - функцию передаваемую в метод forEach() на стрелочную функцию.

// // Пиши код ниже этой строки
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });

//   return totalPrice;
// }
// // Пиши код выше этой строки

// /* Задача №-7 */

// Замени объявление функции filterArray() и коллбек для метода forEach() на стрелочные функции.

// // Пиши код ниже этой строки
// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];
  
//     numbers.forEach((number) => {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });
  
//     // Пиши код выше этой строки
//     return filteredNumbers;
//   }

// /* Задача №-8 */

// Замени объявление функции getCommonElements() и коллбек для метода forEach() на стрелочные функции.

// // Пиши код ниже этой строки
// const getCommonElements = (firstArray, secondArray) => {
//     const commonElements = [];
  
//     firstArray.forEach((element) => {
//       if (secondArray.includes(element)) {
//         commonElements.push(element);
//       }
//     });
  
//     // Пиши код выше этой строки
//     return commonElements;
//   }
  

// /* Задача №-9 */

// Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент, значение которого это чётное число, добавляя к нему значение параметра value.

// Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers, а создавала, наполняла и возвращала новый массив с обновлёнными значениями.

// function changeEven(numbers, value) {
//   // Пиши код ниже этой строки
//   const result = [];
//   numbers.forEach((element) => {
//     if (element % 2 === 0) {
//       result.push(element + value)
//     } else {
//       result.push(element)
//     }
//     });

//     return result;
  
  
//  // Пиши код выше этой строки
// }

// /* Задача №-10 */

// Дополни код так, чтобы в переменной planetsLengths получился массив длин названий планет. Обязательно используй метод map().

// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// // Пиши код ниже этой строки
// const planetsLengths = planets.map((planet) => planet.length);

// /* Задача №-11 */

// Используя метод map() сделай так, чтобы в переменной titles получился массив названий книг(свойство title) из всех объектов массива books.

// const books = [
//     { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//     { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//     { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//     { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//     { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
//   ];
//   // Пиши код ниже этой строки
  
//   const titles = books.map(book => book.title);

// /* Задача №-12 */
// Используя метод flatMap() сделай так, чтобы в переменной genres получился массив всех жанров книг(свойство genres) из массива книг books.

// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика']
//     }
//   ];
//   // Пиши код ниже этой строки
  
//   const genres = books.flatMap((book) => book.genres);

// /* Задача №-13 */

// Пиши код ниже этой строки
// const getUserNames = users.map((user) => {
//   return user.name;  

//   }); 

 const users = [];
const getUserNames = users.map(user => user.getUserName);
  // Пиши код выше этой строки
  console.log(['Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony']);