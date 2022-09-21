let palabras = ["ALURA", "ORACLE", "JAVASCRIPT", "HTML", "JORGE", "TRADING"];
let tablero = document.getElementById("forca").getContext("2d");
let palabraSecreta = "";
let palabraArray = [];
var letrasProbadas = [];
var letrasEquivocadas = [];
let numIntentos = 0;
let cantAciertos = 0;
let letrasAcertadas = 0;
let juegoFinalizado = false;

//palabra secreta

function escogerPalabraSecreta(){
    let palabra = palabras[Math.floor(Math.random() * palabras.length)];
    palabraSecreta = palabra;
    console.log(palabraSecreta);

    palabraArray = palabraSecreta.split('');
    cantAciertos = palabraArray.length;
    
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
    document.getElementById("btnNuevoJuego").style.display = "inline";
    document.getElementById("btnDesistir").style.display = "inline";
    escogerPalabraSecreta();
    dibujarCanvas();
    dibujarLinea();
    document.addEventListener('keydown', (event) => {
        const keyName = event.key;
        insertarLetras(keyName);
    });   
}

function validarLetraMayuscula(letra){
    var letrasValidas = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var letrasMinusculas = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];
    let valida = false;

    for(let i = 0; i< letrasValidas.length; i++){
        if(letra == letrasValidas[i]){
            valida = true;
            
        }else{
            if(letra == letrasMinusculas[i]){
                alert("Solo puede escribir en letras mayusculas");
            }
        }
    }
    return valida;
    console.log(letrasValidas);
}

function NuevoJuego(){
    limpiarCanvas();
    IniciarJuego();
}

function Desistir(){
    limpiarCanvas();
    document.getElementById("btnNuevoJuego").style.display = "none";
    document.getElementById("btnDesistir").style.display = "none";
    document.getElementById("btnIniciarJuego").style.display = "inline";
    document.getElementById("btnAgregarPalabra").style.display = "inline";
}
