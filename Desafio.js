const array = [];

function numero(n){
  for(var i=0; i < n; i++){
    if(i % 3 == 0 || i % 5 == 0){
      array.push(i);
    }
  }
}
numero(11); // valor da função pode ser alterado para testes!
console.log(array.reduce((acc, num) => acc + num, 0));
