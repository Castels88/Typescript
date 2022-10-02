// posso anche esistere le enum stringhe 
// andiamo a vedere, praticamente quando facciamo il 
// console.log ai paesi ritornano gli indici numerici dell'enum 
// se volessimo che tornino delle stringhe ci basta modificare 
// le proprieta degli enum con = "un qualcosa"
// il valore dell enum ora sara una stringa
enum Continent{
    Europa = "Europa",
    Africa = "Africa",
    Oceania = "Oceania",
    SudAmerica = "SudAmerica",
    Asia = "Asia"
}
interface Country{
    name:string,
    continent: Continent
}
const Countries: Country[] =[
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
]
console.log(Countries)

