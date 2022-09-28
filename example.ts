// andiamo ad imparare ora i 'Any', 'unknown' and 'never' types
// mettiamo caso ho un aggetto con una proprietà di una stringa
let country:any = {name:"Italy"};
// se io tentassi di modificare italy in un altra avro un errore => Il tipo 'string' non è assegnabile al tipo '{ name: string; }'
// country = "colombia"

// se tentassi di aggiungere un proprietà avrei cmq un errore => La proprietà 'code' non esiste nel tipo '{ name: string; }'.
// country.code = "IT"

//per risolvere questo problema aggiungendo a coutry:any = ecc
country.code = "it";//adesso lo fa fare

//------------------------------------------------------------------------------//

//Vediamo il unknown
// se provassi a misurare la lunghezza della proprieta 
// riceverei come errore=> L'oggetto è di tipo 'unknown'
// possiamo correggere questo errore aggiungendo un if condizionale 
// in cui confermiamo che value è una string
// non mi dara piu errore
function pippo (value:unknown){
    if(typeof value === "string")
    console.log(value.length)
}
pippo("a string")//=> 8 mi ritornerà la lunghezza

//----------------------------------------------------------------------------//

// Vediamo ora il never
// mettiamo caso la function che mi ritorna un value
function daiUnErrore(message: string):never{
    throw new Error(`qualcosa è andato storto: ${message}`)
}
//per farsi che non ritorni mai il risultato dobbiamo aggiungere :never alla funzione