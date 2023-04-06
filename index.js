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

function min(a, b) {
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

 //let a = Number;
 //let b = Number;

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






