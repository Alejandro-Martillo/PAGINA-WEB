function ejercicio1() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var resultado = apellido + " " + nombre;
    document.getElementById("resp").value = resultado;
}
function ejercicio2() {
    var frase1 = document.getElementById("frase1").value;
    var frase2 = document.getElementById("frase2").value;
    var resultado = "";
  
    if (frase1 === frase2) {
        resultado = "Las frases son iguales.";
    } else if (frase1 > frase2) {
        resultado = "La primera frase es mayor que la segunda.";
    } else {
        resultado = "La primera frase es menor que la segunda.";
    }
    document.getElementById("resp").value = resultado;
}
function ejercicio3() {
    var palabra = document.getElementById("palabra").value;
    var nuevaPalabra = "";
  
    for (var i = 0; i < palabra.length; i++) {
        nuevaPalabra += palabra[i] + " ";
    }
  
    document.getElementById("resp").value = nuevaPalabra.trim();
}
function ejercicio4() {
    var frase = document.getElementById("palabra").value;
    var resultado = "";
  
    for (var i = 0; i < frase.length; i++) {
        resultado += "Carácter: " + frase[i] + " - Código ASCII: " + frase.charCodeAt(i) + "\n";
    }
  
    document.getElementById("resp").value = resultado;
}
function ejercicio5() {
    var palabra = document.getElementById("frase").value;
    var palabraInvertida = palabra.split("").reverse().join("");
    document.getElementById('resp').textContent = 
        `La frase invertido es: ${palabraInvertida}`;
}
function ejercicio6() {
    var palabra = document.getElementById("palabra").value;
    var contador = 0;
    var vocales = "aeiouAEIOU";
    for (var i = 0; i < palabra.length; i++) {
        if (vocales.includes(palabra[i])) {
            contador++;
        }
    }
    document.getElementById("resp").value = "Cantidad de vocales: " + contador;
}
function ejercicio7() {
    var palabra = document.getElementById("palabra").value;
    var contador = 0;
  
    for (var i = 0; i < palabra.length; i++) {
        if (/[a-zA-Z]/.test(palabra[i])) {
            contador++;
        }
    }
  
    document.getElementById("resp").value = "Cantidad de letras del alfabeto: " + contador;
}
function ejercicio8() {
    var frase = document.getElementById("frase").value;
    var contador = 0;
  
    for (var i = 0; i < frase.length; i++) {
        if (/[0-9]/.test(frase[i])) {
            contador++;
        }
    }
  
    document.getElementById("resp").value = "Cantidad de dígitos: " + contador;
}
function ejercicio9() {
    var palabra = document.getElementById("palabra").value;
    var contador = 0;
    var puntuacion = ",.¿?¡!:;()[]{}-";
    for (var i = 0; i < palabra.length; i++) {
        if (puntuacion.includes(palabra[i])) {
            contador++;
        }
    }
    document.getElementById("resp").value = "Cantidad de signos de puntuación: " + contador;
}
function ejercicio10() {
    var frase = document.getElementById("frase").value;
    var palabras = frase.split(/\s+/);
    var contador = palabras.filter(function (palabra) {
        return palabra.length > 0;
    }).length;
  
    document.getElementById("resp").value = "Cantidad de palabras: " + contador;
}
  