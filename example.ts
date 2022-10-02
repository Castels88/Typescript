// in qiesto modo stiamo dicendo che all'interno della allies 
// ogni key => proprieta dell'oggetto a cui la associamo deve essere una stringa: e che i loro valori devono essere pure delle stringhe
// se aggiungo una proprieta stringa con un valore boolean avro un errore
type Currency={
    [Key:string]:string;
}
const currency:Currency={
    name:"italia",
    code:"it",
    symbol:"$",
    // seiciccia: true//Il tipo 'boolean' non è assegnabile al tipo 'string'
}
//-----------------------------------------------------------------------------//
//andiamo ad utilizzare un map type
// come prima cosa per creare un map type che possa intefacciarsi con la constante che valori boolean
// dobbiamo creare un generic type => type Available<Type>
// alla quale andremo creare il map type
// il in keyof non farebbe altro che rappresentare le proprieta di CountryData language e population
// utilizziamo il keyof perche in questo modo se aggiungiamo altre proprieta lui va a prenderle da solo
type Available<Type>={
[Property in keyof Type]:boolean
}

type Countrydata={
    language: string[],
    population:number
}
const availableCountryData:Available<Countrydata>={
    language:true,
    population:false
}

//----------------------------------------------//
//andiamo a vedere un altro esempio 
//aggiungiamo alle proprietà la caratteristica readonly 
// come potremo vedere avremo un errore quando proviamo a modificare la prorieta proprio perche è in read-only
// per farsi che possa essere modificata si mette -readonly davnti al map type
// se togliamo il read-only alle proprietà possiamo mettere +readonly davanti al map e in questo modo le prorietà anche future 
// che aggiungiamo saranno in read only 
// se volessimo rendere opzionali le proprieta del map type => -readonly [Property in keyof Type]+?:boolean "basta aggiungere il "+?" dopo la [] "

type Available2<Type>={
    -readonly [Property in keyof Type]:boolean
    // +readonly [Property in keyof Type]:boolean
    }
    
    type Countrydata2={
        readonly language: string[],
        readonly population:number
    }
    const availableCountryData2:Available2<Countrydata2>={
        language:true,
        population:false
    }
    availableCountryData2.population=true