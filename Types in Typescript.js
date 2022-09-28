// in questa lezione andremo a capire la differenza i vari tipi di Type 
// creaiamo un degli esempi
// come potremo notare all'interno della funzione fontMessage ci saranno 2 parametri o Type
// countryname al quale typescript associa un valore any perche nulla e specificato
// e population al quale associa il valore numero perche gli abbiamo dato un valore di default
function formatMessage(countryName, population=0){
    //possiamo anche dare ai parametri della funzione dei type
    //function formatMessage(countryName: string, population: number=0)
    return `the population of ${countryName} is ${population}`;

}
// a country associarà il valore stringa
// possiamo anche setare noi stessi il type della costante
// in questo modo => let country = string = "thailand" per esempio
let country = "Thailand";
// a population nonostante il numero sia staccato da _ viene cmq riconosciuto come type numerico
// allostesso modo possiamo dare un type particolare a population
// => let population = string = 69_950_850; ma in questo modo typescript lo riconoscera come errore
// perche il valore è un numero quindi non possiamo dire che è una stringa
let population = 69_950_850;
const message = formatMessage(country, population)
// nel caso di message invece typescript associara il type string perche il suo risultato
// è associato al return della funzione formatMessage che è una stringa "ecc.."
console.log(message)