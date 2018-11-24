const read = require('readline-sync');

const enterName = function() {
  return read.question('Enter Name : ') || enterName();
}

const enterSymbol = function() {
  return read.question('Enter Symbol : ') || enterSymbol();
}
