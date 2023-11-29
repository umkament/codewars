/*
//1. Write a function which calculates the average of the numbers in a given list.
  // Note: Empty arrays should return 0.

function findAverage(array) {
  const average = array.reduce((a,b)=>a+b,0)/array.length
  return average;
}
// or

function findAverage2(array) {
  return array.length === 0 ? 0 : array.reduce((a,b)=>a+b,0)/array.length
}

// 2. Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.


function evenOrOdd(number) {
  if(number % 2 === 0)
  { return 'Even';
  } else {
    return 'Odd';
  }
};

// or

function even_or_odd(number) {
  return number % 2 ? "Odd" : "Even"
}

// 3. An isogram is a word that has no repeating letters, consecutive or non-consecutive.
// Implement a function that determines whether a string that contains only letters is an isogram.
// Assume the empty string is an isogram. Ignore letter case.
//
// Example: (Input --> Output)
//
// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)
//
// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

function isIsogram(str){
  var hash = {};
  str = str.toLowerCase();
  for (var i = 0; i < str.length; i++) {
    if (hash[str[i]]) {
      return false;
    }
    hash[str[i]] = true;
  }
  return true;
}

// or

function isIsogram2(str){
  var i, j;
  str = str.toLowerCase();
  for(i = 0; i < str.length; ++i) {
    for(j = i + 1; j < str.length; ++j) {
      if(str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
}

// or

function isIsogram3(str){
  return new Set(str.toUpperCase()).size == str.length;
}

// or

function isIsogram4(str){
  return !/(\w).*\1/i.test(str)
}


// 4. You will write a card counting function.
// It will receive a card parameter, which can be a number or a string,
// and increment or decrement the global count variable according to the card's value (see table).
// The function will then return a string with the current count and the string Bet if the count is positive,
// or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold)
// should be separated by a single space.
//
// Example Outputs: -3 Hold or 5 Bet

let count = 0;

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--
      break;
  }
  let holdbet = 'Hold'
  if (count > 0) {
    holdbet = 'Bet'
  }

  return count + " " + holdbet;
}

cc(2); cc(3); cc(7); cc('K'); cc('A');


// 5. Don't you just love Wikipedia lists?
//
// In this Kata, you'll write a function that extracts pieces of data and stores them in an Array.
//
// The function will accept two parameters:
//
// data An Array of Objects
// property A String representing the property from which to pluck data
// An Array should be returned, containing the value extracted for each Object contained in the data Array.
//
// See the Test Cases for examples.

function pluck(data, property) {
  // data - An Array of Objects
  // property - A String representing the property from which to pluck data

  const arr=[];
  for (let i of data ){
    arr.push(i[`${property}`])
  }
  return arr;
}


//6. У вас есть массив чисел, представляющий количества продаж продуктов на вашем сайте интернет-магазина за последние 7 дней. Ваша задача состоит в том, чтобы написать функцию, которая будет находить все дни, когда количество продаж было выше количества продаж в предыдущий день.
//
// const sales = [10, 15, 12, 8, 20, 14, 16];
// const increasedDays = findDaysWithIncreasedSales(sales);
// console.log(increasedDays); // [1, 4, 6]

//1й вариант
const findDayWithIncreasedSales = (sales) => {
  const resultArr = []
  for (let i=1; i < sales.length; i++){
    if (sales[i]>sales[i-1]){
      resultArr.push(i)
    }
  }
  return  resultArr
}
const sales = [10, 15, 12, 8, 20, 14, 16]
const increaseDays = findDayWithIncreasedSales(sales)
console.log(increaseDays)

//2й вариант (индексы записать в массив не получилось)
const findDayWithIncreasedSales_ = (sales) => {
  return  sales.filter((el, i)=>el>sales[i-1])
}
const sales_ = [10, 15, 12, 8, 20, 14, 16]
const increaseDays_ = findDayWithIncreasedSales_(sales_)
console.log(increaseDays_)

*/

// Complete the square sum function so that it squares each number passed into it and then sums the results together.
//
// For example, for [1, 2, 2] it should return 9 because

// function squareSum(numbers){
//   const arr = []
//
//   for(let i=0; i< numbers.length; i++) {
//     arr.push(numbers[i]**2)
//   }
//   let sum = 0
//   arr.forEach(el=> sum+= el)
//   return sum
// }
// squareSum([1,2,3])

























