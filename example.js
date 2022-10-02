//Enums permette di definire un set di tag value
// 1) mettiamo caso in questo array con oggetti abbiamo 
// 2) degli oggetti che hanno lo stesso continente ma tutti hanno la proprieta continente
// 3) possimao usare gli enum per rappresentare tutti questi oggetti
//4) gli enum si creano cosi 
//5) all 'interno del enum mettiamo tutte le categorie che vogliamo che 
// rappresentino gli oggetti
//6) e andiamo ad assegnarli alle proprieta continente dell'array
var Continent;
(function (Continent) {
    Continent[Continent["Europa"] = 0] = "Europa";
    Continent[Continent["Africa"] = 1] = "Africa";
    Continent[Continent["Oceania"] = 2] = "Oceania";
    Continent[Continent["SudAmerica"] = 3] = "SudAmerica";
    Continent[Continent["Asia"] = 4] = "Asia";
})(Continent || (Continent = {}));
var Country = [
    {
        name: "italia",
        continent: Continent.Europa
    },
    {
        name: "nigeria",
        continent: Continent.Africa
    },
    {
        name: "australia",
        continent: Continent.Oceania
    },
    {
        name: "colombia",
        continent: Continent.SudAmerica
    },
    {
        name: "spagna",
        continent: Continent.Europa
    },
];
console.log(Country);
