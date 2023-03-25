// let a = "10";
// alert (a);

//let a = "20";
//alert (a);

let year = "год выпуска первого iPhone";
alert (year);

let creator = "имя создателя языка JavaScript";
alert (creator);

/*let b = 10;
let c = 2;
alert (b + c);
alert (b - c);
alert (b * c);
alert (b/c);
let result = c ** 5;
alert (result);*/

let a = 9;
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

user. cityOfResidence = 'Moscow';

user['age'] = 33;
delete user. cityOfResidence;

let info = prompt ('Какую информацию хотите узнать о пользователе?', 'name', 'age', 'isAdmin');
alert (user[info]);
console.log(user[info]);

let userName = prompt('Как вас зовут?');
let greeting = `Привет, ${userName}!`;
alert(greeting);




