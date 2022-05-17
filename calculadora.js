function calculadora(numero1,numero2){
  let array=[]
      if (numero1>=0 && numero2>=0){
        array.push(numero1*numero2)
        array.push(numero1+numero2)
        array.push(numero1-numero2)
        array.push(numero1/numero2)
    }else{
      array.push("El numero debe ser positivo y entero")
    }
      return(array);
}
console.log(calculadora(-2,3));