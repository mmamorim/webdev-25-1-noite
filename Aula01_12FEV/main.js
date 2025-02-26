
console.log("oi gente");

//localStorage.setItem("username","João Alface")
//let nome = localStorage.getItem("username")
//console.log("nome",nome);

//localStorage.setItem("userage",23)
//let age = localStorage.getItem("userage")
//console.log("age",age+1);

let user = {
    "name": "João Alface",
    "age": 23,
    "email": "joao@joao.com",
    "login": "joao"
}

console.log("user",user);

//let userTxt = `{
//    "name": "João Alface",
//    "age": 23,
//    "email": "joao@joao.com",
//    "login": "joao"
//}`

let userTxt = JSON.stringify(user)
console.log("userTxt",userTxt);

localStorage.setItem("user",userTxt)