(() => {

    let persona = {
        strNombre: 'Cecilia',
        strApellidos: 'Mata Muñoz',
        edad: 22,
        altura: 150
    }
    
    let { altura, edad, strNombre } = persona;
    
    let presentacion = ({ altura, edad, strNombre }: any) => {
        // let { altura, edad, strNombre } = persona;
        // return console.log(`Hola, mi nombre es ${strNombre}, tengo ${edad}, mi altura es de ${altura} cms`);
    }

    presentacion(persona);

    let personas: string[] = [];

    personas = ['Cecilia', 'Abraham', 'Isabela'];

    let presentacionArr = ([ desarrollador1,,desarrollador3 ]: string[]) => {
        
        // let [ desarrollador1,,desarrollador3 ] = personas;
        console.log(desarrollador1, desarrollador3);
    }

    presentacionArr(personas)


})();
