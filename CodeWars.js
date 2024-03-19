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



//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.


// function doubleChar(str) {
//   let arr = str.split('').map(el=>el+el)
//   return arr.join('')
// }

//короткая запись

// const doubleChar = (str) => str.split("").map(c => c + c).join("");

/*Our football team has finished the championship.

   Our team's match results are recorded in a collection of strings.
   Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

   For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

   if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)
We need to write a function that takes this collection and returns the number of points our team (x)
got in the championship by the rules given above.

   Notes:

our team always plays 10 matches in the championship
0 <= x <= 4
0 <= y <= 4*/

// function points(games) {
//   let allPoints = 0;
//   for (let i=0; i<games.length; i++) {
//     const [x, y] = games[i].split(':');
//     if (x>y) {
//       allPoints += 3;
//     } else if (x===y){
//       allPoints +=1;
//     }
//   }
//   return allPoints
// }

/*

The Western Suburbs Croquet Club has two categories of membership,
Senior and Open. They would like your help with an application form that will tell prospective
members which category they will be placed.

   To be a senior, a member must be at least 55 years old and have a handicap greater than 7.
   In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

   Input

Input will consist of a list of pairs. Each pair contains information for a single potential member.
Information consists of an integer for the person's age and an integer for the person's handicap.

   Output

Output will consist of a list of string values (in Haskell and C: Open or Senior)
stating whether the respective member is to be placed in the senior or open category.

   Example

input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]*/


// function openOrSenior(data){
//   let members = [];
//   for (let i=0; i<data.length; i++){
//     let [age, handicap] = data[i];
//     if (age>=55 && handicap>7){
//       members.push('Senior');
//     } else{
//       members.push('Open');
//     }
//   }
//   return members
// }

//2 вариант
// function openOrSenior(data){
//   return data.map(([age, handicap])=>{
//     if (age>=55 && handicap>7){
//       return 'Senior'
//     } else {
//       return 'Open'
//     }
//   })
// }

//самая короткая запись
// function openOrSenior(data){
//   return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
// }

/*
You might know some pretty large perfect squares. But what about the NEXT one?

   Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter.
    Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

   If the parameter is itself not a perfect square then -1 should be returned.
   You may assume the parameter is non-negative.

   Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square*/

// function findNextSquare(sq) {
//   let findNumber = Math.sqrt(sq)
//   if(Number.isInteger(findNumber)){
//     findNumber++
//     return findNumber*findNumber
//   }
//
//   return -1;
// }

//более короткая запись
// function findNextSquare(sq) {
//   let findNumber = Math.sqrt(sq)
//   return Number.isInteger(findNumber) ? Math.pow(findNumber+1,2) : -1
//
// }

//еще вариант короткой записи
//если первое выражение не равно 0, знаит это true и возвращено будет -1
// если же остаток 0 - это false, поэтому возвращается следующеее условие

function findNextSquare(sq) {
  return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
}

/*
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string,
the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

   Examples:

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"*/

function longest(s1, s2) {
  let newStr = (s1+s2).split('')
  let newArr = [...new Set(newStr)]
  return newArr.sort().join('')
}

//короткая запись
function longest1(s1, s2) {
  return [...new Set((s1+s2).split(''))].sort().join('')
}

//сплит можно убрать
//самый короткий вариант

function longest2(s1, s2) {
  return [...new Set((s1+s2))].sort().join('')
}

//поскольку строка сама по себе итерируемый объект, Set убирает повторяющиеся элементы
// затем создается массив, который сортируется и объединяется в строку

/*
After a hard quarter in the office you decide to get some rest on a vacation.
So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

   You will need a rental car in order for you to get around in your vacation.
   The manager of the car rental makes you some good offers.

   Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total.
   Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

   Write a code that gives out the total amount for different days(d).*/

function rentalCarCost(d) {
  let sum = 40*d
  if (d>=7){
    return sum - 50
  } else if (d>=3 && d<7){
    return sum - 20
  } else return sum
}

//короткое решение через тернарный оператр

function rentalCarCost1(d) {
  return 40*d - (d>=7 ? 50 :((d>=3 && d<7) ? 20 : 0))
}
//  получается, что мы каждый раз углубляемся и таким образом доходим до 0

//задание: вернуть число противополоное полученному

function opposite(number) {
  return -number
}

/*
This function should test if the factor is a factor of base.

   Return true if it is a factor or false if it is not.

   About factors

Factors are numbers you can multiply together to get another number.

2 and 3 are factors of 6 because: 2 * 3 = 6

You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
   You can use the mod operator (%) in most languages to check for a remainder
For example 2 is not a factor of 7 because: 7 % 2 = 1

Note: base is a non-negative number, factor is a positive number.*/

// function checkForFactor (base, factor) {
//   return base % factor == false
// }

// 2-й вариант
function checkForFactor (base, factor) {
  return base % factor === 0;
}

//ищем среднее значение и возвращаем соответствующую букву

function getGrade (s1, s2, s3) {
  const avg = (s1 + s2 + s3) / 3;л
  if (avg < 60)  return "F";
  else if (avg < 70) return "D";
  else if (avg < 80) return "C";
  else if (avg < 90) return "B";
  else return "A";
}
/*

There is a bus moving in the city which takes and drops some people at each bus stop.

   You are provided with a list (or array) of integer pairs.
   Elements of each pair represent the number of people that get on the bus (the first item)
   and the number of people that get off the bus (the second item) at a bus stop.

   Your task is to return the number of people who are still on the bus after
   the last bus stop (after the last array). Even though it is the last bus stop,
   the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

Take a look on the test cases.

   Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0.
    So the returned integer can't be negative.

The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.*/


var number = function(busStops){
  let passanger = 0
  for (let i = 0; i<busStops.length; i++){
    passanger += busStops[i][0] - busStops[i][1]
  }
  return passanger
}

/*
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

   Complete the method which accepts such an array, and returns that single different number.

   The input array will always be valid! (odd-length >= 3)

Examples

   [1, 1, 2] ==> 2
   [17, 17, 3, 17, 17, 17, 17] ==> 3*/

//использовать операцию ХОР (^) - которая находит уникальное число в массиве

function stray(numbers) {
  let number = 0
  for (let i=0; i<numbers.length; i++){
    number ^= numbers[i]
  }
  return number
}

/*
Summation

Write a program that finds the summation of every number from 1 to num.
The number will always be a positive integer greater than 0.
Your function only needs to return the result, what is shown between parentheses
in the example below is how you reach that result and it's not part of it, see the sample tests.

For example (Input -> Output):
2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
*/

var summation = function (num) {
  let sum = 0
  for (let i = 0; i<=num; i++){
    sum += i
  }
  return sum
}

//короткий вариант записи с формуой для вычисления прогрессии

function sumNumbersUpTo(n) {
  return n * (n + 1) / 2;
}

console.log(sumNumbersUpTo(5)); // Выведет 15

//сокращенная запись предыдущего ответа

var summation1 = (num) => num * (num+1)/2

//Write a function which converts the input string to uppercase.
var makeUpperCase = (str) => str.toUpperCase()

/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

   The output should be two capital letters with a dot separating them.

   It should look like this:

Sam Harris => S.H

patrick feeney => P.F*/

function abbrevName(name){
  return name.split(' ').map(el=>el.charAt(0).toUpperCase()).join('.')
}
 //вариант, где метод charAt не нужен
function abbrevName1(name){

  return name.split(' ').map(i => i[0].toUpperCase()).join('.')

}

/*The main idea is to count all the occurring characters in a string. If you have a string like aba,
then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.*/

function count(string) {
  let obj = {}

  for (let i of string){
    if (obj[i]){
      obj[i]++
    } else {
      obj[i]=1
    }
  }
  return obj;
}

//можно записать через тернарный оператор и через создание массива
function count1 (string) {
  var count = {};
  string.split('').forEach(function(s) {
    count[s] ? count[s]++ : count[s] = 1;
  });
  return count;
}

/*Given two arrays a and b write a function comp(a, b) (orcompSame(a, b))
that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

Examples

Valid arrays

a = [121, 144, 19, 161, 19, 144, 19, 11]
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144,
361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

a = [121, 144, 19, 161, 19, 144, 19, 11]
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
Invalid arrays

If, for example, we change the first number to something else, comp is not returning true anymore:

a = [121, 144, 19, 161, 19, 144, 19, 11]
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 132 is not the square of any number of a.

a = [121, 144, 19, 161, 19, 144, 19, 11]
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 36100 is not the square of any number of a.

Remarks

a or b might be [] or {} (all languages except R, Shell).
a or b might be nil or null or None or nothing (except in C++, COBOL, Crystal, D, Dart, Elixir,
Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).
If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.*/

//1й вариант
function comp(a, b){
  if(!a || !b || a.length !== b.length){
    return false
  }
  a = a.map (x=>x*x)

  a.sort((x,y)=>x-y)
  b.sort((x,y)=>x-y)

 for (let i=0; i<a.length; i++) {
   if (a[i] !== b[i]){
     return false
   }
 }

  return true
}

//2-й вариант
function comp2(a, b){
  if(!a || !b || a.length !== b.length){
    return false
  }
  a = a.map (x=>x*x).sort().join()
  b.sort().join()
  return a === b
}

//краткая запись

function comp1(a, b){
  return !!a && !!b && a.map(x=>x*x).sort().join() === b.sort().join()
}

/*задача просит вас найти количество кубов,
необходимых для построения пирамиды из кубов. Каждый следующий уровень пирамиды имеет объем, меньший,
чем предыдущий уровень, на единицу. Например, на первом уровне пирамиды будет 1 куб, на втором уровне - 8 кубов,
на третьем уровне - 27 кубов, и так далее.

Вам дан общий объем пирамиды (обозначенный как m). Задача состоит в том, чтобы найти количество кубов (n),
которое необходимо использовать для построения пирамиды с таким общим объемом.

Формула для вычисления общего объема пирамиды, состоящей из n кубов, выглядит так:

n3+(n−1)3+(n−2)3+...+13=m 3+(n−1) 3+(n−2)3 +...+13 =m

Ваша задача - найти такое значение n, при котором общий объем кубов в пирамиде равен заданному m.
Если такое n существует, вы должны вернуть его. Если такого n не существует, то возвращается -1.*/

function findNb(m) {
  let n=1
  let totalVolume = 0

  while (totalVolume < m){
    totalVolume += Math.pow(n, 3)
    if (totalVolume === m){
      return n
    }
    n++
  }
  return (-1)
}

//короткое решение

function findNb1(m) {
  var n = 0
  while (m > 0) m -= ++n**3
  return m ? -1 : n
}

/*Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

вернуть время в миллисекундах*/

var past = (h, m, s) => (h*3600 + m*60 + s)*1000

/*Introduction

The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task

Given a year, return the century it is in.*/

function century(year) {
  return Math.ceil(year/100)
}

//2-й вариант решение через побитовый оператор округления
function century1(year) {
  return (year + 99) / 100 | 0;
}

/*Enough is enough!

Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they
want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif
usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
He tells them that he will only sit for the session if they show the same motif at most N times. Luckily,
Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list
contains each number only up to N times, without changing the order?

Task

Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2],
drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3,
which leads to [1,2,3,1,2,3].
With list [20,37,20,21] and number 1, the result would be [20,37,21].*/

function deleteNth(arr,n){
  let count = {}
  let newArr = []
  for (let i of arr){
    count[i] = (count[i] || 0)+ 1
    if(count[i]<=n){
      newArr.push(i)
    }
  }
  return newArr
}

//решение через фильтр
function deleteNth1(arr,x) {
  var cache = {};
  return arr.filter(function(n) {
    cache[n] = (cache[n]||0) + 1;
    return cache[n] <= x;
  });
}

/*Your task is to sort a given string. Each word in the string will contain a single number.
This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string.
The words in the input String will only contain valid consecutive numbers.

Examples

"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""*/

function order(words){
  return words.split(' ').sort((a,b)=>a.match(/\d/) - b.match(/\d/)).join(' ')
}

/*In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater than or equal to p = 1200 inhabitants?

At the end of the first year there will be:
1000 + 1000 * 0.02 + 50 => 1070 inhabitants

At the end of the 2nd year there will be:
1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

At the end of the 3rd year there will be:
1141 + 1141 * 0.02 + 50 => 1213

It will need 3 entire years.
More generally given parameters:

p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)

the function nb_year should return n number of entire years needed to get a population greater or equal to p.

aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

Examples:
nb_year(1500, 5, 100, 5000) -> 15
nb_year(1500000, 2.5, 10000, 2000000) -> 10
Note:

Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.

There are no fractions of people. At the end of each year, the population count is an integer: 252.8 people round down to 252 persons.*/

function nbYear(p0, percent, aug, p) {
  let n=0
  while(p0<p){
    p0 += Math.floor(p0*(percent/100) + aug)
    n++
  }
  return n
}

//best practice

function nbYear1(p0, percent, aug, p) {

  for (var years = 0; p0 < p; years++) {
    p0 = Math.floor(p0 + p0 * percent / 100 + aug);
  }
  return years
}

/*Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:

Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321*/

function descendingOrder(n){
  return parseInt(n.toString().split('').sort((a,b)=>b-a).join(''))
}

//пишут что лучшая практика с добавлением reverse()

function descendingOrder1(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}

/*Some numbers have funny properties. For example:

89 --> 8¹ + 9² = 89 * 1
695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
Given two positive integers n and p, we want to find a positive integer k, if it exists, such that the sum of the digits of n raised to consecutive powers starting from p is equal to k * n.

In other words, writing the consecutive digits of n as a, b, c, d ..., is there an integer k such that :

(ap+bp+1+cp+2+dp+3+...)=n∗k(a p+b p+1+c p+2+d p+3+...)=n∗k
If it is the case we will return k, if not return -1.

Note: n and p will always be strictly positive integers.*/

function digPow(n, p){
  let sum = 0
  let arrStr = n.toString().split('')
  let arrInt = arrStr.map((el)=> parseInt(el))
  for (let i=0; i<arrInt.length; i++){
    sum += arrInt[i]**(p+i)
  }

  return sum%n === 0? sum/n : -1
}

// решение через reduce()

function digPow1(n, p){
  var x = String(n).split('').reduce((sum, val, i)=>sum + Math.pow(val,p+i), 0)
  return x%n? -1 : x/n
}

/*A hero is on his way to the castle to complete his mission.
However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes
2 bullets to be defeated, our hero has no idea how many bullets he should carry..
Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given
number of dragons, will he survive?

Return true if yes, false otherwise :)*/

var hero = (bullets, dragons) => bullets/dragons>=2;

/*Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example

alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )*/

function alphabetPosition(text) {
  var result = ''
  text = text.toLowerCase()
  for (i=0; i<text.length; i++){
    var letterNumber = text.charCodeAt(i)
    if (letterNumber >=97 && letterNumber<=122){
      result += (letterNumber - 96) + ' '
    }
  }
  return result.trim()
}

/*Count the number of Duplicates

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example

"abcde" -> 0  # no characters repeats more than once
"aabbcde" -> 2  # 'a' and 'b'
"aabBcde" -> 2  # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1  # 'i' occurs six times
"Indivisibilities" -> 2  # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2  # 'a' and '1'
"ABBA" -> 2  # 'A' and 'B' each occur twice*/

function duplicateCount(text){
  text = text.toLowerCase()
  obj={}
  count = 0
  for (el of text){
    obj[el] = (obj[el] || 0) + 1
    if (obj[el] === 2) {
      count++
    }
  }
  return count
}

//второй вариант решения

function duplicateCount1(text){
  return text.toLowerCase().split('').filter(function(val, i, arr){
    return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
  }).length;
}

/*Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)

(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
Your function should only return a number, not the explanation about how you get that number.*/

function getSum(a, b)
{
  var min = Math.min(a,b)
  var max = Math.max(a,b)
  var sum = 0

  for (let i=min; i<=max; i++){
    sum += i
  }
  return sum
}

//более эффективное решение через формулу, которая вычисляет сумму арефмитическое прогрессии (n*(a+b))/2
// гдн n - это количество элементов прогрессии

function getSum1(a, b)
{
  var min = Math.min(a,b)
  var max = Math.max(a,b)
  return (max-min+1)*(max+min)/2
}

/*Write a function named setAlarm/set_alarm/set-alarm/setalarm (depending on language) which receives two parameters.
The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

The function should return true if you are employed and not on vacation
(because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

employed | vacation
true     | true     => false
true     | false    => true
false    | true     => false
false    | false    => false*/

var setAlarm = (employed, vacation) => employed === true && vacation === false