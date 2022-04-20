let numeros = Array (1,2,3,4,5,6,7,8,9,10)
console.log(numeros)
console.log(numeros[7])

let nombres = Array ("samuel", "Juan", "camila", "daniel", "jose", "Veronica", "valentina", "sara", "isabella", "santiago") 
console.log(nombres[5])

let edades = Array (12,13,14,15,16,17,16,15,14,13)
console.log(edades[6])

for (let i=0; i<nombres.length; i++ ) {
    console.log(nombres[i]+ " " + edades[i])
}