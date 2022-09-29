// in questa lezione andremo a vedere come estendere una interface ad un altra 
// questo puo servire per esempio ad aggiungere nuove proprietà 
// e sappiamo con read only non possiamo modificare le nostre proprieta e nemmeno aggiungere
interface Country {
readonly name:string
readonly code:string
readonly population: number
}
// mettiamo caso volesi aggiungere la proprieta currency 
// creao un altra interface alla quale assengno la keyword extend alla interface che voglio

interface CountryCurrency extends Country{
    currency: {
        name: string
    }
}

// adesso andiamo ad assegnarla ad un oggetto 
// assegnando CountryCurrency spunterà un errore=> La proprietà 'currency' manca nel tipo '{ name: string; code: string; population: number; }', ma è obbligatoria nel tipo 'CountryCurrency'
// ci basta semplicemente aggiungere la proprietà currency come nella inteface CountryCurrency
const country:CountryCurrency={
    name: "italia",
    code: "IT",
    population: 15687651,
    currency:{
        name: "Euro"
    }
};

// possiamo anche estendere piu interfacce ad una sola intefaccia 
// ad esempio creaimo un ainteface language alla quale associeremo le altre 2
// associandolo ad un altro oggetto avremo lo stesso errore che language non è dichiarato
// aggiungiamo la proprietà languages e non avremo piu l'errore e notiamo che tutte le 
// prorietà di Country e CountryCurrency sono correttamente estese a Language
interface Language extends Country, CountryCurrency{
    languages:string
}
const countrySecond:Language={
    name: "italia",
    code: "IT",
    population: 15687651,
    currency:{
        name: "Euro"
    },
    languages:"italian"
};