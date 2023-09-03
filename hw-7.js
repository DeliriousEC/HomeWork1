// Задание 1

let  regLine = prompt(`Введите строку`);

console.log(regLine.toUpperCase());


// Задание 2

function filterString(arr, prefix) { 
    return arr.filter(str => str.toLowerCase().startsWith(prefix.toLowerCase())); 
  } 
   
  const strings = [`Хлеб белый`, `Гречка`, `Хлебцы`, `Молоко`, `Хлеб черный`]; 
  const prefix = prompt(`Введите продукт или его часть`); 
   
  console.log(filterString(strings, prefix));

// Задание 3

console.log(Math.floor(32.58884));
console.log(Math.ceil(32.58884));
console.log(Math.round(32.58884));

// Задание 4

console.log(Math.min([52], [53], [49], [77], [21], [32]));
console.log(Math.max([52], [53], [49], [77], [21], [32]));


// Задание 5

function GetrandomNumber(MinValue, MaxValue) {
    
    return Math.random() * MaxValue;
}

console.log(GetrandomNumber(1, 10));


// Задание 6

function getArray(max) {

    let array = [];
 
    for (let i = 0; i < max; i++) {
 
        array[i] = i + 1;

        array = array.sort(() => Math.random() - 0.5);
 
    }  
 
    return array;
 
 }

console.log(getArray(prompt(`Введите число`)));


// Задание 7

function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;

}

console.log(getRandomNum(prompt(`Введите первое число`), prompt(`Введите второе число`)));


// Задание 8

let nowDate = new Date();

console.log(nowDate);


// Задание 9

let currentDate = new Date;

console.log(currentDate);

currentDate.setHours(73);
console.log(currentDate);



// Задание 10

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let myDate = new Date();
let hour = myDate.getHours();
let minute = myDate.getMinutes();
let second = myDate.getSeconds();

let fullDate = "Дата: " + myDate.getDate() +
" " + months[myDate.getMonth()] +
" " + myDate.getFullYear() +
", это " + days[myDate.getDay()];

let fullTime = "Время: " + hour + `:` + minute+ `:` + second;

console.log(fullDate);
console.log(fullTime);


// Задание 11 

function showWords () {
let RememberWords = [ 'Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

RememberWords = RememberWords.sort(() => Math.random() - 0.5);
alert(RememberWords);

let answerFirst = prompt(`Какое было первое слово?`);
let first = RememberWords[0];

let answerLast = prompt(`Какое было последнее слово?`);
let last = RememberWords[RememberWords.length - 1];

if (answerFirst.toLowerCase().includes(first.toLowerCase()) && answerLast.toLowerCase().includes(last.toLowerCase())) {
    return alert("Поздравляю!");
} else if (answerFirst.toLowerCase().includes(first.toLowerCase()) || answerLast.toLowerCase().includes(last.toLowerCase())) {
    alert(`Ты был близок к победе! Попробуй еще раз!`)
} else {
    alert(`Не угадал! Попробуй еще раз!`)
}

}