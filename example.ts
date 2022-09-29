// interface e allies sono 2 modi per dare un type alle prorpietà 
// un oggetto 

//interface si scrive cosi 
interface Country{
    name:string,
    code:string
}

//allies cosi 

type CountrySecond = {
    name:string,
    code:string
}

// c'è una grande differenza dei 2 anche se sembrano uguali
// possiamo creare 2 allies con lo stesso nome ne servira sempre 
// una diversa
// type CountrySecond = { // dara un errore => Identificatore 'CountrySecond' duplicato.
//     name:string,
//     code:string
// }

// mentre posso creare un altra interface con lostesso nome e aggiungere pure proprieta

interface Country{
    population: number
}
// e se li metto in un oggetto dovranno essere richiamate tutte e tre le proprietà
const country: Country ={
name:"italia",
code:"IT",
population: 36588954
}