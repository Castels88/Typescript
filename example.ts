// in questa lezione andremo a vedere la pick e omit utility 
// con pick possiamo decidere che quando assegnamo una interface ad un oggetto vengono utilizzate solo
// alcune prorpietà dell'interface 
// come prima cosa andiamo a creare una type allies in cui andremo ad utilizzare il pick
// e diremo di utilizzare solo name e code
//associamo il nuovo type allies all'oggetto e non avremo piu errori
interface Country {
    name:string,
    code:string,
    currency:string,
    population:number
}
type CountryPreview = Pick<Country, "name"|"code">
const countryPreview: CountryPreview = {
    name:"spain",
    code:"es",
    

}
//vediamo come usare lo omit ossia omettare alcune proprietà
type CountryB = Omit<Country, "currency"|"population">
const countryB:CountryB= { 
    name:"Nigeria",
    code:"ng",
    // population: 7894654,//=> ovremo un errore quindi possiamo toglierlo
    // currency: "la fica"

}
