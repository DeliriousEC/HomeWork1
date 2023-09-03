// Задание 1 

const searchNumber = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < searchNumber.length; i++) {
	if (searchNumber[i] == 10) break;
	console.log(searchNumber[i]);
}



// Задание 2

	const numbs = [1, 5, 4, 10, 0, 3];

	console.log(`Индекс 4 = ${numbs.indexOf(4)}`);



// Задание 3

const joinNumbers = [1, 3, 5, 10, 20];

let result = joinNumbers.join(' ');
console.log(result);

// Задание 4

const arr = [];

for (let x = 0; x < 3; x++) {
	arr[x] = [];
	
	for (let y = 0; y < 3; y++) {
		arr[x].push( 1);
}

}

console.log(arr);

// Задание 5

const pushArr = [1, 1, 1];

pushArr.push(2, 2, 2);

console.log(pushArr);

// Задание 6

const filterArr = [9, 8, 7, 'a', 6, 5];

const filterResult = filterArr.filter(filterItem => Number(filterItem));

console.log(filterResult);


// Задание 7

const includeArr = [9, 8, 7, 6, 5];

let m = Number(prompt(`Угадайте число из массива`));

const search = includeArr.includes(m);

if (search == true) {
	console.log(`Угадал!`);
} else {
	console.log(`Не угадал!`);
}

// Задание 8

let line = 'abcdef';

let lineArr = line.split('');

	lineArr.reverse();

const resultReverse = lineArr.join('');


console.log(resultReverse);


// Задание 9

const sumArr = [ 
	[1, 2, 3,],
	[4, 5, 6]
]

const sum = sumArr.flat(1);
console.log(sum);

// Задание 10

const randomNumbers = [2, 10, 1, 5, 8, 7, 4, 3, 9, 6]; 
console.log(randomNumbers);

for (let i = 0; i < randomNumbers.length - 1; i++)
 { 
  const sum = randomNumbers[i] + randomNumbers[i + 1]; 

  console.log("Сумма", randomNumbers[i], "и", randomNumbers[i + 1], "равна", sum); 
}

//  Задание 11

	const intNumbers = [1, 2, 3, 4, 5, 6];

	function squareNumbers () {
	let square = intNumbers.map(intNum => intNum**2)
 	console.log(square);
	}
	(squareNumbers());

// Задание 12

const words = ['My', 'Name', 'Is', 'Maxim']

function length() {

const getLength = words.map(str => str.length);
console.log(getLength);
}

length(['My', 'Name', 'Is', 'Maxim']);

// Задание 13

function filterPositive(array) {
	let result = array.filter(filterItem => filterItem <0);
	console.log(result);
  }
  
  filterPositive([-1, 0, 5, -10, 56]);
  filterPositive([-25, 25, 0, -1000, -2]);