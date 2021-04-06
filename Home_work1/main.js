
// const { sort } = require("semver");

console.log('Sample JavaScript HW#1');

/*
 * #1
 *
 * Создайте переменные со значениями
 */

var myNum = 10;
console.log('myNum: ', myNum);
// имя переменной: myNum, значение: 10
var myStr = 'строка';
console.log('myStr:', myStr);
// имя переменной: myStr, значение: 'строка'
var myBool = true;
console.log('myBool:', myBool);
// имя переменной: myBool, значение: true
var myArr = [1, 2, 3, 4, 5];
console.log('myArr:', myArr);
// имя переменной: myArr, значения: 1, 2, 3, 4, 5
var myObj = {
  first: 'First Name',
  last: 'Last Name'
}
console.log('myObj:', myObj);

// имя переменной myObj, значения: first: 'First Name', last: 'Last Name'

/*
 * #2
 *
 * Отформатируйте целое число, которое хранится в переменной myNum,
 * чтобы получить результат с 2 знаками после запятой.
 * Результат сохраните в переменную decimal2.
 */

var decimal2 = myNum.toFixed(2);
console.log(decimal2);
// decimal2

/*
 * #3
 *
 * Создайте переменную i для которой выполните префиксный
 * и постфиксный инкремент и декремент.
 * Поэкспериментируйте с результатами, выводя их в консоль.
 */
var i = 1;
console.log(i++);//Постфиксный инкремент
console.log(i);
console.log(++i);//Префиксный инкремент
console.log(i);
console.log(--i);//Префиксный декремент
console.log(i);
console.log(i--);//Префиксный декремент
console.log(i);


// i

/*
 * #4
 *
 * Создайте новую переменную myTest и присвойте ей значение 20.
 * Выполните присваивание с операцией, используя операторы: +=, –=, *=, /=, %=.
 * Результаты присваиваются в myTest, затем выводятся в консоль.
 * В вычислениях можно использовать объявленную ранее переменную myNum и/или числа.
 */


var myTest = 20;
myTest += 30;
console.log(myTest);
myTest -= myNum;
console.log(myTest);
myTest *= 2;
console.log(myTest);
myTest /= myNum;
console.log(myTest);
myTest %= 6;
console.log(myTest);

// myTest

// +=

// –=

// *=

// /=

// %=

/*
 * #5
 *
 * Используя свойства и методы объекта Math, присвойте переменным и отобразите в консоли
 */



var myPi = Math.PI;
console.log(myPi);
// константа Pi → myPi
var myRound = Math.round(89.279);
console.log(myRound);
// округленное значение числа 89.279 → myRound
var myRandom = Math.random() * 10;
console.log(myRandom);
// случайное число между 0..10 → myRandom
var myPow = Math.pow(3,5);
console.log(myPow);
// 3 в 5 степени → myPow

/*
 * #6
 *
 * Создайте объект с именем strObj.
 * Присвойте ключу str строку текста "Мама мыла раму, рама мыла маму", ключу length установите длину этой строки.
 */


// Мама мыла раму, рама мыла маму
var strObj = {
  str: 'Мама мыла раму, рама мыла маму'
};

strObj.length = strObj.str.length;
console.log(strObj);

// strObj

/*
 * #7
 *
 * Проверьте наличие текста 'рама' в поле str объекта strObj (см.п.6),
 * результат сохраните в переменную isRamaPos и выведите ее в консоль.
 */

var isRamaPos = strObj.str.indexOf('рама');
console.log(isRamaPos);
// isRamaPos

/*
 * #8
 *
 * Выполните переименование подстроки в строке.
 * В качестве исходной строки используйте значение поля str объекта strObj (см.п.6), результат сохраните в переменную strReplace и отобразите в консоли.
 * Исходная строка: 'Мама мыла раму, рама мыла маму'
 *       Результат: 'Мама моет раму, Рама держит маму'
 */

var strReplace = strObj.str.replace('мыла', 'моет');
strReplace = strReplace.replace('рама', 'Рама');
strReplace = strReplace.replace('мыла', 'держит');

console.log(strReplace);
  // strReplace

/*
 * #9
 *
 * Преобразуйте любую строку в верхний, затем в нижний регистры, результат отобразите в консоли.
 */

console.log('Верхний регистр'.toUpperCase());
console.log('Нижний регистр'.toLowerCase());
