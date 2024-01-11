// 1.Diseñar un algoritmo que permita calcular el salario mensual de un trabajo 
//   teniendo en cuenta los días que trabajo y el valor de cada día.


let salarioBase = prompt('ingrese el salario base mensual');
let salarioDiario = (salarioBase / 30).toFixed(2);
let diasTrabajados = prompt('ingrese los dias trabajados');
let salarioMensual = (salarioDiario * diasTrabajados).toFixed(2);  
document.write('el salario base mensual es: ' + salarioBase + '<br>' );
document.write('los dias trabajados es: ' + diasTrabajados + '<br>' );
document.write('el salario diario es de: ' + salarioDiario + '<br>' );
document.write('el salario neto mensual es: ' + salarioMensual);
