console.log('JS OK!');

/*Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)*/

const stringaUtente = prompt('Inserisci una stringa: ');
console.log('La tua stringa scritta alla rovescia risulta: ' + stringReverse(stringaUtente).join(' '));


function stringReverse(inputString)
{
    stringaRovesciata = [];
    for(let i = (inputString.length - 1); i >= 0; i--)
    {
        stringaRovesciata.push(inputString[i]);
    }
    return stringaRovesciata;
}