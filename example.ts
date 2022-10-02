// in questa lezione andremo ad aggiungere 1 0 w type in un nuovo type
//2) abbiamo 3 variabili con 3 diversi type
//3) andiamo a creare una allies che possa essere utilizzata in tutte e 3 le variabili
type Population = string | number | boolean //=> questa è chiamato union type
//4) adesso se l'assegnami alle 3 variabili non avre nessun errore  
let population:Population = 58785
let population2:Population = "123456"
let population3:Population = false

//5) vediamo come funziona per le funzioni 
//6) in questo momento prenderebbe solo le string e number ma non il boolean
//7) per far si che vengano presi tutti e 3 aggiungiamo il union type al value
function outputvalue(value: string| number | boolean ){
    console.log(`the value is ${value}`)
}
outputvalue(4565464)
outputvalue("italia")
outputvalue(false)

// andiamo a vedere ocn un tipo diverso di funzione che 
// contine degli array di stringhe
// 8) se proviamo a runnare avremo un errore che language is not a function 
// perche il metodo join è fattibile sull'array prima esempio ma non pper semplice stringhe 2 esempio o numeri 3 esempio
//9) andiamo a passare lo union type
//10) continueremo ad avere un errore sul metodo join perche puo essere solo usato su array di stringhe non su 
// stringhe o numeri quindi dobbiamo sempre fare attenzione ai metodi che usiamo sui type che usiamo
// unico modo che abbiabo per fixare questo errore far capire alla funzione che la stringa puo essere
// passata come array e come facciamo?
//11)utiliziamo un if condizionale
//12) ultimo il type number non possiamo fare nulla quindi leviamolo
//13)facendo il console log ci viene fuori solo l'array e non la stringa semplice 
// per farla spuntare mettiamolo in un else
function outputLanguage(language: string | string[]){
    if(Array.isArray(language)){
            console.log(`languages: ${language.join(", ")}`)
    }else{
        console.log(`languages string: ${language}`)
    }
}
outputLanguage(["italia","inglese","spagnolo","tedesco","portoghese"])
outputLanguage("inglese, maori")
// outputLanguage(123465)