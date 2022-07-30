console.log('resolviendo punto 4')

/* Hacer un algoritmo que calcule e imprima los números primos comprendidos
entre 1 y 100. */

/*   let primos = []

  let cantidadmultiplos = 0
  for (let i = 1; i <= 100; i++) {
      for (let j = 1; j <=  i; j++ ){
          if (1 % j ===) {
              cantidadmultiplos++
          }
              if (cantidadmultiplos > 2) break
          }
      }
  } */

let primos = []

let cantidadMultiplos = 0
for (let i = 1; i <= 100; i++) {
  for (let j = 1; j <= i; j++) {
    console.log('j')
    if (i % j == 0) {
      cantidadMultiplos++
    }
  }
  if (cantidadMultiplos === 2) {
    primos.push(i)
  }

  cantidadMultiplos = 0
}
console.log(primos)
