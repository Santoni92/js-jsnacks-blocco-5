console.log('JS OK!');

/*Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da
 uno e dall’altro, es. [a,b,c], [1,2,3] → [a,1,b,2,c,3]. */

 const array1 = ['a','b','c'];
 const array2 = [1,2,3];
fondaArray(array1,array2);

 function fondaArray(array1,array2)
 {
     const unionArray = [];
     for(let i = 0; i < array1.length; i++)
     {
         unionArry.push(array1[i]);
         unionArry.push(array2[i]);
     }
     console.log(unionArray.join(' '));
 }