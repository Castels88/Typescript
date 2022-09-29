//in questa lezione vedremo come creare generic interface 
// mettiamo caso io abbiao un inteface
interface Currency<type> {
    currency: type
}
const obj1: Currency<string>={currency:"euro"}
// perfetto in questo caso tutto andra per il meglio perche obj rispetta tutti i type di Currency

// ma se crearssi un altro obj2 che al suo interno abbia un oggetto con altre prorprieta riferibili
//a quella della precedente currency interface?
const obj2: Currency<{name:string, code:string}>={currency:{name:"euro", code:"EU"}}//avro questo errore => Il tipo '{ name: string; code: string; }' non è assegnabile al tipo 'string'.ts(2322)
//example.ts(4, 5): Il tipo previsto proviene dalla proprietà 'currency', dichiarata in questo punto nel tipo 'Currency'

// quello che posiamo fare e rendere la nostra inteface generic aggiungendo dopo il nome Currency<type> e poi all'interno prorietà: type e poi
// dobbiamo anche definirle il tipo di type nelle constanti che richiamano la interface const => obj1: Currency<string>={currency:"euro"}
//per la obj2 attenzione abbiamo un oggetto quindi dobbiamo inserire tra i <> un oggetto {}

//-------------------------------------//
// un altra cosa che possiamo fare è dare alle allies le proprietà generiche in modo cosi da poterle utilizzare 
// a seconda della constante 

type CurrentString = Currency<string>;
type CurrentOggetto = Currency<{name:string, code:string}>

// facendo cosi potro direttamente assegnare le 2 type allies alle costanti
const obj3: CurrentString = {currency:"dollaro"}
const obj4: CurrentOggetto = {currency:{name:"dollaro",code:"$"}}


//----------------------------------------------------------------------------//
//vediamo come creare generic allies
// la prima una normalissima allies con la sua costante che rispecchia tutti i type
interface Currency2<type> {
    currency: type
}
const obj5: Currency2<string>={currency:"indian rupe"}
// e una seconda costante che al suo interno ha un oggeto con nuove prorietà
const obj6: Currency2<{name:string,code:string}>={currency:{name:"indian rupe", code:"INR"}} // riceveremo un errore perche una ha un type di stringa e l'altro invece ha un oggetto

// come possimao risolvere questo problema?
// come abbiamo fatto in precedenza andiamo ad aggiungere il type alla allies
interface Currency3<type> {
    currency: type
}
// adesso creiamo 2 allies che abbiamo il generic type da associare alle constanti
type CurrentString2 = Currency<string>;
type CurrentOggetto2 = Currency<{name:string, code:string}>
// e le andiamo ad associare direttamente alle constanti.
const obj7: CurrentString2={currency:"indian rupe"}
const obj8: CurrentOggetto2={currency:{name:"indian rupe", code:"INR"}} // riceveremo un errore perche una ha un type di stringa e l'altro invece ha un oggetto

