import AbstractLlamada from "./AbstractLlamada.js";

class LlamadaInterior extends AbstractLlamada {
  #precioUno = 0.2;
  #precioDos = 0.35;
  #precioTres = 0.85;
  #franja = new Number();
  constructor(_numeroOrigen, _numeroDestino, _duracion, _franja) {
    super(_numeroOrigen, _numeroDestino, _duracion);
    this.#franja = _franja;
  }

  setPrecioUno(_precio) {
    this.#precioUno = _precio;
  }
  getPrecioUno() {
    return this.#precioUno;
  }

  setPrecioDos(_precio) {
    this.#precioDos = _precio;
  }
  getPrecioDos() {
    return this.#precioDos;
  }

  setPrecioTres(_precio) {
    this.#precioTres = _precio;
  }
  getPrecioTres() {
    return this.#precioTres;
  }

  setFranja(_franja) {
    this.#franja = _franja;
  }
  getFranja() {
    return this.#franja;
  }

  //@Override
  llamadaInterior(_numeroOrigen, _numeroDestino, _duracion, _franja) {
    this.#franja = _franja;
    super.llamada(_numeroOrigen, _numeroDestino, _duracion);
    //return super.llamada(_numeroOrigen, _numeroDestino, _duracion);
  }

  //@Override
  calcularPrecio() {
    if (this.#franja == 1) {
      return this.#precioUno * this.getDuracion();
    } else if (this.#franja == 2) {
      return this.#precioDos * this.getDuracion();
    } else if (this.#franja == 3) {
      return this.#precioTres * this.getDuracion();
    }
    return 0;
  }

  toString() {
    return `El número de Origen es: ${this.getNumeroOrigen()} El número de Destino: ${this.getNumeroDestino()} y ha durado: ${this.getDuracion()} con franja ${
      this.#franja
    }`;
  }
}
export default LlamadaInterior;
