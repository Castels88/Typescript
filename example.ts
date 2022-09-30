// vediamo adesso come creare le classi 
// prima di si scrive class il nome che vogliamo dare e poi {}
// andiamo a compilare i campi della nostra classe con name: string
class Country {
name: string // altri modi per aggiungere il type puo essere name:""=> stringa / oppure name:string=""
code:string
constructor(name:string, code:string){
this.name=name
this.code=code
}
}

// posso assegnare la classe a una costante in quento modo 
const italia = new Country("italia","it")
console.log(italia)// => riceveremo un oggetto vuoto
//posso richimare cosi il nome della classe
// italia.name = "italia"
// se provassi a richiamare un altra proprietà avrei 
// un errore perche al momento ho solo na proprietà
// italia.code = "it"=> La proprietà 'code' non esiste nel tipo 'Country'.
//ora che l'ho aggiunto va 
// italia.code = "it"

// esiste un altro metodo delle classi per passar epamatri ed è il constructor()
// dentro il constructop metod possiamo inserire i nostri parametri con i type
// per richiamare i parametri del construtor si usa la keyword key e il nome del valore =  il nome del valore
// noteremo che dopo faccio cio dovremmo compilare la new Country("italia","it")=> perche solo in questo modo 
// possiamo compilare i valori del constructor

//--------------------------------------------------------//
// se mettimao caso io volessi rendere non modificabile i valori della mia classe 
// mi basta aggiungere READ-ONLY alle proprieta della classe no costructor
class Country2 {
    readonly name: string // altri modi per aggiungere il type puo essere name:""=> stringa / oppure name:string=""
    readonly code:string
    constructor(name:string, code:string){
    this.name=name
    this.code=code
    }
    }

    const francia = new Country2("francia","fr")

//--------------------------------------------------------//
// un altro metodo che possiamo richiamare all'niterno delle nostre classi sono i function metod
// questa funzione language puo avere anche essa dei valori con dei type

class Country3 {
    readonly name: string 
    readonly code:string
    languages : string[] = []
    constructor(name:string, code:string){
    this.name=name
    this.code=code
    }
    addLanguage(language:string){
        this.languages.push(language)
    }
    }

    const spagna = new Country3("spagna","es")
    // possiamo aggiungere il valore direttamente richiamando la funzione
    spagna.addLanguage("spagnolo")
    spagna.addLanguage("catalano")
    // possiamo anche dare multipli valori ma affinche venga letto nella nostra classe
    // dobbiamo inserire language come valore della nostra class languages : string[] = [] => siccome sono di piu 
    // li voglio mettere dentro un array 
    // e poi di conseguenza dentro la funzione addLanguage devo dichiarare col this.languages e usare il push method  per
    // aggiungere i valori all'array

//---------------------------------------------------------------------------// 
//un possiamo aggiungere quante function method vogliamo dentro la clase 
// ad esempio andiamo a creare una funzione che richiama la proprietà language

class Country4 {
    name: string 
    code:string
    languages : string[] = []
    constructor(name:string, code:string){
    this.name=name
    this.code=code
    }
    addLanguage(language:string){
        this.languages.push(language)
    }
    describeLanguage():string{
        return `the language in ${this.name} include ${this.languages.join(" , ")}`// vado a selezionare i linguaggi e sapendo che sono 
        //degli array uso join per convertirli in stringhe 
    }
    }

    const usa = new Country4("usa","us")
    // possiamo aggiungere il valore direttamente richiamando la funzione
    usa.addLanguage("spagnolo")
    usa.addLanguage("inglese")
    const description =usa.describeLanguage()
    console.log(description)