// let a = "10";
// alert (a);

//let a = "20";
//alert (a);

/*let year = "год выпуска первого iPhone";
alert (year);

let creator = "имя создателя языка JavaScript";
alert (creator);*/

/*let b = 10;
let c = 2;
alert (b + c);
alert (b - c);
alert (b * c);
alert (b/c);
let result = c ** 5;
alert (result);*/

/*let a = 9;
let b = 2;
alert (a % b);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num ++;
num --;
alert(num);

let age = prompt('Сколько вам лет?');
alert (age);

const user = {
    name: 'Bob',
    age: 32,
    isAdmin: true
};

user['city of residence'] = 'Moscow';

user['age'] = 33;
delete user ['city of residence'];

let info = prompt('Какую информацию хотите узнать о пользователе?', 'Укажите name, age или isAdmin');
alert (user[info]);
console.log(user[info]);

let userName = prompt('Как вас зовут?');
let greeting = `Привет, ${userName}!`;
alert(greeting);

let password = 'пароль';
let input = prompt ('Введите пароль');
if (input === password) {
    alert ('Пароль введен верно');
} else {
    alert ('Пароль введен неправильно');
}

let c = prompt ('Введите любое число');
if (c>0 && c<10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

let d = prompt ('Введите первое число');
let e = prompt ('Введите второе число');
if (e>100 || d>100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

let a = '2';
let b = '3';
a = Number ('2');
b = Number ('3');
alert (a+b);

let monthNumber = Number (prompt ('Введите номер месяца'));
switch (monthNumber) {
    case 12:
    case 1:
    case 2:
        console.log('Принадлежит к сезону "Зима"')
        break;
    case 3:
    case 4:
    case 5:
        console.log('Принадлежит к сезону "Весна"')
        break;
    case 6:
    case 7:
    case 8:
        console.log('Принадлежит к сезону "Лето"')
        break;
    case 9:
    case 10:
    case 11:
        console.log('Принадлежит к сезону "Осень"')
        break;
    default:
        console.log('Такого месяца не существует');
        break;
}

let num = Number (prompt ('Пожалуйста, введите любое число'));
num = Math.abs (num);
Number.isNaN(num)
if (num%2 ===1) {
    alert ('Число нечетное');
} else if (num%2 ===0) {
    alert ('Число четное');
} else {
    alert ('Это не число');
}

let clientOS = Number (prompt ('Укажите, пожалуйста, 0, если вы используете iOS, и 1, если - Android'));
if (clientOS === 0) {
    console.log ('Установите версию приложения для iOS по ссылке'); 
} else if (clientOS === 1) {
    console.log ('Установите версию приложения для Android по ссылке');
} else {
    console.log ('Мы не работаем с данной ОС');
} 
    
let clientDeviceYear = Number (prompt ('Пожалуйста, укажите год выпуска вашего устройства'));
if (clientOS === 0 && clientDeviceYear >=2015) {
    console.log ('Установите версию приложения для iOS по ссылке');
} else if (clientOS === 0 && clientDeviceYear < 2015) {
    console.log('Установите облегченную версию приложения для iOS по ссылке'); 
} else if (clientOS === 1 && clientDeviceYear >=2015) {
    console.log ('Установите версию приложения для Android по ссылке');
} else if (clientOS === 1 && clientDeviceYear < 2015) {
    console.log('Установите облегченную версию приложения для Android по ссылке'); 
} else {
    console.log('Мы не работаем с данной ОС');
}*/

/*let i = 1;
let l = 2;
while (i<=l) {
    console.log('Привет');
    i++;
}

let j = 1;
while (j < 6) {
    console.log(j);
    j++;
}

let k = 7;
while (k < 23) {
    console.log(k);
    k++
}

let obj = {
    'Коля': 200,
    'Вася': 300,
    'Петя': 400
};
for (let key in obj) {
    alert(`${key} - зарплата ${obj[key]} долларов.`)
}

let n = 1000;
let num = 0;
while (n > 50) {
    num++;
    n = n / 2;
}
console.log(n);
console.log(num);

let dayNumberFri = prompt('Введите номер первой пятницы месяца (число от 1 до 7)');

for (let dayNumber = dayNumberFri; dayNumber<=31; dayNumber++) {
    if (dayNumber % 7 == dayNumberFri) {
        alert(`Сегодня пятница, ${dayNumber}-е число. Необходимо подготовить отчет.`);
        continue;
    }
}*/

/*function min(a, b) {
    if (a <= b) {
        return a;
    } else {
        return b;
    }
}

let result = min(8,4);
alert (result); 

let result1 = min(6,6);
alert (result1);

function even(n1) {
    if ( n1 % 2 == 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
}

let result3 = even(22);
console.log(result3);

let result4 = even(37);
console.log(result4);

function square(num) {
    console.log(num ** 2);   
}
square(3);
square(21);

function squareReturn(num1) {
    return(num1 ** 2);   
}
    
let result5 = squareReturn(22);
console.log(result5);

let result6 = squareReturn(37);
console.log(result6);

"use strict";
let age = prompt("Сколько Вам лет?", 13);
if (age < 0) {
    function printMessage() {
      alert("Вы ввели неправильное значение");  
    }
} else if (age < 13) {
    function printMessage() {
       alert("Привет, друг"); 
    }
} else {
    function printMessage() {
        alert("Добро пожаловать!");
    }
}

 printMessage();

 function correctNumber(a, b) {
    if (!isNaN(a || b)) {
        return a * b;
    } else {
        return 'Одно или оба значения не являются числом';
    }
 }

 let result7 = correctNumber(2, 3);
 console.log(result7);

 let result8 = correctNumber(-2, 13);
 console.log(result8);

 let result9 = correctNumber('hi', 3);
 console.log(result9);

let n = prompt('Пожалуйста, введите любое число');
function cube(n) {
    if (!isNaN(n)) {
        let result10 = n ** 3;
        return `${n} в кубе равняется ${result10}`;
    } else {
        return 'Переданный параметр не является числом';
    }
}

let result11 = cube(0);
console.log(result11);

let result12 = cube(1);
console.log(result12);

let result13 = cube(2);
console.log(result13);

let result14 = cube(3);
console.log(result14);

let result15 = cube(4);
console.log(result15);

let result16 = cube(5);
console.log(result16);

let result17 = cube(6);
console.log(result17);

let result18 = cube(7);
console.log(result18);

let result19 = cube(8);
console.log(result19);

let result20 = cube(9);
console.log(result20);

let result21 = cube(10);
console.log(result21);

const π = 3.14;

function getCircleArea() {
    return π * this.radius**2;    
}
function getCirclePerimeter() {
    return 2 * π * this.radius;   
}

const circle1 = {
    radius: 10,
    
    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter,
};

const circle2 = {
    radius: 33,
    
    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter,
};

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());

function getSeason() {
    const monthNumber = Number(prompt('Введите номер месяца'))
    if (monthNumber <= 11 && monthNumber >= 9) {
        alert ('Осень');        
    } else if (monthNumber === 12 || monthNumber === 1 || monthNumber === 2) {
        alert ('Зима');        
    } else if (monthNumber >= 3 && monthNumber <= 5) {
        alert ('Весна');        
    } else if (monthNumber >= 6 && monthNumber <= 8) {
        alert ('Лето');
    } else {
        console.log('Такого месяца не существует');
    } 
}*/

/*const numbers = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers [i]);
    if (numbers [i] == 10) break;
    
}

const numbs = [1, 5, 4, 10, 0, 3];
let ind = numbs.indexOf (4);
console.log(ind);

/*const numbs = [1, 5, 4, 10, 0, 3];
numbs.forEach ((el, index) => {
    if (el == 4) {
        console.log(`${index}`);
}});*/

/*let nums = [1, 3, 5, 10, 20];
nums = nums.join('');
console.log(nums);

let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = []; 
	
	for (let j = 0; j < 3; j++) {
		arr[i].push(1); 
	}
}

console.log(arr);

/*let arr = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
];

for (let item of arr) {
    console.log(item);
};*/

/*let array = [1, 1, 1];
array.push (2, 2, 2);
console.log(array);

let numerals = [9, 8, 7, 'a', 6, 5];
numerals = numerals.sort();
console.log(numerals);
numerals.pop();
console.log(numerals);

let n = Number(prompt('Пожалуйста, введите любое число от 1 до 10'));
let userNumbers = [1, 5, 4, 10, 0, 3];
let search = userNumbers.includes(n);
console.log(search);

let letters = ['a', 'b', 'c', 'd', 'e', 'f'];
letters.reverse();
letters = letters.join('');
console.log(letters);

let arrNumbers = [[1, 2, 3,],[4, 5, 6]];
let arrayNumb = arrNumbers.flat();
console.log(arrayNumb);

/*let arrNumbers = [
    [1, 2, 3],
    [4, 5, 6]
];
let arrayNumb = arrNumbers[0].concat(arrNumbers[1]);
console.log(arrayNumb);*/

/*let random = [7, 4, 8, 3, 4, 2];
for (let i = 0; i < random.length - 1; i++) {
 console.log(random [i] + random [i + 1]);   
}

function getSquareNumbers(square = [12, 5, 7, 43, 2]) {
    let result = square.map(item => item**2);
    console.log(result);  
}
getSquareNumbers();

function getLengthWords(longWords = []) {
    return getLength = longWords.map(str => str.length);  
}

getLengthWords(['word', 're', '', 'a', 'Hello, world!']); 
console.log(getLength);

let negative = [1, 2, 3, -1, -2, -3, 17, -54, 0];

let result1 = negative.filter(function(elem) {
    return elem < 0
    });

/*let result1 = negative.filter(function(elem) {
    if (elem < 0) {
        return true;
    } else {
        return false;
    };
});*/

/*console.log(result1);

let arrRandom = [];
for (let i = 0; i < 10; i++) {
  arrRandom[i] = Math.round(Math.random() * 10);
}
console.log(arrRandom);

let result2 = arrRandom.filter(item => item% 2 == 0);
console.log(result2);

let arrayRandom = [];
for (let i = 0; i < 6; i++) {
  arrayRandom[i] = Math.round(Math.random() * 10);
}
console.log(arrayRandom);

const getAverage = (numbersAverage) => {
  let sum = 0; 
  for (let i = 0; i < 6; i += 1) { 
    sum += numbersAverage[i]; 
  }
  return sum / 6; 
};

console.log(getAverage(arrayRandom)); */

/*let str = 'js';
console.log(str.toUpperCase());

function searchStart(words, syllable) {
    words.forEach((word) => {
        if (word.toLowerCase().startsWith(syllable.toLowerCase())) {
            console.log(word);
        }
        
    });
    
}

searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'); // ['кошка', 'комар']
searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'); // ['груша']
searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'); // []

let num = 32.58884;
console.log(Math.floor(num));
console.log(Math.round(num));
console.log(Math.ceil(num));

console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));

function getRandomNumber() {
    return Math.round(Math.random() * 10);
}
console.log(getRandomNumber(0,10));  


let p = prompt('Пожалуйста, введите любое целое число');
function getRandomArrNumbers() {
    for (let i = 0; i < Math.floor(p / 2); i++) {
        arrayRandom[i] = Math.round(Math.random() * p);
    };
};
console.log(arrayRandom = []);    

getRandomArrNumbers(p);

let minV = prompt('Пожалуйста, введите первое целое число');
let maxV = prompt('Пожалуйста, введите второе целое число, которое больше первого');

function getRandomInt(minV, maxV) {
    minV = Math.ceil(minV);
    maxV = Math.floor(maxV);
    return Math.floor(Math.random() * (maxV - minV)) + minV;
} 
  
console.log(getRandomInt(minV, maxV));

let currentDate = new Date();
console.log(currentDate);

let today = new Date();
today.setDate(today.getDate() + 73);
console.log(today);


const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
let myDate = new Date();
let fullDate = "Дата: " + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + " - это " + days[myDate.getDay()] + ". Время: " + myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();
console.log(fullDate);

function getWords() {
    let list = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    listWords = list.sort(() => Math.random() - 0.5);
    alert (listWords);

    let answer = prompt("Чему равнялся первый элемент массива?");
    let answer2 = prompt("Чему равнялся последний элемент массива?");
    if (answer === listWords[0] && answer2 === listWords[6]) {
        alert("Поздравляю! Вы угадали!");
    } else if (answer === listWords[0] || answer2 === listWords[6]) {
        alert("Вы были близки к победе!");
    } else {
        alert("Вы ответили неверно");
    };
    /*function riddle(question, answer) {
        let userAnswer = prompt(question);
        if (userAnswer === answer) {
            alert("Поздравляю! Вы угадали!");
        } else {
            alert("Вы были близки к победе!")
        }    
    }
    riddle("Чему равнялся первый элемент массива?", listWords[0]);
    riddle("Чему равнялся последний элемент массива?", listWords[6]);
} 
getWords(list = []);*/



    /*const monthNumber = Number(prompt('Введите номер месяца'))
    if (monthNumber <= 11 && monthNumber >= 9) {
        alert ('Осень');        
    } else if (monthNumber === 12 || monthNumber === 1 || monthNumber === 2) {
        alert ('Зима');        
    } else if (monthNumber >= 3 && monthNumber <= 5) {
        alert ('Весна');        
    } else if (monthNumber >= 6 && monthNumber <= 8) {
        alert ('Лето');
    } else {
        console.log('Такого месяца не существует');
    } */

/*arr = [];
function mult(arr) {
    return Math.round(arr.reduce((acc,curr)=>acc*curr));  
};
    
function sum(arr) {
    return Math.round(arr.reduce((acc, curr) => acc + curr, 0));
};
            
function getResult(arr, callback) {
    console.log(callback(arr));
};

getResult ([3, 4, 1, 9], mult); //108
getResult ([3, 4, 1, 9], sum); //17

function compareUser(a, b) {
    if (a.age > b.age) return 1;
    if (a.age < b.age) return -1;
    return 0;        
};   


const users = [
	{name: 'Jon', age: 22},
	{name: 'Richard', age: 18},
	{name: 'Anton', age: 32},
	{name: 'Lida', age: 23},
	{name: 'Bob', age: 44}
];
users.sort(compareUser);
console.log(users);*/




function reversArr(arr) {
    arr = [1, '4', 9, 'two'];
    return arr.reverse();
};


function toNumberArr(arr) {
    return arr.map(Number);
};
const arr = [1, '4', false, 9, 'two'];
 
function each(arr, callback) {
    console.log(callback(arr));
    if (isNaN()) {
        return arr.pop();
    };
};
each(arr, reversArr); // ['two', 9, '4', 1]
each(arr, toNumberArr); // [1, 4, 0, 9]   


let timer = (deadline) => {
    const interval = setInterval(() => {
        console.log(new Date());
    }, 3000);
    setTimeout(() => {
    clearInterval(interval);
    console.log("30 секунд прошло")    
    }, 30000)
    
};

timer(new Date());

function calling() {
    console.log('Звоню!')
};

function beeps(callback) {
    setTimeout(() => {
        console.log('Идут гудки...'); 
        callback(talk);
    },  1000);
}

function talk() {
    console.log('Разговор');
    
}

calling();
beeps(talk);
