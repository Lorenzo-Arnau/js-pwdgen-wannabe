alert('Ciao Questa è un\avventura gioco! pronto a giocare? devi rispondere solo con si e no!')

var chooseOne = prompt('Il tuo nome è Ottavio Hurley Sei un ingegnere aerospaziale in missione speciale sulla Stazione Spaziale Internazionale.Il tuo compito in questa missione era quello di riparare alcuni pannelli solari danneggiati recentemente da un contatto imprevisto con alcuni detriti vaganti. Portare a termine l’operazione è stato piuttosto semplice e dopo un giorno di completo riposo, ti appresti insieme al tuo equipaggio al rientro sulla Terra.Separati dalla ISS e ormai lontani da essa la vostra Soyuz  subisce una non identificata avaria…Riuscire a sopravvivere non sarà facile…Tornare a casa… impossibile… Tutto chiaro?')


if (chooseOne === 'si') {
  var chooseTwo = prompt('La tua capsula Soyuz dopo una grave avaria ti ha costretto ad una rapida espulzione nello spazio aperto. La tuta Sokol che indossi non è stata certo progettata per lo spazio aperto ciononostante in questo momento è l’unica cosa che ti mantiene in vita. Lo zaino di servizio sembra danneggiato.Il tuo equipaggio è disperso…Ora sei solo, alla deriva nell’oscurità.La Terra da lì appare bellissima ma anche molto molto lontana…Il tempo passa, l’ossigeno e la batteria della tuta si stanno esaurendo. Inizi a pensare che forse non potrai più gustarti una limonata fresca quando in lontananza, con stupore,  scorgi “VEGA” la famosa navetta di linea della compagnia privata “McSpaceline” che si dirige verso di te.Molto più vicino invece, vedi “CYGNUS”, una piccola stazione spaziale dismessa da diversi anni.Cosa fai? Vai verso VEGA =si Vai verso CYGNUS =no')
}else {
   alert('ricarica la pagina,leggi con calma e ricomincia a giocare quando sarai pronto...Ciao!');
}

if (chooseTwo === 'si') {
  alert('Maledetti turisti!Lo zaino ha funzionato ma…La navetta di linea “VEGA” della “McSpaceline” è famosa per essere stata la prima navetta progettata per gite turistiche spaziali e purtroppo non prevedeva un Airlock d’ingresso per lo spazio aperto. Mentre scivoli via davanti ai suoi finestrini, gli ignari turisti, credendoti parte del Tour per cui hanno pagato, procurano ai giornali le foto per la triste prima pagina di domani… Ricarica la pagina e ricomincia!')
}else {
   var chooseForUrlo = prompt('Nonostante l’aspetto scoraggiante, lo zaino di servizio funziona alla perfezione e grazie all’ultima riserva d’aria raggiungi la stazione “CYGNUS” riuscendo ad entrarci. Scrivi sotto il tuo urlo di gioia!');
}

var chooseFive = prompt('Sei all’interno dell’abitacolo di “CYGNUS”, intorno a te vedi solo disordine e sporcizia e l’unica finestra della stanza è ben chiusa.Il quadro comandi è in panne e un allarme luminoso ti conferma che qualcosa non va. Cosa fai? Schiacci a caso i comandi del quadro=si Ti rilassi un\'attimo =no');

if (chooseFive === 'si') {
   alert('Premi a caso la metà dei bottoni che trovi nel quadro comandi finche non vedi accendersi sul monitor principale quello che sembra un countdown per l’autodistruzione!Hai soltanto dieci secondi per riflettere sulla tua proverbiale astuzia prima di esplodere in mille pezzettini insieme al “CYGNUS”. Ricarica la pagina e ricomincia!')
}else {
   var chooseSeven = prompt('Si come no… e poi cosa gradiresti, una bella limonata fresca?Andiamo torna al lavoro, non sei in vacanza!Decidi quindi di rimettere in ordine la stanza. Riesci finalmente ad avere un quadro della situazione.E urli il tuo classico urlo di gioia ,'+ chooseForUrlo + '!! Esamini con cura l’abitacolo e noti sulla destra un pannello per la manutenzione della stazione e dietro di te scorgi una porta a tenuta stagna molto robusta.Cosa fai? Pannello della manutenzione=si Porta stagna=no');
}

if (chooseSeven === 'si') {
 var chooseEight = prompt(chooseForUrlo + ' Esclami, come ingegnere sei sempre stato un passo avanti agli altri e anche in questa occasione le tue abilità sono state estremamente utili. Tutto pare sistemato anche se il pannello dell’allarme luminoso continua a lampeggiare. Su di esso è raffigurato un Paracadute.Cosa fai? Schiacci pulsante con P=si Avvii il quadro comandi =no');
}else{
 alert('Temo che tu sia impazzito… Aprendo la porta stagna l’ossigeno rimasto nella stazione si disperde nello spazio ponendo così fine alle tue sofferenze.');
}

if (chooseEight === 'si') {
 alert('Appena premi il pulsante P vedi il paracadute aprirsi dietro alla stazione senza però ottenere nulla, nello spazio non c\è aria che possa frenarti...Ma con la tua fortuna il paracadute viene assorbito da un piccolo buco nero lì vicino, insieme pian piano alla stazione intera...peccato ricomincia! ');
}else{
 var chooseNine = prompt('Sei di fronte al quadro comandi e con disinvoltura effettui le operazioni necessarie all’accenzione della stazione ormai funzionante. La procedura avanza senza problemi e con sollievo vedi che la manovra di rientro è cominciata. Hai superato l’Atmosfera non senza paure e ora stai procedendo verso la Terra. Manca poco all’impatto. cosa fai? Premi il pulsante del paracadute=si Continui con la manovra di atterraggio=no');
}

if (chooseNine === 'si') {
 alert(' Premi il pulsante P appena in tempo e il paracadute si apre dietro di te portandoti al sicuro sulla Terra.Il luogo in cui sei atterrato sembra isolato e deserto…L’unico riferimento che trovi guardando l’orizzonte è una specie di tenda con una vecchia e usurata insegna…Ormai stremato, raggiungi il chiosco di limonate fresche…Non è stato facile ma sei salvo. Congratulazioni!');
}else{
 alert('Ricordi l’allarme luminoso? Bene.L’allarme luminoso, secondo i progettisti di “CYGNUS”, sarebbe servito qualora fossero insorti problemi con l’apertura automatica del paracadute durante il rientro a Terra. La procedura corretta in questi casi sarebbe stata quella di attivare manualmente il comando assicurando a “CYGNUS” e ai suoi ospiti un morbido rientro a casa. Come potevi saperlo…Le procedure di sicurezza della navetta che poteva salvarti la vita non facevano parte del tuo corso di studi… Mi dispiace.');
}
