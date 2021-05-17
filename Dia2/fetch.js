//Pedir datos de una BD
fetch("https://reqres.in/api/users?page=2")
.then((respuesta)=>{
    return respuesta.json()
})
.then((datos)=>{
    console.log(datos)
})
//Nuevo usuario o mandar datos
//Se crea objeto
let nuevoUsuario={
    name:"Karina",
    job:"Administradora"
}
//Cabeceras-Guia de remision
let cabecera={
    method:`POST`,
    headers:{
        'Content-type':'application/json' // api sepa como procesar
    },
    body:JSON.stringify(nuevoUsuario)//se convierte Json en texto

}
fetch("https://reqres.in/api/users",cabecera)
.then((respuesta)=>{
    //console.log("POST",respuesta);
    return respuesta.json()
})
.then((datosCreados)=>{
    console.log(datosCreados)
})

//MOCKAPI
fetch("https://60a019b87ee1430017bf155c.mockapi.io/alumnos")
.then((respuesta)=>{
    return respuesta.json()
})
.then((alumnos)=>{
    console.log(alumnos)
})
.catch((error)=>{
    console.log(error)
})
//put mockapi
let alumnoeditado={ //PRIMERO SE CREA LOS DATOS QUE SE VAN A GUARDAR
    nombres:"Ash",
    apellidos:"Ketchup"
}
let configuracion={ //CONFIGURACION DE JSON
    method:"PUT",
    headers:{
        "Content-type":"application/json"
    },
    body: JSON.stringify(alumnoeditado)
}

fetch("https://60a019b87ee1430017bf155c.mockapi.io/alumnos/2",configuracion)
//PARA PUT CON FETCH (URL,VARIABLE DONDE ESTA EL PUT)
.then((respuesta)=>{
    return respuesta.json()
})
.then((alumnomodificado)=>{
    console.log(alumnomodificado)
})
.catch((error)=>{
    console.log(error)
})
