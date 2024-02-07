// задание 1
// const people = [
//   { name: 'Глеб', age: 29 },
//   { name: 'Анна', age: 17 },
//   { name: 'Олег', age: 7 },
//   { name: 'Оксана', age: 47 }
// ];

// function age(a, b) {
//   return a.age - b.age;
// }

// console.log(people.sort(age));


// задание 2
// function isPositive(num) {
//   if (num >= 0)
//   {
//   return num;
//   }
//   else return;
//   }
  
//   function isMale(person) {
//   if (person.gender == 'male')
//   {
//   return person;
//   }
//   else return;
//   }
  
//   function filter(arr, ruleFunction) {
//   const output = [];
  
//   for (let i = 0; i < arr.length; i++) {
//   if (ruleFunction(arr[i]) != undefined)
//   {
//   output.push(ruleFunction(arr[i]));
//   }
//   }
//   return output;
//   }
  
//   console.log(filter([3, -4, 1, 9], isPositive));
  
//   const people = [
//   {name: 'Глеб', gender: 'male'},
//   {name: 'Анна', gender: 'female'},
//   {name: 'Олег', gender: 'male'},
//   {name: 'Оксана', gender: 'female'}
//   ];
  
//   console.log(filter(people, isMale)); 


// задание 3
// const startTime = Date.now();
// const interval = setInterval(() => {
//   const now = Date.now();
//   const elapsedTime = Math.floor((now - startTime) / 1000);
//   if (elapsedTime < 30) {
//     console.log(new Date().toString());
//   } else {
//     clearInterval(interval);
//     console.log('30 секунд прошло');
//   }
// }, 3000);


// задание 4
// function delayForSecond(callback) {
//     setTimeout(callback, 1000);
//   }
  
//   delayForSecond(function () {
//     console.log('Привет, Глеб!');
//   })

// задание 5
// function delayForSecond(cb) {
//     setTimeout(() => {
//         console.log('Прошла одна секунда');
// 				if(cb) { 	cb(); }

//     }, 1000)
// }

// function sayHi (name) {
//     console.log(`Привет, ${name}!`);
// }

// delayForSecond(() => sayHi('Глеб'));