import { rg, nomeFake, sobrenomeFake, emailFake } from "./fakers.js"

export default function createUser() {
    let firstName = nomeFake()
    let obj = {
        firstName,
        lastName: sobrenomeFake(),
        rg: rg(),
        email: emailFake(firstName)
    }
    return obj
}