let alumnosDB = ["Agustin","Edson","Narda","Adela","Fiorella"];

let buscarAlumno=(nombre,callback)=>{
    //Esta funcion devolverá 
    setTimeout(()=>{
        for(let i=0;i<buscarAlumno.length;i++ ){
            if(alumnosDB[i]==nombre){
                callback(true);
                return;
                //Si es que encuentra
            }

        }
        //Si no se encuentra
        callback(false);
    },3000)
}
buscarAlumno("Agustin",(existe)=>{
    if(existe===true){
        console.log("existe");
    }else{
        console.log("No existe");
    }

})