// in questa lezione vedremo come creare classi generiche
// al momento dentro languages puo essere inserito solo un array di stringhe 
// e se volessimo inserire all'interno non solo stringhe?
// dobbiamo rendere la nostra classe generica
// vediamo come =>
// 1) prima dobbiamo aggiungere un<Type> alla nostra classe che chiameremo languageType
// 2) aggiungiamo questo type al metodo addLanguages
// 3) a riga 13 andiamo a modificare languages in modo che accetti il type
// in questo modo il nostro array prendere qualciasi type non solo stringhe
// 4) ma se controlliamo il type Ts ci dara type language: unknown
// 5) per ovviare a cio a riga 27 diamo a country in type string 
class Country<LanguageType>{
    public readonly name:string
    protected readonly code: string 

    languages: LanguageType[] = [] 

    constructor(name:string,code:string){
        this.name = name
        this.code = code
    }
    addLanguage(language:LanguageType){ 
        this.languages.push(language)
    }
    
}
// const india = new Country<string>("india","IN")
const india = new Country<{name:string,percentage:number}>("india","IN")
// india.addLanguage("hindi")
// india.addLanguage("bangali")
//6) adesso dopo che la nostra classe è diventata generica possiamo passare ai linguaggi un oggetto 
//7) chiaramente ci dira che non è una stringa e questo perche a country gli abbiamo dato il type string 
//8)per risolvere ci basta dare a country il type oggetto con le proprieta name e percentage
india.addLanguage({name:"hindi", percentage: 57})
india.addLanguage({name:"bangali", percentage: 33})
console.log(india)


