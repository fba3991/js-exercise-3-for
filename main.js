
/* let arrayVuoto = []; 
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
console.log(somma);  */
 
/* let promptUtente = prompt('dimmi un numero di 4 cifre');
let numero =parseInt(promptUtente);
let numeroString = numero.toString();

if(isNaN(numeroString) || numeroString.length !== 4 ){
    alert('non hai inserito un numero di 4 cifre');
}else{
    let somma = 0;
    for (let i=0; i<4; i++){
        let char = numeroString[i];
        somma += Number(char);

    }
    alert(somma);
} */
/* 
let N = parseInt(prompt('inserisci un numero'));
for (let i=1; i <=N; i++){
    let array = []
 for (let j=0; j<10; j++){
    let numeroCasuale = Math.floor(Math.random()*100)+1;
    array.push(numeroCasuale);
 }
 console.log('array'+(i+1)+ ':', array);
} */

/* let mele=[
    { varieta: "Golden", peso: 150, diametro: 8 },
    { varieta: "Red Delicious", peso: 130, diametro: 7 },
    { varieta: "Fuji", peso: 140, diametro: 7.5 },
]
let pesoTotale =0;
for(let i =0; i <mele.length; i++){
    pesoTotale+=mele[i].peso;
}
console.log("Il peso totale di tutte le mele è: " + pesoTotale + " grammi."); */
/* 
let invitati =['andrea', 'luca', 'matteo', 'angela'];
let nome = prompt('inserisci nome invitato')
if(invitati.includes(nome)){
    alert('puoi entrare')
}else[
    alert('non puoi entrare')
] */