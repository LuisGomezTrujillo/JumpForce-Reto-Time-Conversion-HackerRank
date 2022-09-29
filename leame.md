Dada una hora en el formato AM/PM, convertirla a hora militar de (24-horas).

Nota: - 12:00:00AM en un reloj de 12-horas es 00:00:00 en un 24-horas.
- 12:00:00PM en un reloj de 12-horas es 12:00:00 en un reloj 24-horas.

Ejemplo

s='12:01:00PM' 
Regresa '12:01:00'.

s='12:01:00AM'
Regresa '00:01:00'.

Descripción de la Función

Complete la función (de conversión de tiempo) timeConversion en el editor. La cual debe regresar una nueva cadena representando la hora ingresada en un formato de 24 horas.

timeConversion tiene los siguientes parámetros(s):

string s: Una hora en formato de 12 horas
Returns

string: la hora en formato de 24 horas

Formato de la entrada

Una única cadena que representa una hora en formato de reloj de 12 horas (i.e.:  hh:mm:ssAM or hh:mm:ssPM).

Restricciones

Todas las entradas de tiempo son válidas
Entrada de prueba 0
07:05:45PM

Salida de prueba 0
19:05:45