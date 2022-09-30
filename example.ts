//vediamo come usare gli array method con gli array type
// come prima cosa definiamo una interface in modo da far rispettare i type al nostro array
interface Country {
    name: string,
    code: string,
    currency:string,
    population:number
}
const paesi: Country[]= [
    {
        name:"italia",
        code:"it",
        currency: "eur",
        population: 123456
    },
    {
        name:"cina",
        code:"cn",
        currency: "renminbi",
        population: 12345698745
    },
    {
        name:"francia",
        code:"fr",
        currency: "eur",
        population: 146445
    },
    {
        name:"grecia",
        code:"gr",
        currency: "eur",
        population: 789622
    },
]

// andiamo ad utilizzare il metodo find() per trovare l'elemento dell'array che vogliamo
// e vogliamo cercarli per la proprietà code
// creaimo una costante di ritorna da utilizzare poi nel console log
const francia = paesi.find((value)=>{ //deve ritonarci un oggetto 
    return value.code === "fr"
} )
console.log(francia?.code)

// andiamo a creare un nuovo array col metodo filter 
// chiedendo al nuovo array di darci solo i paesi con popolazione sopra un miliardo
const miliardo = paesi.filter((value)=>{
    return value.population >= 1000000
})
console.log(miliardo)

// andiamo ad usare adesso il forEach per fare un ciclo e avere come risultato 
// solo le currency di ogni elemnte del nostro array
const ciclo = paesi.forEach((value)=>{
    console.log(`the ${value.currency} is the official currency of ${value.name}`)
})

// andiamo ora a vedere il metodo map che crea un nuovo array dal risultato della 
// funzione che viene fatta al suo interno , in questo caso faremo ritornare 
// tutte le proprieta population del nostro array

const population = paesi.map((value)=>{
    return value.population
})
console.log(population)

// per fare le cose piu ordinate dal map potremmo anche far risultare un ogetto di array 
const population2 = paesi.map((value)=>{
    return {
        country: value.name,
        populations: value.population

    }
})
console.log(population2)