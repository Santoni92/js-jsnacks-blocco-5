console.log('JS OK!');

/*Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)*/

const stringaUtente = prompt('Inserisci una stringa: ');
console.log('La tua stringa scritta alla rovescia risulta: ' + stringReverse(stringaUtente).join(' '));


function stringReverse(inputString)
{
    stringaRovesciata = [];
    //inputString = inputString.trim().toLowerCase(); //elimino eventuali spazi all'inizio ed alla fine della stringa inserita dall'utente e passata come argomento alla funzione
    for(let i = (inputString.length - 1); i >= 0; i--)
    {
        stringaRovesciata.push(inputString[i]);
    }
    return stringaRovesciata;
}