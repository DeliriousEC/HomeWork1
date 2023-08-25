// Задание №1

function showNumber(a, b) {
    if (a > b) {
        return b;
    }

    if (a = b) {
        return a;
    }
}

console.log(showNumber(8, 4));
console.log(showNumber(6, 6));

// Задание №2

function numParity() {

    if (Number(prompt(`Введите число`)) % 2 == 0) {
        return `Число чётное`;
    } else {
        return `Не чётное`;
    }
}

console.log(numParity());

// Задание №3

function square(n) {
    console.log(`Квадрат числа равен = ${n**2}`);
}

square(6);
square(12);

function squareRoot(t) {
    console.log(`Корень из числа равен = ${t**(1/2)}`);
}

squareRoot(36);
squareRoot(49);

// Задание №4

function yearsOld(age) {

    if (age <= 0) {
        console.log(`Вы ввели неправильное значение`);
    } else if (age >0 && age <=12) {
        console.log(`Привет, друг!`);
    }
    else {
        console.log(`Доброе пожаловать!`);
    }
}

yearsOld(prompt(`Введите свой возраст`));

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

    if (Number(num)) {
        return `n в кубе равно ${num**2}`;
    } else if (isNaN (num)) {
        return `Переанный параметр не является числом`;
    }
}

console.log(secondCorrect());

// Задание №7

function getCircleArea() {
    return `${3.14*this.radius**2}`;
}

function gerCirclePerimeter() {
    return `${2*3.14*this.radius}`;
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