// in questa lezione andremo a vedere 3 diversi modi per descrivere oggetti con i type
// adniamo a creare un oggetto
// noteremo che da questo oggetti ritoneranno numero errori 
// il primo che manca la proprieta name all'oggetto 
// e il secondo che le proprieta hanno come type any 
// per risolvere questi problemi andiamo ad assegnare i type alle proprieta e ad aggiungere la proprietà name
//avendo aggiunto la proprietà name dobbiamo assegnare un type anche ad essa

const country:{name: string, code:string, population: number} = {
name: "italia",
code: "IT",
population: 58964
}
//anche in questa funzione noteremo che country ha 
// value come any quindi anche qui possiamo aggiungere un aggetto do type 
// riferito a name e popoulation
function displayCountry(country:{name:string, population:number}){
    console.log(country.name.toUpperCase())
    console.log(country.population * 10)

    displayCountry(country)
}

//------------------------------------------------------------------------------//
//noteremo che adesso abbiamo sviluppato due controlli di type ma che in realta sono molto 
// simili in realta ci sarebbe il modo di creare un controllo dei type unico per entrambi
//questo secondo modo si chiama Interfaces

// quello che possiamo fare e creare una interface con un nome e assegnargli il controllo dei type
interface Country {name: string, code:string, population: number}
// andiamo ad assegnare l'interface all'oggetto con : Country = ecc..
const countrySecond : Country = {
    name: "Spagna",
    code: "es",
    population: 9874
    }
// e possiamo anche sostituirlo direttamente nella funzione e le proprieta veddranno comunque prese dalla Interface
    function displayCountrySecond(country: Country){
        console.log(country.name.toUpperCase())
        console.log(country.population * 10)
    
        displayCountry(country)
    }

//----------------------------------------------------------------------------//
//terzo metodo sono le allies molto semplice basta invece di scrivere interface 
// si scrive type e il nome che vogliamo dare al nostro controllo dei type
type Paese = {name: string, code:string, population: number}
const countryThird : Paese = {
    name: "Francia",
    code: "fr",
    population: 145896
    }
    function displayCountryThird(country: Paese){
        console.log(country.name.toUpperCase())
        console.log(country.population * 10)
    
        displayCountry(country)
    }