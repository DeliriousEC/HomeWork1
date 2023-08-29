// Задание №1

function showNumber(a, b) {
    if (a > b) {
        return b;
    }

    else {
        return a;
    }
}

console.log(showNumber(8, 4));
console.log(showNumber(6, 6));

// Задание №2

function numParity() {

   let myNum = (Number(prompt(`Введите число`)));
    
    if (myNum % 2 === 0) {
        return `Число чётное`;
    } else {
        return `Не чётное`;
    }
}

console.log(numParity());

// Задание №3

function square(a){

    console.log(a**2);
}

    function squareReturn() {
        return `${a**2}`
    }

square(4);

// Задание №4

function yearsOld() {
    
    let age = prompt(`Введите свой возраст`);

    if (age < 0 || isNaN(age)) {

        console.log(`Вы ввели неправильное значение`);
    } else if (age >=0 && age <=12) {

        console.log(`Привет, друг!`);
    }

    else {
        console.log(`Добро пожаловать!`);
    }
}

yearsOld();

// Задание №5

function correctNumbers(a, b) {
    if (isNaN (a) || isNaN (b)){
        return `Одно или оба значения не вляются числом`;
    } else {
        return a * b;
    }
}

console.log(correctNumbers(`b`, 7));
console.log(correctNumbers(10, 2));

// Задание №6 

function secondCorrect() {
    let num = prompt(`Введите число n`);

    if (isNaN(num)) {
        return `Переданный параметр не является числом`;
    } else {
        return `n в кубе равно ${num**3}`;
    }
}

console.log(secondCorrect());

// Задание №7

function getCircleArea() {
    let area = (Math.PI*this.radius**2);
    return Math.PI*this.radius**2;
}

function gerCirclePerimeter() {
    let perimeter = (Math.PI*this.radius);
    return Math.PI*this.radius;
}

const circle1 = {
    radius: 12,
    getArea: getCircleArea,
    getPerimeter: gerCirclePerimeter,
}

const circle2 = {
    radius: 15,
    getArea: getCircleArea,
    getPerimeter: gerCirclePerimeter,
} 

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());


// Запуск по кнопке

function seasonsGame() {

    let monthNum = Number(prompt(`Введите номер месяца`));

    if (monthNum === 1 || monthNum === 2 || monthNum === 12) {
       return alert(`Зима!`);
       
    } else if (monthNum >=3 && monthNum <=5) {
       return alert(`Весна!`);
   
    } else if (monthNum >=6 && monthNum <=8) {
       return alert(`Лето!`);
   
    } else if (monthNum >=9 && monthNum<=11) {
       return alert(`Осень!`);
   
    } else {
       return alert(`Неправильный номер месяца!`);
    }
   
   }