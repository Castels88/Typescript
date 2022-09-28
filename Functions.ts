// in questa lezione utilizzaremo le funzioni 
// come in Js anche in Ts le funzioni hanno dei parametri , delle condizioni e un return 
function populationDifference(population1, population2){
    if(population1 > population2){
        return population1 - population2
    }
    return population2 - population1
}
const chinaPopulation = 45_7878965_5226
const usaPopulation = 335_478_589

const difference = populationDifference(chinaPopulation, usaPopulation);

console.log(`population difference is ${difference}`)

// covertiamo un JS con npx tsc Functions.ts nel terminale e avremo il nostro risultato
//-----------------------------//

// Andiamo a vedere le arrow function
// come potremmo notare ai parametri della funzione da come type any .
// andiamo specificare direttamente i parametri nella funzione
// runniamo npx tsc Functions.ts
const describeCurrency=(country:string, currency:string, currencySymbol?:string) =>{
    let description = `the currency of ${country} is the ${currency}`;
    if(typeof currencySymbol === "string"){
        description += `${currencySymbol}`
    }
    return description
}

const description = describeCurrency("USA","dollar")
// andiamo a mettere la currencySymbol opzionale.
// se lo leviamo Ts ci darà un errore ("sono previsti 3 argomenti ma c'e ne sono 2 ")
// per rendere opzionale il terzo parametro ci basta aggiungere un ? dopo currencySymbol cosi => (currencySymbol?:string)
// andando a runnare il Js avremo questo risultato "the currency of USA is the dollar undefined" 
// come possiamo vedere nel currencySymbol abbiamo undefinede noi non vogliamo questo
// allora eliminiamo currencySymbol dalla description e andiamo a specificare con la condizione if 
// currencySymbol è uguale a una stringa allora mi aggiungi currencySymbol alla variabile description.
// in questo modo se runniamo senza currencySymbol non ci da undefined 
// se runniamo con currencySymbol ci renderizzera il valore 
console.log(description)