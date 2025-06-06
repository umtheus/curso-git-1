// const aprovados = ["Bia", "Ana", "Julia"];
// console.log(aprovados.sort());
// aprovados.forEach((e, i) => console.log(`${i + 1}) ${e}`));

// const arr = [10, 2, 3, 4, 5];
// console.log(arr.sort((a, b) => a - b));

// const arr2 = arr.map((e) => e * 2);

// console.log(arr2);

// const numerosUnicos = numeros.filter(
//   (valor, indice, array) => array.indexOf(valor) === indice
// );
// console.log(numerosUnicos); // Saída: [1, 2, 3, 4, 5]

// const a = 12;

// console.log(a.toFixed(2).replace(".", ","));

// const numeros = [9, 2, 2, 3, 4, 4, 5];
// const tirarRepedidos = (e, i, array) => {
//   return array.indexOf(e) === i;
// };

// const resultado = numeros.filter(tirarRepedidos);
// resultado.sort((a, b) => a - b);

// // retornando o segundo maior numero ou o numero que eu passar como valor
// const result = (array, valor) => {
//   const resultadoo = array.filter((valor, indice, array) => {
//     return array.indexOf(valor) === indice;
//   });

//   resultadoo.sort((a, b) => a - b);
//   let tamanho = resultadoo;
//   return resultadoo[resultadoo.length - valor];
// };
// console.log(result([1, 2, 10, 11, 3, 30], 2));

// //par de array
// const somaPar = (array) => {
//   const arrPares = array.filter((valor) => valor % 2 == 0);
//   return arrPares.reduce((acumulador, atual) => {
//     return acumulador + atual;
//   });
// };

// console.log(somaPar([1, 2, 3, 4, 5, 6]));

// // mostrar a maior palavra

// const maiorPalavra = (string) => {
//   const arrPalavras = string.split(" ");
//   const resultado = arrPalavras.reduce((acumulador, atual) => {
//     return acumulador.length >= atual.length ? acumulador : atual;
//   });

//   //   const resultado = arrPalavras.map((valor) => valor.split(""));
//   console.log(resultado);
// };

// maiorPalavra("Qual a maior palavra nessa frase");

// console.log(!!0);
// console.log(!!1);

// let valor = "10" - 2;
// console.log(valor);

// console.log([] + []);
// console.log([] + {});
// console.log({} + {});

// let resul = "10" / "2";
// console.log(resul);

// var f = (function () {
//   var count = 0; // Variável privada dentro da IIFE
//   return function () {
//     console.log(++count); // Incrementa e imprime 'count'
//   };
// })();
// f();
// f();
// f();

// const n = () => {
//   let contador = 0;
//   return {
//     acrecentar: function () {
//       contador++;
//     },
//     obtervalor: function () {
//       console.log(contador);
//     },
//   };
// };

// n(acrecentar());
// n(acrecentar());

// n(obtervalor());

// const igual = (arra) => {
//   let resultado = arra.reduce((acumulador, atual, arr) => {
//     if (acumulador.indexOf(arr)) {
//       return true;
//     } else return false;
//   });
//   return resultado;
// };

// console.log(igual([1, 2, 3, 4, 4, 5]));

// const resultado = (arr) => {
//   let tem = false;
//   for (let i = 0; i < arr.length; i++) {
//     for (let n = i + 1; n < arr.length; n++) {
//       if (arr[i] === arr[n]) {
//         tem = true;
//       }
//     }
//   }
//   return tem;
// };

// const resul = (arr) => {
//   arr.sort((a, b) => a - b);
//   let tem = false;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i + 1]) {
//       tem = true;
//     }
//   }
//   return tem;
// };

// console.log(resul([10, 20, 3, 4, 6, 5]));

// const frase = (string1, string2) => {
//   let str1 = string1.split("").sort();
//   let str2 = string2.split("").sort();

//   if (string1.length !== str2.length) {
//     return false;
//   }

//   for (let i = 0; i < str1.length; i++) {
//     if (str1[i] !== str2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(frase("racecar", "carracex"));

// const aa = (p1, p2) => {
//   let ss = p1.split("");
//   let tt = p2.split("");
//   let map = {};
//   let map2 = {};

//   if (ss.length !== tt.length) {
//     return false;
//   }
//   for (let i = 0; i < ss.length; i++) {
//     if (map[ss[i]] === undefined) {
//       map[ss[i]] = 1;
//     } else {
//       map[ss[i]] += 1;
//     }
//     if (map2[tt[i]] === undefined) {
//       map2[tt[i]] = 1;
//     } else {
//       map2[tt[i]] += 1;
//     }
//   }
//   let keys = Object.keys(map);
//   for (let i = 0; i < keys.length; i++) {
//     if (map[keys[i]] !== map2[keys[i]]) {
//       return false;
//     }
//   }
//   return true;
// };
// console.log(aa("racecars", "carrace"));

// const igual = (p1, p2) => {
//   console.log(p1.sort());
// };

// console.log(igual("anagram", "nagaram"));

// const targ = (arr, target) => {
//   let resultado = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let n = i + 1; n < arr.length; n++) {
//       if (arr[i] + arr[n] === target) {
//         resultado.push(i);
//         resultado.push(n);
//       }
//     }
//   }
//   return resultado;
// };
// console.log(targ([4, 5, 6], 7));

// const targ1 = (arr, target) => {
//   let map = {};

//   for (let i = 0; i < arr.length; i++) {
//     map[arr[i]] = i;
//   }
//   for (let n = 0; n < arr.length; n++) {
//     let key = target - arr[n];
//     if (map[key] !== undefined && map[key] !== n) {
//       return [n, map[key]];
//     }
//   }

//   return [];
// };

// console.log(targ1([5, 5], 10));
