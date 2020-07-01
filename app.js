"use strict";
(function () {
    var Persona = /** @class */ (function () {
        function Persona(strNombre, strApellidos, edad, altura) {
            if (edad === void 0) { edad = 0; }
            if (altura === void 0) { altura = 0; }
            this.strNombre = strNombre;
            this.strApellidos = strApellidos;
            this.edad = edad;
            this.altura = altura;
        }
        Persona.prototype.imprimir = function () {
            console.log("Hola, mi nombre es " + this.strNombre + " " + this.strApellidos);
            // console.log(this.altura);
        };
        Persona.prototype.getAltura = function () {
            return this.altura;
        };
        Persona.prototype.setAltura = function (altura) {
            this.altura = altura;
        };
        Object.defineProperty(Persona.prototype, "Altura", {
            get: function () {
                return this.altura;
            },
            set: function (altura) {
                this.altura = altura;
            },
            enumerable: false,
            configurable: true
        });
        return Persona;
    }());
    var persona = new Persona('Abraham', 'Carranza', 23, 170);
    persona.imprimir();
    // console.log(persona.Altura);
    // persona.Altura = 23;
    // console.log(persona.getAltura());
    // persona.setAltura(180);
    // console.log(persona.getAltura());
    // console.log(persona);
})();
