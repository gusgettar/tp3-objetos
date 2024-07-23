class Producto{
constructor(codigo,nombre,precio){
    this.codigo = codigo
    this.nombre = nombre
    this.precio = precio
}

imprimeDatos(){
  
    document.write(`<ul>
    <li> Codigo: ${this.codigo}</li>
    <li> Nombre: ${this.nombre}</li>
    <li> Precio: ${this.precio}</li>
    </ul>`)
    
}


}

const producto1 = new Producto(1,'Yerba',100)
const producto2 = new Producto(2,'Cafe',200)
const producto3 = new Producto(3,'Te',300)

const arrayProductos = [producto1,producto2,producto3]


for(let i = 0; i<arrayProductos.length;i++){
arrayProductos[i].imprimeDatos()
}
