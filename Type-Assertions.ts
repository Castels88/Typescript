// Type assertion
// in questo modulo impareremo come sovrascrivere Type 
// in questo esempio abbiamo un alibreria che non ha nessun type associato e lo dovremmo 
// usare nel nostro progetto 
// come possiamo notare dopo someLibraryFunction():=> abbiamo associato il type "any"

function someLibraryFunction():any{
    return "a string";
}
// quindi se andiamo a voler vedere la lunghezza di someLibraryFunction possiamo fare cosi 
const valueFromLibrary = someLibraryFunction() as string;

const stringLenght = valueFromLibrary.length;

console.log(stringLenght);// il risultato sara 8 

//se notiamo il value delle 2 precedenti costanti sara any che è strano per che il risultato è un numero 
// in questo caso Ts andra appunto a prendere tutti i risultati come any ma non è molto positivo
// allora quello che possiamo fare e dare a someLibraryFunction il type string che poi a sua volta sara convertito in number

//--------------------------------------------------------------//

// type aliases
//ci permette di creare nomi per type gia esistenti
// ad esempio
type Saluti = string;
// si digita type => si decide il nome che si vuole dare = e poi si mette il tipo di type che si vuole string number boolean ecc ecc
// e possiamo di conseguenza utilizzarla
const hello:Saluti = "buongiorno"
// se avessi fatto const hello:Street = 5 Ts mi avrebbe dato un errore per che 5 è un type numerico non stringa
//non posso usarlo per i calcoli=> perche non posso moltiplicare una stringa per un numero
// const result = hello * 3