var testArray=[];
for(var i = 0;i <= 10;i ++){
  //Agregar elementos al arreglo en la ultima posición
  testArray.push(i);

}
console.log(testArray);

//eliminar el primer elemento del arreglos
testArray.shift();
console.log(testArray);

//eliminar ultimo elemento del areglo
testArray.pop();
console.log(testArray);

//revertir el orden del arreglos
testArray.reverse();
console.log(testArray);

/*------------------------------------*/
var testString = "abcde";
testString.charAT(2);
/*Para obtener un caracter a partir se codigo ASCII utilizo el metodo Strin.fromCharCode*/
var codigo = testString.charCodeAt(2);
console.log(codigo);
