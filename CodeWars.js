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
































