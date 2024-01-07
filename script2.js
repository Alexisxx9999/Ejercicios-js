/* ejercicio 25 */
const ej25 = () => {
  let p = d.createElement("p");
  let arr = [];
  let pr = 0;
  let n = parseInt(prompt("cuantas notas desea ingresar"));
  for (let i = 1; i <= n; i++) {
    let e = parseInt(prompt("ingrese las notas : N°" + i));
    arr.push(i);
    pr += e / n;
  }

  p.textContent = `las notas son ${arr} y el promedio es ${pr} `;
  /*  */
  p.style.padding = "10px";
  p.style.fontSize = "17px";

  /* agregar respuesta al html */
  p.style.backgroundColor = "aquamarine";
  let $ct = d.querySelector(".ej25");
  $ct.insertAdjacentElement("afterend", p);
};
/* ej25(); */
/* ejercicio 26 */
const ej26 = () => {
  let p = d.createElement("p");
  let arr = [];
  let pr = 0;
  let pr2 = 0;
  let n = parseInt(prompt("cuantas temperaturas desea ingresar"));
  for (let i = 1; i <= n; i++) {
    let e = parseInt(prompt("ingrese las temperaturas: N°" + i));
    arr.push(e);
    if (e > 35) {
      pr += e;
    } else {
      pr2 += e;
    }
  }

  p.innerHTML = `las temperatuas  ingresadas son ${arr} y estos son los resultados <br> total mayores a 35= ${pr} <br>  total menores a 35 = ${pr2} `;
  /*  */
  p.style.padding = "10px";
  p.style.fontSize = "17px";

  /* agregar respuesta al html */
  p.style.backgroundColor = "aquamarine";
  let $ct = d.querySelector(".ej26");
  $ct.insertAdjacentElement("afterend", p);
};
/* ej26(); */
/* ejercicio 27 */
const ej27 = () => {
  let p = d.createElement("p");
  let arr = [];
  let n = parseInt(prompt("cuantas notas desea ingresar"));
  for (let i = 1; i <= n; i++) {
    let e = parseInt(prompt("ingrese las notas: N°" + i));
    arr.push(e);
  }

  p.innerHTML = `las notas ingresadas son ${arr} `;
  /*  */
  p.style.padding = "10px";
  p.style.fontSize = "17px";

  /* agregar respuesta al html */
  p.style.backgroundColor = "aquamarine";
  let $ct = d.querySelector(".ej27");
  $ct.insertAdjacentElement("afterend", p);
};
/* ej27(); */
/* ejercicio 28 */
const ej28 = () => {
  let p = d.createElement("p");
  let arr = [];
  let n = parseInt(prompt("cuantas notas desea ingresar"));
  for (let i = 1; i <= n; i++) {
    let e = parseInt(prompt("ingrese las notas: N°" + i));
    arr.push(e);
    if (arr.length >= 5) {
      p.innerHTML = `las notas ingresadas son ${arr} `;
    } else {
      p.innerHTML = `numero de notas menor a 5 , por lo tanto no se mostraran las notas `;
    }
  }

  /*  */
  p.style.padding = "10px";
  p.style.fontSize = "17px";

  /* agregar respuesta al html */
  p.style.backgroundColor = "aquamarine";
  let $ct = d.querySelector(".ej28");
  $ct.insertAdjacentElement("afterend", p);
};
/* ej28(); */
/* ejercicio 29 */
const ej29 = () => {
  let p = d.createElement("p");
  let arr = [];

  for (let i = 1; i <= 52; i++) {
    if (i % 2 === 0) {
      p.innerHTML = `los numeros pares son ${arr} `;
      arr.push(i);
    }
  }

  /*  */
  p.style.padding = "10px";
  p.style.fontSize = "17px";

  /* agregar respuesta al html */
  p.style.backgroundColor = "aquamarine";
  let $ct = d.querySelector(".ej29");
  $ct.insertAdjacentElement("afterend", p);
};
ej29();
/* ejercicio 30 */
const ej30 = () => {
  let p = d.createElement("p");
  let arr = [];
  let suma = 0;
  for (let i = 1; i <= 21; i++) {
    if (i % 2 === 1) {
      suma += i;
      p.innerHTML = `los numeros impares son ${arr} y la suma total es : ${suma} `;
      arr.push(i);
    }
  }

  /*  */
  p.style.padding = "10px";
  p.style.fontSize = "17px";

  /* agregar respuesta al html */
  p.style.backgroundColor = "aquamarine";
  let $ct = d.querySelector(".ej30");
  $ct.insertAdjacentElement("afterend", p);
};
ej30();
/* ejercicio 31 */
const ej31 = (a, b) => {
  let p = d.createElement("p");
  let suma = a + b;

  if (suma) {
    let ans = prompt("desea continuar si o no ?");
    p.innerHTML = `los numeros ingresados son ${a} + ${b} y la suma es : ${suma} `;
  }

  /*  */
  p.style.padding = "10px";
  p.style.fontSize = "17px";

  /* agregar respuesta al html */
  p.style.backgroundColor = "aquamarine";
  let $ct = d.querySelector(".ej31");
  $ct.insertAdjacentElement("afterend", p);
};
/* ej31(7, 8); */
const ej32 = () => {
  let p = d.createElement("p");
  let arr = [];
  let i = 2;
  while (i <= 52) {
    if (i % 2 === 0) {
      p.innerHTML = `los numeros pares son ${arr} `;
      arr.push(i);
    }
    i++;
  }

  /*  */
  p.style.padding = "10px";
  p.style.fontSize = "17px";

  /* agregar respuesta al html */
  p.style.backgroundColor = "aquamarine";
  let $ct = d.querySelector(".ej32");
  $ct.insertAdjacentElement("afterend", p);
};
ej32();
/* ejercicio 33 */
const ej33 = () => {
  let p = d.createElement("p");
  let arr = [];
  let suma = 0;
  let i = 1;
  while (i <= 23) {
    if (i % 2 === 1) {
      suma += i;
      p.innerHTML = `los numeros impares son ${arr} y la suma total es : ${suma} `;
      arr.push(i);
    }
    i++;
  }

  /*  */
  p.style.padding = "10px";
  p.style.fontSize = "17px";

  /* agregar respuesta al html */
  p.style.backgroundColor = "aquamarine";
  let $ct = d.querySelector(".ej33");
  $ct.insertAdjacentElement("afterend", p);
};
ej33();

/* ejercicio 33 */
const ej34 = (i, f) => {
  let p = d.createElement("p");
  let arr = [];
  let suma = 0;

  while (i <= f) {
    suma += i;
    arr.push(i);
    p.innerHTML = `los numeros  son ${arr} y la suma total es : ${suma} `;

    i++;
  }

  /*  */
  p.style.padding = "10px";
  p.style.fontSize = "17px";

  /* agregar respuesta al html */
  p.style.backgroundColor = "aquamarine";
  let $ct = d.querySelector(".ej34");
  $ct.insertAdjacentElement("afterend", p);
};
ej34(4, 9);
/* ejercicio 35 */
const ej35 = (n) => {
  let p = d.createElement("p");
  let arr = [];
  let suma = 0;
  for (let i = n; i >= 1; i--) {
    suma += i;
    arr.push(i);
    p.innerHTML = `los numeros  son ${arr} y la suma total es : ${suma} `;
  }

  /*  */
  p.style.padding = "10px";
  p.style.fontSize = "17px";

  /* agregar respuesta al html */
  p.style.backgroundColor = "aquamarine";
  let $ct = d.querySelector(".ej35");
  $ct.insertAdjacentElement("afterend", p);
};
ej35(7);
/* ejercicio 36 */
const ej36 = (t1, t2) => {
  let p = d.createElement("p");

  let resta = 0;
  let suma2 = 0;
  if (t1 > t2) {
    suma2 = t1 - t2;
  } else {
    suma2 = t1 + t2;
  }

  if (suma2 > 35) {
    p.innerHTML = `los temperaturas son ${t1} + ${t2} eso es =  ${suma2} <br> entonces esta CALOR `;
  } else {
    p.innerHTML = `los temperaturas son ${t1} - ${t2} eso es =  ${suma2} <br> entonces esta FRIO`;
  }

  /*  */
  p.style.padding = "10px";
  p.style.fontSize = "17px";

  /* agregar respuesta al html */
  p.style.backgroundColor = "aquamarine";
  let $ct = d.querySelector(".ej36");
  $ct.insertAdjacentElement("afterend", p);
};
ej36(65, 47);
