import { rgFake, nameFake, sobrenomeFake } from "./fakers.js"

export function createUser() {
    let obj = {
        firstName: nameFake(),
        lastName: sobrenomeFake(),
        rg: rgFake(),
        email: "m@m.com"
    }
    return obj
}