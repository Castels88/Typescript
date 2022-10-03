// il record permette di stabilire il tipo di prorietà e di valori dell'oggetto 
// sto dicendo che le proprietà devono essere delle stringhe 
// e che i loro valori possono essere sia stringhe che numeri
const country:Record<string, string|number> = {
    name:"spain",
    code:"es",
    currency:"euro",
    population:123456
}
//vediamo un esempio piu complesso 
interface Country{
    name:string
    code:string
    currency:string
    population:number
}
// andiamo ad aggiungere il record come abbiamo fatto prima
// solo che questa volta diciamo che la proprieta deve essere una stringa 
// e il valore della stringa deve essere un oggetto, e country gia è un oggetto quindi possiamo usare la interface
// posso anche decidere che vengano prese in considerazione solo alcune proprietà
// in questo modo => const countries:Record<"spain","italia", Country> in questo modo per francia e belgio mi 
// spunterà un type errore perche non sono prese in considerazione
const countries:Record<string, Country> ={
    spain:{
        name:"spain",
        code:"es",
        currency:"euro",
        population:12387956
    },
    italia:{
        name:"italia",
        code:"it",
        currency:"euro",
        population:12654456
    },
    francia:{
        name:"francia",
        code:"fr",
        currency:"euro",
        population:124653456
    },
    belgio:{
        name:"belgio",
        code:"bg",
        currency:"euro",
        population:123123456
    },
}