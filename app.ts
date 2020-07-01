(() => {

    class Persona {

        constructor(public strNombre: string, public strApellidos: string, public edad: number = 0, private altura: number = 0) {
        }

        imprimir() {
            console.log(`Hola, mi nombre es ${this.strNombre} ${this.strApellidos}`);
            // console.log(this.altura);
        }

        getAltura(){
            return this.altura;
        }

        setAltura(altura: number){
            this.altura = altura;
        }

        get Altura(): number {
            return this.altura;
        }

        set Altura(altura: number) {
            this.altura = altura;
        }
        
    }

    let persona: Persona = new Persona('Abraham', 'Carranza', 23, 170);

    persona.imprimir();

    // console.log(persona.Altura);
    // persona.Altura = 23;

    // console.log(persona.getAltura());
    // persona.setAltura(180);
    // console.log(persona.getAltura());

    // console.log(persona);

})();
