import { rg, nomeFake } from "./fakers.js"

export default function createUser() {
    let obj = {
        firstName: nomeFake(),
        lastName: "Amorim",
        rg: rg(),
        email: "m@m.com"
    }
    return obj
}