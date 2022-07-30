console.log('Resolviendo el punto uno')

/* Escribir un algoritmo que valide si la suma de 2 números ingresados es
positiva, negativa o cero. */

const num1 = Number(prompt('ingrese el primero número'))
const num2 = Number(prompt('ingrese el segundo número'))

const suma = num1 + num2
alert(suma)

if (suma > 0) {
  alert(`${suma} es un número positivo`)
} else if (suma === 0) {
  alert(`${suma}`)
} else {
  alert(`${suma} es un número negativo`)
}
