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
const productName = 'Дроид';
const pricePerItem = 3500;

// Пиши код ниже этой строки
const message = `Вы выбрали ${productName}, цена за штуку ${pricePerItem} кредитов.`

console.log(message);