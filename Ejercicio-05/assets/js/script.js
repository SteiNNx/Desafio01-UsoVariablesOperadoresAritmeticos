/** Ejercicio 05 */

/** Solicitud de Números */
const primer_numero = window.prompt('Ingrese Primer Número.');
const segundo_numero = window.prompt('Ingrese Segundo Número.');
const tercer_numero = window.prompt('Ingrese Tercer Número.');
const cuarto_numero = window.prompt('Ingrese Cuarto Número.');
const quinto_numero = window.prompt('Ingrese Quinto Número.');


/** Parseo */
const primer_numero_float = parseFloat(primer_numero);
const segundo_numero_float = parseFloat(segundo_numero);
const tercer_numero_float = parseFloat(tercer_numero);
const cuarto_numero_float = parseFloat(cuarto_numero);
const quinto_numero_float = parseFloat(quinto_numero);

/** Validacion */
if (
    typeof primer_numero_float === 'NaN'
    || typeof segundo_numero_float === 'NaN'
    || typeof tercer_numero_float === 'NaN'
    || typeof cuarto_numero_float === 'NaN'
    || typeof quinto_numero_float === 'NaN'
    || isNaN(primer_numero_float)
    || isNaN(segundo_numero_float)
    || isNaN(tercer_numero_float)
    || isNaN(cuarto_numero_float)
    || isNaN(quinto_numero_float)
) {
    window.alert('Porfavor, Ingrese Números.');
    throw new Error("Porfavor, Ingrese Números. Stop script!!");
}

/** Operatoria y Resultado */
const suma_numeros = (primer_numero_float + segundo_numero_float + tercer_numero_float + cuarto_numero_float + quinto_numero_float);
const promedio_numeros = parseFloat(suma_numeros / 5).toFixed(2);

/** Presentacion Resultado en Alert */
window.alert(`
Numeros Ingresados: [ ${primer_numero_float}, ${segundo_numero_float}, ${tercer_numero_float}, ${cuarto_numero_float},${quinto_numero_float}]\n
Suma: ${suma_numeros}\n
Promedio: ${promedio_numeros}
`);