/* Задача №-1 */
// Объяви две переменные, productName для названия товара и pricePerItem для хранения цены за штуку. При объявлении присвой переменным следующие характеристики товара:

// название - строка 'Дроид';
// цена за штуку - число 2000.

// const productName = 'Дроид';
// const pricePerItem = 2000;

//  console.log(productName);

//  console.log(pricePerItem);


/* Задача №-2 */

// Имя товара изменили на 'Ремонтный дроид' и увеличили его цену на 1500 кредитов. Переопредели значения переменных pricePerItem и productName после их объявления.

// let productName = 'Дроид';
// productName = 'Ремонтный дроид';
// let pricePerItem = 2000;
// pricePerItem = 3500;

//  console.log(productName);

//  console.log(pricePerItem);


/* Задача №-3 */

// Объяви следующие переменные используя ключевое слово const или let и присвой им соответствующие значения.

// topSpeed - число 160.
// distance - число 617.54.
// login - строка 'mango935'.
// isOnline - буль true.
// isAdmin - буль false.


// const topSpeed = 160;
// const distance = 617.54;

// let login = 'mango935';

// const isOnline = true;
// const isAdmin = false;

// console.log(topSpeed);
// console.log(distance);
// console.log(login);
// console.log(isOnline);
// console.log(isAdmin);

/* Задача №-4 */

// Дополни код, присвоив переменной totalPrice выражение для подсчёта общей суммы заказа. Переменная pricePerItem хранит цену одной единицы товара, а orderedQuantity - количество едниц товара в заказке.

// const pricePerItem = 3500;
// const orderedQuantity = 4;

// const totalPrice = pricePerItem * orderedQuantity;

// console.log(totalPrice);

/* Задача №-5 */

// Объяви перемнную message и запиши в неё сообщение о покупке, строку в формате: Вы выбрали <имя товара>, цена за штуку <цена товара> кредитов. Где <имя товара> и <цена товара> это значения переменных productName и pricePerItem. Используй синтаксис шаблонных строк.

// Базовый код
// const productName = 'Дроид';
// const pricePerItem = 3500;

// // Пиши код ниже этой строки
// const message = `Вы выбрали ${productName}, цена за штуку ${pricePerItem} кредитов.`

// console.log(message);


/* Задача №-6 */

// Магазин по продаже ремонтных дроидов готов к открытию, осталось написать скрипт для их заказа. Объяви переменные и присвой им соответствующие значения:
// pricePerDroid - цена одного дроида, значение 800;
// orderedQuantity - количество дроидов в заказе, значение 6;
// deliveryFee - стоимость доставки, значение 50;
// totalPrice - общая сумма заказа к оплате, не забудь о стоимости доставки;
// message - сообщение о состоянии заказа в формате; Вы заказали дроидов на сумму <сумма заказа> кредитов. Доставка (<цена доставки> кредитов) включена в сумму заказа.

// const orderedQuantity = 6;
// const pricePerDroid = 800;
// const deliveryFee = 50;
// const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
// const message = `Вы заказали дроидов на сумму ${totalPrice} кредитов. Доставка (${deliveryFee} кредитов) включена в сумму заказа.`

// console.log(message);


/* Задача №-7 */

// Объяви функцию sayHi, внутри которой добавь console.log() со строкой 'Привет, это моя первая функция!'.
// После объявления вызови функцию sayHi.

// function sayHi() {
//   console.log('Привет, это моя первая функция!');
// }

// sayHi();

/* Задача №-8 */

// Функция add должна уметь складывать три числа и выводить результат в консоль. Добавь функции add три параметра a, b и c, которые будут получать значения аргументов при её вызове.

// Дополни console.log() так, чтобы он логировал строку 'Результат сложения равен <результат>', где <результат> это сумма переданных чисел.

// function add(a, b, c) {
//   console.log(`Результат сложения равен ${a + b + c}`);
// }
  
// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

/* Задача №-9 */

// Дополни код функции add так, чтобы она возвращала результат сложения значений трёх параметров a, b и c.

// function add(a, b, c) {
//   return a + b + c;
  
// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

/* Задача №-10 */

// Функция makeMessage(name, price) составляет и возвращает сообщение о покупке. Она объявляет два параметра, значения которых будут задаваться во время её вызова.

// name - название товара
// price - цена товара
// Дополни код функции так, чтобы в переменную message записывалась строка Вы выбрали <имя товара>, цена за штуку <цена товара> кредитов, где <имя товара> и <цена товара> это значения параметров name и price. Используй синтаксис шаблонных строк

// function makeMessage (name, price) {
  
//    const message = `Вы выбрали ${name}, цена за штуку ${price} кредитов`;
  
//   return message;
// };

/* Задача №-11 */

// Функция calculateTotalPrice считает и возвращает общую сумму покупки. Она принимает два параметра, значения которых будут задаваться во время её вызова.

// orderedQuantity - количество единиц товара в заказе;
// pricePerItem - цена одной единицы товара.
// Дополни код функции так, чтобы в переменную totalPrice записывалась общая сумма покупки, результат умножения кол-ва товаров на цену одного.

// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//   const totalPrice = orderedQuantity * pricePerItem;

//   return totalPrice;
// };


/* Задача №-12 */
// Функция makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) составляет и возвращает сообщение о покупке ремонтных дроидов. Она объявляет три параметра, значения которых будут задаваться во время её вызова.

// orderedQuantity - количество дроидов в заказе
// pricePerDroid - цена одного дроида
// deliveryFee - стоимость доставки
// Дополни код функции так, чтобы она возвращала сообщение о заказе в формате Вы заказали дроидов на сумму <сумма заказа> кредитов. Доставка (<цена доставки> кредитов) включена в сумму заказа.. Не забудь о цене доставки при вычислениях общей стоимости.

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {

//   message = `Вы заказали дроидов на сумму ${orderedQuantity * pricePerDroid + deliveryFee} кредитов. Доставка (${deliveryFee} кредитов) включена в сумму заказа.`

//   return message;
// }

/* Задача №-13 */
// Функция isAdult объявляет один параметр age (возраст), значение которого будет задаваться во время её вызова. Присвой переменной passed выражение проверки возраста пользователя на совершеннолетие. Человек считается совершеннолетним в возрасте 18 лет и старше.

// function isAdult(age) {
//   const passed = age >= 18;

//   return passed;
// }

/* Задача №-14 */
// Функция `isValidPassword(password)` проверяет равенство сохранённого и введённого паролей и возвращает результат проверки - буль `true` или `false`. Переменная `SAVED_PASSWORD` хранит значение ранее сохраненного пароля. Введённый пароль передаётся в параметр `password`.
// Присвой переменной isMatch выражение проверки равенства введённого и сохранённого ранее паролей. Результатом выражения проверки должно быть true, если значения совпадают, и false, если нет.

// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   const isMatch = password === 'jqueryismyjam';

//   return isMatch;
// }

/* Задача №-15 */

// Добавь выражение проверки совершеннолетия пользователя, значения параметра age, в условие для инструкции if.

// Если пользователь совершеннолетний, должен выполняться блок if и в переменную message записывается строка 'Вы совершеннолетний человек'.
// В противном случае должен выполняться блок else и записывается строка 'Вы не совершеннолетний человек'.

// function checkAge(age) {
//   let message;

//   if (age >= 18) { // Дополни эту строку
//     message = 'Вы совершеннолетний человек';
//   } else {
//     message = 'Вы не совершеннолетний человек';
//   }

//   return message;
// }


/* Задача №-16 */
// Функция checkStorage(available, ordered) проверяет возможность оформления заказа и возвращает сообщение о результате. Она объявляет два параметра, значения которых будут задаваться во время её вызова:

// available - общее количество товаров на складе
// ordered - единиц товара в заказе
// Используя ветвления дополни код функции так, что:

// Если в заказе указано число, превышающее количество товаров на складе, в переменную message записывается строка 'На складе недостаточно товаров!'.
// В противном случае записывается строка 'Заказ оформлен, с вами свяжется менеджер'.

// function checkStorage(available, ordered) {
//   let message;
  
//   if (ordered > available) {
//   message = 'На складе недостаточно товаров!';
// } else {
//   message = 'Заказ оформлен, с вами свяжется менеджер';
// }
 
//   return message;
// }


/* Задача №-17 */
// Замени выражения со стандартными математеческими операторами на комбинированный оператор присвоения с добавлением, вычитанием, умножением и делением.

// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

/* Задача №-18 */

// Станция по продаже ремонтных дроидов готова к запуску, осталось написать программное обеспечение для отдела продаж.

// Функция makeTransaction(pricePerDroid, orderedQuantity, customerCredits) выполняет транзакцию по продаже дроидов и возвращает сообщение о результате операции. Она объявляет три параметра, значения которых будут задаваться во время её вызова:

// pricePerDroid - цена одного дроида;
// orderedQuantity - кол-во заказанных дроидов;
// customerCredits - сумма средств на счету клиента.
// Дополни её следующим функционалом:

// Объяви переменную totalPrice для хранения общей суммы заказа и присвой ей выражение расчёта этой суммы.
// Добавь проверку сможет ли клиент оплатить заказ:
// если сумма к оплате превышает количество кредитов на счету клиента, запиши в переменную message строку 'Недостаточно средств на счету!';
// в противном случае, вычти сумму покупки со счёта клиента и запиши в переменную message сообщение: 'Вы купили <число> дроидов, на счету осталось <число> кредитов'.

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Пиши код ниже этой строки
//   const totalPrice = pricePerDroid * orderedQuantity;
//   if (totalPrice > customerCredits) {
//    message = 'Недостаточно средств на счету!'; 
//   }
//   else {
//     message = `Вы купили ${orderedQuantity} дроидов, на счету осталось ${customerCredits - totalPrice} кредитов`;
//   }
//   // Пиши код выше этой строки
//   return message;
// }

/* Задача №-19 */
// Функция checkPassword(password) получает пароль пользователя в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения, хранящееся в переменной message.

// Если значение параметра password равно null, значит пользователь отменил операцию и в message записывается строка 'Отменено пользователем!'.
// Если значение параметра password совпадает со значением ADMIN_PASSWORD, в переменную message присваивается строка 'Добро пожаловать!'.
// Если ни одно из предыдущих условий не выполнилось, в переменную message записывается строка 'Доступ запрещен, неверный пароль!'.

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) { // Дополни эту строку
//     message =  'Отменено пользователем!';
//   } else if (password === ADMIN_PASSWORD) { // Дополни эту строку
//     message = 'Добро пожаловать!';
//   } else {
//     message = 'Доступ запрещен, неверный пароль!';
//   }

//   return message;
// }

/* Задача №-20 */

// Функция checkStorage(available, ordered) проверяет возможность оформления заказа и возвращает сообщение о результате. Она объявляет два параметра, значения которых будут задаваться во время её вызова.

// available - доступное количество товаров на складе
// ordered - единиц товара в заказе
// Используя ветвления дополни код функции так, что:

// Если в заказе еще нет товаров, то есть значение параметра ordered равно 0, в переменную message присваивается строка В заказе еще нет товаров.
// Eсли товаров в заказе больше чем доступно товаров на складе, то в переменную message присваивается строка 'Слишком большой заказ, на складе недостаточно товаров!'.
// В противном случае в переменную message присваевается строка 'Заказ оформлен, с вами свяжется менеджер'.

// function checkStorage(available, ordered) {
//   let message;
//   if (ordered === 0) {
//     message = 'В заказе еще нет товаров'
//   }
//   else if (ordered > available) {
//   message = 'Слишком большой заказ, на складе недостаточно товаров!'
//   }
//   else {
//   message = 'Заказ оформлен, с вами свяжется менеджер'
//   }
  
//   return message;
// }

/* Задача №-21 */

// Функция isNumberInRange(start, end, number) проверяет, входит ли число в промежуток. Она объявляет три параметра, значения которых будут задаваться во время её вызова:

// number - число, вхождение которого проверяется
// start - начало числового промежутка
// end - конец числового промежутка
// Присвой переменной isInRange выражение проверки вхождения number в числовой промеждуток от srart до end. То есть число должно быть больше либо равно start и меньше либо равно end. Результатом выражения проверки будет буль true или false.

// function isNumberInRange(start, end, number) {
//   const isInRange = (number >= start && number <= end); // дополни эту строку

//   return isInRange;
// }


/* Задача №-22 */
// Функция checkIfCanAccessContent(subType) проверяет, может ли пользователь получить доступ к контенту. Проверка происходит по типу подписки. Получить доступ могут только пользователи с подпиской pro или vip.

// Присвой переменной canAccessContent выражение проверки подписки. Если значение параметра subType равно строкам 'pro' или 'vip', пользователь получит доступ. Результатом выражения проверки будет буль true или false.

// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === 'pro' || subType === 'vip'; // дополни эту строку

//   return canAccessContent;
// }

/* Задача №-23 */