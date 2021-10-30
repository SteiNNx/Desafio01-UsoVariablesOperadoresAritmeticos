/** Ejercicio 02 */

/** Solicitud de Números */
const primer_numero = window.prompt('Ingrese Primer Número Entero.');
const segundo_numero = window.prompt('Ingrese Segundo Número Entero.');

/** Parseo */
const primer_numero_int = parseInt(primer_numero);
const segundo_numero_int = parseInt(segundo_numero);

/** Validacion */
if (typeof primer_numero_int === 'NaN' || typeof segundo_numero_int === 'NaN' || isNaN(primer_numero_int) || isNaN(segundo_numero_int)) {
    window.alert('Porfavor, Ingrese Números Enteros.');
    throw new Error("Porfavor, Ingrese Números Enteros. Stop script!!");
}

/** Operaciones */
const sumar = function (primer_parametro, segundo_parametro) {
    return primer_parametro + segundo_parametro;
}
const resta = function (primer_parametro, segundo_parametro) {
    return primer_parametro - segundo_parametro;
}
const division = function (primer_parametro, segundo_parametro) {
    return primer_parametro / segundo_parametro;
}
const multiplicacion = function (primer_parametro, segundo_parametro) {
    return primer_parametro * segundo_parametro;
}
const modulo = function (primer_parametro, segundo_parametro) {
    return primer_parametro % segundo_parametro;
}

/** Resultados */
const resultado_suma = sumar(primer_numero_int, segundo_numero_int);
const resultado_resta = resta(primer_numero_int, segundo_numero_int);
const resultado_division = division(primer_numero_int, segundo_numero_int);
const resultado_multiplicacion = multiplicacion(primer_numero_int, segundo_numero_int);
const resultado_modulo = modulo(primer_numero_int, segundo_numero_int);

/** Presentacion Resultado en Alert */
window.alert(`
Suma: ${resultado_suma} \n
Resta: ${resultado_resta} \n
División: ${resultado_division} \n
Multiplicación: ${resultado_multiplicacion} \n
Modulo: ${resultado_modulo} \n
`);