import { rgFake, nameFake, sobrenomeFake, emailFake } from "./fakers.js"

export function createUser() {
    let firstName = nameFake()
    let obj = {
        firstName,
        lastName: sobrenomeFake(),
        rg: rgFake(),
        email: emailFake(firstName)
    }
    return obj
}