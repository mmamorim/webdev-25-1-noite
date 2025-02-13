
console.log("oi gente");

//localStorage.setItem("nome1","João Alface")
//let nome = localStorage.getItem("nome1")
//console.log("nome",nome);

//localStorage.setItem("idade1",23)
//let idade = localStorage.getItem("idade1")
//console.log("idade",idade);

let txtUsuario = `{ 
    "nome": "Ana", 
    "idade": 23, 
    "email": "m@m.com" 
}`

let objUsuario = JSON.parse(txtUsuario)
console.log(txtUsuario);
console.log(objUsuario);

localStorage.setItem("usuario1",txtUsuario)

let value = localStorage.getItem("usuario1")
let user = JSON.parse(value)
console.log("usuario",user);

//para converter de objeto para texto
let texto = JSON.stringify(user)
console.log("texto",texto);
