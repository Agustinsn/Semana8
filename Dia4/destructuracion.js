let objVehiculo={
    marca:"Tesla",
    modelo:"Modelo X",
    anio:2019,
    colores:["Rojo","gris"],
    prender: function(){
        console.log("bzzzz")
    }
}
//PARA DESESTRUCTURAR LET {PROPIEDADES DEL OBJETO} = OBJETO
let {marca,modelo,colores}= objVehiculo;
console.log(marca)

let calcularBeneficio =({sueldo,vacaciones,cts})=>{
    console.log(sueldo)
}
let objBeneficio ={
    sueldo :1600,
    vacaciones:600,
    cts:500
}
calcularBeneficio(objBeneficio)