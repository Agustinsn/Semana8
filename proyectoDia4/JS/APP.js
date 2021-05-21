//App.js es el scrip principal
//1. Tener MockApi listo
//2. Obtener los datos (get)
//3. Convertirr esos datos a Elemenots de Html
//4. Crear desde el navegador, POST (put, delete)
//5. Carrito

import{comunicaciones} from "./Comunicacion.mjs"
import{Interface} from "./interfaz.mjs"

let comunicacion= new comunicaciones()
let interfaz=new Interface()

let btnCrear = document.getElementById("btn-crear")
let modalCrear=new  bootstrap.Modal(document.getElementById("modal-crear"))
let btnGuardar= document.getElementById("btn-guardar")

let getProductos =()=>{
    comunicacion.obtenerProductos()
    .then(productos=>{
        interfaz.imprimirProductos(productos)
    })
    .catch(err=>console.log(err))
}

getProductos();

btnCrear.addEventListener('click',()=>{
    modalCrear.show()
})
btnGuardar.addEventListener("click",()=>{
    let formulario=document.getElementById("form-crear")
    let nuevoProducto={
        nombre:formulario["nombre"].value,
        descripcion:formulario["descripcion"].value,
        precio:formulario["precio"].value,
    }
    comunicacion.crearProducto(nuevoProducto)
    .then(productoCreado=>{
       console.log(productoCreado)
        formulario.reset()
        modalCrear.hide()
        getProductos()
    })
    .catch(err=>console.log(err))
})