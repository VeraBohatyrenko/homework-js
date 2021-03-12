/* Задача №-1 */

// Запиши условие в инструкции if так, чтобы функция работала правильно.

// function checkAge(age) {
//   if (age >= 18) { // Дополни эту строку
//     return 'Вы совершеннолетний человек';
//   }

//   return 'Вы не совершеннолетний человек';
// }

/* Задача №-2 */
// Функция checkPassword получает пароль пользователя в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения.

// Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат»:

// удали переменную message;
// удали else;
// код должен работать так же, как и до оптимизации.

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   // Пиши код ниже этой строки
 

//   if (password === ADMIN_PASSWORD) {
//     return 'Добро пожаловать!';
//   }

//   return 'Доступ запрещен, неверный пароль!';
//   // Пиши код выше этой строки
// }

// console.log(checkPassword('mangohackzor')); 
// console.log(checkPassword('polyhax'));  
// console.log(checkPassword('jqueryismyjam'));  

/* Задача №-3 */

// Функция checkStorage проверяет возможность оформления заказа и возвращает сообщение о результате. Она принимает два параметра, значения которых будут задаваться во время её вызова.

// available - доступное количество товаров на складе;
// ordered - количество единиц товара в заказе.
// Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат».

// function checkStorage(available, ordered) {
//   // Пиши код ниже этой строки

//   if (ordered === 0) {
//      return 'В заказе еще нет товаров';
//   } if (ordered > available) {
//      return 'Слишком большой заказ, на складе недостаточно товаров!';
//   } 
//     return 'Заказ оформлен, с вами свяжется менеджер';
  

//   // Пиши код выше этой строки
// }

/* Задача №-4 */

// Объяви переменную fruits и присвой ей массив фруктов - строк 'яблоко', 'слива', 'груша' и 'апельсин'.

// const fruits=['яблоко', 'слива', 'груша', 'апельсин'];

/* Задача №-5 */

// Объяви три переменные и присвой каждой из них значение, используя нотацию квадратных скобок.

// Имя переменной	Значение переменной
// firstElement	первый элемент массива
// secondElement	второй элемент массива
// lastElement	последний элемент массива


// Стартовый код
// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
// // Пиши код ниже этой строки
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3]; 

/* Задача №-6 */

// Переопредели значения элементов с индексами 1 и 3. Замени 'слива' на 'персик', а 'апельсин' на 'банан'.

// // Стартовый код
// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
// // Пиши код ниже этой строки
// fruits[1]='персик';
// fruits[3]='банан';

// console.log(fruits);

/* Задача №-7 */

// Объяви переменную fruitsArrayLength и присвой ей длину массива fruits используя свойство length.

// // Стартовый код
// const fruits = ['яблоко', 'персик', 'груша', 'банан'];
// // Пиши код ниже этой строки
// const fruitsArrayLength = fruits.length;

/* Задача №-8 */

// Объяви две перемнные:

// Имя переменной	Ожидаемое значение
// lastElementIndex	индекс последнего элемента масcива fruits через длина_массива - 1
// lastElement	значение последнего элемента массива

// // Стартовый код
// const fruits = ['яблоко', 'персик', 'груша', 'банан'];
// // Пиши код ниже этой строки
// const lastElementIndex = fruits.length-1;
// const lastElement = fruits[lastElementIndex];

/* Задача №-9 */

// Напиши функцию getExtremeElements(array) которая принимает один параметр array - массив элементов произвольной длины. Функция должна возвращать массив из двух элементов - первого и последнего элемента параметра array.

// function getExtremeElements(array) {
//     // Пиши код ниже этой строки
//   const firstElement = array[0];
//   const index0flastElement = array.length-1;
//  return [array[0], array[array.length-1]];
	


//     // Пиши код выше этой строки
//   }console.log();


/* Задача №-10 */

// Дополни код функции splitMessage(message, delimeter) так, чтобы она возвращала в переменной words результат разделения строки message по разделителю delimeter - массив строк.

//  function splitMessage(message, delimeter) {
//   let words;
//   // Пиши код ниже этой строки
  
// words = message.split(delimeter)
 
  
//   // Пиши код выше этой строки
//   return words;
// }

/* Задача №-11 */

// Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки, в зависимости от количества слов и цены за слово.

// Объявлена функция calculateEngravingPrice(message, pricePerWord). Эта функция принимает строку, состоящую из слов разделённых только пробелами (параметр message) и цену гравировки одного слова (параметр pricePerWord).

// Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.

// function calculateEngravingPrice(message, pricePerWord) {
//   // Пиши код ниже этой строки
// let totalPrice = 0;
//   totalPrice = message.split(' ').length * pricePerWord;
	
// return totalPrice;
//   // Пиши код выше этой строки
// }

/* Задача №-12 */
// Дополни код функции makeStringFromArray(array, delimeter) так, чтобы она возвращала в переменной string результат соединения элементов массива array c разделителем delimeter - строку.

// function makeStringFromArray(array, delimeter) {
//   let string;
//   // Пиши код ниже этой строки
 
//  string = array.join(delimeter);
 
//   // Пиши код выше этой строки
//   return string;
// }

/* Задача №-13 */

// Термин slug - это человеко-понятный уникальный идентификатор, который используется в веб-разработке для создания читабельных URL-адесов.

// Например, вместо того чтобы пользователь увидел в адресной строке mysite.com/posts/1q8fh74tx, можно сделать slug из названия статьи. В результате адрес получится более приятным для восприятия: mysite.com/posts/массивы-для-новичков.

// Внимание
// Slug это всегда строка в нижнем регистре, слова которой разделены тире.

// Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title, и возвращает slug, созданный из этой строки.

// Значением параметра title будут строки, слова которых разделены только пробелами.
// Все символы slug должны быть в нижнем регистре.
// Все слова slug должна быть разделены тире.

// function slugify(title) {
//   // Пиши код ниже этой строки
 
//  let slug = title.toLowerCase().split(' ').join('-');
 
  
//   return slug;
//   // Пиши код выше этой строки
// }

/* Задача №-14 */

// Дополни код так, чтобы переменные содержали частичные копии исходного массива fruits.

// firstTwoEls - массив из первых двух элементов.
// nonExtremeEls - массив из всех элементов кроме первого и последнего.
// lastThreeEls - массив из трёх последних элементов.

// const fruits = ['яблоко', 'слива', 'груша', 'апельсин', 'банан'];
// // Пиши код ниже этой строки
// const firstTwoEls = (fruits.slice(0,2));
// const nonExtremeEls = (fruits.slice(1,4));
// const lastThreeEls = (fruits.slice(2,5));

/* Задача №-15 */

// Дополни код так, чтобы в переменной allClients получился массив всех элементов массивов oldClients и newClients.


// const oldClients = ['Манго', 'Аякс', 'Поли', 'Киви'];
// const newClients = ['Персик', 'Хьюстон'];

// const allClients = oldClients.concat(newClients); // Дополни эту строку

/* Задача №-16 */
// Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух исходных firstArray и secondArray. Параметр maxLength содержит максимально допустимую длину нового массива.

// Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов.

// В противном случае функция должна вернуть новый массив целиком.

// function makeArray(firstArray, secondArray, maxLength) {
//     // Пиши код ниже этой строки
//   const allArray = firstArray.concat(secondArray).slice(0, maxLength);

//     return allArray;
//     // Пиши код выше этой строки
// }

