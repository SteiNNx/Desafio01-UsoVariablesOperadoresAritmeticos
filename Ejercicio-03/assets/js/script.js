/** Ejercicio 03 */

/** Solicitud de Grados Celcius */
const grados_celcius = window.prompt('Ingrese Temperatura Grados Celcius.');

/** Parseo */
const grados_celcius_int = parseInt(grados_celcius);

/** Validacion */
if (typeof grados_celcius_int === 'NaN' || isNaN(grados_celcius_int)) {
    window.alert('Porfavor, Ingrese Temperatura en numeros enteros.');
    throw new Error("Porfavor, Ingrese Temperatura en numeros enteros. Stop script!!");
}

/** Operaciones */
const celciusToKelvin = function (grados_parametros) {
    return grados_parametros + 273.15;
}
const celciusToFahrenheit = function (grados_parametros) {
    return (grados_parametros * (9 / 5)) + 32;
}

/** Resultado */
const resultado_grados_to_kelvin = celciusToKelvin(grados_celcius_int);
const resultado_grados_to_fahrenheit = celciusToFahrenheit(grados_celcius_int);

/** Presentacion Resultado en Alert */
window.alert(`
Temperatura en Kelvin: ${resultado_grados_to_kelvin}K \n
Temperatura en Fahrenheit: ${resultado_grados_to_fahrenheit}°F \n
`);
