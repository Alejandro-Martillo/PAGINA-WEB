function ejercicio1() {
    let resultado = [];
    for (let i = 1; i <= 50; i++) {
      if (i % 2 !== 0) resultado.push(i);
    }
    document.getElementById("resp").value = resultado.join(", ");
}
function ejercicio2() {
    let suma = 0;
    let cadena = ""; 
    for (let i = 1; i <= 100; i++) {
      suma += i;
      cadena += i; 
      if (i < 100) cadena += "+"; 
    }
    cadena += "=" + suma; 
    document.getElementById("resp").innerText = cadena; 
}
function ejercicio3() {
    const numero = parseInt(document.getElementById('numero').value);
    let suma = 0;
    if (isNaN(numero) || numero < 1) {
        document.getElementById('resultado').textContent = 
            "Por favor, ingresa un número válido mayor o igual a 1.";
        return;
    }
    for (let i = 2; i <= numero; i += 2) {
        suma += i;
    }
    document.getElementById('resp').textContent = 
        `La suma de todos los números pares desde 1 hasta ${numero} es: ${suma}`;
}
function ejercicio4() {
    let resultado = [];
    for (let i = 1; i <= 100; i++) if (i % 3 === 0 && i % 5 === 0) resultado.push(i);
    document.getElementById("resp").value = resultado.join(", ");
}
function ejercicio5() {
    let num = parseInt(document.getElementById("numero").value);
    let resultado = [];
    for (let i = 1; i <= 12; i++) resultado.push(`${num} x ${i} = ${num * i}`);
    document.getElementById("resp").value = resultado.join("\n");
}
function ejercicio6() {
    let n = parseInt(document.getElementById("numero").value);
    let a = 0, b = 1, resultado = [a, b];
    for (let i = 3; i <= n; i++) {
      let siguiente = a + b;
      resultado.push(siguiente);
      a = b;
      b = siguiente;
    }
    document.getElementById("resp").value = resultado.join(", ");
}
function ejercicio7() {
    let num = parseInt(document.getElementById("numero").value);
    let factorial = 1;
    let multiplicaciones = []; 
  
    for (let i = 1; i <= num; i++) {
      factorial *= i;
      multiplicaciones.push(i);
    }
  
    document.getElementById("resp").value = `${multiplicaciones.join(' x ')} = ${factorial}`;
}
function ejercicio8() {
    const numero = parseInt(document.getElementById('numero').value);
    if (isNaN(numero) || numero < 0) {
        document.getElementById('resp').textContent = 
            "Por favor, ingresa un número válido mayor o igual a 0.";
        return;
    }
    let factorial = 1;
    let pasos = "";
    for (let i = numero; i > 0; i--) {
        factorial *= i;
        pasos += i === 1 ? `${i}` : `${i} * `;
    }
    document.getElementById('resp').textContent = 
        `El factorial de ${numero} es: ${factorial} (${pasos} = ${factorial})`;
}
function ejercicio9() {
    let num = parseInt(document.getElementById("numero").value);
  
    let resultado = [];
  
    for (let i = 1; i <= 20; i++) {
      if (i % num === 0) {
        resultado.push(i);
      }
    }
  
    const output = document.getElementById("resp");
  
    if (resultado.length > 0) {
      output.value = `Los múltiplos de ${num} entre 1 y 20 son: ${resultado.join(", ")}.`;
    } else {
      output.value = `No hay múltiplos de ${num} entre 1 y 20.`;
    }
}
function ejercicio10() {
    const numero = parseInt(document.getElementById('numero').value);
    if (isNaN(numero) || numero < 1) {
        document.getElementById('resp').textContent = 
            "Por favor, ingresa un número válido mayor o igual a 1.";
        return;
    }
    const divisores = [];
    for (let i = 1; i < numero; i++) {
        if (numero % i === 0) {
            divisores.push(i);
        }
    }
    if (divisores.length > 0) {
        document.getElementById('resp').textContent = 
            `Los divisores de ${numero}, excluyendo el propio número, son: ${divisores.join(', ')}`;
    } else {
        document.getElementById('resp').textContent = 
            `El número ${numero} no tiene divisores (excepto 1).`;
    }
}
function ejercicio11() {
    const numero = parseInt(document.getElementById('numero').value);
    if (isNaN(numero) || numero < 1) {
        document.getElementById('resp').textContent = 
            "Por favor, ingresa un número válido mayor o igual a 1.";
        return;
    }
    let sumaDivisores = 0;
    for (let i = 1; i < numero; i++) {
        if (numero % i === 0) {
            sumaDivisores += i;
        }
    }
    if (sumaDivisores === numero) {
        document.getElementById('resp').textContent = 
            `¡El número ${numero} es un número perfecto! La suma de sus divisores (${sumaDivisores}) es igual al número.`;
    } else {
        document.getElementById('resp').textContent = 
            `El número ${numero} no es perfecto. La suma de sus divisores (${sumaDivisores}) no es igual al número.`;
    }
}
function ejercicio12() {
    let resp = "", num = "", r = 0, divisor = 2, primo = 1
    num = document.getElementById("numero").value
    resp = document.getElementById("resp")
    num = parseInt(num)
    while (divisor < num && primo == 1) {
      r = num % divisor
      if (r == 0) { 
        primo = 0
      } else {
        divisor = divisor + 1
      }
    }
    if (primo == 1) {
      resp.innerHTML = `😊${num} Es Primo`
    } else {
      resp.innerHTML = `😞${num} No Es Primo`
    }
}
function ejercicio13() {
    const numero = document.getElementById('numero').value;
    if (numero === "") {
        document.getElementById('resp').textContent = 
            "Por favor, ingresa un número válido.";
        return;
    }
    const numeroInvertido = numero.split('').reverse().join('');
    document.getElementById('resp').textContent = 
        `El número invertido es: ${numeroInvertido}`;
}
function ejercicio14() {
    let num = document.getElementById("numero").value;
    const cantidadDigitos = num.length;
    document.getElementById('resp').textContent = 
        `El número ${num} tiene ${cantidadDigitos} dígito(s).`;
}
function ejercicio15() {
    let altura = parseInt(document.getElementById("numero").value);
    let resultado = [];
    for (let i = 1; i <= altura; i++) resultado.push("*".repeat(i));
    document.getElementById("resp").value = resultado.join("\n");
}
  