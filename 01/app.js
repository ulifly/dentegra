// 1.Diseñar un algoritmo que permita calcular el salario mensual de un trabajo 
//   teniendo en cuenta los días que trabajo y el valor de cada día.


let salarioBase = prompt('ingrese el salario base mensual');
let salarioDiario = salarioBase / 30;
let diasTrabajados = prompt('ingrese los dias trabajados');
let salarioMensual = salarioDiario * diasTrabajados;  
console.log('el salario diario es de: ' + salarioDiario);
console.log('el salario neto mensual es: ' + salarioMensual);