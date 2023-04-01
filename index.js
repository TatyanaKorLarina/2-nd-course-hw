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

let i = 1;
let num = 2;
while (i<=num) {
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
while (n > 50) {
    n = n / 2;
}
console.log(n);

for (let dayNumber = 1; dayNumber<=31; dayNumber++) {
    if (dayNumber % 7 ==0) {
        alert(`Сегодня пятница, ${dayNumber}-е число. Необходимо подготовить отчет.`);
        continue;
    }
}

    






