// in questa lezione andremo a vedere cosa sono i generi e cosa fanno
// mettiamo caso abbiamo una funzione con un parametro 
function identity(value){
    return value
}
// diamo alla funzione dei valori
let esemp1 = identity("india")// => valore stringa 
let esemp2 = identity(123456)// => valore numerico 
let esemp3 = identity(true)// => valore boolean

// noteremo che nonostante abbiamo dato questi valori value risultera sempre come type "any" => function identity(value: any): any
// questo accade perche non abbiamo dato un type alla nostra funzione
// il metodo migliore per rendere la nostra funzione generica e questo si fa con le variali di type
// si aggiunge mettendo dopo il nome della funzione questo <Type> ma in relata possiamo chiamare questa variabile come vogliamo
// e dopo aver aggiunto la variabile possiamo specificarla dentro l'attributo function identity<Type>(value: Type)e dopo si mette pure dopo
// le parantesi che dire qualsiasi type possa essere function identity<Type>(value: Type): Type{ecc...}

function identity2<Type>(value: Type): Type{
    return value
}
let esemp4 = identity2<string>("francia")// => adesso ritornerà il type string
let esemp5 = identity2<number>(123)// => adesso ritornerà il type number
let esemp6 = identity2<boolean>(false)// => adesso ritornerà il type boolean
// esempio function identity2<"francia">(value: "francia"): "francia"
// ma possiamo anche settare direttamente il tipo aggiungendo <string>,<number>,<boolean>

//--------------------------------------//

//si puo rendere generica anche una arrow function 
const identity3= <Type>(value: Type): Type => value 

//-------------------------------------------------------------------------------------//

// le type variabili posso anche essere piu di una nella funzione 
// ad esempio a piu parametri della funzione voglio associare diversi tipi di variabili type
// e per il ritorno del type un array ad esempio [value1: Type1, value2:Type2] e poi 
// come rutorno di funzione un array dei 2 value
function identity4<Type1,Type2>(value1:Type1,value2:Type2 ):[value1: Type1, value2:Type2]{
    return [value1, value2]
}
// quando richiamero la funzione avro i 2 type per i valori 
let output = identity4(true, "Italia")// come risultato avro=> let output:[value1: boolean, value2:string]
// e come ho fatto prima posso anche passargli gia dei type let output = identity4<boolen, string>(true, "Italia") => ma in questo modo 
// se invece di italia mettessi un numero riceverei un errore