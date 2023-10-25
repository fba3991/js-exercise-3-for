
let arrayVuoto = []; 

let somma = 0;
while (somma < 50) {
    let numero = Number(prompt("Inserisci un numero:"));

    if (isNaN(numero)) {
        alert("Inserisci un numero valido.");
      
    }
    
    arrayVuoto.push(numero); 
    somma += numero; 
}

console.log( arrayVuoto);
console.log(somma); 






    


