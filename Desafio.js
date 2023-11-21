const array = [];

function numero(n){
    if(n <= 0){
       console.log("digite um número positivo")
    }
    else{
      for(var i=0; i < n; i++){
        if(i % 3 == 0 || i % 5 == 0){
          array.push(i);
        }
      }
    }
}
numero(0); // valor da função pode ser alterado para testes!
console.log(array.reduce((acc, num) => acc + num, 0));
