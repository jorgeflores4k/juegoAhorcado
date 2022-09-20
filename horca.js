let palabras = ["ALURA", "ORACLE", "JAVASCRIPT", "HTML", "JORGE", "TRADING"];
let tablero = document.getElementById("forca").getContext("2d");
let palabraSecreta = "";
let palabraArray = [];
var letrasProbadas = [];
var letrasEquivocadas = [];

//palabra secreta

function escogerPalabraSecreta(){
    let palabra = palabras[Math.floor(Math.random() * palabras.length)];
    palabraSecreta = palabra;
    console.log(palabraSecreta);

    palabraArray = palabraSecreta.split('');
    /*

    let anchuraArray = 600 / palabraArray.length;
    for(let i = 0; i < palabraArray.length; i++){
        var newLabel = document.createElement("label");
        var newContent = document.createTextNode(palabraArray[i]);
        newLabel.appendChild(newContent);
        var currentLabel = document.getElementById("contenedor");
        document.body.insertBefore(newLabel,currentLabel);
    }*/

}

function IniciarJuego(){
    document.getElementById("btnIniciarJuego").style.display = "none";
    document.getElementById("btnAgregarPalabra").style.display = "none";
    escogerPalabraSecreta();
    dibujarCanvas();
    dibujarLinea();
    document.addEventListener('keydown', (event) => {
        const keyName = event.key;
        insertarLetras(keyName);
    });
    dibujarPoste();
    dibujarViga();
    dibujarSoga();
    dibujarCabeza();
    dibujarCuello();
    dibujarBrazoDerecho();
    dibujarBrazoIzquierdo();
    dibujarDorso();
    dibujarPiernaDerecha();
    dibujarPiernaIzquierda();
    
}