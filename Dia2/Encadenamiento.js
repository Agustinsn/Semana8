let hornearTorta=()=>{
    //resolve si va bien, reject si va mal
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(true){
                resolve("La Torta esta lista")
            }
            else{
                reject("Se quemo!")
            }
        },5000)
    })
}

hornearTorta()
.then((tortaHorneada)=>{
    console.log(tortaHorneada);
})
.catch((tortaQuemada)=>{
    console.log(tortaQuemada);
})