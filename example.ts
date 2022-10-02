// in questa lezione andremo a vedere come usare le itersection Type
//2) andiamo ad assegnare 2 diverse interface alla function describe
//3) basta aggiungere le due inteface al value e utilizzare la & tra le due => Country & Climate
interface Country{
    name:string
}
interface Climate{
    desert:boolean
}

function describe(country:Country & Climate){
    console.log(`country name is ${country.name}`)
    console.log(`country has a desert climate ${country.desert}`)
}
describe({name:"nigeria", desert:true})
describe({name:"new zeland", desert:false})
describe({name:"narnia", desert:false})

//-------------------------------------------------------------------//
//andiamo a vedere come applicare questo metodo a un oggetto che contiene diverse prorieta
// e aggiungendo le 2 proprieta verranno associate tutte le proprietà

interface Country2{
    name:string,
    code:string
}
interface CountryData{
    language:string[],
    population:number
}
const greece: Country2 & CountryData={
name:"greece",
code:"GR",
language:["greek"],
population: 1235484,
}