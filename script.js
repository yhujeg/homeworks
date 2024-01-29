function season() {
  let userMonth = prompt("Ведите номер месяца");

    if (userMonth >= 1 && userMonth <= 2 || userMonth === 12) {
      alert("Зима");
    } else if (userMonth >= 3 && userMonth <= 5) {
      alert("Весна");
    } else if (userMonth >= 6 && userMonth <= 8) {
      alert("Лето");
    } else if (userMonth >= 9 && userMonth <= 11) {
      alert("Осень");
    }
    else {
      alert("Такого месяца нет");
    }
}

// задание 11
let fruit = ["Яблоко", "Груша", "Дыня", "Виноград", "Персик", "Апельсин", "Мандарин"];

function words() {
    fruit.sort(() => Math.random() - 0.5);
    alert(fruit.join(", "));

    let firstFruit = prompt("Какое слово было первым?");
    let lastFruit = prompt("Какое слово было последним?");

    if (firstFruit === fruit[0] && lastFruit === fruit[fruit.length - 1]) {
        alert("Поздравляем! Вы угадали оба слова!");
    } else if (firstFruit === fruit[0] || lastFruit === fruit[fruit.length - 1]) {
        alert("Вы были близки к победе!");
    } else {
        alert("Вы ответили неверно.");
    }
}

// задание 1
// let str = "js";
// str = str.toUpperCase();

// console.log(str);

// задание 2
// function search(arr, string) {
//     return arr.filter(el => el.toLowerCase().startsWith(string));
// }

// console.log(search([`Аргентина Буэнос-Айрес`, `Гаити Порт-o-Пренс`, `Гватемала Гватемала`, `Канада Оттава`, `Панама Панама`, `Парагвай Асунсьон`, `США Вашингтон`], `с`));

// задание 3
// const number = 32.58884;

// const roundDown = Math.floor(number);
// console.log(roundDown);

// const roundUp = Math.ceil(number);
// console.log(roundUp);

// const rounded = Math.round(number);
// console.log(rounded);

// задание 4
// const numbers = [52, 53, 49, 77, 21, 32];

// const maxNum = Math.max(...numbers);
// console.log(maxNum);

// const minNum = Math.min(...numbers);
// console.log(minNum);

// задание 5
// function getRandomNumber() {
//     const randomNumber = Math.round(Math.random() * 10);
//     return randomNumber + 1;
//   }

//  console.log(getRandomNumber());

// задание 6
// function getRandomArrNumbers(n) {
//     const length = Math.floor(n / 2);
  
//     const arr = [];
//     for (let i = 0; i < length; i++) {
//       const randomNumber = Math.floor(Math.random() * n);
//       arr.push(randomNumber);
//     }
//     return arr;
//   }
  
//   const arrRandom = getRandomArrNumbers(7);
//   console.log(arrRandom);


// задание 7
// function getRandomNumberInRange(min, max) {  
//     const randomNumber = Math.floor(Math.random() * (max - min + 1));
//     return randomNumber + min;
//   }
  
//   const ranNumber = getRandomNumberInRange(1, 10);
//   console.log(ranNumber);


// задание 8
// let date = new Date();
// console.log(date);


// задание 9
// let currentDate = new Date();

// let futureDate = new Date(currentDate);
// futureDate.setDate(currentDate.getDate() + 73);

// console.log(futureDate);


// задание 10
// function formatDate(date) {
//   let daysOfWeek = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
//   let monthsOfYear = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

//   let day = date.getDate();
//   let month = monthsOfYear[date.getMonth()];
//   let year = date.getFullYear();
//   let dayOfWeek = daysOfWeek[date.getDay()];

//   let hour = date.getHours();
//   let minute = date.getMinutes();
//   let second = date.getSeconds();

//   return `Дата: ${day} ${month} ${year} - это ${dayOfWeek}.
// Время: ${hour}:${minute}:${second}`;
// }

// let date = new Date();

// console.log(formatDate(date));