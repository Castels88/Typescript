// in questa lezione andremo ad imparare come runnare typescript in javascript code
// 1 step creiamo degli esempi
// 2 step andiamo nel terminale e digitiamo npx tsc RunningTypeScriptCode.ts 
// che sarebbe il nome del file che deve compilare
// 3 step verra creato un file RunningTypeScriptCode.js in javascript

interface Currency {
    name: string;
    code: string;
    symbol: string;
}
interface Country {
    readonly name : string;
    readonly code : string;
    language : string[];
    currency : Currency;
    population : number;
}
function describeCurrency(countryName: Country["name"], currency: Currency){
    return `the currency of ${countryName} is the ${currency.name} (${currency.code}) `
}