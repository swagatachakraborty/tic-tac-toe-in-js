const getUsrDetails = function(){
  let object = {player1:{},player2:{}};
  object.player1.name = lib.question('Enter your name : ' ) || 'Player_1';
  object.player1.symbol = lib.question('Select your symbol (O or X) : ') || 'X';
  object.player1.moves = [];
  object.player2.moves = [];
  console.log(object)
  return object;
};

const botDetails = function(symbol){
  let symbols = ['X','0'];
  let index = symbols.indexOf(symbol);
  symbols = symbols.reverse();
  return symbols[index];
}
