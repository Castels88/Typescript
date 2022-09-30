// questa lezione vedremo commeaggiungere type agli array
// in questo caso muovendo il mouse sulla consst country vedremo che come type ci dira che e una 
// stringa[]=> VUOL DIRE UN ARRAY DI TIPO STRINGA   

const country:Array<string> = ["italia","francia","cina","usa"]
// infatti se provo ad aggiungere un nuovo elemento se sara una stringa tutto bene
country.push("portogallo")//=> no errore
// se aggiungo un altro tipo avro un errore 
// country.push(true)=> L'argomento di tipo 'boolean' non è assegnabile al parametro di tipo 'string'.

//con Ts possiamo specificare direttamente il tipo dell'array mettendo dopo il nome della const => country:Array<string>
// in questo modo gli elemnti dell'array possono essere solo stringhe 
//-----------------------------------------------------------//
// vediamo ora un con un array che ha diversi type
const country2: Array<string|number> = ["italia","francia","cina",1234,"usa"]
// in questo caso io potro aggiungere o una stringa o un numero 
// all'array perche sono i type specificati 
// se provassi ad aggiungere un boolean darebbe un errore
// country2.push(false,"narnia",1354) => L'argomento di tipo 'boolean' non è assegnabile al parametro di tipo 'string | number'.
// stessa cosa fatta in precedenza possiamo specificare i due tipi con Array<string | number>

//-------------------------------------------------------------------------------------------//
//andiamo a vedere con un array di oggetti
//anche in questo caso possiamo definire i type
const country3:Array<{name:string, code:string, population:number}> =[
{ 
    name: "italia",
    code: "it",
    population: 156486
},
{ 
    name: "francia",
    code: "fr",
    population: 78965
},
{ 
    name: "Inghilterra",
    code: "uk",
    population: 65986
},
{ 
    name: "cina",
    code: "cn",
    population: 789655223
},
]
// se noi provassimo ad aggiungere una proprietà con un type che è gia dichiarato dentro questo array
// Ts ci darebbe un errore
// country3.push({
//     someProperty:1234
// })
// errore => L'argomento di tipo '{ someProperty: number; }' non è assegnabile al parametro di tipo '{ name: string; code: string; population: number; }'.
// Il valore letterale di oggetto può specificare solo proprietà note e 'someProperty' non esiste nel tipo '{ name: string; code: string; population: number; }'.