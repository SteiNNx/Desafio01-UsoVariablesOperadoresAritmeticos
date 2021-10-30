/** Ejercicio 04 */

/** Solicitud de Números */
const dias = window.prompt('Ingrese Numero de Días.');

/** Parseo */
const dias_int = parseInt(dias);

/** Validacion */
if (typeof dias_int === 'NaN' || isNaN(dias_int)) {
    window.alert('Porfavor, Ingrese Número de Días Enteros.');
    throw new Error("Porfavor, Ingrese Número de Días Enteros. Stop script!!");
}

/** Operaciones */
const calcularAñosSemanasDias = function (dias_parametro) {
    const años = Math.floor((dias_parametro / 365) ?? 0);
    const diasRestantesMenosDiasDeAños = dias_parametro - (365 * años);
    const semanas = Math.floor((diasRestantesMenosDiasDeAños >= 0 ? diasRestantesMenosDiasDeAños / 7 : dias_parametro / 7) ?? 0);
    const dias = (diasRestantesMenosDiasDeAños >= 0 ? diasRestantesMenosDiasDeAños % 7 : dias_parametro % 7) ?? 0;
    return `${años} Años con ${semanas} Semanas con ${dias} dias`;
}

/** Resultados */
const resultado = calcularAñosSemanasDias(dias_int);

/** Presentacion Resultado en Alert */
window.alert(resultado);