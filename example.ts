// in questa lezione andremo a vedere come cambiare 
// la visibilità dei membri della nostra classe
// creiamo la classe
// proprietà e metodi delle nostre classi possono essere "public","privacct","protected"
// quando non è nominato nessuno di questi davanti alla proprietà o metodo essi risultano "public" ma possiamo anche aggiungerela 
class Country{
    public readonly name:string
    protected readonly code: string // se metto qui protected vorra dirre che la prorpieta puo essere
    //richiamata solo all interno della classe se provvi ad richiamarla esterna alla classe avro un errore

    private languages: string[] = [] // mettiamo a questo metodo la visibilità private e vediamo come cambiano le cose 
    // mettendo quest aprivate all'niterno di questa classe non cambiera nulla 
    // ma se andiamo nell'altra classe riga 36 avremo un errore 
    // perche questa proprietà potra essere utilizzata solo in questa classe

    constructor(name:string,code:string){
        this.name = name
        this.code = code
    }
    public addLanguage(language:string){ // vediamo che succede se modifico qui in privact
        this.languages.push(language)
    }
    // mettiamo a questo metodo la visibilità protected e vediamo come cambiano le cose
    protected describeLanguage():string{
        return `the languages spoken in ${this.name} include ${this.languages.join(", ")}`
    }
    // a linea 62 avremo un errore "La proprietà 'describeLanguage' è protetta e accessibile solo all'interno della classe 'Country' e delle relative sottoclassi."
}

class CountryWithCurrency extends Country{

currency:Currency
constructor(name:string,code:string,currency:Currency){
    super(name,code);
    
    this.currency = currency
    // this.languages//La proprietà 'languages' è privata e accessibile solo all'interno della classe 'Country
    }
    
    describeCurrency(): string {
        return `the currency of ${this.name} is the ${this.currency.name} ${this.currency.symbol} ${this.currency.code}`
    }
    describe():string{
        let descrizione = `the Country descprition: ${this.name}\n`;
        descrizione += this.describeLanguage()+"\n";
        descrizione += this.describeCurrency();
        return descrizione
    }
}
const spagnaCurrency= {
    name:"euro",
    code:"EU",
    symbol:"$"
}
interface Currency{
    name:string,
    code: string,
    symbol:string
}

const Spagna = new CountryWithCurrency("spagna","es",spagnaCurrency);
console.log(Spagna)

Spagna.addLanguage("spagnolo")
Spagna.addLanguage("catalano")
//togliamo queste 2 righe di codice
// const SpagnaDescription = Spagna.describeLanguage();
// console.log(SpagnaDescription)

const SpagnaDescriptionCurrency = Spagna.describeCurrency();
console.log(SpagnaDescriptionCurrency)

const spagnaFullDescription = Spagna.describe()
console.log(spagnaFullDescription)