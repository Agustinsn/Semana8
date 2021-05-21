const url="https://60a4b6f2fbd48100179dcbe1.mockapi.io/Productos"

class comunicaciones{
    //no se necesita constructor por que queremos instanciar la clase
    obtenerProductos(){
        return new Promise((resolve,reject)=>{
            fetch(url)
            .then(respuesta=>{
                return respuesta.json()
            })
            .then(productos=>{
                resolve(productos)
            })
            .catch(error=> reject(error))
        })

    }

crearProducto(objProducto){
    return new Promise((resolve,reject)=>{
        let configuracion={
            method: 'POST',
            body: JSON.stringify(objProducto),
            headers: {'Content-Type':'application/json'}
        }
        fetch(url,configuracion)
        //return implicito
        .then(respuesta=>respuesta.json())
        .then(productoCreado=>resolve(productoCreado))
        .catch(error=>reject(error))
    })
}}
export{
    comunicaciones
}