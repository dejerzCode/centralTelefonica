class CentralTelefonica {
    #contador = new Number();
    #acumulador = new Number();

    constructor(){

    }

    setContador(_contador){
        this.#contador += _contador;
    }

    setAcumulador(_acumulador){
        this.#acumulador += _acumulador;
    }

    getContador(){
        return this.#contador;
    }

    getAcumulador(){
        return this.#acumulador;
    }

    //DataType: registro : AbstractLllamada()
    registrarLlamada(registro){
        console.log(registro.toString());
        this.setContador(1);
        this.setAcumulador(registro.calcularPrecio());
    }

    getTotalLlamadas(){
        return this.getContador();
    }

    getTotalFacturas(){
        return this.getAcumulador();
    }
}

export default CentralTelefonica;
