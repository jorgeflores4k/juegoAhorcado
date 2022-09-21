function dibujarCanvas(){
    tablero.Linewidth = 8;
    tablero.LineCap = "round";
    tablero.LineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#8A3871";

    tablero.fillRect(0,0,1200,860);
    tablero.beginPath();
    tablero.moveTo(350, 400);
    tablero.lineTo(600, 400);
    tablero.stroke();
    tablero.closePath();

    
}

function verificarLetra(valor){
    probada = false;
    for(let i = 0; i < letrasProbadas.length; i++){
        if(valor == letrasProbadas[i]){
            probada = true;
        }
    }

    if(probada == false){
        letrasProbadas.push(valor);
    }

    return probada;
}

function insertarLetras(valor){
    let anchura = 600/palabraSecreta.length;
    acerto = false;

    if(validarLetraMayuscula(valor)){
        if(juegoFinalizado){  //numIntentos == 10
            //alert("El juego termino");
        }else{
            if(verificarLetra(valor) == false){
                for(let i = 0; i < palabraArray.length; i++){
                    if(valor == palabraArray[i]){
                        tablero.font = "30px Arial";
                        tablero.strokeText(palabraArray[i], 215 + (anchura * i), 475);
                        acerto = true;
                        letrasAcertadas++;
                        if(letrasAcertadas == cantAciertos){
                            ganador();
                            juegoFinalizado = true;
                            //numIntentos = 10;
                            
                        }
                    }
                }
                if(acerto == false){
                    numIntentos++;
                    dibujarAhorcado(numIntentos);
                    letrasEquivocadas.push(valor);
                    for(let i = 0; i <= letrasEquivocadas.length; i++){
                        if(i == letrasEquivocadas.length - 1){
                            tablero.font = "20px Arial";
                            tablero.strokeText(letrasEquivocadas[i], 250 + ((anchura/2) * i), 550);
                        }
                        
                    }
                }
            }
        }
    }
    console.log(numIntentos);
}

function dibujarAhorcado(num){
    switch(num){
        case 1:
            dibujarPoste();
            break;
        case 2:
            dibujarViga();
            break;
        case 3:
            dibujarSoga()
            break;
        case 4:
            dibujarCabeza();
            break;
        case 5:
            dibujarCuello();
            break;
        case 6:
            dibujarBrazoIzquierdo();
            break;
        case 7:
            dibujarBrazoDerecho();
            break;
        case 8:
            dibujarDorso();
            break;
        case 9:
            dibujarPiernaIzquierda();
            break;
        default:
            dibujarPiernaDerecha();
            finDelJuego();
            juegoFinalizado = true;
            break;

    }
}

function ganador(){
    tablero.font = "30px Arial";
    tablero.strokeText("Ganaste, Felicidades!!!", 650, 250);
}

function finDelJuego(){
    tablero.font = "30px Arial";
    tablero.strokeText("Fin del Juego", 650, 250);
}

function limpiarCanvas(){
    tablero.clearRect(0,0,1200,860);
    palabraSecreta = "";
    palabraArray = [];
    letrasProbadas = [];
    letrasEquivocadas = [];
    numIntentos = 0;
    cantAciertos = 0;
    letrasAcertadas = 0;
    juegoFinalizado = false;
}



function dibujarLinea(){
    tablero.Linewidth = 6;
    tablero.LineCap = "round";
    tablero.LineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#8A3871";

    let anchura = 600/palabraSecreta.length;
    for(let i = 0; i < palabraSecreta.length; i++){
        tablero.moveTo(200 + (anchura * i), 490);
        tablero.lineTo(250 + (anchura * i), 490);
    }
    tablero.stroke();
    tablero.closePath();

}

function dibujarPoste(){
    tablero.Linewidth = 8;
    tablero.LineCap = "round";
    tablero.LineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#8A3871";

    tablero.moveTo(475, 50);
    tablero.lineTo(475, 400);
    tablero.stroke();
    tablero.closePath();
}

function dibujarViga(){
    tablero.Linewidth = 8;
    tablero.LineCap = "round";
    tablero.LineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#8A3871";

    tablero.moveTo(475, 50);
    tablero.lineTo(600, 50);
    tablero.stroke();
    tablero.closePath();
}

function dibujarSoga(){
    tablero.Linewidth = 8;
    tablero.LineCap = "round";
    tablero.LineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#8A3871";

    tablero.moveTo(600, 50);
    tablero.lineTo(600, 100);
    tablero.stroke();
    tablero.closePath();
}

function dibujarCabeza(){
    tablero.beginPath();
    tablero.arc(600,125,25,0,2*Math.PI);
    tablero.stroke();
}

function dibujarCuello(){
    tablero.moveTo(600, 150);
    tablero.lineTo(600, 165);
    tablero.stroke();
    tablero.closePath();
}

function dibujarBrazoDerecho(){
    tablero.moveTo(600, 165);
    tablero.lineTo(550, 200);
    tablero.stroke();
    tablero.closePath();
}

function dibujarBrazoIzquierdo(){
    tablero.moveTo(600, 165);
    tablero.lineTo(650, 200);
    tablero.stroke();
    tablero.closePath();
}

function dibujarDorso(){
    tablero.moveTo(600, 165);
    tablero.lineTo(600, 250);
    tablero.stroke();
    tablero.closePath();
}

function dibujarPiernaDerecha(){
    tablero.moveTo(600, 250);
    tablero.lineTo(550, 285);
    tablero.stroke();
    tablero.closePath();
}

function dibujarPiernaIzquierda(){
    tablero.moveTo(600, 250);
    tablero.lineTo(650, 285);
    tablero.stroke();
    tablero.closePath();
}