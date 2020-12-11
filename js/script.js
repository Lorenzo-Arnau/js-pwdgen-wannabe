var dataOdierna = new Date().getFullYear();

var name = prompt('Come ti chiami?','Qui inserisci il tuo nome');
if(name !== 'Qui inserisci il tuo nome'){
var surname = prompt('Ciao ' + name + '! .. come ti chiami di cognome?');
var color = prompt('Molto bene ' + name +' '+ surname + '! Benvenuto in Password Generator!(molto poco sicuro)'+ dataOdierna +'. ora passiamo a una domada difficile..qual\'è il tuo colore preferito?')
alert('Ottimo! troverai a schermo una password molto poco sicura che ti sconsigliamo vivamente di usare! Grazie per aver scelto Password Generator ' + dataOdierna)
document.writeln(name + surname + color + dataOdierna);
}else{
  alert('Complimenti hai trovato l\'Easter Egg! Hai vinto un biscottino!')
}
