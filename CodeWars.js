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

// 2 вариант решения данной задачи

// function squareSum(numbers){
//   return numbers.reduce(function(sum, n){
//     return (n*n) + sum;
//   }, 0)
// }

//Complete the solution so that it returns true if the first argument(string)
// passed in ends with the 2nd argument (also a string).

/*function solution (str, ending) {
  return str.endsWith(ending)
}
solution('hello', 'lo')*/

//Complete the function that accepts a string parameter,
// and reverses each word in the string. All spaces in the string should be retained.

/*function reverseWords(str) {
  //создаем массив из слов, используя пробел как разделитель
  const words = str.split(' ')
  //создаем копию массива в котором сначала каждое слово разбиваем по буквам, затем переворачиваем, а потом снова лепим слово
  const reversedWords = words.map (word => {
    return word.split('').reverse().join('')
  })
  //затем получившийся массив превращаем в строку
  return reversedWords.join(' ')
}

const strStr = 'hello world and others'
reverseWords(strStr)*/

// короткий вариант записи предыдущей задачи таков
/*function reverseWords(str) {
  return str.split(' ').map(function(word){
    return word.split('').reverse().join('');
  }).join(' ');
}

function reverseWords1(str) {
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}
const strStr1 = 'hello world and others'
reverseWords1(strStr1)*/

//Write a function that accepts an integer n and a string s as parameters,
// and returns a string of s repeated exactly n times.
/*function repeatString(n, s){
  let result = ''
  for (let i=0; i<n; i++) {
    result += s
  }
  return result
}
console.log(repeatString(3, '6c'))*/

//  вариант с использованием метода repeat()
//  function repeatString(n, s) {
//    return s.repeat(n)
//  }
// repeatString(4, 'umka')

//Given an array of integers, return a new array with each value doubled.
// function maps(x){
//   let arr = []
//   for (let i=0; i <= x.length-1; i++){
//     arr.push(x[i]*2)
//   }
//   return arr
// }

//Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
//
// For example: month 2 (February), is part of the first quarter;
// month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

//1 вариант
// const quarterOf = (month) => {
//   if (month <=3) {
//     return 1
//   } else if (month>3 && month<=6){
//     return 2
//   } else if (month>6 && month <=9){
//     return 3
//   } else
//     return 4
// }

//2 вариант

// const quarterOf = m => Math.ceil(m/3);

//Write a function that takes an array of words and smashes them together
// into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation,
// but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning
// or the end of the sentence!

// function smash (words) {
//   return words.join(' ')
// };

//In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G".
// Your function receives one side of the DNA (string, except for Haskell);
// you need to return the other complementary side. DNA strand is never empty or
// there is no DNA at all (again, except for Haskell).
//"ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

// function dnaStrand(dna){
//   let and = ''
//   for (let i=0; i<dna.length; i++){
//     switch (dna[i]){
//       case 'A':
//         and += 'T';
//         break;
//       case 'T':
//         and += 'A';
//         break;
//       case 'C':
//         and += 'G';
//         break;
//       case 'G':
//         and += 'C';
//         break;
//       default:
//         and+='';
//         break;
//     }
//   }
//   return and
// }










