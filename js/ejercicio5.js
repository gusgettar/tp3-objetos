class Persona{
    constructor(nombre,edad,DNI,sexo,peso,altura,nacimiento){
        this.nombre = nombre
        this.edad = edad
        this.DNI = DNI
        this.sexo = sexo
        this.peso = peso
        this.altura = altura
        this.nacimiento = nacimiento
    }

    mostrarGeneracion(){
        document.write(`
    
    ${(this.nacimiento>=1930 && this.nacimiento<=1948) ? 'Pertenece a Silent Generation - Circunstancia Historica: Conflictos Belicos - Rasgo Caracteristico: Austeridad':'' }
    ${(this.nacimiento>=1949 && this.nacimiento<=1968) ? 'Pertenece a Baby Boom - Circunstancia Historica: Paz y explosión demográfica - Rasgo Caracteristico: Ambición': '' }
    ${(this.nacimiento>=1969 && this.nacimiento<=1980) ? 'Pertenece a Generación X - Circunstancia Historica: Crisis del 73 y transición española - Rasgo Caracteristico: Obsesion por el éxito':'' }
    ${(this.nacimiento>=1981 && this.nacimiento<=1993) ? 'Pertenece a Generación Y - Circunstancia Historica: Inicio de la digitalización - Rasgo Caracteristico: Frustración' : ''}
    ${(this.nacimiento>=1994 && this.nacimiento<=2010) ? 'Pertenece a generación Z - Circunstancia Historica: Expansión masiva de internet - Rasgo Caracteristico: Irreverencia': ''}

    `)
    
    }
    esMayorDeEdad(){
        if(this.edad>18){
            document.write('<p>La persona es mayor de edad</p>')
        }
    }
    mostrarDatos(){
        document.write(`<ul>
        <li> Nombre: ${this.nombre}</li>
    <li> Edad: ${this.edad}</li>
    <li> DNI: ${this.DNI}</li>
    <li> Sexo: ${this.sexo}</li>
    <li> Peso: ${this.peso}</li>
    <li> Altura: ${this.altura}</li>
    <li> Año nacimiento: ${this.nacimiento}</li>
    </ul>`)    
}
generaDNI(){
    let nuevoDNI = Math.floor(Math.random()*11111111)
    document.write(`<p>El nuevo DNI generado es: ${nuevoDNI}</p>`)

}
}

const persona1 = new Persona('Gustavo',33,35922132,'H',100,1.8,1991)
persona1.mostrarGeneracion()
persona1.esMayorDeEdad()
persona1.mostrarDatos()
persona1.generaDNI()
