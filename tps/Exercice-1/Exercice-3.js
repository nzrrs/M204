// Question

// Soit l’Array

const inscriptions = [
  { id: 10, nom: "Rami", filiere: "DEV" },
  { id: 11, nom: "Kamali", filiere: "DEV" },
  { id: 12, nom: "Fahmi", filiere: "DEV" },
  { id: 13, nom: "Chaouki", filiere: "DEV" },
];

// Créer la pure fonction qui permet d’ajouter une inscription

function ajouterInscription(arr, newInscription) {
  const existe = arr.some((e) => e.id === newInscription.id);
  if (existe) return arr; // return original si existe est True
  return [...arr, newInscription];
}

const update = ajouterInscription(inscriptions, {
  id: 14,
  nom: "Nizar",
  filiere: "DEV",
});

console.log(update);
