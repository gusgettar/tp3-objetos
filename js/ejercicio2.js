class cuenta{
   
constructor(titular){
    this.titular = titular
    this.saldo = 0
}

ingresar(saldo){
    this.saldo = saldo
    console.log(saldo)
    document.write(`<p> el saldo de la cuenta de: ${this.titular} es: ${this.saldo}`)
    
}

extraer(saldo){
    this.saldo = this.saldo - saldo
    console.log(this.saldo)
    document.write(`<p> el saldo de la cuenta de: ${this.titular} luego de la extracción es: ${this.saldo}`)
}

informar(){
   document.write(`<p>Los datos de la cuenta son.</p>`)
   document.write(`<p>Titular de la cuenta ${this.titular}</p>`)
   document.write(`<p>saldo actual de la cuenta ${this.saldo}</p>`)
    console.log(this.saldo)
}


}

const titular = new cuenta('Alex')
titular.ingresar(150)
titular.extraer(100)
titular.informar()