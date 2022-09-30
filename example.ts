// the tuple type viene usate specificamente negli array 
// ad esempio quando abbiamo nell'array 2 type diversi come in questo caso
const country:[string,number] = ["italia", 789654]
// possiamo aggiungere direttamente i tuple type alla costante con :[string,numebr]
// in questo caso se andassimo ad aggiungere un altro valore che sia stringa o numero sara 
// accettato , e se andassimo a fare il console.logdi questo array
// con la posizione dell'elemnto dell'array che vogliamo venga visulaizzato
// ci spuntera 
console.log(country[1])
// possiamo anche associare il tuple a un allies 
type CountruPopulation = [string, number]
const country2:CountruPopulation = ["francia", 448648]

//oppure possiamo creare un array type con la allies e all'interno
//mettere piu array 
const country3:Array<CountruPopulation>=[
    ["italia", 789654],
    ["francia", 448648]
]