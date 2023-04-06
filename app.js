let popup = document.getElementById("popup");
let close = document.getElementById("close");
const open = document.getElementById("open");
const main = document.querySelector(".main");
const task1 = document.getElementById("task1");
const funciones = document.querySelector(".funciones");
const btn = document.querySelector(".btn");
const programa = document.querySelector(".programa");

let tanque = 40;
let recorridoGasolina = 480;
let recorridoAlcohol = 300;
let consumo1 = recorridoGasolina / tanque;
let consumo2 = recorridoAlcohol / tanque;
let anho = 2023;
let nacimiento = 1993;
let nombre = "Ellis";
let visible = false;
let promedio = (10 + 25 + 15) / 3;
let mujeres = ["diana", "paola", "juana"];
let edad = Math.abs(anho - nacimiento);

open.addEventListener("click", () => {
  popup.style.display = "block";
  visible = true;
});

close.addEventListener("click", () => {
  popup.style.display = "none";
  visible = false;
});

const newDiv = document.createElement("div");
newDiv.classList.add("fecha");
newDiv.innerHTML = `
<p>
 ${nombre} tiene ${edad} años 
</p>
<p>El promedio de la edad de ${mujeres} es de ${Math.round(promedio)}</p>
`;
main.appendChild(newDiv);

const tareaConsumo = document.createElement("div");
tareaConsumo.classList.add("consumo");
tareaConsumo.innerHTML = `
 <p>distancia recorrida entre cantidad de litros gastados con gasolina ${consumo1} litros</p>
 <p>distancia recorrida entre cantidad de litros gastados con alcohol ${consumo2} litros</p>
`;
task1.appendChild(tareaConsumo);

function imprimirFuncion(frase) {
  btn.addEventListener("click", () => {
    let newFrase = document.createElement("div");
    newFrase.innerHTML = `
     <p >
     ${frase}  
     <span id="close">&times;</span>
     </p>
      `;
    funciones.appendChild(newFrase);
    let closeBtn = newFrase.querySelector("#close");
    closeBtn.addEventListener("click", () => {
      newFrase.remove();
    });
  });
}

imprimirFuncion("Hola soy una frase desde una funcion");



function saltarLinea() {
  programa.innerHTML += "<hr>";
  programa.innerHTML += "<br>".repeat(5);
}

function imprimirLinea(frase) {
  programa.innerHTML += "<big><br>";
  programa.innerHTML += frase;
  programa.innerHTML += "</big>";
  saltarLinea();
}

let anhos = 2025;
imprimirLinea( "hola amigos");
imprimirLinea("Ellis tiene: " + (anhos - 2000) + " años");
imprimirLinea("david tiene: " + (anhos - 1995) + " años");
anhos = 2030;
imprimirLinea("santiago tiene: " + (anhos - 2005) + " años");
