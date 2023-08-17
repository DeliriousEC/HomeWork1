// Задание №1
let password = `Пароль`;

let passwordInput = prompt(`Введите Ваш пароль`);

if (passwordInput == password) {
     console.log(`Пароль введен верно`);
 } else {
     console.log(`Пароль введен неправильно`);
 }

// Задание №2

let c = Number(prompt(`Введите любое число`));

if (c > 0 && c <10) {
     console.log(`Верно`);
  } else {
      console.log(`Неверно`);
  };

 // Задание №3

let d = Number(prompt(`Введите первое число`));
let c = Number(prompt(`Введите второе число`));

 if (d > 100 || c > 100) {
     console.log(`Верно`);
 } else {
     console.log(`Неверно`);
 };

// Задание №4

let a = '2';
let b = '3';
// Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже: 
alert(+a + +b);

let monthNumber = String(prompt(`номер месяца`));

switch (monthNumber) {

    case `1`:
    console.log(`Январь (Зима)`);
    break;
           
    case `2`:
    console.log(`Февраль (Зима)`);
    break;
    
    case `3`:
    console.log(`Март (Весна)`);
    break;
    
    case `4`:
    console.log(`Апрель (Весна)`);
    break;
                        
    case `5`:
    console.log(`Май (Весна)`);
    break;
                    
    case `6`:
    console.log(`Июнь (Лето)`);
    break;
                                
    case `7`:
    console.log(`Июль (Лето)`);
    break;
    
    case `8`:
    console.log(`Август (Лето)`);
    break;
    
    case `9`:
    console.log(`Сентябрь (Осень)`);
    break;

    case `10`:
    console.log(`Октябрь (Осень)`);
    break;

    case `11`:
    console.log(`Ноябрь (Осень)`);
    break;

    case `12`:
    console.log(`Декабрь (Зима)`);
    break;

    default:
        console.log(`Введите правильный номер месяца!`);
        break;
}