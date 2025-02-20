import nomes from "./nomes.js"
import sobrenomes from "./sobrenomes.js"

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

//console.log(nomes);
