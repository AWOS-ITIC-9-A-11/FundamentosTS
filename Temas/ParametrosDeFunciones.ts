(() => {

    let saluda = (nombre: string, apellido?: string, tempolariodad: string = 'buenos días') => {
        return console.log(`Hola, ${nombre} ${apellido ? apellido : ''}, ${tempolariodad}`);
    }

    saluda('Cecilia');


})();
