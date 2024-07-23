class auto {
  constructor(marca, modelo, estado) {
    this.marca = marca;
    this.modelo = modelo;
    this.estado = estado;
  }

  encender() {
    this.estado=true
    document.write(`<p>el auto marca:${this.marca}, modelo: ${this.modelo} se encuentra ${(this.estado) ? 'Encendido':'Apagado'}</p>`)
     
  }

  apagar() {
    this.estado=false
    document.write(`<p>el auto marca:${this.marca}, modelo: ${this.modelo} se encuentra ${(this.estado) ? 'Encendido':'Apagado'}</p>`)
     
  }


}

const volkswagen = new auto('Volkswagen','Golf')
volkswagen.encender()

volkswagen.apagar()


