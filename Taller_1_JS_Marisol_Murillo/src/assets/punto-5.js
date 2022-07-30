console.log('resolviendo el punto 5')

/* Ingresar por pantalla un número entre 1 y 12, luego imprimir en letras el
mes al que corresponde el valor ingresado, la cantidad de días que tiene
ese mes y sus signos del zodiaco. Ejemplo: si el valor ingresado es 5,
entonces imprimir “Mayo”, “31 días”, “Tauro - Géminis”. */

const meses = Number(prompt('ingrese un digito del 1 al 10'))

switch (meses) {
  case 1:
    alert('Mes: Enero, el signo zodiaco es Capricornio y ')
    break
  case 2:
    alert('Mes: Febrero, el signo zodiaco es  Acuario')
    break

  case 3:
    alert('Mes: Marzo, el signo zodiaco es Piscis')
    break

  case 4:
    alert('Mes: Abril, el signo zodiaco es Aries ')
    break

  case 5:
    alert('Mes: Mayo, el signo zodiaco es Tauro ')
    break

  case 6:
    alert('Mes: Junio, el signo zodiaco es Géminis')
    break

  case 7:
    alert('Mes: Julio, el signo zodiaco es Cáncer')
    break

  case 8:
    alert('Mes: Agosto, el signo zodiaco es Leo')
    break

  case 9:
    alert('Mes: Septiembre,el signo zodiaco es Virgo')
    break

  case 10:
    alert('Mes: Octubre, el signo zodiaco es Libra')
    break

  case 11:
    alert('Mes: Noviembre, el signo zodiaco es Escorpio')
    break

  case 12:
    alert('Mes: Diciembre, el signo zodiaco es Sagitario')
    break
}
