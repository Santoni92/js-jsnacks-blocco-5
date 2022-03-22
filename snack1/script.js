console.log('JS OK!');

/*Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
 Calcola quanto pesano tutte le zucchine. */

//creo struttura dati (un oggetto) che rappresenti ciascuna singola zucchina
//creo array di 10 oggetti rappresentanti ciascuno una zucchina
//inizializzo a zero una variabile che rappresenta la somma dei vari pesi
//ciclo per tutta la lunghezza dell'array e per ciascuno oggetto sommo il valore dei pesi

 /*const zucchina = {   //oggetto rppresentante la singola zucchina
     varietà:napoletana,
     peso:50,
     lunghezza:10
 };*/

 const arrayDiZucchine = [
     {
        varietà:"napoletana",
        peso:50,
        lunghezza:5
     },

     {
        varietà:"romanesco",
        peso:50,
        lunghezza:10
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

 let somma = 0;

 for(let i = 0; i < arrayDiZucchine.length; i++)
 {
     //console.log(arrayDiZucchine[i]);
      somma += arrayDiZucchine[i].peso; /*accedo all'i-esimo elemento dell'array di oggetti (che è appunto un oggetto) e 
                                          per ciascuno di questi oggetti mi vado a recuperare il valore della chiave 'peso'
                                         (coppia chiave/valore costituisce una proprietà dell'oggetto)*/
      //somma += arrayDiZucchine[i]['peso'];
 }

 console.log('Il totale dei pesi delle varie zucchine è: ',somma);