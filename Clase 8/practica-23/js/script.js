function mayorCantidad (){


let aula001 = Number(document.querySelector("#aula001").value);
let aula101 = Number(document.querySelector("#aula101").value);
let aula201 = Number(document.querySelector("#aula201").value);
let aula301 = Number(document.querySelector("#aula301").value);
let aula501 = Number(document.querySelector("#aula501").value);
let maxPupitre = Math.max(aula001,aula101,aula201,aula301,aula501 );
let minPupitre = Math.min(aula001,aula101,aula201,aula301,aula501 );
let nombreMayor = "";

if (aula001 === maxPupitre) {
    nombreMayor = "Aula 001";
} else if (aula101 === maxPupitre) {
    nombreMayor = "Aula 101";
} else if (aula201 === maxPupitre) {
    nombreMayor = "Aula 201";
} else if (aula301 === maxPupitre) {
    nombreMayor = "Aula 301";
} else if (aula501 === maxPupitre) {
    nombreMayor = "Aula 501";
}
let nombreMenor = "";

if (aula001 === minPupitre) {
    nombreMenor = "Aula 001";
} else if (aula101 === minPupitre) {
    nombreMenor = "Aula 101";
} else if (aula201 === minPupitre) {
    nombreMenor = "Aula 201";
} else if (aula301 === minPupitre) {
    nombreMenor = "Aula 301";
} else if (aula501 === minPupitre) {
    nombreMenor = "Aula 501";
}


let totalMin = document.querySelector('#min')
totalMin.innerHTML = "El aula con más pupitres es " + nombreMenor + " con " + minPupitre;


let totalMax = document.querySelector('#max')
totalMax.innerHTML = "El aula con más pupitres es " + nombreMayor + " con " + maxPupitre;


let faltanAula001 = 80 - aula001;
let faltanAula101 = 80 - aula101;
let faltanAula201 = 80 - aula201;
let faltanAula301 = 80 - aula301;
let faltanAula501 = 80 - aula501;

let totalFaltante = faltanAula001 + faltanAula101 + faltanAula201 + faltanAula301 + faltanAula501;
let faltante = document.querySelector( '#faltante' )
faltante.innerHTML = "El total de pupitres faltantes es  " + totalFaltante



}