function ejercicio1() {
    const output = document.getElementById("resp");
    let arreglo = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
    output.value = `Arreglo generado: ${arreglo.join(", ")}`;
}
function ejercicio2() {
    const input = document.getElementById("cali").value;
    const output = document.getElementById("resp");
    if (!input) {
        output.value = "Por favor, ingresa las calificaciones separadas por comas.";
        return;
    }

    let calificaciones = input.split(",").map(Number);
    if (calificaciones.length !== 5) {
        output.value = "Debes ingresar exactamente 5 calificaciones.";
        return;
    }
    let suma = calificaciones.reduce((acc, calificacion) => acc + calificacion, 0);
    let promedio = suma / calificaciones.length;
    output.value = `Calificaciones ingresadas: ${calificaciones.join(", ")}\nPromedio: ${promedio}`;
}
function ejercicio3() {
    const input = document.getElementById("a").value;
    const output = document.getElementById("resp");
    if (!input) {
        output.value = "Por favor, ingresa los números separados por comas.";
        return;
    }
    let numeros = input.split(",").map(Number);
    let maximo = Math.max(...numeros);
    output.value = `Lista de números: ${numeros.join(", ")}\nNúmero más grande: ${maximo}`;
}
function ejercicio4() {
    const input = document.getElementById("a").value;
    const output = document.getElementById("resp");
    if (isNaN(input) || input === "") {
        output.value = "Por favor, ingresa un número válido como límite.";
        return;
    }
    let limite = parseFloat(input);
    let arreglo = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
    let mayores = arreglo.filter((num) => num > limite);
    let promedio = mayores.reduce((acc, num) => acc + num, 0) / mayores.length || 0;
    output.value = `El arreglo generado es: ${arreglo.join(", ")}\n` +
                   `Los números mayores a ${limite} son: ${mayores.join(", ")}\n` +
                   `El promedio de esos números es: ${promedio.toFixed(2)}`;
}
function ejercicio5() {
    const output = document.getElementById("resp");
    let arreglo = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
    let minimo = Math.min(...arreglo);
    output.value = `Arreglo generado: ${arreglo.join(", ")}\nEl número más pequeño es: ${minimo}`;
}
function ejercicio6() {
    const output = document.getElementById("resp");
    let arreglo = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
    let pares = arreglo.filter((num) => num % 2 === 0);
    let promedio = pares.reduce((acc, num) => acc + num, 0) / pares.length || 0;
    output.value = `Arreglo generado: ${arreglo.join(", ")}\nNúmeros pares: ${pares.join(", ")}\nPromedio de pares: ${promedio.toFixed(2)}`;
}
function ejercicio7() {
    const input = document.getElementById("a").value;
    const output = document.getElementById("resp");
    if (isNaN(input) || input === "") {
        output.value = "Por favor, ingresa un número válido.";
        return;
    }
    let numero = input;
    let digitos = numero.split("").map(Number);
    let suma = digitos.reduce((acc, num) => acc + num, 0);
    output.value = `Los dígitos del número son: ${digitos.join(", ")}\n` +
                   `La suma de los dígitos es: ${suma}`;
}
function ejercicio8() {
    const input = document.getElementById("a").value;
    const output = document.getElementById("resp");
    if (!input) {
        output.value = "Por favor, ingresa los números separados por comas.";
        return;
    }
    const numeros = input.split(",").map(Number);
    let positivos = numeros.filter((num) => num > 0);
    let negativos = numeros.filter((num) => num < 0);
    let sumaPositivos = positivos.reduce((acc, num) => acc + num, 0);
    let sumaNegativos = negativos.reduce((acc, num) => acc + num, 0);
    output.value = `Números positivos: ${positivos.join(", ")}\n` +
                `Suma de positivos: ${sumaPositivos}\n` +
                `Números negativos: ${negativos.join(", ")}\n` +
                `Suma de negativos: ${sumaNegativos}`;
}
function ejercicio9() {
    const input = document.getElementById("a").value;
    const output = document.getElementById("resp");
    if (!input) {
        output.value = "Por favor, ingresa los números separados por comas.";
        return;
    }
    const numeros = input.split(",").map(Number);
    const cuadrados = numeros.map((num) => num ** 2);
    output.value = `Números originales: ${numeros.join(", ")}\n` +
                `Cuadrados: ${cuadrados.join(", ")}`;
}
function ejercicio10() {
    const inputA = document.getElementById("a").value;
    const inputB = document.getElementById("b").value;
    const output = document.getElementById("resp");
    if (!inputA || !inputB) {
        output.value = "Por favor, ingresa los elementos de ambos arreglos.";
        return;
    }
    const arregloA = inputA.split(",").map(Number);
    const arregloB = inputB.split(",").map(Number);
    if (arregloA.length !== arregloB.length) {
        output.value = "Los dos arreglos deben tener la misma cantidad de elementos.";
        return;
    }
    const sumaArreglos = arregloA.map((num, i) => num + arregloB[i]);

    output.value = `Arreglo 1: ${arregloA.join(", ")}\n` +
                `Arreglo 2: ${arregloB.join(", ")}\n` +
                `Suma de arreglos: ${sumaArreglos.join(", ")}`;
}