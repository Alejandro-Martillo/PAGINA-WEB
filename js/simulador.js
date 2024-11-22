function pregunta1() {
    const producto = document.getElementById("nombre").value;
    const cantidad = parseInt(document.getElementById("unidades").value);
    const precio = parseFloat(document.getElementById("precio").value);
    let subtotal = cantidad * precio;
    let descuento = 0;
    if (producto === "televisor" && cantidad >= 2) {
        descuento += subtotal * 0.10; 
    } else if (producto === "refrigeradora" && cantidad > 3) {
        descuento += subtotal * 0.15; 
    }
    let totalConDescuentos = subtotal - descuento;
    if (totalConDescuentos > 2000) {
        descuento += totalConDescuentos * 0.05; 
        totalConDescuentos -= totalConDescuentos * 0.05;
    }
    document.getElementById("resp").innerHTML = `
        Subtotal: $${subtotal.toFixed(2)}\n
        Descuento Total: $${descuento.toFixed(2)}\n
        Total a Pagar: $${totalConDescuentos.toFixed(2)}
    `;
}
function pregunta2() {
    const numero = parseInt(document.getElementById("numero").value);
    if (numero <= 1) {
        document.getElementById("resp").innerText = "Introduce un número mayor a 1.";
        return;
    }
    let sumaDivisores = 0;
    for (let i = 1; i < numero; i++) {
        if (numero % i === 0) {
            sumaDivisores += i;
        }
    }
    if (sumaDivisores === numero) {
        document.getElementById("resp").innerText = `El número ${numero} es perfecto.`;
    } else {
        document.getElementById("resp").innerText = `El número ${numero} no es perfecto.`;
    }
}
function pregunta3() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "linea3,5" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta4() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "a" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta5() {
    const numero = document.getElementById("numero").value;
    for (let i = numero.length - 1; i >= 0; i--) {
        digitosReversa.push(parseInt(numero[i], 10)); 
    }
    let suma = 0;
    for (let i = 0; i < digitosReversa.length; i++) {
        suma += digitosReversa[i];
    }
    document.getElementById("resp").innerHTML = `
        Dígitos en reversa: ${digitosReversa.join(", ")}\n
        Suma de los dígitos: ${suma}
    `;
}
function pregunta6() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "a" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta7() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "c" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta8() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "b" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta9() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "b" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta10() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "a" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta11() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "c" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta12() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "a" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta13() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "a" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta14() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "b" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta15() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "c" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta16() {
    let num = parseInt(prompt("Ingresa un número:"));
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            
            consol
console.log(i); 
        }
    }
}
mostrarDivisores(6);
function pregunta17() {
    let frase = document.getElementById('frase').value;
    let cantidadDigitos = 0;
    for (let i = 0; i < frase.length; i++) {
      if (!isNaN(frase[i]) && frase[i] !== ' ') {
        cantidadDigitos++;
      }
    }
    document.getElementById('resultado').textContent = `${cantidadDigitos} dígitos tiene la frase.`;
}
function pregunta18() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "d" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta19() {
    let sumaPares = 0;
    let sumaImpares = 0;
    let resultado = "";
    for (let i = 1; i <= 50; i++) {
        if (i % 3 === 0 && i % 7 === 0) {
            resultado += i + " ";
            if (i % 2 === 0) {
                sumaPares += i;
            } else {
                sumaImpares += i;
            }
        }
    }
    a = sumaImpares + sumaPares;
    resultado += `\nSuma de los números pares: ${sumaPares}\n`;
    resultado += `\nSuma de los números impares: ${sumaImpares}\n`;
    a = `Suma de todos los numeros: ${a}`
    document.getElementById("resp").innerHTML = resultado + a;
}
function pregunta20() {
    let numeros = [];
    let sumaPares = 0;
    let cantidadPares = 0;
    for (let i = 0; i < 10; i++) {
        let numero = Math.floor(Math.random() * 100) + 1;
        numeros.push(numero);
    }
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            sumaPares += numeros[i];
            cantidadPares++;
        }
    }
    let promedioPares = cantidadPares > 0 ? (sumaPares / cantidadPares).toFixed(2) : 0;
    let resultado = `Números generados: ${numeros.join(", ")}\n`;
    resultado += `Promedio de los números pares: ${promedioPares}\n`;
    document.getElementById("resp").innerHTML = resultado;
}
function pregunta21() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "a" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta22() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "b" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta23() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "d" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta24() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "c" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta25() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "b" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta26() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "b" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta27() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "a" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta28() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "a" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta29() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "b" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta30() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "d" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta31() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "d" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta32() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "a" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta33() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "b" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta34() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "a" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta35() {
    const frase = document.getElementById("nombre").value;
    const palabras = frase.split(" ");
    let palabrasConVocales = 0;
    for (let i = 0; i < palabras.length; i++) {
        const palabra = palabras[i];
        for (let j = 0; j < palabra.length; j++) {
            const letra = palabra[j].toLowerCase();
            if ("aeiou".includes(letra)) {
                palabrasConVocales++;
                break;
            }
        }
    }
    document.getElementById("resp").innerText = 
        `${palabras.length} palabras tiene la frase y ${palabrasConVocales} contienen vocales.`;
}
function pregunta36() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "c" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta37() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "c" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta38() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "b" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta39() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "a" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta40() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "a" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta41() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "b" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta42() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "a" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta43() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "a" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta44() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "d" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta45() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "b" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta46() {
    const subtotal = parseFloat(document.getElementById("precio").value);
    const dia = document.getElementById("dia").value.toLowerCase();
    const numPersonas = parseInt(document.getElementById("personas").value);
    const pagoConTarjeta = document.getElementById("tarjeta").value;
    if (isNaN(subtotal) || subtotal <= 0) {
      alert("Por favor, ingrese un subtotal válido mayor a 0.");
      return;
    }
    let descuento = 0;
    let recargo = 0;
    if ((dia === "lunes" || dia === "miércoles") && numPersonas > 4) {
      descuento += subtotal * 0.15;
    }
    if (dia === "sábado" || dia === "domingo") {
      recargo += subtotal * 0.10;
    }
    if (pagoConTarjeta) {
      recargo += subtotal * 0.05;
    }
    const subtotalConDescuento = subtotal - descuento;
    const totalFinal = subtotalConDescuento + recargo;
    const detalle = `
    Subtotal sin Descuento: $${subtotal.toFixed(2)}
    Total de Descuento: $${descuento.toFixed(2)}
    Subtotal con Descuento: $${subtotalConDescuento.toFixed(2)}
    Recargos (si aplican): $${recargo.toFixed(2)}
    Total a Pagar: $${totalFinal.toFixed(2)}
    `;
    document.getElementById("resp").value = detalle;
}
function pregunta47() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "a" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta48() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "b" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta49() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "c" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta50() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "d" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta51() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "d" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta52() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "b" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta53() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "a" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta54() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "a" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta55() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "a" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta56() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "c" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta57() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "b" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta58() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "b" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta59() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "a" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta60() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "a" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta61() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "b" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta62() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "b" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta63() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "b" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta64() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "a" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta65() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "a" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta66() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "b" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta67() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "b" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta68() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "c" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta69() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "c" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta70() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "b" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta71() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "a" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta72() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "c" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta73() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "d" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta74() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "a" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta75() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "b" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta76() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "c" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta77() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "a" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta78() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "b" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta79() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "c" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}
function pregunta80() {
    const respuesta = document.getElementById("nombre").value;
    if (respuesta === "c" ) {
        resp = "Respuesta Correcta!"; 
    } else {
        resp = "Respuesta Incorrecta :("; 
    }
    document.getElementById("resp").innerHTML = `
        Respuesta: ${resp}\n
    `;
}

