import nomes from "./nomes.js"
import sobrenomes from "./sobrenomes.js"
import emails from "./emails.js"

export function rgFake() {
    return Math.random().toString().slice(3, 12)
}

export function nameFake() {
    let idx = parseInt(Math.random()*nomes.length)
    return nomes[idx]
}

export function sobrenomeFake() {
    let idx = parseInt(Math.random()*sobrenomes.length)
    return sobrenomes[idx]
}

export function emailFake(nome) {
    let idx = parseInt(Math.random()*emails.length)
    let dominio = emails[idx]
    return nome.toLowerCase()+"@"+dominio
}
//console.log(nomes);
