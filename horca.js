let palabras = ["MARCIANO", "ALMOADA", "LENTES", "LAPTOP", "CARRO", "SMART", "ANDROID", "CUADERNO", "MARISCO", "MANZANA"];
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
    console.log(palabras);

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
    /*document.addEventListener('keydown', (event) => {
        const keyName = event.key;
        insertarLetras(keyName);
    });   */
    window.addEventListener('keydown', insertarLetras);
}

function validarLetraMayuscula(letra){
    var letrasValidas = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var letrasMinusculas = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];
    let valida = false;

    for(let i = 0; i< letrasValidas.length; i++){
        if(letra == letrasValidas[i]){
            valida = true;
            break;
        }else{
            if(letra == letrasMinusculas[i]){
                alert("Solo puede escribir en letras mayusculas");
                break;
            }
        }
    }
    return valida;
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
    window.removeEventListener('keydown', insertarLetras); 
}

function agregarNuevaPalabra(){
    document.getElementById("btnIniciarJuego").style.display = "none";
    document.getElementById("btnAgregarPalabra").style.display = "none";

    document.getElementById("txtIngresarPalabra").style.display = "inline";
    document.getElementById("txtIngresarPalabra").focus();
    document.getElementById("imgAviso").style.display = "inline";
    document.getElementById("lblMensaje").style.display = "inline";
    document.getElementById("btnGuardarPalabra").style.display = "inline";
    document.getElementById("btnCancelarPalabra").style.display = "inline";

}

function cancelarNuevaPalabra(){
    document.getElementById("btnIniciarJuego").style.display = "inline";
    document.getElementById("btnAgregarPalabra").style.display = "inline";

    document.getElementById("txtIngresarPalabra").style.display = "none";
    document.getElementById("imgAviso").style.display = "none";
    document.getElementById("lblMensaje").style.display = "none";
    document.getElementById("btnGuardarPalabra").style.display = "none";
    document.getElementById("btnCancelarPalabra").style.display = "none";
}

function guardarPalabra(){
    var nuePalabra = document.getElementById("txtIngresarPalabra");
    var nuePalabraMayus = nuePalabra.value.toUpperCase();

    if(verificarSimbolos(nuePalabraMayus)){
        if(cantidadLetras(nuePalabraMayus)){
            if(palabraRepetida(nuePalabraMayus)){
                alert("Esta palabra ya existe en el juego");
                document.getElementById("txtIngresarPalabra").value = "";
                nuePalabra.focus();
            }else{
                palabras.push(nuePalabraMayus);
            
                document.getElementById("txtIngresarPalabra").value = "";
                document.getElementById("txtIngresarPalabra").style.display = "none";
                document.getElementById("imgAviso").style.display = "none";
                document.getElementById("lblMensaje").style.display = "none";
                document.getElementById("btnGuardarPalabra").style.display = "none";
                document.getElementById("btnCancelarPalabra").style.display = "none";
        
                IniciarJuego();
            }
        }else{
            alert("La palabra no puede contener mas de 8 letras.");
            document.getElementById("txtIngresarPalabra").value = "";
            nuePalabra.focus();
        }
    }else{
        alert("No puede ingresar números, símbolos ni letras con acento.");
        document.getElementById("txtIngresarPalabra").value = "";
        nuePalabra.focus();
    }
}

function cantidadLetras(palabra){
    let arrPalabra = palabra.split('');
    let cantidadCorrecta = true;
    if(arrPalabra.length >= 9){
        cantidadCorrecta = false;
    }
    return cantidadCorrecta;
}

function verificarSimbolos(palabra){
    let arrPalabra = palabra.split('');
    let NoHaySimbolos = true;
    for(let i = 0; i< arrPalabra.length; i++){
        if(validarLetraMayuscula(arrPalabra[i]) == false){
            NoHaySimbolos = false;
            break;
        }
    }
    return NoHaySimbolos;
}

function palabraRepetida(palabra){
    let repetida = false;
    for(let i = 0; i < palabras.length; i++){
        if(palabra == palabras[i]){
            repetida = true;
        }
    }
    return repetida;
}


