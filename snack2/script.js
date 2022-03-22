console.log('JS OK!');

/*Crea 10 oggetti che rappresentano una zucchina. Dividi in due array separati le zucchine che misurano meno o più di 15cm.
 Infine stampa separatamente quanto pesano i due gruppi di zucchine. */

 const arrayDiZucchine = [
    {
       varietà:"napoletana",
       peso:50,
       lunghezza:35
    },
    {
       varietà:"romanesco",
       peso:50,
       lunghezza:40
    },
    {
       varietà:"fiorentino",
       peso:50,
       lunghezza:15
    },
    {
       varietà:"trombetta",
       peso:50,
       lunghezza:20
    },
    {
       varietà:"patisson",
       peso:50,
       lunghezza:4
    },
    {
       varietà:"friulano",
       peso:50,
       lunghezza:9
    },
    {
       varietà:"crookneck",
       peso:50,
       lunghezza:6
    },
    {
       varietà:"faentino",
       peso:50,
       lunghezza:6
    },
    {
       varietà:"lucano",
       peso:50,
       lunghezza:2
    },
    {
       varietà:"napoletana",
       peso:50,
       lunghezza:1
    }
];

const arrayZucchineLunghe = [];
const arrayZucchineCorte = [];

for(let i = 0; i < arrayDiZucchine.length; i++)
{
    if(arrayDiZucchine[i]['lunghezza'] > 15)
    {
        arrayZucchineLunghe.push(arrayDiZucchine[i]);
    }
    else{
        arrayZucchineCorte.push(arrayDiZucchine[i]);
    }
}

console.log("L'array delle zucchine più lunghe è: " + arrayZucchineLunghe);
//console.log("L'array delle zucchine più corte è: " + arrayZucchineCorte);

