class AbstractLlamada {
    #numeroOrigen = new String();
    #numeroDestino = new String();
    #duracion = new Number();
    #test = new Number();

  constructor(_numeroOrigen, _numeroDestino, _duracion) {
    this.#numeroOrigen = _numeroOrigen;
    this.#numeroDestino = _numeroDestino;
    this.#duracion = _duracion;
    if (this.constructor.name === AbstractLlamada.name)
      throw new Error('Abstract class cannot be Instantiated');
  }

  setNumeroOrigen(_numeroOrigen) {
    this.#numeroOrigen = _numeroOrigen;
  }
  setNumeroDestino(_numeroDestino) {
    this.#numeroDestino = _numeroDestino;
  }
  setDuracion(_duracion) {
    this.#duracion = _duracion;
  }
  getNumeroOrigen() {
    return this.#numeroOrigen;
  }
  getNumeroDestino() {
    return this.#numeroDestino;
  }
  getDuracion() {
    return this.#duracion;
  }
  llamada(_numeroOrigen,_numeroDestino,_duracion) {
    this.#numeroOrigen = _numeroOrigen;
    this.#numeroDestino = _numeroDestino;
    this.#duracion = _duracion;
    //return `El número de Origen es: ${this.#numeroOrigen} El número de Destino: ${this.#numeroDestino} y ha durado: ${this.#duracion}`
  }
  calcularPrecio(){
  }
}

export default AbstractLlamada