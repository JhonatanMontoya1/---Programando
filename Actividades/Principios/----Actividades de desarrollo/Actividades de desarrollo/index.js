//Actividad: GA3-220501093-AA2-EV03 taller aplicando funciones y procedimientos en la solución de algoritmos.
//Primer algoritmo

//Un corredor de maratón (distancia 42,195 Km) ha recorrido la carrera en 2 horas 25 minutos. Se desea un algoritmo que calcule el tiempo medio en minutos por kilómetro
/*
let distancia = prompt("Por favor ingrese la distancia en KILÓMETROS que recorrió el corredor");
let horas = parseInt(prompt("Por favor ingrese SOLO LAS HORAS en que el corredor terminó la carrera"));
let minutos = parseInt(prompt("por favor ingrese SOLO LOS MINUTOS en que el corredor terminó la carrera"));
let total_minutos = ((horas*60)+minutos);
if (isNaN(distancia)) {
    console.log("Tenga en cuenta que la distancia debe ser expresada como un número, sin unidades como (KM) o (m)");
}else {
    console.log(`con una distancia total de ${distancia} KILÓMETROS y un tiempo de ${horas} HORAS con ${minutos} MINUTOS; el ritmo promedio por el cual el corredor recorrió la carrera fue de: ${(total_minutos/distancia).toFixed(1)} minutos por cada kilómetro` );
}
*/

//Segundo algoritmo

//Realizar la conversión de una temperatura dada en grados Centígrados a grados Fahrenheit (Fórmula: F =(9/5) C + 32). 
/*
let centigrados = prompt("Digite la temeperatura en grados centígrados");
let conversion = (((9/5)*centigrados)+32);
if (centigrados < 0 ||  isNaN(centigrados)){
    console.warn("El valor digitado NO es válido, por favor vuelva a intentarlo");
}else{
    console.info(`La cantidad de grados centígrados ${centigrados}, convertida en grados Fahrenheit es de ${conversion}°F`)
}
*/
//Tercer algoritmo

/*Escribir el algoritmo que permite calcular la nota correspondiente al primer parcial de “análisis” para un estudiante cualquiera. Se debe considerar que hay dos talleres y un quiz,
 que en conjunto valen un 30% de
la nota y el resto (70%) corresponde a la nota del examen parcial.*/

/*
let nota_parcial = parseFloat(prompt("Digite la nota del examen primer parcial (70%)"));
let nota_taller1 = parseFloat(prompt("Digite la nota del taller 1"));
let nota_taller2 = parseFloat(prompt("Digite la nota del taller 2"));
let nota_quiz = parseFloat(prompt("Digite la nota del quiz"));
const calculo30 = ((((nota_taller1+nota_taller2+nota_quiz)/3))*0.30);
const calculo70 = (((nota_parcial)*0.70));

if (isNaN(nota_parcial,nota_quiz,nota_taller1,nota_taller2)){
    console.warn("Usted ha escrito carácteres que nos son válidos, por favor ingrese la nota en números");
} 

else{
    let calculo1 = calculo30+calculo70;
    console.log(("El resultado es: " + (calculo1).toFixed(2)));
}
*/

//cuarto algoritmo: Un capital C está situado a un tipo de interés R anual ¿al término de cuántos años se doblará? 
/*
let capital = parseFloat(prompt("digite el capital"));
let interes = parseFloat(prompt("digite el interes decimal"));

function añosdelcapital(capital,interes){
    var doble = 2*capital;
    var anios = Math.log(doble/capital) / Math.log(1 + interes);

    return anios;
}

console.log(`En ${(añosdelcapital(capital,interes).toFixed())} años su capital de ${capital} se duplicará con una taza de interés del ${interes*100}%`);
*/
//quinto algoritmo: Elaborar un algoritmo que permita ingresar 20 números y muestre todos los números menores e iguales a25. 

// Definimos una función para ingresar los números y mostrar los menores o iguales a 25

/*
function numeros() {
    var numeros = []; 

    for (var i = 0; i < 20; i++) {
        var numero = parseInt(prompt("Ingrese el número " + (i + 1) + ":"));

        if (numero <= 25) {
            numeros.push(numero); 
        }
    }

    console.log("Los números menores o iguales a 25 son:");
    for (var valor = 0; valor < numeros.length; valor++) {
        console.log(numeros[valor]);
    }
}

numeros();
*/

//Sexto algoritmo: Hacer un programa que sume 5 precios de camisas (en dólares) y que luego muestre el total de la venta en pesos. 

/*
let camisa1=(parseFloat(prompt("ingrese el valor de la primera camisa:")));
let camisa2= (parseFloat(prompt("ingrese el valor de la segunda camisa:")));
let camisa3= (parseFloat(prompt("ingrese el valor de la tercera camisa:")));
let camisa4= (parseFloat(prompt("ingrese el valor de la cuarta camisa:")));
let camisa5= (parseFloat(prompt("ingrese el valor de la quinta camisa:")));
let totalcamisas= (camisa1+camisa2+camisa3+camisa4+camisa5);


let valordolar = 3.927;

    if (isNaN(camisa1,camisa2,camisa3,camisa4,camisa5)){
        console.warn("Debe poner valores numericos");
    } else{
        general = ((totalcamisas* valordolar).toFixed(3));
        console.info(`El volor en pesos colombianos de las camisas es de ${general}`);
    }
*/


/*Septimo algoritmo: Hacer un programa que registre el consumo realizado por los clientes de un restaurante, si el consumo de
cada cliente excede 50000 se hará un descuento del 20%. Se debe mostrar el pago de cada cliente y el total
de todos los pagos.*/

/*
function mostrarsiono() {
    var tienenonodecuento = [];
    

    console.log("A continuación se muestra si el cliente tendrá o no descuento:")
for (var i = 0; i < 3; i++) {
    var nombre = prompt("ingrese el nombre del cliente" + (i + 1) + ":");
    var consumo = parseInt(prompt("Digite el valor de todo lo que consumió el cliente " + (i + 1) + ":"));
    var descuento = (consumo*0.80).toFixed(1);
    if (consumo > 50000){
        console.log(`El cliente ${i}, cuyo nombre es ${nombre}, quien consumió ${consumo} pesos, tiene 20% de descuento por lo que le queda en ${descuento}`)
    } else{
        console.log(`El cliente ${i}, cuyo nombre es ${nombre}, no tendrá descuento`);
    }
}

}
mostrarsiono();
*/

//Octavo algoritmo: Diseñar un algoritmo que permita ingresar la hora, minutos y segundos, y que calcule la hora en el siguiente segundo ("0<= H <=23", "0<= M <=59" "0<= S<=59"). 
/*
function calculo_horasig (hora, minutos, segundos) {
    if (segundos >= 0 && segundos <= 58) {
        segundos++;
    } else if (segundos === 59) {
        segundos = 0;
        if (minutos >= 0 && minutos <= 58) {
            minutos++;
        } else if (minutos === 59) {
            minutos = 0; 
            if (hora >= 0 && hora <= 22) {
                hora++;
            } else if (hora === 23) {
                hora = 0; 
            }
        }
    }
    return {
        hora: hora,
        minutos: minutos,
        segundos: segundos,
    };
}

console.log(calculo_horasig(23,59,59));
*/
//Noveno algoritmo: Dado N, escribir el producto desde 1 hasta N.

function calculadndo_factorial(numero){
    if (isNaN(numero)){
        console.log("Usted no ingresó ningún valor numerico");
    }
    else if(numero == 0){
            return 1;
    } else{
        return numero * calculadndo_factorial(numero-1)
    }
}
console.log(calculadndo_factorial(5));

//Décimo algoritmo: 
/*
let numero = parseInt(prompt(`ingresa un numero`))
let i = 1;
while (i <=10){
    let multiplicar = numero*i;
    console.log(`${numero} * ${i} = ${multiplicar} `);
    i = i +1;
}
*/