// 4.Diseñar un algoritmo que sume los productos de una factura, 
//   agregue impuestos y el total.

let total = 0;
let impuestos = 0;

let cantidad = prompt("Ingrese la cantidad de productos");
for (let i = 0; i < cantidad; i++) {
    let producto = prompt("Ingrese el nombre del producto");
    document.write(producto + "      ");
    let precio = parseFloat(prompt("Ingrese el precio del producto"));
    document.write(precio + "<br>");
    total += precio;
    impuestos += precio * 0.16;
}

document.write("Total: " + total + "<br>");
document.write("Impuestos: " + impuestos + "<br>");
document.write("Total con impuestos: " + (total + impuestos));