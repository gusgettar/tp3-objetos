class Libro{
    #ISBN
    #Titulo
    #Autor
    #NroPaginas
    constructor(ISBN,Titulo,Autor,NroPaginas){
        this.#ISBN = ISBN
        this.#Titulo = Titulo
        this.#Autor = Autor
        this.#NroPaginas = NroPaginas
    }

    get ISBN(){
        return this.#ISBN
    }

    set ISBN(nro){
        this.#ISBN = nro
    }
    get Titulo(){
        return this.#Titulo
    }

    set Titulo(titulo){
        this.#ISBN = titulo
    }
    get Autor(){
        return this.#Autor
    }

    set Autor(nombre){
        this.#ISBN = nombre
    }
    get NroPaginas(){
        return this.#NroPaginas
    }

    set NroPaginas(nro){
        this.#NroPaginas = nro
    }

    mostrarLibro(){
        document.write(`<p>El libro ${this.#Titulo} con ISBN ${this.#ISBN} creado por el autor ${this.#Autor} tiene páginas ${this.#NroPaginas}</p>`)
    }
ç

}

const libro1 = new Libro(101,"Principito","Antoine de Saint-Exupéry",350)
const libro2 = new Libro(105,"Martin Fierro","José Hernández",500)
libro1.mostrarLibro()
libro2.mostrarLibro()

if(libro1.NroPaginas>libro2.NroPaginas){

    document.write(`<p> el libro ${libro1.Titulo} tiene ${libro1.NroPaginas-libro2.NroPaginas} páginas más que el libro ${libro2.Titulo}</p>`)
}
else{
    document.write(`<p> el libro ${libro2.Titulo} tiene ${libro2.NroPaginas-libro1.NroPaginas} páginas más que el libro ${libro1.Titulo}</p>`)

}



    

