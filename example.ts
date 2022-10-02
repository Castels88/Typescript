// in questa lezione vedremo come estendere una classe da una vecchia gia esistente 
// ad una totalmente nuova, questa nuova classe avra tutte le proprieta, valori e metodi che
// esistevano nella vecchia classe.
//creaimo una classe 
class Country{
    readonly name:string
    readonly code: string

    languages: string[] = []

    constructor(name:string,code:string){
        this.name = name
        this.code = code
    }
    addLanguage(language:string){
        this.languages.push(language)
    }
    describeLanguage():string{
        return `the languages spoken in ${this.name} include ${this.languages.join(", ")}`
    }
}

// andiamo a creare una nuova classe alla quale estendere le vecchia 
class CountryWithCurrency extends Country{
//andiamo ad inserire nuove proprietà dentro
// questa classe  per farlo dobbiamo creare il constructor
// ed inserire i vecchi della vacchia classe senno dara errore + quello nuovo
// siccome questo costructor ha delle ereditarietà dal vecchio
// è impostp da Ts impostare la keyword super() prima di definire le
// proprieta ed inserire le vecchie proprietà dentro il super(name,code) 
// ultimo passo è definire la nuova proprietà fuori dal constructor in
// modo da poterla definire
currency:Currency
constructor(name:string,code:string,currency:Currency){//assegnando Currency al constructor a linea 56 non avremo piu l'errore
    super(name,code);
    
    this.currency = currency
    }
    //andiamo creare un metodo fucntion che descrivi la currency 
    // la quale ritonerà una stringa di testo 
    describeCurrency(): string {
        return `the currency of ${this.name} is the ${this.currency.name} ${this.currency.symbol} ${this.currency.code}`
    }
    //andiamo a creare una descrizione che abbia tutti i metodi 
    describe():string{
        let descrizione = `the Country descprition: ${this.name}\n`;
        descrizione += this.describeLanguage()+"\n";
        descrizione += this.describeCurrency();
        return descrizione
    }
}
// andiamo a creare una costante che abbia un oggetto delle proprieta della currency 
const spagnaCurrency= {
    name:"euro",
    code:"EU",
    symbol:"$"
}
// noteremo che non è assegnato nessun tipo a queste proprieta andiamo ad associare una irterface
interface Currency{
    name:string,
    code: string,
    symbol:string
    // adesso possiamo assegnare questa interface anche nel constructor della nostra nuova classe

}
// e lo andiamo ad inserire nella const Spagna che adesso richiede un a 3 proprietà
// creaiamo una costante alla quale associeremo la nostra nuova classe
const Spagna = new CountryWithCurrency("spagna","es",spagnaCurrency);// inserita avremo questo errore L'argomento di tipo '{ name: string; code: string; symbol: string; }' non è assegnabile al parametro di tipo 'string'
console.log(Spagna)
// vedremo nel console log che la cost spagna avra tutti parametri della precedente classe
// possimao anche richiamare i metodi dentro la vecchia classe
Spagna.addLanguage("spagnolo")
Spagna.addLanguage("catalano")
// oppure l'altro metodo 
const SpagnaDescription = Spagna.describeLanguage();
console.log(SpagnaDescription)

const SpagnaDescriptionCurrency = Spagna.describeCurrency();
console.log(SpagnaDescriptionCurrency)

const spagnaFullDescription = Spagna.describe();
console.log(spagnaFullDescription)