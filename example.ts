// parleremo delle option properties di quando definiamo un oggetto 
// quando creiamo un oggetto le prorietà sono obbligatorie 
// se dichiaro una allies type con delle proprietà e poi nell'oggetto rimuovo una proprietà 
// che è dichiarata nelle allies avro un errore
// per risolvere questo errore mi basta aggiungere il population? per far capire che quella prorpietà 
// è opzionale 

type Country = {name:string, code:string; population?:number}

const country: Country={
    name:"Italy",
    code:"it",
    // population: 457988
}
//ma se dovessimo inserire ad esempio population come risultato di una funzione avremmo un errore
// se vediamo nell'errore esso dice => L'oggetto è probabilmente 'undefined'
// per risolvere questo problema dobbiamo semplicemente creare un if in cui 
// specifichiamo che population e un type numerico 
function displayCountry(country:Country){
    console.log(country.name.toLocaleUpperCase);
    if(typeof country.population === "number"){
        console.log(country.population * 10)
    }
    
}
displayCountry(country)

//-------------------------------------------------------//
// un altro modo per gestire proprietà undefined negli oggetti
// è inserire delle proprieta di default e si puo fare con la object destrutting mode
// ad esempio in questa funzione al posto della proprieta country 
// andro a mettere altre {} al cui interno mettero le proprietà
// in questo caso name e population e di conseguenza
// nella funzione non dobbiamo piu richiamare le proprieta con country.name ecc 
// ma semplicemente le proprieta
// allo stesso tempo posso dare a queste prorietà anche dei parametri di default 
// tipo population = 0, in questo modo non è piu necessario l' IF e potrei anche 
// togliere population dall'oggetto tanto ritornerebbe il parametro 0 
function displayCountrySecond({name, population = 0}:Country){
    console.log(name.toLocaleUpperCase);
    // if(typeof population === "number"){
        console.log(population * 10)
    // }    
}
displayCountrySecond(country)

//----------------------------------------------------------//
// una volta definito il nostro oggetto e le sue prorieta 
// potrei anche cambiarle con il classica country.name = "france" per esempio
// ma esiste un metodo migliore che sarebbe il Read-Only che rende le nostre proprieta 
// impossibili da cambiare
// si aggiunge readonly davanti le prorietà dell'allies
type CountrySecond = {
    readonly name:string, 
    readonly code:string; 
    readonly population?:number
}

const countrySecond: CountrySecond={
    name:"France",
    code:"FR",
    population: 789654
}