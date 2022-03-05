import AbstractLlamada from "./AbstractLlamada.js";

class LlamadaLocal extends AbstractLlamada {
  #precio = 0.25;

  constructor(_numeroOrigen, _numeroDestino, _duracion) {
    super(_numeroOrigen, _numeroDestino, _duracion);
  }

  setPrecio(_precio) {
    this.#precio = _precio;
  }
  getPrecio() {
    return this.#precio;
  }

  llamadaLocal(_numeroOrigen, _numeroDestino, _duracion) {
    super.llamada(_numeroOrigen, _numeroDestino, _duracion);
    //return super.llamada(_numeroOrigen, _numeroDestino, _duracion);
  }
  //@Override
  calcularPrecio() {
    return this.getDuracion() * this.#precio;
  }
  //@Override
  toString() {
    return `El número de Origen es: ${
      this.getNumeroOrigen()
    } El número de Destino: ${this.getNumeroDestino()} y ha durado: ${
      this.getDuracion()
    }`;
  }
}
export default LlamadaLocal;
