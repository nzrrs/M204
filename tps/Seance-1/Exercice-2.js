/** QUESTION 2
 * 
 *
 * En utilisant les méthodes map et filter
 * Créer un Array nomAgés à partir de l’Array personnes contenant les noms des
 * Personnes qui sont membre c-à-d estMember est true
 *
 *
**/

const personnes = [
{ nom: "Rami", age: 33, estMember: true },
{ nom: "Fatihi", age: 24, estMember: false },
{ nom: "Chakib", age: 45, estMember: true },
{ nom: "Mounir", age: 37, estMember: false },
];

// Reponse

const nomAges = personnes
.filter((e)=> e.estMember)
.map((e) => e.nom)

console.log(nomAges)
