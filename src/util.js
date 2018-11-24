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
  let symbols = ['X','O'];
  let index = symbols.indexOf(symbol);
  symbols = symbols.reverse();
  return symbols[index];
}

const enterName = function() {
  return read.question('Enter Name : ') || enterName();
}

const enterSymbol = function() {
  return read.question('Enter Symbol : ') || enterSymbol();
}

const toggler = function (item1, item2) {
  let count = 0;
  return function () {
    return count++ % 2 == 0 ? item1 : item2;
  }
}

const isSubset = function(superset,subset) {
  return subset.every( element => superset.includes(element) );
}

exports.toggler = toggler;
exports.botSymbol = botSymbol;
exports.isSubset = isSubset;
