(() => {

    interface Persona {
        strNombre: string,
        strApellidos: string,
        edad: number,
        altura: number
        sexo?: string
    }

    let persona: Persona = {
        strNombre: 'Cecilia',
        strApellidos: 'Mata Muñoz',
        edad: 22,
        altura: 150,
        sexo: 'Femenino'
    }

    let persona2: Persona = {
        strNombre: 'Abraham',
        strApellidos: 'Carranza Sanchez',
        edad: 23,
        altura: 170
    }

    let saludar = (persona: Persona) => {
        console.log(persona.altura);
    };

    // saludar(computadora);


})();
