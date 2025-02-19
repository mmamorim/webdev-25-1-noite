import nomes from "./nomes.js"

function rg() {
    return Math.random().toString().slice(3, 12)
}

//console.log(nomes);

function nomeFake() {
    let idx = parseInt(Math.random()*nomes.length)
    return nomes[idx]
}
export { rg, nomeFake }