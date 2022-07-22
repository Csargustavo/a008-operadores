console.log("exercicio 2")

const numeroa = Number (prompt("diga um numero"))
const numerob = Number (prompt("diga um segundo numero"))

let restA = numeroa % numerob
let restB = numerob % numeroa

console.log ("O primeiro numero é maior que segundo?", numeroa > numerob )
console.log ("O primeiro numero é igual ao segundo?", numeroa === numerob)
console.log ("O primeiro numero é divisível pelo segundo?", numeroa === 0)
console.log ("O primeiro numero é divisível pelo segundo?", numerob === 0)