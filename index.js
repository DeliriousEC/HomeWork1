let a = Number(`20`);
alert(a);

let release = Number(2007);
alert(release);

const nameAuthor = `Brendan Eich`;
alert(nameAuthor);

let b = Number(10);
let c = Number(2);
alert(b+c);
alert(b-c);
alert(b*c);
alert(b/c);

let result = 2;
alert(result**5);

let newA = 9;
let newB = 2;
alert(newA%newB);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num);

let age = Number(prompt(`Сколько Вам лет?`));

alert(`Вам ${age} лет`);

const user = {
    name : `Maxim`,
    age : 24,
    "isAdmin" : true
};


let info = prompt(`Какую информацию хотите узнать опользователе?`);
alert(user[info]);

let userName = prompt(`Как тебя зовут?`);
alert(`Привет, ${userName}!`);