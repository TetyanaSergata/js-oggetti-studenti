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
  {
    'nome' : 'Andrea',
    'cognome' : 'Rossi',
    'eta' : 25
  },
  {
    'nome' : 'Erica',
    'cognome' : 'Bianchi',
    'eta' : 26
  },
  {
    'nome' : 'Marco',
    'cognome' : 'Alessi',
    'eta' : 23
  }
];


var nomeStudente = prompt('Inserisci il tuo nome');
var cognomeStudente = prompt('Inserisci il tuo cognome');
var etaStudente = prompt('Inserisci la tua età');

var studente = {
  'nome' : nomeStudente,
  'cognome' : cognomeStudente,
  'eta' : etaStudente
}

studenti.push(studente);

for (var i = 0; i < studenti.length; i++) {
  console.log(studenti[i].nome + ' - ' + studenti[i].cognome);
}

console.log(studenti[3].nome + '\n' + studenti[3].cognome);
