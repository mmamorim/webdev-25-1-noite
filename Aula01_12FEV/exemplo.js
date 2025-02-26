
let elemNoname = document.getElementById("noname")
console.log(elemNoname);

let elemName = document.getElementById("name")

let nameValue = localStorage.getItem("name")
console.log("nameValue",nameValue);

if(nameValue) {
    elemNoname.style.display = "none"
    elemName.innerText = "Olá "+nameValue
}

function addName() {
    console.log("addName");
    let cxaName = document.getElementById("cxaName")
    let value = cxaName.value
    localStorage.setItem("name",value)
    elemNoname.style.display = "none"
    elemName.innerText = "Olá "+value
}