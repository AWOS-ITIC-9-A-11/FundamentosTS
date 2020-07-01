"use strict";
(function () {
    var persona = {
        strNombre: 'Cecilia',
        strApellidos: 'Mata Muñoz',
        edad: 22,
        altura: 150
    };
    var altura = persona.altura, edad = persona.edad, strNombre = persona.strNombre;
    var presentacion = function (_a) {
        var altura = _a.altura, edad = _a.edad, strNombre = _a.strNombre;
        // let { altura, edad, strNombre } = persona;
        // return console.log(`Hola, mi nombre es ${strNombre}, tengo ${edad}, mi altura es de ${altura} cms`);
    };
    presentacion(persona);
    var personas = [];
    personas = ['Cecilia', 'Abraham', 'Isabela'];
    var desarrollador3 = personas[1];
    console.log(desarrollador3);
})();
