// in questa lezione vedremo come andare ad usare il partial readonly required utility type 
// prima diamo una occhiata al partial 
// come possiamo vedere in CountryB manca la proprietà currency se dovessimo associare 
// l'interface Country avremmo un errore possiamo ovviare e questo errore ed associare
// utilizzare partial

interface Country {
    name:string,
    code:string,
    currency:string,
    population:number
}

const countryA: Country = {
    name:"spain",
    code:"es",
    currency:"euro",
    population: 123854

}
const countryB: Partial<Country>  = { // => in questo modo
    name:"Nigeria",
    code:"ng",
    population: 7894654

}

// vediamo adesso required
// per il primo ogeeto non ci srarnno problemi perche abbiamo 
// tutte le proprietà per il secondo
// possiamo mettere che sara necessario avere la proprieta che manca 

interface Country2 {
    name:string,
    code:string,
    currency?:string,
    population?:number
}

const country2: Country = {
    name:"spain",
    code:"es",
    currency:"euro",
    population: 123854

}
const country3:Required<Country2>  = { //=>La proprietà 'currency' manca nel tipo
    name:"Nigeria",
    code:"ng",
    population: 7894654

}

// vediamo il readonly esso va semplicemente a non permettere la modifica dei dati dell'oggetto
interface Country3 {
    name:string,
    code:string,
    currency:string,
    population:number
}

const country4: Country = {
    name:"spain",
    code:"es",
    currency:"euro",
    population: 123854

}
const country5:Readonly<Country3>  = { //=>La proprietà 'currency' manca nel tipo
    name:"Nigeria",
    code:"ng",
    population: 7894654,
    currency: "naira"

}
country5.population="123546"//=> Non è possibile assegnare a 'population' perché è una proprietà di sola lettura