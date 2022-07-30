console.log('resolviendo punto 3')

/* Escribir un algoritmo para calcular el índice de masa corporal de una
persona. */

const peso = Number(prompt('ingrese su peso'))
const altura = Number(prompt('ingrese su altura'))

const Imc = peso / (altura * altura)

alert(`su índice de masa corporal es de ${Imc}`)
