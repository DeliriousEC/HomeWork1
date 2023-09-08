const people = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];

// Допишите колбэк для sort, изучите, как работает колбэк, в документации
console.log(people.sort((a,b) => a.age - b.age));

// Задание 2

function isPositive(arr) {

   const result = [];

   arr.map((elementArr) => {

      if (elementArr > 0) {
         result.push(elementArr);
      }
 
   })
   return result;

   }
   function isMale(arr) {
      
      const result = [];

      arr.map((human) => {

         if (human.gender === `male`) {
            result.push(human);
         }

      } )
         return result;
      
   }


   function filter(arr, functionRule) {
     return functionRule(arr);
      
   }
   


   console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]
   
   const peopleAll = [
      {name: 'Глеб', gender: 'male'},
      {name: 'Анна', gender: 'female'},
      {name: 'Олег', gender: 'male'},
      {name: 'Оксана', gender: 'female'}
   ];
   
   console.log(filter(peopleAll, isMale));


   // создать пустой массив, перебор элемментов массива, сделать условия а >0
   // Вернуть массив с полож. числами


// Задание 3

   let counter = 0;

   const intervalId = setInterval(() => {

      const date = new Date;
      console.log(date);
      counter++;
      if (counter >= 10) {

         clearInterval(intervalId);
      }
   }, 3000);


// Задание 4

function delayForSecond(callback) {
   setTimeout(() => {
      callback();
   }, 1000)
    
   }
   
   delayForSecond(function () {
     console.log('Привет, Глеб!');
   })
   
   //Задание 5

function delayForSecond(cb) {
   setTimeout(() => {
       console.log('Прошла одна секунда');
       if(cb) { 	cb(); }
 
   }, 1000)
 }
 
 function sayHi (name) {
   console.log(`Привет, ${name}!`);
 }
    delayForSecond(()=>sayHi('Глеб'));