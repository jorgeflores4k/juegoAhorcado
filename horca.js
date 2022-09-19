let palabras = ["ALURA", "ORACLE", "JAVASCRIPT", "HTML", "JORGE", "TRADING"];
let tablero = document.getElementById("forca").getContext("2d");
let palabraSecreta = "";

//palabra secreta

function escogerPalabraSecreta(){
    let palabra = palabras[Math.floor(Math.random() * palabras.length)];
    palabraSecreta = palabra;
    console.log(palabraSecreta);

    palabraArray = [palabraSecreta];

    /*let anchuraArray = 600 / palabraArray.length;
    for(let i = 0; i < palabraArray.length; i++){
        
    }*/

}

function IniciarJuego(){
    document.getElementById("btnIniciarJuego").style.display = "none";
    document.getElementById("btnAgregarPalabra").style.display = "none";
    escogerPalabraSecreta();
    dibujarCanvas();
    dibujarLinea();
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