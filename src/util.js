<<<<<<< HEAD
const getUsrDetails = function(){
  let object = {player1:{},player2:{}};
  object.player1.name = enterName(); 
  object.player1.symbol = enterSymbol();
  object.player2.name = 'computer';
  object.player2.symbol = botSymbol(object.player1.symbol);
  object.player1.moves = [];
  object.player2.moves = [];
  return object;
};

const botSymbol = function(symbol){
  let symbols = ['X','0'];
  let index = symbols.indexOf(symbol);
  symbols = symbols.reverse();
  return symbols[index];
}
=======
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
>>>>>>> 47ca4ea15c18965d9b4a4b32b743eaa2503895ef
