function pow(){
  for (var i = 1; i < 6; i++){
  var num = prompt("Vvedite chislo №" + i);
  var degr = prompt("Vvedite stepen' №" + i);
var result = 1;
var resultDop = 1;
    if(degr >= 0){
  for(var y = degr; y > 0; y--){

  result *= num;

  }
}
    if(degr <= -1){
      for(var y = degr; y < 0; y++){

      resultDop *= num;
      result = 1/resultDop;

      }

    }

console.log('Результат ' + i + ' = ' + result);



}
}
pow();
