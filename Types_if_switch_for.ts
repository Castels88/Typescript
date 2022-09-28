// vediamo come si utilizzano le condizioni IF, SWITCH e FOR in Ts
//-------------------------------------------------------------------// 
//se andiamo ad inizializzare un if con una variabile che non ha valore l' IF ci dara un errore.
// quello che dobbiamo fare è creare la variabile che dia un risultato alla variabile dell IF
// adesso se per caso volessi sapere la lenght di language avro un altro errore "La proprietà 'lenght' non esiste nel tipo 'false'"
// cio vuol dire che non si puo sapere la lunghezza di un valore booleano .
// allora vado a modificare il valore in un array ["Spanish","English"] 
// e per sapere quale il primo elemento dell'array vado a selezionare l'indice [0]
// posso anche mettere la condizione che se non è una stringa vuota visulizzami language
let laguange = ["Spanish","English"]
if(laguange[0] !== "string"){
console.log(laguange[0])
}


//------------------------------------------------------------------//
//Andiamo a vedere adesso con il metodo SWITCH
// il metodo switch richiede sempre una variabile che abbia un valore
// dopo le {} si scrive case: e si mette il valore che della variabile
// se nel case si mette un valore di tipo numerico e il valore della variabile è di tipo sttring dara un errore
// quindi dobbiamo mantenere lo stesso valore. al case si da la quello che vogliamo che venga fatto e poi per chiudere
// il ciclo si mette break.
// la cosa figa e che possiamo aggiungere anche altri valori e condizioni semplicemente aggiungendo 
// un nuovo case e quello che vogliamo
// se volessimo usare i metodi delle stringhe ci basta aggingere un = al risultato ed usarli
let say = "Hello"
switch(say){
    case "hello":
        console.log("buongiorno")
        break;
    case "goodbye":
        console.log(`arrivederci = ${say.toLocaleUpperCase()}`)
        break
}

//------------------------------------------------------------------//
//Andiamo a vedere adesso con il metodo FOR
// come per gli altri il valore deve essere dichiarato in una variabile
// importante in questo caso specifico se volessi utilizzare dei metofi delle stringhe non potro 
// perche c'è il numero 5 in questo caso dovro rimuovere il 5 e allora potro
let languages = ["italian","english"]
for (let i = 0; i < languages.length; i++) {
    console.log(languages[i].toLocaleUpperCase());    
}