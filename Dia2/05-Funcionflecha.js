//Si se va a retornar, se puede hacer todo en una linea
//let saluda =nombre => `Hola soy  ${nombre}`;
let saludar =(nombre) => {
    return `Hola soy ${nombre}`;
}
let saludando = saludar("Agustin");
console.log(saludando);

//Diferencias entre un fuction y un arrowFuct
//Usar function cuando vas a usar THIS

let Mouse ={
    nombre:"Mickey",

    presentarse: function(){
    console.log(`Hola yo me llamo ${this.nombre}`)
    }
}

Mouse.presentarse()