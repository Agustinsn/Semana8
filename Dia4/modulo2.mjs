const PI=3.1415;
let areaCirculo = (radio)=>{
    let area= PI*radio*radio;
    return area;
}

//EXPORTAR

//export.nombreDeComoSeVaAExportar= LO QUE VOY A EXPORTAR DE ESTE ARCH
//Se exporta como un objeto 
export{
    areaCirculo
}