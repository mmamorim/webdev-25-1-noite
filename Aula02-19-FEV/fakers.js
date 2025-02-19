import nomes from "./nomes.js"
import sobrenomes from "./sobrenomes.js"
import emails from "./email.js"

function rg() {
    return Math.random().toString().slice(3, 12)
}

//console.log(nomes);

function nomeFake() {
    let idx = parseInt(Math.random()*nomes.length)
    return nomes[idx]
}

function sobrenomeFake() {
    let idx = parseInt(Math.random()*sobrenomes.length)
    return sobrenomes[idx]
}

function emailFake(nome) {
    let idx = parseInt(Math.random()*emails.length)
    let dominio = emails[idx]
    return nome.toLowerCase()+"@"+dominio
}

export { rg, nomeFake, sobrenomeFake, emailFake}