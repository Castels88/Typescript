// in questa lezione utilizzaremo le funzioni 
// come in Js anche in Ts le funzioni hanno dei parametri , delle condizioni e un return 
function populationDifference(population1, population2) {
    if (population1 > population2) {
        return population1 - population2;
    }
    return population2 - population1;
}
var chinaPopulation = 4578789655226;
var usaPopulation = 335478589;
var difference = populationDifference(chinaPopulation, usaPopulation);
console.log("population difference is ".concat(difference));
// covertiamo un JS con npx tsc Functions.ts nel terminale e avremo il nostro risultato
//-----------------------------//
// Andiamo a vedere le arrow function
// come potremmo notare ai parametri della funzione da come type any .
// andiamo specificare direttamente i parametri nella funzione
// runniamo npx tsc Functions.ts
var describeCurrency = function (country, currency, currencySymbol) {
    var description = "the currency of ".concat(country, " is the ").concat(currency, " ").concat(currencySymbol);
    return description;
};
var description = describeCurrency("USA", "dollar");
// andiamo a mettere la currencySymbol opzionale.
// se lo leviamo Ts ci darà un errore ("sono previsti 3 argomenti ma c'e ne sono 2 ")
// per rendere opzionale il terzo parametro ci basta aggiungere un ? dopo currencySymbol
console.log(description);
