console.log('JS OK!');

/*Scrivi una funzione che accetti tre argomenti: un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo 
quanto il numero di elementi dell’array). La funzione ritornerà un nuovo array con i valori che hanno la posizione 
compresa tra “a” e “b” */

let a = parseInt(prompt('Inserisci estremo inferiore: '));
let b = parseInt(prompt('Inserisci estremo superiore'));
const array = [1,2,3,4,5,6,7,8,9,10];

while((isNaN(a) || isNaN(b)) || a <= 0 || b <= 0 || a > b  || b >= array.length)
{
    a = parseInt(prompt('Inserisci estremo inferiore: '));
    b = parseInt(prompt('Inserisci estremo superiore'));
}

console.log("L'array dei valori compresi nell'intervallo specificato risulta: " + valoriCompresi(a,b,array).join(' '));

/*funzione */
function valoriCompresi(number1,number2,array)
{
    const arrayToReturn = [];
    for( let i = number1 - 1;i < number2; i++ )
    {
        arrayToReturn.push(array[i]);
    }
    return arrayToReturn;
}