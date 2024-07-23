class rectangulo{
constructor(alto,ancho){
    this.alto = alto
    this.ancho = ancho

}
modificarRectangulo(alto,ancho){
    this.alto = alto
    this.ancho = ancho

}

calcularPerimetro(){
    const perimetro = this.alto*2 + this.ancho*2
    document.write(`<p>el perimetro del rectangulo de ancho ${this.ancho} y altura ${this.alto} es: ${perimetro}</p>`)
    
}

calcularArea(){
    const area = this.alto * this.ancho
    document.write(`<p>el area del rectangulo de ancho ${this.ancho} y altura ${this.alto} es: ${area}</p>`)
}

}
//Instanciamos el objeto rectangulo con los valores 10 y 5 para ancho y alto y calculamos area y perimetro
nuevoRectangulo = new rectangulo(10,5)
nuevoRectangulo.calcularPerimetro()
nuevoRectangulo.calcularArea()

//Modificamos los valores ancho y alto, luego volvemos a calcular su perimetro y area.
nuevoRectangulo.modificarRectangulo(100,50)
nuevoRectangulo.calcularPerimetro()
nuevoRectangulo.calcularArea()