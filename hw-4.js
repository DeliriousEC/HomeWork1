let a = 1;
while (a >=1 && a <=2) {
    console.log('Привет');
    a++;
}

let b = 1;

while (b>=1 && b<=5) {
    console.log(b);
    b++;
}

let c = 7;

while (c>=7 && c<=22) {
    console.log(c);
    c++;
}

let obj = {Коля : 200, Вася : 300, Петя : 400};
for (let money in obj) {
console.log(`${money} - зарплата ${obj[money]} долларов`);
}

let n = 1000, num= 0;
while(n >= 50){
    n = n/2;
  num++;
}
console.log(`Получилось число = ` + n,`, кол-во итераций = ` + num);
