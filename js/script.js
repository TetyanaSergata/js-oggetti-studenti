// 1.Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
// 2.Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// 3.Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
var studente = {
  'nome' : 'Andrea',
  'cognome' : 'Rossi',
  'eta' : 30
}

for (var key in studente) {
  console.log(studente[key]);
}

var studenti = [
  studente_1 = {
    'nome' : 'Andrea',
    'cognome' : 'Rossi',
    'eta' : 25
  },
  studente_2 = {
    'nome' : 'Erica',
    'cognome' : 'Bianchi',
    'eta' : 26
  },
  studente_3 = {
    'nome' : 'Marco',
    'cognome' : 'Alessi',
    'eta' : 23
  }
];

for (var i = 0; i < studenti.length; i++) {
  console.log(studenti[i]);
  for (var key in studenti[i]) {
    console.log();
  }
}
