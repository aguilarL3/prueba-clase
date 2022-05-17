function multiplicar(numero){
  let array=[];
    if (numero>0){
      for (i=1;i<=10;i++){
        array.push(numero + "x" + i + "=" + (numero*i));
      }
    }
      return(array);
}
console.log(multiplicar(2));