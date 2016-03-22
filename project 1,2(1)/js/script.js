function pow(){
  for (var i = 1; i < 6; i++){
  var num = prompt("Vvedite chislo №" + i);
  var degr = prompt("Vvedite stepen' №" + i);
  if (num !=0 && degr !=0){
  console.log('result' + ' ' +  i + ' ' +  '=' + ' ' + (num * num) * (degr - 1) );
} else {
  console.log('result' + ' ' +  i + ' ' +  '=' + ' ' + 0);
}
}
}


pow();
