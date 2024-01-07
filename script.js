/* EJERCICIOS DE JS DE FUNDAMENTOS */
/* elaborados con funciones por el rendimiento en general a comparacion de los prompts*/
const d = document;
//ejercicio n1

const ej1 = (a, b, c) => {
  let s = a + b + c;
  let p = s / 3;

  /* es para que la respuesta se vea en el html */
  let r = d.querySelector(".des1");
  const contenedor = d.querySelector(".ej1");
  let pr = d.createElement("p");
  pr.style.padding = "10px";
  pr.style.backgroundColor = "aquamarine";
  /*  */
  if (s > 30) {
    pr.textContent = `los numeros son ${a} ${b} ${c} , Suma es > 30 =  APROBADO😀😀`;
    contenedor.insertAdjacentElement("afterend", pr);
  } else {
    pr.textContent = `los numeros son ${a} ${b} ${c} , Suma es < 30 =  reprobado😈👿😈`;

    contenedor.insertAdjacentElement("afterend", pr);
  }
};
ej1(10, 9, 5); /* aqui se ingresan los numeros */
////////////////////////////////////////////////
//ejercicio n2
const ej2 = (b, h) => {
  let a = (b * h) / 2;
  /*  */
  let p = d.createElement("p");
  p.textContent = `RESPUESTA: la base ${b} * la altura ${h} = ${a}`;
  p.style.padding = "10px";
  p.style.backgroundColor = "aquamarine";
  let $ct = d.querySelector(".ej2");
  $ct.insertAdjacentElement("afterend", p);
};
ej2(7, 5);
/* ejercicio 3 */
const ej3 = (n) => {
  let p = d.createElement("p");
  if (n % 2 === 0) {
    p.textContent = ` el numero ${n} es PAR 😎`;
  } else {
    p.textContent = ` el numero ${n} es IMPAR 🤔`;
  }
  /*  */
  p.style.padding = "10px";
  p.style.backgroundColor = "aquamarine";
  let $ct = d.querySelector(".ej3");
  $ct.insertAdjacentElement("afterend", p);
};
ej3(7, 5);
/* ejercicio 4 */
const ej4 = (m) => {
  let p = d.createElement("p");
  let r = m * 1.609;
  /*  */
  p.textContent = ` ${m} MILLAS es = ${r} KM`;
  p.style.padding = "10px";
  p.style.backgroundColor = "aquamarine";
  let $ct = d.querySelector(".ej4");
  $ct.insertAdjacentElement("afterend", p);
};
ej4(10);

/* Ejercicio 5 */
const ej5 = (t, dt) => {
  let p = d.createElement("p");
  let v = dt / t;
  /*  */
  p.textContent = ` ${dt} M / ${t} s = ${v} m/s`;
  p.style.padding = "10px";

  /* agregar respuesta al html */
  p.style.backgroundColor = "aquamarine";
  let $ct = d.querySelector(".ej5");
  $ct.insertAdjacentElement("afterend", p);
};
ej5(10, 6);
const ej6 = (t, dt) => {
  let p = d.createElement("p");
  let v = dt / t;
  /*  */
  p.textContent = ` ${dt} M / ${t} s = ${v} m/s`;
  p.style.padding = "10px";

  /* agregar respuesta al html */
  p.style.backgroundColor = "aquamarine";
  let $ct = d.querySelector(".ej6");
  $ct.insertAdjacentElement("afterend", p);
};
/* ej5(10, 6); */
ej6(10, 6);
/* ejercicio 7 */
const ej7 = (n) => {
  let p = d.createElement("p");
  if (n >= 7) {
    p.textContent = `el numero ${n} es mayor o igual a 7 entonces "PASA" `;
  } else {
    p.textContent = `el numero ${n}  no es mayor o igual a 7 entonces " NO PASA" `;
  }
  /*  */
  p.style.padding = "10px";

  /* agregar respuesta al html */
  p.style.backgroundColor = "aquamarine";
  let $ct = d.querySelector(".ej7");
  $ct.insertAdjacentElement("afterend", p);
};
ej7(8);
/* ejercicio 8 */
const ej8 = (b, h, r) => {
  let p = d.createElement("p");
  if (b !== h && b === r) {
    let a = Math.floor(Math.PI * Math.pow(r, 2));
    p.textContent = `la base es ${b} y la altura ${h} y el radio ${r} = Area del circulo es ${a}" `;
  } else {
    let ar = b * h;
    p.textContent = `la base es ${b} y la altura ${h} = Area del rectangulo es ${ar}" `;
  }
  /*  */
  p.style.padding = "10px";

  /* agregar respuesta al html */
  p.style.backgroundColor = "aquamarine";
  let $ct = d.querySelector(".ej8");
  $ct.insertAdjacentElement("afterend", p);
};
ej8(5, 6, 4);
/* ejercicio 9 */
const ej9 = (n) => {
  let p = d.createElement("p");
  if (n >= 7) {
    p.textContent = ` se ingreso ${n}  entonces eso es !EXCELENTE! 😛😛😛😛" `;
  } else if (n >= 5) {
    p.textContent = ` se ingreso ${n}  entonces eso es !bueno ! 🤐😯😯😯" `;
  } else {
    p.textContent = ` se ingreso ${n}  entonces eso es !regular ! 😏😣😥" `;
  }
  /*  */
  p.style.padding = "10px";

  /* agregar respuesta al html */
  p.style.backgroundColor = "aquamarine";
  let $ct = d.querySelector(".ej9");
  $ct.insertAdjacentElement("afterend", p);
};
ej9(5);
/* ejercicio 10 */
const ej10 = (a, b, c) => {
  let p = d.createElement("p");

  let pr = (a + b + c) / 3;

  if (pr >= 8) {
    p.textContent = ` se ingreso ${a} ${b} ${c}  y el promedio es ${Math.floor(
      pr
    )} !sobresaliente! 😛😛😛😛" `;
  } else if (pr >= 6) {
    p.textContent = ` se ingreso ${a} ${b} ${c} y el promedio es ${Math.floor(
      pr
    )} ! Muy bueno ! 🤐😯😯😯" `;
  } else if (pr >= 4) {
    p.textContent = ` se ingreso ${a} ${b} ${c}  y el promedio es ${Math.floor(
      pr
    )} !regular ! 😏😣😥" `;
  }
  /*  */
  p.style.padding = "10px";

  /* agregar respuesta al html */
  p.style.backgroundColor = "aquamarine";
  let $ct = d.querySelector(".ej10");
  $ct.insertAdjacentElement("afterend", p);
};
ej10(10, 7, 6);
/* ejercicio 11 */
const ej11 = (a) => {
  let p = d.createElement("p");

  if (a) {
    p.textContent = ` se ingreso ${a}  verdadero 😛😛😛😛" `;
  } else {
    p.textContent = ` No se ingreso A falso 👿😈🤓" `;
  }
  /*  */
  p.style.padding = "10px";

  /* agregar respuesta al html */
  p.style.backgroundColor = "aquamarine";
  let $ct = d.querySelector(".ej11");
  $ct.insertAdjacentElement("afterend", p);
};
ej11();
/* ejercicio 12 */
const ej12 = (a, b) => {
  let p = d.createElement("p");

  if (a > b) {
    p.textContent = ` A:${a} es mayor 😛😛😛😛" `;
  } else if (b > a) {
    p.textContent = `B: ${b} es mayor 👿😈🤓" `;
  } else {
    p.textContent = `A: ${a} y B: ${b} son iguales 😁 `;
  }
  /*  */
  p.style.padding = "10px";

  /* agregar respuesta al html */
  p.style.backgroundColor = "aquamarine";
  let $ct = d.querySelector(".ej12");
  $ct.insertAdjacentElement("afterend", p);
};
ej12(7, 7);
/* EJERCICIO 13 */
const ej13 = (a, b, c) => {
  let p = d.createElement("p");

  let numerosOrdenados = [a, b, c].sort(function (a, b) {
    return b - a;
  });
  p.textContent = ` Numeros ordenados ${numerosOrdenados.join(",")} 😁 `;

  /*  */
  p.style.padding = "10px";

  /* agregar respuesta al html */
  p.style.backgroundColor = "aquamarine";
  let $ct = d.querySelector(".ej13");
  $ct.insertAdjacentElement("afterend", p);
};
ej13(5, 4, 6);
/* EJERCICIO 14 */
const ej14 = (t) => {
  let p = d.createElement("p");
  if (t >= 25 && t <= 35) {
    p.textContent = ` ${t}C°  es caluroso 🥵🥵🥵" `;
  } else if (t >= 15 && t < 25) {
    p.textContent = ` ${t}C° es normal  😀😀😀" `;
  } else {
    p.textContent = `${t} C° esta frio 🥶🥶🥶 `;
  }

  /*  */
  p.style.padding = "10px";

  /* agregar respuesta al html */
  p.style.backgroundColor = "aquamarine";
  let $ct = d.querySelector(".ej14");
  $ct.insertAdjacentElement("afterend", p);
};
ej14(34);
/* ejercio 15 */
const ej15 = (dc, u) => {
  let p = d.createElement("p");

  let mt = dc * 12 * u;
  p.textContent = `${dc} Decenas de unidades a ${u}$ por articulo es en total a ${mt}$ `;
  /*  */
  p.style.padding = "10px";

  /* agregar respuesta al html */
  p.style.backgroundColor = "aquamarine";
  let $ct = d.querySelector(".ej15");
  $ct.insertAdjacentElement("afterend", p);
};
ej15(4, 3);
/* EJERCICIO 16 */
const ej16 = (n, a, b) => {
  let p = d.createElement("p");
  /*  */

  switch (n) {
    case 1:
      p.textContent = ` se ingreso la opcion ${n}:entonces se realiza la operacion
       ${a}+${b} = ${a + b} `;
      break;
    case 2:
      p.textContent = ` se ingreso la opcion ${n}:entonces se realiza la operacion
          ${a}-${b} = ${a - b} `;
      break;
    case 3:
      p.textContent = ` se ingreso la opcion ${n}:entonces se realiza la operacion
          ${a}*${b} = ${a * b} `;
      break;
    case 4:
      p.textContent = ` se ingreso la opcion ${n}:entonces se realiza la operacion
          ${a}/${b} = ${a / b} `;
      break;

    default:
      break;
  }

  /*  */
  /*  */
  p.style.padding = "10px";

  /* agregar respuesta al html */
  p.style.backgroundColor = "aquamarine";
  let $ct = d.querySelector(".ej16");
  $ct.insertAdjacentElement("afterend", p);
};
ej16(1, 2, 3);
/* ejercio 17 */
const ej17 = () => {
  let p = d.createElement("p");
  let arr = [];
  for (let i = 1; i <= 10; i++) {
    arr.push(i);
  }
  p.textContent = `${arr}`;
  /*  */
  p.style.padding = "10px";
  p.style.fontSize = "17px";

  /* agregar respuesta al html */
  p.style.backgroundColor = "aquamarine";
  let $ct = d.querySelector(".ej17");
  $ct.insertAdjacentElement("afterend", p);
};
ej17();
/* ejercio 18*/
const ej18 = () => {
  let p = d.createElement("p");
  let suma = 0;
  let arr = [];
  for (let i = 1; i <= 10; i++) {
    suma += i;
    arr.push(i);
  }
  p.textContent = ` los numeros son ${arr} y la suma es = ${suma}`;
  /*  */
  p.style.padding = "10px";
  p.style.fontSize = "17px";

  /* agregar respuesta al html */
  p.style.backgroundColor = "aquamarine";
  let $ct = d.querySelector(".ej18");
  $ct.insertAdjacentElement("afterend", p);
};
ej18();
/* ejercio 19 */
const ej19 = () => {
  let p = d.createElement("p");
  let suma = 0;
  let arr = [];
  for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
      suma += i;
      arr.push(i);
    }
  }
  p.textContent = ` los numeros son ${arr} y la suma es = ${suma}`;
  /*  */
  p.style.padding = "10px";
  p.style.fontSize = "17px";

  /* agregar respuesta al html */
  p.style.backgroundColor = "aquamarine";
  let $ct = d.querySelector(".ej19");
  $ct.insertAdjacentElement("afterend", p);
};
ej19();
/* ejercio 20 */
const ej20 = () => {
  let p = d.createElement("p");
  let sumaP = 0;
  let sumaI = 0;
  let arr = [];
  let arr2 = [];
  for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      sumaP += i;
      arr.push(i);
    } else {
      sumaI += i;
      arr2.push(i);
    }
  }

  p.innerHTML = ` los numeros  impares son ${arr2} y la suma es = ${sumaI} <br> los numeros  pares son ${arr} y la suma es = ${sumaP}`;
  /*  */
  p.style.padding = "10px";
  p.style.fontSize = "17px";

  /* agregar respuesta al html */
  p.style.backgroundColor = "aquamarine";
  let $ct = d.querySelector(".ej20");
  $ct.insertAdjacentElement("afterend", p);
};
ej20();
/* ejercio 21 */
const ej21 = () => {
  let p = d.createElement("p");
  let arr = [];

  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
      arr.push(i);
    }
  }

  p.textContent = ` los numeros multiplos del 3 son ${arr} `;
  /*  */
  p.style.padding = "10px";
  p.style.fontSize = "17px";

  /* agregar respuesta al html */
  p.style.backgroundColor = "aquamarine";
  let $ct = d.querySelector(".ej21");
  $ct.insertAdjacentElement("afterend", p);
};
ej21();
/* ejercio 22 */
const ej22 = () => {
  let p = d.createElement("p");
  let arr = [];
  let suma = 0;
  for (let i = 1; i <= 30; i++) {
    if (i % 6 === 0) {
      suma += i;
      arr.push(i);
    }
  }

  p.textContent = ` los numeros multiplos del 6 son: ${arr} y la suma es ${suma} `;
  /*  */
  p.style.padding = "10px";
  p.style.fontSize = "17px";

  /* agregar respuesta al html */
  p.style.backgroundColor = "aquamarine";
  let $ct = d.querySelector(".ej22");
  $ct.insertAdjacentElement("afterend", p);
};
ej22();
/* ejercio 23 */
const ej23 = () => {
  let p = d.createElement("p");
  let arr = [];
  let m = 1;
  for (let i = 1; i <= 30; i++) {
    if (i % 5 === 0) {
      m = m * i;
      arr.push(i);
    }
  }

  p.textContent = ` los numeros multiplos del 5 son: ${arr} y la multiplicacion es ${m} `;
  /*  */
  p.style.padding = "10px";
  p.style.fontSize = "17px";

  /* agregar respuesta al html */
  p.style.backgroundColor = "aquamarine";
  let $ct = d.querySelector(".ej23");
  $ct.insertAdjacentElement("afterend", p);
};
ej23();

/* ejercio 24 */
const ej24 = () => {
  const primos = [];

  for (let i = 2; i <= 100; i++) {
    let esPrimo = true;

    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        esPrimo = false;
        break;
      }
    }

    if (esPrimo) {
      primos.push(i);
    }
  }

  return primos;
};
const numerosPrimos = ej24();
/*  */
let p = d.createElement("p");

/*  */
p.style.padding = "10px";
p.style.fontSize = "17px";

/* agregar respuesta al html */
p.style.backgroundColor = "aquamarine";
let $ct = d.querySelector(".ej24");
$ct.insertAdjacentElement("afterend", p);
/*  */

p.textContent = ` los numeros primos son: ${numerosPrimos} `;
/* ejercicio 25 */
