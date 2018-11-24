<<<<<<< HEAD
const read = require('readline-sync');

const enterName = function() {
  return read.question('Enter Name : ') || enterName();
}

const enterSymbol = function() {
  return read.question('Enter Symbol : ') || enterSymbol();
}
=======
const toggler = function (item1, item2) {
  let count = 0;
  return function () {
    return count++ % 2 == 0 ? item1 : item2;
  }
}

exports.toggler = toggler;
>>>>>>> 6cf140cbe8f8a34096bac4bafe7fc87a75d15fce
