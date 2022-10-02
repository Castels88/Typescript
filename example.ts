//Enums permette di definire un set di tag value
// 1) mettiamo caso in questo array con oggetti abbiamo 
// 2) degli oggetti che hanno lo stesso continente ma tutti hanno la proprieta continente
// 3) possimao usare gli enum per rappresentare tutti questi oggetti
//4) gli enum si creano cosi 
//5) all 'interno del enum mettiamo tutte le categorie che vogliamo che 
// rappresentino gli oggetti
//6) e andiamo ad assegnarli alle proprieta continente dell'array
// il risultato sara =>
// [
//     { name: 'italia', continent: 0 },
//     { name: 'nigeria', continent: 1 },
//     { name: 'australia', continent: 2 },
//     { name: 'colombia', continent: 3 },
//     { name: 'spagna', continent: 0 }
//   ]
// al continet rispondera la posizione all'interno del enum Europa è a indice 0 , africa a indice 1 e cosi via
//7) se volessimo cambiare la numerazione dell'indice ci basta mettere = 1 nella prima posizione dell enum
enum Continent{
    Europa = 1,
    Africa,
    Oceania,
    SudAmerica,
    Asia
}
const Country =[
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
console.log(Country)
//8) possiamo mettere la enum anche dentro delle interface 
// in modo da poterla riutilizzare
interface Country{
    name:string,
    continent: Continent
}