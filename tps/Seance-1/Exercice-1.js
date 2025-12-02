/** QUESTION 1
 *
 *
 * Soit l’Array nums=[2,5,8,7,3]
 * Utiliser la méthode map pour créer un Array contenant les éléments de nums multipliés par 3
 * nouvNums=[6,15,24,21,9]
 *
 *
**/

// Reponse

let nums = [2, 5, 8, 7, 3];

function multiple3(arr) {
  return arr.map(e => e * 3);
}

let reponse = multiple3(nums);
console.log(reponse);
