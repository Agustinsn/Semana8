const axios =require('axios')

axios.get("https://reqres.in/api/users?page=2")
.then(respuesta=>console.log(respuesta))
.catch(error=>console.log(error))
